---
layout: ../../layouts/Blog.astro
title: Libadwaita actually loves THEMES???
tags: ["astro", "self", "tech"]
author: "Nefo Fortressia"
date: "August 9 2022"
---

If you are into Linux, you must already heard of the transition towards Libadwaita in GNOME!!

It's somewhat become controversial unfortunately, because things, things, and things.

FYI, I'm neutral on such topics. I love everyone <3

Aah I really hate dramas soo much 😭😭😭😭😭

But honestly, for me making stylesheets for Adwaita is much more easy!!

https://twitter.com/lovelyy_fiaa/status/1556150984954458112?s=20&t=bZGXC3NjMZQtHf5ix0L_cw

# Libadwaita is just an API break?
One of the things that I noticed after making this theme is that.. is Libadwaita merely just an API break? It... doesn't really removes support for custom stylesheets, for now. You can still set the theme with `GTK_THEME` and the `gtk.css` file still works!!

Though, GTK4 themes will mostly break, since they were intended for the old Adwaita theme (GTK4 used to ship GTK3 Adwaita theme before Libadwaita is announced). That's why I just view Libadwaita as merely an API break!

But emmm... how easy is it to create a theme for Libadwaita-based applications? Let's find out!


# It's actually very easy!!
Libadwaita includes [Named Colors](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.1/named-colors.html), soo... we just have to set the values for them!!

```css
@define-color accent_color #E94686;
@define-color accent_bg_color #E94686;
@define-color accent_fg_color #f3b6d6;
...

@define-color window_bg_color #FFE5F1;
@define-color window_fg_color @cute_fg;
@define-color view_bg_color #f5c1d4;
@define-color view_fg_color @cute_fg;
@define-color headerbar_bg_color #FAFAFA;
@define-color headerbar_fg_color @cute_fg;
@define-color headerbar_border_color rgba(0, 0, 0, 0.8);
@define-color headerbar_backdrop_color @window_bg_color;
@define-color headerbar_shade_color #FFFFFF;
@define-color card_bg_color rgba(138, 68, 132, 0.05);
@define-color card_fg_color @cute_fg;
@define-color card_shade_color rgba(0, 0, 0, 0.07);
...
@define-color cute_fg #bf104c;
```

The full source code is available at [the natcutiee GitHub repository](https://github.com/lovelyyfiaaa/natcutiee/blob/main/gtk.css)!!

And that's how I made this theme! It's pretty easy!!

Just save them to `~/.config/gtk-4.0/gtk.css`!

If you use Flatpak, allow apps to access the config directory by running this:
```sh
$ flatpak override --user --filesystem=xdg-config/gtk-4.0:ro
```

## GTK3 compatibility
Lots of apps still use GTK3. They tend to be the very complex ones, like GNOME Builder or GNOME Web!

We can do GTK3 compatibility by using the [GTK3 port of the Libadwaita theme](https://github.com/lassekongo83/adw-gtk3).

For Flatpak apps, we can install the theme from the Flathub~! ^^

```sh
$ flatpak install org.gtk.Gtk3theme.adw-gtk3 org.gtk.Gtk3theme.adw-gtk3-dark
```

Then enable the theme!
```sh
# adw-gtk3 light
$ gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3' && gsettings set org.gnome.desktop.interface color-scheme 'default'
# adw-gtk3 dark
$ gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark' && gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'
```

`gtk.css` works the same in GTK3, though it needs to be in `~/.config/gtk-3.0` instead. Soo, let's now create a symbolic link (or a "shortcut") from the `~/.config/gtk-4.0/gtk.css` file to `~/.config/gtk-3.0/gtk.css` 😊

```sh
$ ln -s ~/.config/gtk-4.0/gtk.css ~/.config/gtk-4.0/gtk.css
```

Now, just enable them in Flatpak!!
```sh
$ flatpak override --user --filesystem=xdg-config/gtk-3.0:ro

```

Now our theme is available in GTK3 apps like Flatseal! 
![A picture of the Flatseal application with my custom cute theming](/images/flatseal-natcutiee.png)

([I'm actually porting Flatseal to GTK4 at thee moment!! 👀](https://github.com/tchx84/Flatseal/pull/464))
# Developing Natcutiee
Aside from the theme for Libadwaita, I also made some versions for Discord and Rustdoc (API documentation websites for libraries written in Rust) <3

![](/images/natcutiee-rustdoc.png)

Alsoo, the color scheme is also derived from the Natsuki Light theme from the [Doki Theme](https://doki-theme.unthrottled.io/) collection <3

https://github.com/lovelyyfiaaa/natcutiee