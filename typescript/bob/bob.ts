export default class Bob {

    constructor() {}

    public isShouting(str: string): boolean {
        return str === str.toUpperCase();
    }

    public isQuestion(str: string): boolean {
        return str.charAt(str.length -1) === '?';
    }

    public isSilence(str: string): boolean {
        return str.length === 0 || !str.trim();
    }

    public isLetters(str: string): boolean {
        return /[a-z]/i.test(str);
    }

    public hey(str: string): string {
        let answer: string;

        if(this.isSilence(str)) {
            answer = 'Fine. Be that way!';
        } else if (this.isShouting(str) && this.isLetters(str)){
            answer = 'Whoa, chill out!';
        } else if (this.isQuestion(str)){
            answer = 'Sure.';
        } else {
            answer = 'Whatever.';
        }
        return answer;
    }
}