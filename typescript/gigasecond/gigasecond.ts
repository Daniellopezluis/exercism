export default class Gigasecond {
    iniDate: Date;

    constructor (date: Date) { 
        this.iniDate = new Date(date);
    }

    public date (): Date {
        let startTime = this.iniDate.getTime();
        let endDate = new Date(startTime + Math.pow(10,12));
        return endDate;
    }

}