// this file acts as the main point of entry for the react application, responsible for rendering the root component and setting up essential libraries


import React from 'react';    // Provides the building blocks for creating components and rendering them
import ReactDOM from 'react-dom/client';    // provides methods to render React components into the actual DOM(HTML elements)
import { BrowserRouter } from "react-router-dom"; // wrapper that enables client-side routingfor React app, so it can handle multiple routes without reloading the page
import App from './App';     // imports the main component (app.js) that serves as top level component for the application
import TimeAgo from "javascript-time-ago";   // library that formats time stamps (ex. 3 minutes ago)
import en from "javascript-time-ago/locale/en.json";    // english localization got TimeAgo library

TimeAgo.addDefaultLocale(en)
  // registers english locale


const root = ReactDOM.createRoot(document.getElementById('root'));
  // creates the root React element and tells react where to inject the app inside the DOM
  // targets the <div id="root"></div> element inside public/index.html - where the entire app is rendered 



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
  // root.render(): tells react to render components into the root element 
  // <react.StrictMode>: development only wrapper that helps detect potential issues
  // <browserRouter>: Wraps the app with routing functionality, enabling client side navigation iseing react router library
  // <App />: root component of the app, where all other components are nested 