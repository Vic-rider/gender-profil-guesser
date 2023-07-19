import { AxiosResponse } from 'axios';
export declare class GenderGuesser {
    gender: any;
    constructor();
    guessGenderOf(name_or_email: string): Promise<AxiosResponse>;
    isMale(name_or_email: string): Promise<boolean>;
    isFemale(name_or_email: string): Promise<boolean>;
}
