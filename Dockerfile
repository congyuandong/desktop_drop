FROM daocloud.io/nginx

MAINTAINER congyuandong <congyuandong@gmail.com>

COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 
