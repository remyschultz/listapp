# List App

## [Live Demo](https://listapp.rschultz.dev)

### Front end - React, Bootstrap

### Backend - Node.js, Express.js, MongoDB

## How to run locally in development mode

1. Clone and `cd listapp`.
2. Ensure Node.js and MongoDB are installed.
   [MongoDB Atlas](https://www.mongodb.com/atlas) may be used as well. Set the environment variable `MONGODB_URL=<Your URL>` for this option.
3. Install dependencies with `npm install`.  
4. Start the MongoDB service  
   on MacOS with `brew services start mongodb-community`.  
   on Linux with `sudo service mongod start`.  
   (Not required for MongoDB Atlas)
5. Set the environment variable `NODE_ENV=development`.  
   Note that if `NODE_ENV` is not set, the server will default to `production` mode.
6. Run `npm start` to start the server. The default port is `5000`.  
   Note that Auth0 will not work with other ports since the allowed callback URLs are pre-defined.
7. Ensure that `/client/src/config.js` contains the correct server port.
8. In a new terminal window, run `npm run client` for the UI. The default port is `3000`.  
   If it does not open a browser tab automatically, navigate to `http://localhost:3000`.

Note: By default, authentication will not be verified on the backend as to not reveal the Auth0 signing certificate on this repo. The UI will direct you to log in through Auth0, but on the backend, tokens will not be verified.

## How to run in production mode
1. Follow steps 1-4 above.
2. Set the environment variable `NODE_ENV=production`.
3. Run `cd client && npm run build`.
4. Ensure that `/client/src/config.js` contains the correct server URL and port.
5. Run `npm start` to start the server. The default port is `5000`.
6. Navigate to `http://localhost:3000` or the URL of the production environment.

