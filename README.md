InterTech LGBT+ Diversity Forum Mentoring Platform
==================================================

Technology has enabled us to connect with friends in an instant, get breaking news as it happens and have a world of knowledge at our finger tips. We want to make sure everyone has the same opportunity to build awesome tech, so we're coding up a website to enable LGBT+ people to get career mentorship so we can all keep building amazing, enabling technology for everyone.

This is the code for our website.

Accessing the Website
---------------------

The website isn't ready yet, we'll make lots of noise when it's ready for prime time (and update this readme with the link).

Contributing
------------

You can contribute code at any time but there is an informal meeting in London
roughly every month. See http://www.intertechlgbt.com/ for information about
when and where this meeting takes place.

Our Trello board is over at https://trello.com/b/lV4GOkAP/intertech-do-mentoring.

Getting Started
---------------

You will need (installation instructions follow below):
- `git`
- `node`
- `npm`
- `bower`

You will also need:
- A GitHub username and password
- Write access to the repository
- Experience using a command line

### Getting Started on Windows

First download `git`, there's a great video guide here (only up to 2:40 is relevant) https://www.youtube.com/watch?v=albr1o7Z1nw. If you want to go it alone you can go straight to the download http://git-scm.com/download/win but it is recommended you choose "Run git from the Windows Command Prompt" (second option) when asked.

To download `node` on windows go to https://nodejs.org/en/download/ and follow the guide to install. This should also install `npm` on Windows.

You'll need to open a command prompt (sometimes called terminal or command line) in order to download the source code. Find a folder you want to download the code to, right click on the folder whilst holding down the shift key and select `Open Command Window here`. This should open a black window, from there type:

    git clone https://github.com/pauljohnfisher/intertech.git
    cd intertech
    npm install -g bower
    bower install
    npm install

This should download the source, install bower, and install the extra components you'll need to test the website on your local computer. See Previewing and Pushing Changes next.

### Getting Started on Linux

To download all the packages on Ubuntu and download the source code to a folder on your desktop, type the following into bash:

    sudo apt-get install git nodejs-legacy npm
    cd ~/Desktop
    git clone https://github.com/pauljohnfisher/intertech.git
    cd intertech
    sudo npm install -g bower
    bower install
    npm install

You may need to swap the first command for another one if you're not running Ubuntu. Change `~/Desktop` to something else if that's not where you want to download the intertech folder to.

See Previewing and Pushing Changes next.

### Getting Started on Mac

The best way to get node on Mac is through homebrew. This means there's a few extra steps involved, but it'll be worth it (roughly following http://blog.teamtreehouse.com/install-node-js-npm-mac).

Make sure you have XCode installed before continuing.

Open a terminal window (avaliable on all Macs, pressed command + space and use spotlight search to find it). Some people call this a command prompt or a command line. Running the following commands will download the source code to a folder on your desktop, change `~/Desktop` to something else if this isn't where you want it.

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew install node
    brew install git
    cd ~/Desktop
    git clone https://github.com/pauljohnfisher/intertech.git
    cd intertech
    sudo npm install -g bower
    bower install
    npm install

See Previewing and Pushing Changes next.

Previewing and Pushing Changes
-----------------------------

In order to launch the website, in a command prompt / command line / terminal window type:

    node bin/www

You can view a local copy of the website at http://localhost:3000/

If you make changes to the source, you can test it by pressing ctrl+C on the keyboard, and re-running `node bin/www` to show the updated version.

When you're happy with the changes you can run the following commands to push your changes to the website (press ctrl+C first):

    git add .
    git commit -m "Write a short helpful message to describe what you changed here"
    git pull --rebase origin master
    git push

If someone changed the same files you did, then an error will be displayed or when you run `git push` it will say that you are already up-to date. You'll need to merge the changes by hand, or find someone who can help.

**REMEMBER** if you do need to merge by hand, be sure to check that the website still works by running the commands listed in "Getting the Latest Code".

Once you've run these steps you can view the website live at http://104.155.45.250/ (it might take a few moments for the changes to go live).

Getting the Latest Code
-----------------------

From the command line / command prompt / terminal type:

    git stash
    git pull
    git stash pop
    bower install
    npm install
    node bin/www

You can use ctrl+C to stop the local web server at any time. It's a good idea to stop the web server before updating any resources.

You should be up to date now and can view the website locally at http://localhost:3000/

Adding Bower / Node Components
------------------------------

If you add a bower or npm component be sure to use the format:

    npm install --save COMPONENT
    bower install --save COMPONENT

Otherwise, without saving, when you push your changes the components will not be pushed with it and the website will only work on your computer.
