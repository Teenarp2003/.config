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
alias push='git push https://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@github.com/Teenarp2003/.config.git'
alias mountZ='sudo mount -m UUID=1DABC81970C129B1 /run/media/Z'
alias glava='glava --desktop --force-mod=bars'

alias cleanup='sudo pacman -Rns (pacman -Qtdq)' # remove orphaned packages
alias pacsyu='sudo pacman -Syu'                  # update only standard pkgs
alias pacsyyu='sudo pacman -Syyu'                # Refresh pkglist & update standard pkgs
alias yaysua='yay -Sua --noconfirm'              # update only AUR pkgs (yay)
alias yaysyu='yay -Syu --noconfirm'              # update standard pkgs and AUR pkgs (yay)

alias grep='grep --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'

alias cp="cp -i"
alias mv='mv -i'
alias rm='rm -i'


export EDITOR=nvim;
export VISUAL=nvim;

if test -f /home/teenarp2003/.autojump/share/autojump/autojump.fish; . /home/teenarp2003/.autojump/share/autojump/autojump.fish; 
end

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
eval /home/teenarp2003/miniconda3/bin/conda "shell.fish" "hook" $argv | source
# <<< conda initialize <<<
