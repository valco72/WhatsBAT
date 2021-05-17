FROM fusuf/whatsasena:latest

RUN git clone https://github.com/valco72/WhatsGAIA /root/WhatsGAIA
WORKDIR /root/WhatsGAIA/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
