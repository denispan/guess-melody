import {getElementFromTemplate, renderScreen} from './utils';
import {welcomeScreenElement} from './welcome-screen';

const templateFailTime =
`<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Увы и ах!</h2>
  <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const failTimeElement = getElementFromTemplate(templateFailTime);

const initFailTimeScreen = () => {
  const replayButton = failTimeElement.querySelector(`.result__replay`);
  replayButton.addEventListener(`click`, () => renderScreen(welcomeScreenElement));
};

export {failTimeElement, initFailTimeScreen};
