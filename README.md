#### Made by [@Vic-rider](https://twitter.com/tossouvincenta1)

**gender-profil-guesser**, based on https://genderize.io/ it informs about the gender of a name or email according to the probability that it has to be it.

## Install

Install using `npm install gender-profil-guesser`

## Usage

To include gender-profil-guesser, require or import it:

in JavaScript
```js
const { GenderGuesser } = require("gender-profil-guesser");
```

in TypeScript
```ts
import { GenderGuesser } from "gender-profil-guesser";
```

### Create an instance of it

```js
const genderGuesser = new GenderGuesser();
```


You can get the gender from your name or email.

**Ex** :

```js
// it would return a promise so you have to get it.

genderGuesser.guessGenderOf(name_or_email)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

You can check if the one who has this attribute is male or female.

**Ex** :

```js
// it would return a promise so you have to get it.

genderGuesser.isMale(name)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```
