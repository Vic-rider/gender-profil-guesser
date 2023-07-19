// import { GenderGuesser } from 'detect-gender-from-name-or-email';
// import GenderGuesser  from 'detect-gender-from-name-or-email';

const { GenderGuesser } = require("../lib");

const _guesser = new GenderGuesser();

function check(name) {

  _guesser.guessGenderOf(name)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Erreur lors de la requête HTTP:', error);
    });

}

check('Lisy');

