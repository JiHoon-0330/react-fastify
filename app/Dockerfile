FROM node:20-alpine

WORKDIR /usr/src/react-fastify

COPY ./yarn/releases/ /usr/src/react-fastify/.yarn/releases/
COPY package.json yarn.lock .yarnrc.yml tsconfig.json /usr/src/react-fastify/
COPY app/package.json /usr/src/react-fastify/app/package.json

RUN yarn install --immutable

# 소스코드
COPY app/ /usr/src/react-fastify/app/

RUN yarn workspace app build

# 환경변수
ENV NODE_ENV=production
ENV NODE_OPTIONS=--max_old_space_size=2048
ENV PORT=10000

EXPOSE 10000

# 실행
CMD ["yarn", "workspace", "app", "start"]
