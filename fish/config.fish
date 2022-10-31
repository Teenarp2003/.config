if status is-interactive
# Commands to run in interactive sessions can go here
# Commands to run in interactive sessions can go here
function fish_greeting
   echo 
   echo ░▀█▀▒██▀▒██▀░█▄░█▒▄▀▄▒█▀▄▒█▀▄░▒░░▀█░█▀█░▀█░█▀
   echo ░▒█▒░█▄▄░█▄▄░█▒▀█░█▀█░█▀▄░█▀▒░▀▀░█▄░█▄█░█▄░██
   echo Time: (set_color yellow; date +%T; set_color normal)
   echo Machine: $hostname
   echo Shell: $SHELL
end
end

starship init fish | source

alias 'connect'='nmcli --ask con up JioFiber-AP_5G'
alias ls='exa -lah --icons'
alias vim='nvim'
alias vi='nvim'
alias edit='nvim'
alias cls='clear'

if test -f /home/teenarp2003/.autojump/share/autojump/autojump.fish; . /home/teenarp2003/.autojump/share/autojump/autojump.fish; 
end

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
eval /home/teenarp2003/miniconda3/bin/conda "shell.fish" "hook" $argv | source
# <<< conda initialize <<<
