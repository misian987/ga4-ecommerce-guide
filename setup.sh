#!/bin/bash

# Install dependencies
npm install

# Create necessary directories
mkdir -p src/app
mkdir -p src/components
mkdir -p public

# Start development server
npm run dev 