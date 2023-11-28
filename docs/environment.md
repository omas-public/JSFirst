# 環境設定 

## vagrant(on local machine)

```bash
mkdir -p ~/Boxes/node && cd $_
vagrant init ubuntu/jammy64
vagrant box update
```

edit Vagrantfile

```
26: config.vm.network "forwarded_port", guest: 3000, host: 3000

52: config.vm.provider "virtualbox" do |vb|
53:  #   # Display the VirtualBox GUI when booting the machine
54:  #   vb.gui = true
55:  #
56:  #   # Customize the amount of memory on the VM:
57:     vb.memory = "3064"
58: end
```

```bash
$ vagrant up
$ vagrant ssh-config >> ~/.ssh/config
$ vagrant ssh
```

## node install(on vagrant machine)

```sh
$ sudo apt update -y
$ curl https://get.volta.sh | bash
```

## standardjs and jest

```sh
$ npm install -g standard
$ npm install -g prettier-standard
$ npm install -g jest
$ sudo cat >/etc/sysctl.d/99-max_user_watches.conf << EOF
fs.inotify.max_user_watches=524288
EOF
```

## vscode plugin and module install

```VSCode```

- `ctrl + P` -> `ext install VisualStudioExptTeam.vscodeintellicode`
- `ctrl + P` -> `ext install standard.vscode-standard`
- `ctrl + P` -> `ext install firsttris.vscode-jest-runner`
