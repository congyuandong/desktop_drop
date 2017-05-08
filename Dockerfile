FROM daocloud.io/nginx

MAINTAINER congyuandong <congyuandong@gmail.com>

COPY dist /usr/share/nginx/html

EXPOSE 80

CMD sed -i "s/ContainerID: /ContainerID: "$(hostname)"/g" /usr/share/nginx/html/index.html && nginx -g "daemon off;"
