# syntax=docker/dockerfile:1

FROM node:12.18.1

ENV PORT 80

# Install MITRE CA Certs if on the MII
RUN if curl -ksSL https://gitlab.mitre.org/mitre-scripts/mitre-pki/raw/master/os_scripts/install_certs.sh > /tmp/install_certs.sh 2>/dev/null; then sh /tmp/install_certs.sh && rm -f /tmp/install_certs.sh; else echo "Not on the MII, skipping certificate install"; fi

ARG NODE_OPTIONS=--use-openssl-ca

# Copy the ols-ui package.json and yarn.lock.
COPY ols-ui/package.json /app/ols-ui/package.json
COPY ols-ui/yarn.lock /app/ols-ui/yarn.lock

# Install dependencies for ols-ui.
WORKDIR /app/ols-ui
RUN bash -c "yarn install --frozen-lockfile"

# Build ols-ui.
WORKDIR /app/ols-ui
COPY ols-ui /app/ols-ui
RUN yarn build

# Run ols-ui unit tests.
ENV RUN_TESTS=1
RUN if [ $RUN_TESTS -eq 1 ]; then yarn test-output || status=$?; else echo "Skipping Tests"; fi

# Build ODG APP
WORKDIR /app/odg-app
COPY odg-app /app/odg-app
RUN yarn install --frozen-lockfile
RUN yarn build

CMD ["npm", "start"]
