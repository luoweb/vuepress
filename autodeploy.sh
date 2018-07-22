#!/usr/bin/expect
set timeout 300
spawn ./deploy.sh
#Enter passphrase for key '/Users/luweb/.ssh/id_rsa':
expect "Enter passphrase for key '/Users/luweb/.ssh/id_rsa':"
send "******\r"
expect "Enter passphrase for key '/Users/luweb/.ssh/id_rsa':"
send "******\r"
expect "Enter passphrase for key '/Users/luweb/.ssh/id_rsa':"
send "******\r"
interact