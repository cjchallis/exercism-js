pairs = {'A': 'U',
         'C': 'G',
         'G': 'C',
         'T': 'A'};
         
var toRna = function(strand) {
    rna = ''
    for (var i = 0; i < strand.length; i++) {
        rna += pairs[strand[i]]
    }
    return rna
};
