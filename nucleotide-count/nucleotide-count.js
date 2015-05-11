var dna = function(strand) {
    if (strand === undefined) {
        strand = ''
    }
    var counts = {'A': 0, 'C': 0, 'G': 0, 'T': 0};
    for (i = 0, len = strand.length; i < len; i++) {
        if (!(strand[i] in counts)) {
            throw new Error                 
        }
        counts[strand[i]] += 1;
    }
            
    return {
        histogram: function() {          
            return counts
        },
        
        count: function(nuc) {
            return counts[nuc]
        },
    };
};
