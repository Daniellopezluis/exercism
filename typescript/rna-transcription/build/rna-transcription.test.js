"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rna_transcription_1 = require("./rna-transcription");
describe('Transcriptor', () => {
    const transcriptor = new rna_transcription_1.default();
    it('transcribes cytosine to guanine', () => {
        expect(transcriptor.toRna('C')).toEqual('G');
    });
    it('transcribes guanine to cytosine', () => {
        expect(transcriptor.toRna('G')).toEqual('C');
    });
    it('transcribes adenine to uracil', () => {
        expect(transcriptor.toRna('A')).toEqual('U');
    });
    it('transcribes thymine to adenine', () => {
        expect(transcriptor.toRna('T')).toEqual('A');
    });
    it('transcribes all dna nucleotides to their rna complements', () => {
        expect(transcriptor.toRnaStrand('ACGTGGTCTTAA'))
            .toEqual('UGCACCAGAAUU');
    });
    it('correctly handles invalid input', () => {
        expect(() => transcriptor.toRna('U')).toThrowError('Invalid input DNA.');
    });
    it('correctly handles completely invalid input', () => {
        expect(() => transcriptor.toRnaStrand('XXX')).toThrowError('Invalid input DNA.');
    });
    it('correctly handles partially invalid input', () => {
        expect(() => transcriptor.toRnaStrand('ACGTXXXCTTAA')).toThrowError('Invalid input DNA.');
    });
});
//# sourceMappingURL=rna-transcription.test.js.map