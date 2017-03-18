"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transcriptor {
    constructor() { }
    toRna(DNA) {
        let RNA;
        switch (DNA) {
            case 'G': {
                RNA = 'C';
                break;
            }
            case 'C': {
                RNA = 'G';
                break;
            }
            case 'T': {
                RNA = 'A';
                break;
            }
            case 'A': {
                RNA = 'U';
                break;
            }
            default: {
                throw ('Invalid input DNA.');
            }
        }
        return RNA;
    }
    toRnaStrand(DNA_Strand) {
        let RNA_Strand = '';
        for (let i = 0; i < DNA_Strand.length; i++) {
            RNA_Strand += this.toRna(DNA_Strand[i]);
        }
        return RNA_Strand;
    }
}
exports.default = Transcriptor;
//# sourceMappingURL=rna-transcription.js.map