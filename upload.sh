#!/usr/bin/env sh

# 发生错误时终止
set -e
function upload(){
    # 迁移压缩文件到服务器对应目录下
#    scp -r ../ywtg-service root@47.94.20.63:/home/web
    scp -r ../ywtg-service/.config/ ywtg@121.89.213.169:admin-web/web
    # 删除上传后的压缩文件
#    rm -rf dist.zip
#    http://admin-community.bjzelr.com/#/login
#    vue-tsc --noEmit &&
#    admin-community.bjzelr.com
#    admin-community-api.bjzelr.com
#    root
#    kangxiaorui0817$
#    wisdomcommunity2022$
}
if [ $1 == "dev" ]; then
upload $1
elif [ $1 == "prod" ]; then
upload $1
else
echo "your params is not pre or prod"
fi
