FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine AS production-image
EXPOSE 3000
EXPOSE 5173

WORKDIR /app
COPY --from=build-stage /app/dist /app/dist/

COPY package.json vite.config.ts .
RUN npm install typescript 

CMD [ "npm", "run", "preview" ]
