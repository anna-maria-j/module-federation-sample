# Module Federation example

Example of Micro Frontend with Webpack's Module Federation plugin.

## Quickstart

1. Clone this repository
   ```
   git clone git@github.com:anna-maria-j/module-federation-sample.git
   ```

2. Go to `remote` directory, install required dependencies, start remote app
   ```
   cd remote
   npm install
   npm start
   ```

2. Go to `host` directory, install required dependencies, start host app
   ```
   cd host
   npm install
   npm start
   ```


The host app is using Counter component from the remote app.