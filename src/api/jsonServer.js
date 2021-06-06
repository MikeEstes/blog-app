import axios from 'axios';

// NGROK URL will change every time the server is restarted
export default axios.create({
  baseURL: 'http://e586be367fa4.ngrok.io',
});
