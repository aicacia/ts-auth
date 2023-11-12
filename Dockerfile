FROM --platform=linux/amd64 node:20 as node-builder
RUN npm install -g pnpm@8

WORKDIR /app

COPY package*.json .
RUN pnpm install

COPY . .

ARG PUBLIC_AUTH_API_URL=http://localhost:8080
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN echo "PUBLIC_AUTH_API_URL=${PUBLIC_AUTH_API_URL}" >> .env
RUN pnpm run build

FROM nginx:1.25-alpine3.18-slim
LABEL org.opencontainers.image.source https://github.com/aicacia/auth

ADD nginx.conf /etc/nginx/
RUN rm -rf /usr/share/nginx/html

COPY --from=node-builder /app/build /usr/share/nginx/html
