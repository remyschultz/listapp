# List App

### Front end - React, Bootstrap

### Backend - Node.js, Express.js, MongoDB

## How to run locally

1. Clone and `cd` into the repo.
2. Ensure Node.js and MongoDB are installed on your system.
3. Install server dependencies with `npm install`.
4. Start the MongoDB service.
  * On MacOS with `brew services start mongodb-community`.
  * On Linux with `sudo service mongod start`.
5. Run `npm run server` to start the server. The default port is `5001`.
6. In a new terminal window, run `npm run client` for the UI. The default port is `3000`.
  * If it does not open a browser tab automatically, navigate to `http://localhost:3000`.

Note: By default, authentication is not verified on the backend. This is because that would require revealing the Auth0 signing certificate on this repo. The UI will direct you to log in through Auth0, but on the backend, no verification will take place when `USE_AUTH` is `false`.