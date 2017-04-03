export default class Words {
    constructor () {}

    count(sentence: string){
        let wordsAray: string[] = sentence.replace(/\s+/, ' ').split(' ');
        let total = {};

        for(let i = 0; i < wordsAray.length; i++){
            if(!(total.hasOwnProperty(wordsAray[i]))){
                total[wordsAray[i]] = 0;
            }
            ++total[wordsAray[i]];
        }
        return words;

    }
}
