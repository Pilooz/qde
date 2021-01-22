#!/bin/bash
# 
# Session kiosk pour l'application Quai des Energies
#
# ce fichier est à installer dans home de l'utuilisateur
#

# If last reboot was a crash the reboot gracefully
log="/home/cnr/log_reboot.txt";
datelog=`date`;
cnt=`last -Fxn2 shutdown reboot | grep "still running" | wc -l`;

echo "$datelog : ----------------------------------------------------------" >> $log
echo `last -Fxn2 shutdown reboot | grep "still running"` >> $log

if [ $cnt -eq 2 ]; then
  echo "     System reboot after a crash";
  echo "$datelog : the sytem has previousely crashed. Rebooting gracefully now..." >> $log
  reboot;
fi;
echo "$datelog : ----------------------------------------------------------" >> $log

# Set key to escape... Needed ??
setxkbmap -option terminate:ctrl_alt_bksp

# Desactivate sleep mode and hibernation
xset s off
xset -dpms

# Set really full screen and lock some keyboard keys
ratpoison &
# hide mouse
unclutter &

cat ~/.config/chromium/Local\ State | perl -pe "s/\"bottom.*/\"bottom\": $(xrandr | grep \* | cut -d' ' -f4 | cut -d'x' -f2),/" > ~/.config/chromium/Local\ State
cat ~/.config/chromium/Local\ State | perl -pe "s/\"right.*/\"right\": $(xrandr | grep \* | cut -d' ' -f4 | cut -d'x' -f1),/" > ~/.config/chromium/Local\ State

# Launch chromium for ever
while true; do 
	# just clean chromium. if chromium crashes (usually due to reeboot), clear the crash flagg
	sed-i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/cnr/.config/chromium/Default/Preferences
	sed-i 's/"exit_type":"Crashed"/"exit_tupe":"Normal"/' /home/cnr/.config/chromium/Default/Preferences
	
	chromium http://localhost:8000/ --window-size=1920,1080 --start-fullscreen --kiosk --incognito --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disable-pinch --edge-touch-filtering --start-maximized --overscroll-history-navigation=0 --autoplay-policy=no-user-gesture-required;
	sleep 2s; 
done
