# Dockerfile for client

# Specify the node base image with your desired version node:<version>
FROM node:lts-alpine

# Working directory be app
WORKDIR /app

# The port that we want to run in the container
ENV PORT=8080

# Expose the port so that we can reach the app
EXPOSE ${PORT}

# Copy the package.json only
COPY package.json ./

# Install dependencies, but skip devDependencies
RUN npm install --production

# Copy the built app into /app in the container
COPY index.js .

# Start the app
CMD ["node", "index.js"]