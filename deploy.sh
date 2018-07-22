#!/bin/bash
# 确保脚本抛出遇到的错误
set -e
function build_vuepress(){
    # 生成静态文件
    yarn build
    # 进入生成的文件夹
    cd vuepress
    # 如果是发布到自定义域名
    #echo 'roweb.cn' > CNAME
    rm -f CNAME

    git init
    git add -A
    git commit -m 'deploy vuepress'
}

config_dir="/Users/luweb/cloud/blog/vuepress/docs/.vuepress/config.js"
# 如果发布到 https://<USERNAME>.github.io
#git push -f git@github.com:luoweb/luoweb.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
build_vuepress
echo "force deploy to git@github.com:luoweb/vuepress.git master:gh-pages"
git push -f git@github.com:luoweb/vuepress.git master:gh-pages
cd ..

#brew install gnu-sed
gsed -i "s#base:'/vuepress/',#base:'/home/',#g" ${config_dir}
build_vuepress
echo "force git@git.coding.net:luoweb/home.git master"
git push -f git@git.coding.net:luoweb/home.git master 
cd ..

gsed -i "s#base:'/home/',#//base:'/home/',#g" ${config_dir}
build_vuepress
echo "force deploy to git@gitee.com:roweb/roweb.git master"
git push -f git@gitee.com:roweb/roweb.git master
cd ..

gsed -i "s#//base:'/home/',#base:'/vuepress/,#g" ${config_dir}
cd -