var Letter = require("./Letters");


function Word(currentWord){
    this.wordArray = currentWord.split("");
    this.displayWord = "";

    this.makeDisplay = function(){
        var wordHolder = ""
        this.wordArray.forEach(function(val, index){
            var letter = new Letter(val);
            console.log(letter.characterdisplay);
            // wordHolder = wordHolder + letter.characterdisplay + " ";
            wordHolder = wordHolder + letter;
            
        });
        console.log(wordHolder, "first")
        this.displayWord = wordHolder;
        console.log("second", this.displayWord.letter.characterdisplay)
    }
    
}



var horse = new Word("horse");




horse.makeDisplay();
