FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Copy Prisma schema
COPY prisma ./prisma/

# Install dependencies
RUN npm ci --only=production

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the source code
COPY . .

# Expose port
EXPOSE $PORT

# Start application
CMD ["npm", "start"]