# 2. Production container
FROM node:current-alpine3.14 AS production

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]