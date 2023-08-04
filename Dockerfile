FROM node:18.17.0-alpine

WORKDIR /app

COPY ./ ./

RUN npm install

EXPOSE 5001

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
