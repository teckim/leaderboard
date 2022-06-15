import gamesApi from '../api/games.js';

export default {
  init() {
    this.setGameId();
  },

  async setGameId() {
    if (process.env.GAME_ID) return localStorage.setItem('GAME_ID', process.env.GAME_ID);

    try {
      const res = await gamesApi.post({ name: 'Hakim\'s Game' });
      const gameId = res.split(' ')[3];

      if (gameId && gameId.length === 20) {
        localStorage.setItem('GAME_ID', gameId);
        window.gameId = gameId;
      }
    } catch (e) {
      console.error(e);
    }

    return process.env.GAME_ID;
  },
};