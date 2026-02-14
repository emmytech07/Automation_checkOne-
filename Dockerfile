FROM cypress/included:15.10.0

WORKDIR /e2e

# FIX: Tell Node where the pre-installed Cypress is 
# AND where your local reporters/plugins will be
ENV NODE_PATH=/usr/local/lib/node_modules:/e2e/node_modules

# Copy dependency files and install
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Use the global cypress binary directly
ENTRYPOINT ["cypress", "run"]
