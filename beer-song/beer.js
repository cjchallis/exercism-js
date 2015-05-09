var Beer = {
            
    cap: function(str) {
        return str[0].toUpperCase() + str.slice(1)
    },
    
    verse: function(n) {
        var n_1 = (n + 99) % 100;
        return this.cap(this.num(n)) + this.bottles(n) + 
        ' of beer on the wall, ' +
        this.num(n) + this.bottles(n) + ' of beer.\n' +
        this.takePass(n) + this.num(n_1) + this.bottles(n_1) + 
        ' of beer on the wall.\n'
    },
    
    num: function(n) {
        if (n === 0) {
            return 'no more';
        }
        return n.toString();
    },
    
    bottles: function(n) {
        return n === 1 ? ' bottle' : ' bottles';
    },
    
    takePass: function(n) {
        if (n === 0) {
            return 'Go to the store and buy some more, '
        }
        var one = n == 1 ? 'it ' : 'one ';
        return 'Take ' + one + 'down and pass it around, ';        
    },

    sing: function(a, b) {
        var verses = [];
        for (var i = a; i >== b; i--) {
            verses.push(this.verse(i));
        }
        return verses.join('\n') + '\n';
    }
};    
