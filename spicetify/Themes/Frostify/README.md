Installation
Props to u/ongoodvxbes for this

Use this guide to install Spicetify (thanks u/BenjaminBE4)

If you followed the guide correctly, you should now have 2 folders at C:/Users/YOURNAME/ (.spicetify & spicetify-cli)

Download Frostify

Unzip then change "Frostify-Master" to "Frostify"

Copy "Frostify" folder to C:/Users/YOURNAME/.spicetify/Themes

WIN+R then type Powershell

Run "spicetify config replace_colors 0 current_theme Frostify"

Run Spicetify Backup Apply

Open the config file (C:/Users/YOURNAME/.spicetify/config)

Change inject_css to = 1

Restart Spotify

Also Remember To Play A Song Every Fresh Boot of Spotify In Order to Fully Load The Theme.

If you edit the css make sure to run Spicetify Update Apply to both build the css and apply

Updating
To update:

Open a terminal in the folder location and then just git pull
Then Run Spicetify Update Apply
If for some reason this fails, just re-install
Bugs & Issues
I know there are a ton of bugs and I am actively working on fixing them. With that being said, please don't spam this repo with issues, as I know they exist. Please only post issues that make the app unusable, that way I can prioritize those. I just recently modularized my code using stylus which will make it easier to maintain in the long run and make it easier to fix bugs and add features. Expect plenty of updates.

Fork Primary Bugs: Downloads widget not colored with the theme Connected Devices below other text and not themed

Communication
Contact me on Reddit u/PlasmusAng, Here, or on discord Ramlord#0911

I am fairly often scouring the Spectrum group for Spicetify-cli and that is the best place to reach me for now.