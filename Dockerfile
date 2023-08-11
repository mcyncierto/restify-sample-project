# Use an official Node.js LTS runtime as a parent image
FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy the package.json to the container
COPY package.json ./

# Copy the tsconfig.json to the container
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port on which your application will be listening
EXPOSE 3001

# Define the command to start your application
CMD ["npm", "start"]