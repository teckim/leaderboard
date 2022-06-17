const API_URL = process.env.API_URL || 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

export default {
  get(endpoint) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/${endpoint}`)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },

  post(endpoint, data) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
};