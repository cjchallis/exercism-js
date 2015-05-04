var anagram = function(w) {
    return {
        word: w.toLowerCase(),
        sorted: w.toLowerCase().split('').sort().toString();
        matches: function() {
            var list = arguments[0].constructor === Array ? 
                arguments[0] : arguments;
            var anagrams = [];
            for (i in list) {
                if (list[i].toLowerCase() === this.word) {
                    continue;
                }
                if (list[i].toLowerCase().split('').sort()
                           .toString() === this.sorted){
                    anagrams.push(list[i])
                }
            }
            return anagrams           
        }
    };
};
