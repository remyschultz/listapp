import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const domain = process.env.REACT_APP_AUTH0_DOMAIN

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'http://localhost:5001'
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
