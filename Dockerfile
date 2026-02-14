FROM cypress/base:20.11.0

WORKDIR /e2e

# Copy package files and install deps first
COPY package.json package-lock.json ./
RUN npm ci

# Copy all files after dependencies
COPY . .

# Run default test
CMD ["npx", "cypress", "run"]
