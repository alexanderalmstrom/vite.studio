FROM nginx
COPY dist/public /usr/share/nginx/public
COPY nginx/default.conf /etc/nginx/conf.d/default.conf