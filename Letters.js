

function Letter(character){
    this.guessed = false;
    this.character = character;
    this.characterdisplay = "_";
    this.state = function(){
        if (this.guessed){
            this.characterdisplay = this.character;
        }
    };
    // this.checker = function(character, pick){
    //     if (this.character === pick){
    //         this.guessed = true;
    //     }
    // }
}

var i = new Letter("i");

module.exports = Letter;

console.log(i);