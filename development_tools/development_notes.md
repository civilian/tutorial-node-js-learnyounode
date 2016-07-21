We start with this tool to be able to run the rest:

# Instalation #

## Installing the software ##

Install vagrant: http://www.vagrantup.com/downloads
Install ansible: http://docs.ansible.com/ansible/intro_installation.html 

Then we add the box to be able to change it with ansible.

We first add a base for the development and the local staging machines
$ vagrant box add boxcutter/debian81

# Here goes the vagrant and the run from outside the vagrant.

# TODO: I need here the stuffs about the vagrant run and the provision