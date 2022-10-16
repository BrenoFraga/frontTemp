FROM mhart/alpine-node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install --save react-circular-progressbar --legacy-peer-deps
RUN npm install primereact primeicons --legacy-peer-deps
RUN npm install --save ng2-charts --legacy-peer-deps
RUN npm install --save chart.js --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]