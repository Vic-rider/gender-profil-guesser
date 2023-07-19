import { AxiosResponse } from 'axios';
export declare class GenderGuesser {
    gender: any;
    constructor();
    guessGenderOf(name_or_email: string): Promise<AxiosResponse>;
}
