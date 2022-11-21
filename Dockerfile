FROM gplane/pnpm as Builder

RUN pnpm -v

RUN mkdir -p /home/mindspore/web
WORKDIR /home/mindspore/web
COPY . /home/mindspore/web

RUN pnpm install

RUN pnpm build

FROM nginx:1.20.0

# COPY ./deploy/test-login.html /usr/share/nginx/html/test-login.html

COPY --from=Builder /home/mindspore/web/app/.vitepress/dist /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html
COPY ./deploy/nginx/nginx.conf /etc/nginx/nginx.conf


ENV RUN_USER nginx
ENV RUN_GROUP nginx
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]

