# 自动推送内容到不同GIT平台

## 目标：
使用vuepress发布日志，想在不同git平台发布，包括github.com, gitee.com, coding.net, 无需每次手工同步，想通过脚本自动同步，但是由于不同平台配置和输入用户提示，需要依赖一些工具进行自动化操作。

## 环境依赖：
安装mac, git, expect, gsed

``` bash
brew install git expect gnu-sed

```

## 大致思路：

```
1. 根据不同平台，配置vuepress：vuepress/docs/.vuepress/config.js
2. 提交git平台时，使用expect 交互输入密码
```

## 脚本参考：
1. 修改配置：
```bash
#由于mac自带的sed不习惯，使用linux版本的sed
gsed -i "s#base:'/home/',#//base:'/home/',#g" vuepress/docs/.vuepress/config.js
```
1. expect语法：
```bash
#!/usr/bin/expect
#超时300s,
set timeout 300
##自动提交脚本编写
spawn ./deploy.sh
#匹配 Enter passphrase for key '/Users/luweb/.ssh/id_rsa':输入密码，三个平台输入三次。
expect "Enter passphrase for key '/Users/luweb/.ssh/id_rsa':"
send "******\r"
expect "Enter passphrase for key '/Users/luweb/.ssh/id_rsa':"
send "******\r"
expect "Enter passphrase for key '/Users/luweb/.ssh/id_rsa':"
send "******\r"
interact
```


