FROM node:current-slim

RUN npm install -g typescript \
    vite create-vite \
    react react-dom react-router-dom \
	npkill
RUN apt-get update && apt-get install -y git \
    make