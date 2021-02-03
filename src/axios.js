import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/clone-e9c03/us-central1/api'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;

// Project Console: https://console.firebase.google.com/project/clone-e9c03/overview
// Hosting URL: https://clone-e9c03.web.app
