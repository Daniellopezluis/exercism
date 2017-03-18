export default class Transcriptor {
    constructor() {}

    public toRna(DNA: string): string {
        let RNA: string;
        switch(DNA) {
            case 'G': {RNA = 'C'; break; }
            case 'C': {RNA = 'G'; break; }
            case 'T': {RNA = 'A'; break; }
            case 'A': {RNA = 'U'; break; }
            default: {throw('Invalid input DNA.');}
        }
        return RNA;
    }

    public toRnaStrand(DNA_Strand: string): string {
        let RNA_Strand = '';
        for (let i = 0; i < DNA_Strand.length; i++){
            RNA_Strand += this.toRna(DNA_Strand[i]);
        }
        return RNA_Strand;
    }
}