FROM node:12
 
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
 
RUN npm install

COPY . .
 
EXPOSE 3000

CMD ["npm", "start"]
