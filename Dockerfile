# get the base node image
FROM node:16.13.1-alpine3.12 as builder

# set the working dir for container
WORKDIR /app/src

# copy other project files
COPY . .

# install npm dependencies
RUN npm install

# build the folder
RUN npm run build

# Handle Nginx
FROM nginx:latest
COPY --from=builder /app/src/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf