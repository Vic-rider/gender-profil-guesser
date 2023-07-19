// const { GenderGuesser } = require("gender-profil-guesser");
const { GenderGuesser } = require("../lib/index");

const genderGuesser = new GenderGuesser();

function check(name) {

  genderGuesser.guessGenderOf(name)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Erreur lors de la requête HTTP:', error);
    });

}

function isMale(name) {

  genderGuesser.isMale(name)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Erreur lors de la requête HTTP:', error);
    });

}

function isFemale(name) {

  genderGuesser.isFemale(name)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Erreur lors de la requête HTTP:', error);
    });

}


check('Lisy');
isMale('Richard');
isFemale('Romaric');
isFemale('Laurette');
isMale('Pascale')



// describe('Check if return the rigth gender', () => {

//   test('should return male', () => {
//     genderGuesser.guessGenderOf('Vincent')
//     .then(gender => {
//       expect(gender).to.equal('male');
//     })
//   })

//   test('should return female', () => {
//     genderGuesser.guessGenderOf('Lisy')
//     .then(gender => {
//       expect(gender).to.equal('female');
//     })
//   })

// })