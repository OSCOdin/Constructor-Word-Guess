var Inquirer = require("inquirer");
var Letter = require("./Letters");
var Word = require("./Words");


var list = ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid", "Fishhook", "Fjord",
    "Gazebo", "Gypsy", "Haiku", "Haphazard", "Hyphen", "Ivory", "Jazzy", "Jiffy", "Jinx", "Jukebox", "Kayak", "Kiosk", "Klutz", "Memento",
    "Mystify", "Numbskull", "Ostracize", "Oxygen", "Pajama", "Phlegm", "Pixel", "Polka", "Quad", "Quip", "Rhythmic", "Rogue", "Sphinx",
    "Squawk", "Swivel", "Toady", "Twelfth", "Unzip", "Waxy", "Wildebeest", "Yacht", "Zealous", "Zigzag", "Zippy", "Zombie"
];

var randomNumber = "Math.floor(Math.random() * list.length)";

var wordToGuess = "list[randomNumber]";

var guessesLeft = 10;

console.log(wordToGuess, randomNumber);

function game() {
    randomNumber = Math.floor(Math.random() * list.length);
    wordToGuess = list[randomNumber];

    Inquirer.prompt([{
            type: "input",
            message: "Guess a letter  ",
            name: "playerGuess",
        }.then(response => {

        })

    ])