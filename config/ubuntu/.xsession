#!/bin/bash
# 
# Session kiosk pour l'application Quai des Energies
#
# ce fichier est à installer dans home de l'utuilisateur
#

# Set really full screen and lock some keyboard keys
ratpoison &

# hide mouse
unclutter -idle 1 &

# Minimize TeamViewer Window
winTV=`xdotool search --name "TeamViewer"`
xdotool windowfocus $winTV
xdotool windowminimize $winTV

# Launch chromium for ever
while true; do 
	chromium http://localhost:8000/ --window-size=1920,1080 --start-fullscreen --kiosk --incognito --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disable-pinch --edge-touch-filtering --start-maximized --system-gesture-start-width=200 --overscroll-history-navigation=0;
	sleep 1s; 
done
