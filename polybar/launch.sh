#!/usr/bin/env sh

# Terminate already running bar instances and env programs
killall -q polybar nitrogen dunst lxpolkit glava nm-applet 
# Wait until the processes have been shut down
while pgrep -x polybar >/dev/null; do sleep 1; done
# Launch picom
picom --animations --detect-rounded-corners --experimental-backends -b
# Launch
polybar top &
echo "Bar launched..."
