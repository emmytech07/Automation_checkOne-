# 1. Base image with Cypress + Node + Browsers
FROM cypress/included:15.10.0

# 2. Set working directory
WORKDIR /e2e

# 3. FIX: Tell Node to look in the local node_modules for your reporter
# This links the global Cypress with your local plugins
ENV NODE_PATH=/e2e/node_modules

# 4. Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# 5. Copy all test files
COPY cypress ./cypress
COPY cypress.config.js ./

# 6. Use the global cypress binary directly to avoid re-downloading
ENTRYPOINT ["cypress", "run"]
