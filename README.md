# IITM / Sentry Issue Reproduction

## Node / NPM versions

```bash
node -v
v18.20.5

npm -v
8.19.4
```

## Install Flow

This is the output for the install flow, as recommended by the Sentry docs.

```bash
npx @sentry/wizard@latest -i nuxt --saas --org <redacted> --project <redacted>
Need to install the following packages:
  @sentry/wizard@3.39.0
Ok to proceed? (y) y

┌   Sentry Nuxt Wizard
│
◇   ────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                                   │
│  The Sentry Nuxt Wizard will help you set up Sentry for your application.                         │
│  Thank you for using Sentry :)                                                                    │
│                                                                                                   │
│  Version: 3.39.0                                                                                  │
│                                                                                                   │
│  This wizard sends telemetry data and crash reports to Sentry. This helps us improve the Wizard.  │
│  You can turn this off at any time by running sentry-wizard --disable-telemetry.                  │
│                                                                                                   │
├───────────────────────────────────────────────────────────────────────────────────────────────────╯
│
▲  You have uncommitted or untracked files in your repo:
│
│  - .gitignore
│  - README.md
│  - app.vue
│  - nuxt.config.ts
│  - package-lock.json
│  - package.json
│  - public/
│  - server/
│  - tsconfig.json
│
│  The wizard will create and update files.
│
◇  Do you want to continue anyway?
│  Yes
│
◇  Do you already have a Sentry account?
│  Yes
│
●  If the browser window didn't open automatically, please open the following link to log into Sentry:
│
│  <redacted>
│
◇  Login complete.
│
◇  Selected project <redacted>
│
▲  To ensure Sentry can properly instrument your code it needs to add version overrides for some Nuxt dependencies.
│
│  For more info see: https://github.com/getsentry/sentry-javascript/issues/14514
│
◇  Do you want to add an override for @vercel/nft version ^0.27.4?
│  Yes
│
◇  Installed @sentry/nuxt with NPM.
│
◆  Created .env.sentry-build-plugin with auth token for you to test source map uploading locally.
│
◆  Added .env.sentry-build-plugin to .gitignore.
│
◇  Please select your deployment platform.
│  Other
│
◆  Added Sentry Nuxt Module to nuxt.config.ts.
│
◇  Do you want to enable Tracing to track the performance of your application?
│  Yes
│
◇  Do you want to enable Sentry Session Replay to get a video-like reproduction of errors during a user session?
│  No
│
◆  Created new sentry.server.config.ts.
│
◆  Created new sentry.client.config.ts.
│
◇  Do you want to create an example component to test your Sentry setup?
│  No
│
●  After building your Nuxt app, you need to --import the Sentry server config file when running your app.
│
│  For more info, see:
│
│  https://docs.sentry.io/platforms/javascript/guides/nuxt/install/cli-import/#initializing-sentry-with---import
│
◇  Do you want to open the docs?
│  No
│
└
Successfully installed the Sentry Nuxt SDK!

Check out the SDK documentation for further configuration: https://docs.sentry.io/platforms/javascript/guides/nuxt/
```

## Reproduction

1. Add your DSN to the `sentry.client.config.ts` and `sentry.server.config.ts` files.

2. Build and run the Nuxt app
```bash
npm run build

node .output/server/index.mjs
```

3. Open the browser and navigate to `http://localhost:3000`.

4. Check the console, you should see an error, likely something like:

```bash
$ node .output/server/index.mjs
Listening on http://[::]:3000
[nuxt] [request error] [unhandled] [500] The requested module 'graphql-ws' does not provide an export named 'GRAPHQL_TRANSPORT_WS_PROTOCOL'

(node:17768) Error: 'import-in-the-middle' failed to wrap 'file:///Users/dev/projects/iitm-export-star-repro/.output/server/node_modules/graphql-ws/lib/index.mjs'
(Use `node --trace-warnings ...` to show where the warning was created)
[nuxt] [request error] [unhandled] [500] The requested module 'graphql-ws' does not provide an export named 'GRAPHQL_TRANSPORT_WS_PROTOCOL'
```
