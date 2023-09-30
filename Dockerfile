# Use the Node.js 14 image as the base image
FROM node:14-slim

# Set the working directory within the container
WORKDIR /app

# Update the package manager and install required dependencies
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y gcc default-libmysqlclient-dev pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Copy your requirements.txt file
COPY requirements.txt .

# Install app dependencies

RUN npm install --no-cache-dir -r requirements.txt

# Copy the rest of your application code
COPY . .



# Specify the command to run your Node.js application
CMD ["npm","start"]
