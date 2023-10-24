FROM node:20-alpine AS builder

COPY prisma ./prisma
COPY src ./src
COPY package.json package-lock.json tsconfig.json tsconfig.build.json nest-cli.json ./

RUN npm install

###

FROM node:20-alpine

COPY --from=builder ./ ./

EXPOSE "3000"
CMD ["npm", "run", "start"]
