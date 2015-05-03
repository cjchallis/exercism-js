var anagram = function(w) {
    return {
        word: w.toLowerCase(),
        matches: function() {
            var list = arguments[0].constructor === Array ? arguments[0] : arguments;
            var anagrams = [];
            sorted = w.toLowerCase().split('').sort().toString();
            for (i in list) {
                if (list[i].toLowerCase() === this.word) {continue;}
                if (list[i].toLowerCase().split('').sort().toString() === sorted){
                    anagrams.push(list[i])
                }
            }
            return anagrams           
        }
    }
}
