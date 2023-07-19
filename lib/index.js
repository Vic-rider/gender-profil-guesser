"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderGuesser = void 0;
const axios_1 = require("axios");
class GenderGuesser {
    constructor() {
        this.gender = null;
    }
    guessGenderOf(name_or_email) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(`https://api.genderize.io/?name=${name_or_email}`)
                .then((response) => {
                this.gender = response.data.gender;
                if (this.gender)
                    resolve(this.gender);
            })
                .catch(() => {
                reject(this.gender);
            });
        });
    }
    isMale(name_or_email) {
        return new Promise((resolve, reject) => {
            this.guessGenderOf(name_or_email)
                .then((data) => {
                if (String(data) === 'male')
                    resolve(true);
                reject(false);
            })
                .catch(() => {
                reject(this.gender);
            });
        });
    }
    isFemale(name_or_email) {
        return new Promise((resolve, reject) => {
            this.guessGenderOf(name_or_email)
                .then((data) => {
                if (String(data) === 'female')
                    resolve(true);
                reject(false);
            })
                .catch(() => {
                reject(this.gender);
            });
        });
    }
}
exports.GenderGuesser = GenderGuesser;
