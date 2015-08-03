FROM ubuntu:trusty
MAINTAINER Ian Sinnott "ian@iansinnott.com"
ENV REFRESHED_AT 2015-08-03
ENV NODE_ENV production

RUN apt-get -yqq update
RUN apt-get -yqq install curl git build-essential software-properties-common
RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get -yqq install nodejs

RUN mkdir -p /var/www/reports-api
COPY . /var/www/reports-api
WORKDIR /var/www/reports-api
RUN npm install && ./node_modules/.bin/gulp build
EXPOSE 80
CMD ["node", "bin/www"]

# docker build -t isinn/reports-api .
# docker run -d -p 80:80 --name reports-api isinn/reports-api
