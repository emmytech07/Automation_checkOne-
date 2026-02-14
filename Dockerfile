FROM cypress/base:20.11.0

WORKDIR /e2e

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npx", "cypress", "run"]
