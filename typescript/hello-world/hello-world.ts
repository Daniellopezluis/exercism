export default class HelloWorld {

    constructor() { }

    public hello(name?: string): string {
        let greeting: string;
        if(name){
            greeting = 'Hello, ' + name + '!';
        } else {
            greeting = 'Hello, World!';
        }
        return greeting;
    }
}
