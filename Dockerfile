# Base image with Cypress + Node + Browsers
FROM cypress/included:15.10.0

# Optional: install extra tools
# RUN apt-get update && apt-get install -y curl unzip

WORKDIR /e2e

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy all test files
COPY cypress ./cypress
COPY cypress.config.js ./

# Default command (smoke test)
CMD ["npm", "run", "test:smoke"]
