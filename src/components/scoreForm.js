import gameScoresApi from '../api/gameScores.js';

const form = document.querySelector('.score-form__body');
const userInput = document.querySelector('.score-form__input[name="user"]');
const scoreInput = document.querySelector('.score-form__input[name="score"]');

export default {
  init() {
    this.initEvents();
  },

  initEvents() {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      this.onSubmit(event);
    });
  },

  onSubmit() {
    if (typeof this.methods.saveGameScore !== 'function') return;

    const user = userInput.value;
    const score = scoreInput.value;

    this.methods.saveGameScore({ user, score });
  },

  methods: {
    saveGameScore({ user, score }) {
      gameScoresApi.post({ user, score })
        .then(() => form.reset())
        .catch((e) => console.log(e));
    },
  },
};