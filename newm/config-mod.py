from __future__ import annotations

import logging
import os

from keymaps import KeyBindings
from newm.helper import BacklightManager
from newm.layout import Layout

logger = logging.getLogger(__name__)


def notify(title: str, msg: str, icon="system-settings"):
    os.system(f"notify-send -i '{icon}' -a '{title}' '{msg}'")


def execute_iter(commands: tuple[str, ...]):
    for command in commands:
        os.system(f"{command} &")


def set_value(keyval, file):
    var, val = keyval.split("=")
    return f"sed -i 's/^{var}\\=.*/{var}={val}/' {file}"


def on_startup():
    INIT_SERVICE = (
        "systemctl --user import-environment WAYLAND_DISPLAY XDG_CURRENT_DESKTOP",
        "dbus-update-activation-environment 2>/dev/null && dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP",
        "/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1",
        "wlsunset -l 16.0867 -L -93.7561 -t 2500 -T 6000",
        "nm-applet --indicator",
        "fnott",
        os.path.expanduser("~/.scripts/battery-status.sh"),
        "wl-paste --watch cliphist store",
        "avizo-service",
        "catapult",
    )
    execute_iter(INIT_SERVICE)


def on_reconfigure():
    gnome_schema = "org.gnome.desktop.interface"
    gnome_peripheral = "org.gnome.desktop.peripherals"
    gnome_preferences = "org.gnome.desktop.wm.preferences"
    # easyeffects = "com.github.wwmm.easyeffects"
    theme = "Catppuccin-Mocha-Standard-Mauve-Dark"
    icons = "candy-icons"
    cursor = "Catppuccin-Mocha-Lavender-Cursors"
    font = "SF Pro 12"
    gtk2 = "~/.gtkrc-2.0"

    GSETTINGS = (
        f"gsettings set {gnome_preferences} button-layout :",
        f"gsettings set {gnome_preferences} theme {theme}",
        f"gsettings set {gnome_schema} gtk-theme {theme}",
        f"gsettings set {gnome_schema} color-scheme prefer-dark",
        f"gsettings set {gnome_schema} icon-theme {icons}",
        f"gsettings set {gnome_schema} cursor-theme {cursor}",
        f"gsettings set {gnome_schema} cursor-size 30",
        f"gsettings set {gnome_schema} font-name '{font}'",
        f"gsettings set {gnome_peripheral}.keyboard repeat-interval 30",
        f"gsettings set {gnome_peripheral}.keyboard delay 250",
        f"gsettings set {gnome_peripheral}.mouse natural-scroll true",
        f"gsettings set {gnome_peripheral}.mouse speed 0.0",
        f"gsettings set {gnome_peripheral}.mouse accel-profile 'default'",
        # f"gsettings {easyeffects} process-all-inputs true",
        # f"gsettings {easyeffects} process-all-outputs true",
    )

    def options_gtk(file, c=""):
        CONFIG_GTK = (
            set_value(f"gtk-theme-name={c}{theme}{c}", file),
            set_value(f"gtk-icon-theme-name={c}{icons}{c}", file),
            set_value(f"gtk-font-name={c}{font}{c}", file),
            set_value(f"gtk-cursor-theme-name={c}{cursor}{c}", file),
        )
        execute_iter(CONFIG_GTK)

    # options_gtk(gtk3)
    options_gtk(gtk2, '"')
    execute_iter(GSETTINGS)
    # gtk4
    # os.environ["GTK_THEME"] = theme
    notify("Reload", "update config success")


outputs = [
    {"name": "eDP-2", "pos_x": 0, "pos_y": 0, "scale": 1.0},  # 2560/1600 },
    # {"name": "DP-2", "scale": 0.7},
]

background = {
    "path": os.path.expanduser("~/Imágenes/wallpaperCicle/24.jpg"),
    # "path": os.path.expanduser("~/Imágenes/wallpaperCicle/17.jpg"),
    # "path": os.path.expanduser("~/Imágenes/wallpaperCicle/20.jpg"),
    # "path": os.path.expanduser("~/Imágenes/software/linuxfu.jpg"),
    "time_scale": 0.125,
    "anim": True,
}

corner_radius = 0

pywm = {
    "enable_xwayland": False,
    # "xkb_model": "PLACEHOLDER_xkb_model",
    "xkb_layout": "latam",
    # "xkb_layout": "es",
    # "xkb_options": "caps:swapescape",
    "xcursor_theme": "Catppuccin-Mocha-Lavender-Cursors",
    "xcursor_size": 30,
    "contstrain_popups_to_toplevel": True,
    "encourage_csd": False,
    "renderer_mode": "pywm",
}

term = "kitty"


common_rules = {
    # "opacity": 0.8,
    "float": True,
    "float_size": (750, 750),
    "float_pos": (0.5, 0.35),
}

float_app_ids = (
    "pavucontrol",
    "blueman-manager",
)

float_titles = ("Dialect",)
blur_apps = (term, "rofi", "Alacritty", "tenacity")


def rules(view):
    app_rule = None
    # os.system(
    #     f"echo '{view.app_id}, {view.title}, {view.role}, {view.up_state.is_floating}' >> ~/.config/newm/apps"
    # )
    # Set float common rules
    if view.up_state.is_floating and view.app_id != "catapult":
        app_rule = common_rules
    elif view.app_id == "catapult":
        app_rule = {"float": True, "float_pos": (0.5, 0.1)}
    # elif view.title is not None and "compartir indicador" in view.title.lower():
    #     return {"float": True, "float_size": (30, 20)}
    elif view.app_id == "io.bassi.Amberol":
        app_rule = {"opacity": 0.7, "blur": {"radius": 5, "passes": 6}}
    elif view.app_id in float_app_ids or view.title in float_titles:
        app_rule = common_rules
    elif view.app_id in blur_apps:
        app_rule = {"blur": {"radius": 5, "passes": 6}}
    return app_rule


view = {
    "padding": 10,
    "fullscreen_padding": 0,
    "send_fullscreen": False,
    "sticky_fullscreen": True,
    "accept_fullscreen": False,
    "rules": rules,
    "floating_min_size": False,
    "debug_scaling": False,
    "ssd": {"enabled": False},
}

focus = {
    "color": "#cba6f7",  # change color
    "distance": 4.5,
    "width": 4.5,
    "animate_on_change": True,
    "anim_time": 0.3
    # "enabled": False
}

swipe_zoom = {
    "grid_m": 1,
    "grid_ovr": 0.02,
}

anim_time = 0.25
blend_time = 0.5

backlight_manager = BacklightManager(anim_time=1.0)
# # Config for keyboard light
# kbdlight_manager = BacklightManager(
#     args="--device='*::kbd_backlight'", anim_time=1.0, bar_display=wob_runner
# )


def synchronous_update() -> None:
    # kbdlight_manager.update()
    backlight_manager.update()


mod = "L"  # o "A", "C", "1", "2", "3"


def key_bindings(layout: Layout):
    return KeyBindings(layout, term, mod).get()


gestures = {
    "lp_freq": 120.0,
    "lp_inertia": 0.4,
    # "pyevdev": {"enabled": True},
}

swipe = {"gesture_factor": 3}

panels = {
    "lock": {
        "cmd": f"{term} newm-panel-basic lock",
        "w": 0.7,
        "h": 0.7,
        "corner_radius": 50,
    },
    "bar": {
        "cmd": "waybar",
        "visible_normal": False,
        "visible_fullscreen": False,
    },
}
grid = {"throw_ps": [2, 10]}
energy = {"idle_times": [300, 600, 1500], "idle_callback": backlight_manager.callback}
