var words = function(input) {
    input = input.split(/\s+/);
    counts = {}
    for (var i = 0; i < input.length; i++) {
        if (counts.hasOwnProperty(input[i])) {
            counts[input[i]] += 1
        } else {
            counts[input[i]] = 1
        }                                                                                                         
    }
    return counts
};


