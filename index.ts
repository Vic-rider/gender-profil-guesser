// import axios from 'axios';
import axios, { AxiosResponse } from 'axios';

type GenderResponse = {
    count: 0,
    name: "",
    gender: "",
    probability: 0
};

// module.exports = { 


    
    
    

// }

// axios.get(`https://api.genderize.io/?name=Vincent`)
//         .then(response => {
//             // Process the response data
//             console.log(response.data);
//         })
//         .catch(error => {
//             // Handle any errors
//             console.error(error);
//         });

// export async function getUsers(name_or_email: string) {

//     // axios.get(`https://api.genderize.io/?name=${name_or_email}`)
//     // .then(response => {
//     //     // Process the response data
//     //     console.log(response.data);
//     // })
//     // .catch(error => {
//     //     // Handle any errors
//     //     console.error(error);
//     // });

//     console.log(3330);

//     try {
//       // 👇️ const response: Response
//       const response = await fetch(`https://api.genderize.io/?name=${name_or_email}`, {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }
  
//       // 👇️ const result: GenderResponse
//       const result = (await response.json()) as GenderResponse;
  
//     //   console.log('result is: ', JSON.stringify(result, null, 4));
  
//       return result;
//     } 
//     catch (error) {
//       if (error instanceof Error) {
//         console.log('error message: ', error.message);
//         return error.message;
//       } else {
//         console.log('unexpected error: ', error);
//         return 'An unexpected error occurred';
//       }
//     }

//   }

//   getUsers('Vincent');

export async function getGenderDatas(name_or_email: string): Promise<AxiosResponse> {
  const url = `https://api.genderize.io/?name=${name_or_email}`;
  const response = await axios.get(url);
  return response;
}

