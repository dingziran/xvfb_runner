# xvfb_runner
Using nodejs to run xvfb on headless linux for browse testing/crawlering

This project was inspired by [node-headless](https://github.com/kesla/node-headless)
and use it inside.
Node-headless spawn xvfb in a child-process.
When parent process was killed, xvfb process's ppid was changed from parent pid to 1.
This makes it very hard to manage xvfb process.
So I create a seperate nodejs project to run xvfb and manage it by pm2 seperatelly.

# usage

```
### install xvfb
$ sudo apt-get update && apt-get install -y xvfb x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps clang libdbus-1-dev libgtk2.0-dev libnotify-dev libgnome-keyring-dev libgconf2-dev libasound2-dev libcap-dev libcups2-dev libxtst-dev libxss1 libnss3-dev gcc-multilib g++-multilib

### download this project (Maybe I will public this to npm later)
$ git clone <this repo>

### modify kill.sh
Xvfb-runner will kill orphan process periodically by running kill.sh.
Modify to meet your need.

### using pm2 to keep it running.
$ cd <this repo> && pm2 start index.js
```

The xvfb is running on the server now.

When you want to run nodejs projects which need graph interface on leadless linux,
just add process.env.DISPLAY=:99 or set global environment parameter.
