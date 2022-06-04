if status is-interactive
# Commands to run in interactive sessions can go here
#   neofetch
# Commands to run in interactive sessions can go here
function fish_greeting
   echo 
   echo ░▀█▀▒██▀▒██▀░█▄░█▒▄▀▄▒█▀▄▒█▀▄░▒░░▀█░█▀█░▀█░█▀
   echo ░▒█▒░█▄▄░█▄▄░█▒▀█░█▀█░█▀▄░█▀▒░▀▀░█▄░█▄█░█▄░██
   echo Time: (set_color yellow; date +%T; set_color normal)
   echo Machine: $hostname
   echo Shell: Fish
end
end
starship init fish | source

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
eval /home/teenarp2003/miniconda3/bin/conda "shell.fish" "hook" $argv | source
# <<< conda initialize <<<

