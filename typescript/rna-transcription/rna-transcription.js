var Transcriptor = (function () {
    function Transcriptor(strand) {
        this.strand = strand;
    }
    Transcriptor.prototype.toRna = function (DNA) {
        var RNA;
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
    };
    Transcriptor.prototype.toRnaStrand = function (DNA_Strand) {
        var RNA_Strand = DNA_Strand;
        for (var i = 0; i < DNA_Strand.length; i++) {
            console.log(RNA_Strand[i]);
        }
    };
    return Transcriptor;
}());
