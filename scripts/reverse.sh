#!/bin/bash
# Script de travail permettant de refaire un dépliement de zéro
# A passer avant le script de déploiement

working_dir="/home/cnr/Documents"
cd $working_dir
rm -rf qde_new
rm *.log
