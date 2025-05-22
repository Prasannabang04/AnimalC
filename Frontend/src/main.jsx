import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// Replace with your Auth0 credentials
const domain = "YOUR_AUTH0_DOMAIN";
const clientId = "YOUR_AUTH0_CLIENT_ID";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={"dev-yw7rye1wqw3mvgax.us.auth0.com"}
      clientId={"31FlRyTRWx946sL6733vbDRjOWLIxJKL"}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
