var Beer = {
    verse: function(n) {
        
    },
    num: function(n) {
        if (n === 0) {
            return 'No more';
        }
        return str(n);
    },
    bottles: function(n) {
        return n === 1 ? 'bottle' : 'bottles';
    },
    takeDown: function(n) {
        if (n === 0) {
            return 'Go to the store and buy some more, '      
        }
        
    }
};    
