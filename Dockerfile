FROM node:18-alpine
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "start"]