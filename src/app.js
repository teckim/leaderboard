import scoreList from '~/components/scoreList.js';
import scoreForm from '~/components/scoreForm.js';
import game from '~/components/game.js';

import '~/assets/styles/css/reset.css';
import '~/assets/styles/scss/layout.scss';
import '~/assets/styles/scss/components/scores.scss';
import '~/assets/styles/scss/components/score-form.scss';

const refreshBtn = document.querySelector('.scores__refresh-btn');

export default {
  init() {
    this.initEvents();

    game.init();
    scoreList.init();
    scoreForm.init();
  },

  initEvents() {
    refreshBtn.addEventListener('click', () => {
      scoreList.init();
    });
  },
};