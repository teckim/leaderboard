import http from '../utils/http.js';

const GAME_ID = process.env.GAME_ID || localStorage.getItem('GAME_ID') || 'AtUJdypTI419Um3kkLSS';
const ENDPOINT = `games/${GAME_ID}/scores`;

export default {
  get() {
    return http.get(ENDPOINT);
  },

  post({ user, score }) {
    const data = { user, score };

    return http.post(ENDPOINT, data);
  },
};