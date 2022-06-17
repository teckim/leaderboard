import http from '~/utils/http.js';

const ENDPOINT = 'games';

export default {
  post({ name }) {
    const data = { name };

    return http.post(ENDPOINT, data);
  },
};