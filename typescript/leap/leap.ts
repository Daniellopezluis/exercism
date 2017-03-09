export default class leapYear {
    constructor(){
    }
    public isLeapYear(year: number): boolean {
        let isLeap: boolean = false;

        if(year%4 == 0){
            if(!(year%100 == 0)){
                isLeap = true;
            } else if (year%400 == 0){
                isLeap = true;
            }
        }
        return isLeap;
    }
}