#!/bin/sh

player_status=$(playerctl status 2> /dev/null)
artist_name='playerctl metadata artist'
song_name=$(playerctl metadata title --no-messages)
song_name_mod=${song_name:0:12}"..."
song_name_set=$(playerctl metadata title --no-messages |wc -w )


if [ "$song_name_set" -gt "2" ]; then
  song_name_disp=${song_name_mod}
else
  song_name_disp=${song_name}
fi

if [ "$player_status" = "Playing" ]; then
  echo " $(playerctl metadata artist)  ${song_name_disp}"
elif [ "$player_status" = "Paused" ]; then
  echo " $(playerctl metadata artist)  ${song_name_disp}"
else
    echo ""
fi
