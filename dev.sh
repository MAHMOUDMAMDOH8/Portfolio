#!/bin/bash

echo "Starting Mahmoud Mamdoh Portfolio development server..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies first..."
    npm install
fi

# Start development server
npm run dev 