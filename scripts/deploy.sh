#!/bin/bash
#
# Quai des Energies 2019
#
# Script de dééploiement automatique de version de l'application
#

#---------------------------------------------------------------
# Vars
#---------------------------------------------------------------
logfile="/tmp/qde_deploy.log"
online_git_repo="https://github.com/Pilooz/qde.git"
production_link="quai-des-energies"
precedent_production_link="qde_old"
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
  echo -e "\e[39m\t-> $1\e[39m"
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

fin_normale () {
  comment "suppression des logs de travail"
  if [ -f "*.log" ]; then
    rm *.log
  fi;
  comment "\e[32mFin.\e[39m"
  exit 0
}
#---------------------------------------------------------------
# Main
#---------------------------------------------------------------
reset
touch $logfile
exec > >(tee -i $logfile)
exec 2>&1

# Préparer le travail
etape "Préparer le travail"
comment "Faire le ménage dans les vieux journaux"
journalctl --vacuum-time=7

comment "repertoire de l'application : "$working_dir"/"$cur_rep_name
cd $working_dir"/"$cur_rep_name
current_commit=$(git rev-parse --short HEAD)

# Voir si on a bien le réseau 
comment "Vérifier l'état du réseau..."
ping -c 4 github.com
check

# Vérifier s'il y a eu des modifs sur le repo en ligne
comment "Vérifier si une nouvelle version est disponible"
[ $(git rev-parse HEAD) = $(git ls-remote $(git rev-parse --abbrev-ref @{u} | sed 's/\// /g') | cut -f1) ] &&  need_update=0 ||  need_update=1
check

cd $working_dir
if [ $need_update -eq 0 ]; then
  # pas de nouvelle version
  comment "\e[32mPas de changement."
  # Pas de changement, sortie du script.
  fin_normale  
else
  comment "\e[93mUne nouvelle version de l'application es disponible !\e[39m"
fi;

# Tirer le Repo
etape "Tirer le Repo"
git clone $online_git_repo $working_dir"/"$new_rep_name
check 
cd $working_dir"/"$new_rep_name
new_commit=$(git rev-parse --short HEAD)
comment "commit version actuelle : \e[93m'$current_commit'\e[39m"
comment "commit nouvelle version : \e[93m'$new_commit'\e[39m"
git diff --compact-summary $current_commit $new_commit

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
check
cat $working_dir"/"output.$etape.log

comment "Recopier la config de prod"
cd $working_dir
cp $cur_rep_name/config/config.json $new_rep_name/config/
ls ./$new_rep_name/config/config.json
check

comment "Recopier le cache de data"
cp $cur_rep_name/public/data/*.json $new_rep_name/public/data/

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

comment "changer les droits d'accès sur $new_rep_name"
chown -R cnr:cnr $new_rep_name 

comment "création du nouveau lien"
ln -s $new_rep_name $production_link
# On vérifie le lien en essayant d'entrer dans le rep
cd $production_link
check

comment "changer les droits d'accès sur $production_link"
chown -R cnr:cnr $production_link

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

comment "suppresion de la version n-2 contenue dans 'qde_old'"
rm -rf qde_old
comment "L'ancien répertoire qde_$current_commit devient qde_old"
mv qde_$current_commit qde_old
check

# Pour l'instant, recopier les videos depuis /home/cnr/medias vers $production_link/medias/videos
cd $production_link/medias/
comment "Synchroniser les vidéos depuis /home/cnr/medias/videos vers $production_link/medias/videos"
ln -s $working_dir/medias/videos videos

#Raffraichir le navigateur chromium
comment "Relancer Chromium"
chromium_pid=$(ps a | grep "chromium" | grep "localhost:8000" | cut -d" " -f2)
kill -TERM $chromium_pid

fin_normale





