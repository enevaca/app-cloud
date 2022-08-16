FROM node:lts-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/scr/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm ci --omit=dev && npm cache clean --force
EXPOSE 4000
CMD ["node", "dist/main.js"]
