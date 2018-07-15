# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd vuepress

# 如果是发布到自定义域名
echo 'roweb.cn' > CNAME
# rm CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
#git push -f git@github.com:luoweb/luoweb.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:luoweb/vuepress.git master:gh-pages

cd -