#!/bin/bash

# Navigate to the app directory
cd app

# Install dependencies
echo "Installing dependencies..."
npm ci --legacy-peer-deps

# Build the application
echo "Building the application..."
npm run build

# Start the production server
echo "Starting the production server..."
npm start