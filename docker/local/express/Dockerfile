FROM  node:20.10.0

ENV NODE_ENV=development

WORKDIR /app


RUN apt-get update && apt-get install -y curl wget gnupg2


RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update \
    && apt-get -y install google-chrome-stable

RUN npm install puppeteer

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm","run","server" ]