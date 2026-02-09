# Base image with Cypress + Node + Browsers
FROM cypress/included:15.10.0

# Optional: install extra tools
RUN apt-get update && apt-get install -y curl unzip

WORKDIR /e2e

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Default command (smoke test)
CMD ["npm", "run", "test:smoke"]
