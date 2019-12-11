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
log () {
  echo -e $line
  echo -e "\e[96m$etape. $1\e[39m"
  echo -e $line
  etape=$((etape+1))
}

comment () {
  echo -e "\e[39m  -> $1"
}

# Vérifier le retour d'une commande et lever une erreur si besoin
check () {
  if [ $? -eq 0 ]; then
   comment "\e[32mOk."
  else
   comment "\e[31mERREUR ! à l'étape $etape..."
   exit 1
  fi;
}
#---------------------------------------------------------------
# Main
#---------------------------------------------------------------
reset
# Préparer le travail
log "Préparer le travail"
comment "repertoire de l'application : "$working_dir"/"$cur_rep_name
cd $working_dir"/"$cur_rep_name
current_commit=$(git rev-parse --short HEAD)
comment "commit courant : \e[93m'$current_commit'\e[39m"
comment "Creation d'un nouve rep pour le nouveau code \e[93m'$working_dir/$new_rep_name'\e[39m"
cd $working_dir
#mkdir $working_dir"/"$new_rep_name

# Tirer le Repo
log "Tirer le Repo"
git clone $online_git_repo $working_dir"/"$new_rep_name
check 

# Installation
log "Installation"
comment "Supprimer le répertoire \e[93m$working_dir"/"$new_rep_name/node_modules \e[39m"
rm -rf $working_dir"/"$new_rep_name/node_modules
check

comment "Ré-installer les dépendances"
cd $working_dir"/"$new_rep_name
npm install > $working_dir"/"output.$etape.log 2>&1
cat $working_dir"/"output.$etape.log
check

comment "Recopier la config de prod"
cp ../$cur_rep_name/config/config.json ./config/
ls ./config/config.json
check

# Arrêter  NodeJs
log "Arrêter  NodeJs"


# Arrêter le démon de détection de présence
log "Arrêter le démon de détection de présence"


# Router la production sur ce nouveau repo
log "Router la production sur ce nouveau repo"


# Redémarrer nodeJS
log "Redémarrer nodeJS"


# Redémarrer le démon de détection de présence
log "Redémarrer le démon de détection de présence"

# Fin
log "Fin normale"
exit 0





