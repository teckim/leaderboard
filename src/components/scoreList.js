import gameScoresApi from '../api/gameScores.js';

const listContainer = document.querySelector('.scores__list');

const template = (scores) => scores
  .map(({ user, score }) => `
      <li class="scores__list-item">
        <span class="scores__list-item__name">${user}:</span>
        <span class="scores__list-item__score">${score}</span>
      </li>
    `)
  .join('');

export default {
  scores: [],

  async init() {
    this.scores = await this.getScores();
    this.render();
  },

  async getScores() {
    const { result } = await gameScoresApi.get();

    return result;
  },

  render() {
    const html = template(this.scores);

    listContainer.innerHTML = html;
  },
};