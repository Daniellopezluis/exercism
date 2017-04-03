export interface IMyType {
    [key: string]: number;

}

export default class Words {
    constructor () {}

    count(sentence: string){
        let wordsArray: string[] = sentence.replace(/\s+/, ' ').split(' ');
        let total: IMyType = {};

        for(let i = 0; i < wordsArray.length; i++){
            if(!(total.hasOwnProperty(wordsArray[i]))){
                total[wordsArray[i]] = 0;
            }
            ++total[wordsArray[i]];
        }
        console.log(total);
        return total;

    }
}
