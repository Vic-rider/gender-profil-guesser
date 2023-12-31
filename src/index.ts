import axios, { AxiosResponse } from 'axios';

export class GenderGuesser {

  gender: any = null;

  constructor() {}

  guessGenderOf(name_or_email: string): Promise<AxiosResponse> {

    return new Promise((resolve, reject) => {
      axios.get(`https://api.genderize.io/?name=${name_or_email}`)
        .then((response:any) => {
          this.gender = response.data.gender;
          if(this.gender) resolve(this.gender);
        })
        .catch(() => {
          reject(this.gender);
        });
    });
  }

  isMale(name_or_email: string): Promise<boolean> {

    return new Promise((resolve, reject) => {
      this.guessGenderOf(name_or_email)
      .then((data) => {
        if(String(data) === 'male') resolve(true);
        reject(false);
      })
      .catch(() => {
        reject(this.gender);
      });
    })
    
  }

  isFemale(name_or_email: string): Promise<boolean> {

    return new Promise((resolve, reject) => {
      this.guessGenderOf(name_or_email)
      .then((data) => {
        if(String(data) === 'female') resolve(true);
        reject(false);
      })
      .catch(() => {
        reject(this.gender);
      });
    })

  }


}
