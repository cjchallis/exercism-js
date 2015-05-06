var song = {

    animals: ['fly', 'spider', 'bird',
              'cat', 'dog', 'goat', 'cow',
              'horse'],

    exclaim: ["I don't know why she swallowed the fly. Perhaps she'll die.",
              "It wriggled and jiggled and tickled inside her.",
              "How absurd to swallow a bird!",
              "Imagine that, to swallow a cat!",
              "What a hog, to swallow a dog!",
              "Just opened her throat and swallowed a goat!",
              "I don't know how she swallowed a cow!",
              "She's dead, of course!"],

    verse: function(n) {
        var v = [];
        v.push("I know an old lady who swallowed a " + 
                      this.animals[n-1] + ".")
        v.push(this.exclaim[n-1])
        if (n === 8 || n === 1) {
            return v.join('\n') + '\n'
        }
        for (var i=n-1; i>0; i--) {
            var end = i !== 2 ? "." : this.exclaim[1].replace("It", " that");
            v.push("She swallowed the " + this.animals[i] + 
                     " to catch the " + this.animals[i-1] + end)
        }
        v.push(this.exclaim[0])
        return v.join('\n') + '\n'
    },
    
    verses: function(start, stop) {
        var s = []
        for (var i = start; i <= stop; i++){
            s.push(this.verse(i));                    
        }
        return s.join('\n') + '\n';
    } 
};


