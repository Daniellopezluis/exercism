export default class Hamming {

    constructor(){}

    public isValid (cadena1: string, cadena2 : string): boolean {
        return(cadena1.length == cadena2.length);
    }

    public isNotEqual (char1: string, char2: string): boolean{
        return(char1 !== char2);
    }

    public compute (cadena1: string, cadena2: string){
        let hammingDist: number = 0;
        if (this.isValid(cadena1,cadena2)){
            for(let i=0; i < cadena1.length; i++){
                if (this.isNotEqual(cadena1[i], cadena2[i])){
                    hammingDist++;
                }
            }
            return hammingDist;
        } else {
            throw('DNA strands must be of equal length.');
        }
    }
}