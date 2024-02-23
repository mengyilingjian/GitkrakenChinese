# Gitkraken简体中文汉化（当前版本9.5.1）

## 原理
通过修改软件目录下English语言对应的一个json文件内容来完成汉化目的

## 操作步骤
1. 关闭程序，找到程序语言安装目录
    - `Windows:` C:\Users\%用户目录%\AppData\Local\gitkraken\app-x.x.x\resources\app.asar.unpacked\src\strings.json (x.x.x 是你的GitKraken版本)
    - `Mac:` /Applications/GitKraken.app/Contents/Resources/app/src/strings.json
    - `Linux:` /usr/share/gitkraken/resources/app.asar.unpacked/src 
    - `Linux:` /opt/gitkraken/resources/app.asar.unpacked/src/strings.json (Arch Linux AUR 安装的路径在这)
    > 实际目录可能会不一样,但文件名一定是strings.json.

    > 以上只有windows的目录是本人实测找过的，Mac/linux的目录是网上找的如果不对，请自行解决，找到对应的安装目录哈。

2. 复制该项目中的`update.js`和`strings.zh.json`到程序语言安装目录下，执行 `node update.js`
3. 重启gitkraken