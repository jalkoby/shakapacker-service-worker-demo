/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// Uncomment to copy all static images under ./images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//

const images = require.context('./images', true);
const imagePath = (name) => images(name, true);

import "./styles/application.scss"
import { createRoot } from 'react-dom/client'
import App from './App'

let notifyUser;
Notification.requestPermission().then(result => {
  if (result === 'granted') {
    notifyUser = (msg, opts = {}) => {
      let notification = new Notification(msg, opts);
      if (opts.url) {
        notification.addEventListener('click', () => {
          notification.close();
          window.location = opts.url;
        });
      }
    }
  } else {
    notifyUser = msg => window.alert(msg);
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });

  navigator.serviceWorker.addEventListener('message', event => {
    // Optional: ensure the message came from workbox-broadcast-update
    if (event.data.meta === 'workbox-broadcast-update') {
      let updatedURL = new URL(event.data.payload.updatedURL);
      if (updatedURL.pathname === '/') {
        notifyUser('A new version is available', { url: updatedURL });
      }
    }
  });
}

createRoot(document.getElementById('app')).render(<App imagePath={imagePath} />);
