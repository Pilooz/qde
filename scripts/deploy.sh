#!/bin/bash
#
# Quai des Energies 2019
#
# Script de dééploiement automatique de version de l'application
#

#---------------------------------------------------------------
# Vars
#---------------------------------------------------------------
online_git_repo="https://github.com/Pilooz/qde.git"
production_link="quai-des-energies"
working_dir="/home/cnr/Documents"
cur_rep_name="quai-des-energies" #nom répertoire de production courant comportant.
new_rep_name="qde_new" #nom du futur répertoire de production
current_commit=""
new_commit=""

etape=0
line="\e[39m-----------------------------------------------"

#---------------------------------------------------------------
# Functions
#---------------------------------------------------------------
# Logging
etape () {
  echo -e $line
  echo -e "\e[96m$etape. $1\e[39m"
  echo -e $line
  etape=$((etape+1))
}

comment () {
  echo -e "\e[39m  -> $1\e[39m"
}

# Vérifier le retour d'une commande et lever une erreur si besoin
check () {
  if [ $? -eq 0 ]; then
   comment "\e[32mOk.\e[39m"
  else
   comment "\e[31mERREUR ! à l'étape $etape...\e[39m"
   exit 1
  fi;
}
#---------------------------------------------------------------
# Main
#---------------------------------------------------------------
reset
# Préparer le travail
etape "Préparer le travail"
comment "repertoire de l'application : "$working_dir"/"$cur_rep_name
cd $working_dir"/"$cur_rep_name
current_commit=$(git rev-parse --short HEAD)
cd $working_dir

# Tirer le Repo
etape "Tirer le Repo"
git clone $online_git_repo $working_dir"/"$new_rep_name
check 

# Vérifier s'il y a eu des modifications
etape "Vérifier s'il y a eu des modifications"
cd $working_dir"/"$new_rep_name
new_commit=$(git rev-parse --short HEAD)
comment "commit version actuelle : \e[93m'$current_commit'\e[39m"
comment "commit nouvelle version : \e[93m'$new_commit'\e[39m"

if [ "x"$current_commit = "x"$new_commit ]; then
  comment "\e[32mPas de changement."
  comment "Fin.\e[39m"
  # Pas de changement, sortie du script.
  exit 0
else
  comment "\e[93mL'application a changé !\e[39m"
fi;

cd $working_dir
rep="qde_"$new_commit
comment "le répertoire d'installation de la nouvelle version est \e[93m'$rep'\e[39m."
mv $new_rep_name $rep
check
new_rep_name=$rep

# Installation
etape "Installation"
comment "Ré-installer les dépendances"
cd $working_dir"/"$new_rep_name
npm install > $working_dir"/"output.$etape.log 2>&1
cat $working_dir"/"output.$etape.log
check

comment "Recopier la config de prod"
cp ../$cur_rep_name/config/config.json ./config/
ls ./config/config.json
check

comment "rechargement de la définition des services"
sudo systemctl daemon-reload
check

# Arrêter  NodeJs
etape "Arrêter  NodeJs"
#sudo service qde_node_server status
sudo service qde_node_server stop
check
sudo journalctl -n 10 --no-pager -u qde_node_server.service

# Arrêter le démon de détection de présence
etape "Arrêter le démon de détection de présence"
sudo service qde_presenced stop
check
sudo journalctl -n 10 --no-pager -u qde_presenced.service

# Router la production sur ce nouveau repo
etape "Router la production sur ce nouveau repo"
cd $working_dir
comment "suppression de l'ancien lien"
rm -f $production_link
check
comment "création du nouveau lien"
ln -s $new_rep_name $production_link
# On vérifie le lien en essayant d'entrer dans le rep
cd $production_link
check

# Redémarrer nodeJS
etape "Redémarrer nodeJS"
sudo service qde_node_server start
check
sudo journalctl -n 10 --no-pager -u qde_node_server.service

# Redémarrer le démon de détection de présence
sudo service qde_presenced start
check
sudo journalctl -n 10 --no-pager -u qde_presenced.service

# Fin
etape "Post-traitements"
cd $working_dir
comment "suppression de l'ancien répertoire qde_$current_commit"
rm -rf "qde_"$current_commit
check

comment "suppression des logs de travail"
rm *.log
comment "\e[32mFin.\e[39m"

exit 0





