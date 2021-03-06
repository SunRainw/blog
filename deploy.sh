# 现已通过GitHub Actions自动部署，提交只需 'git push' 即可
# 若不想使用自动部署，可以直接运行命令 'npm run deploy' 本地自动提交部署

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd public/

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/SunRainw/blog.git
git checkout -b gh-pages

# 如果发布到 https://<USERNAME>.github.io
#git push -f git@github.com:zpj80231/zpj80231.github.io.git gh-pages
git push origin gh-pages