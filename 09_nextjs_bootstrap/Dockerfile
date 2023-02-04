# syntax=docker/dockerfile:1.4
FROM node:16.13.2-bullseye AS BUILDER
LABEL dockerfile.baseimage="node:16.13.2-bullseye" dockerfile.description="<%= name %>" dockerfile.stage="BUILDER"

WORKDIR /scratch

RUN curl -sf -o /bin/node-prune https://gobinaries.com/tj/node-prune && chmod +x /bin/node-prune && /bin/node-prune

COPY package.json package-lock.json ./
# https://docs.npmjs.com/cli/v7/commands/npm-ci
RUN npm ci

COPY tsconfig.json .eslintrc.json next.config.js ./
COPY public ./public
COPY components ./components
COPY pages ./pages
COPY styles ./styles
RUN npm run lint
RUN npm run build
#RUN npm audit
RUN npm ci --only=production && npm cache clean --force

# prune the node_modules
RUN /usr/local/bin/node-prune --verbose ./node_modules

FROM gcr.io/distroless/nodejs:16 AS PRODUCTION
LABEL dockerfile.baseimage="gcr.io/distroless/nodejs:16" dockerfile.description="<%= name %>" dockerfile.stage="PRODUCTION"

ENV NODE_ENV production

WORKDIR /work
COPY --from=BUILDER /scratch/.next/standalone ./
COPY --from=BUILDER /scratch/.next/static ./.next/static
COPY --from=BUILDER /scratch/public ./public

CMD ["/work/server.js"]