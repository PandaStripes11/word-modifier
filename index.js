const words = [
    "notoriety",
    "impatience",
    "onomatopoeia",
    "transient",
    "achievement",
    "deceit",
    "alien",
    "stymie",
    "quietus",
    "sentient",
    "sieve",
    "heinous",
    "gaiety",
    "fiesta",
    "seignior",
];

const listWords = (words, numbered) => {
    for (let i = 0; i < words.length; i++) {
        if (numbered) {
            console.log((i + 1) + '. ' + words[i])
        } else {
            console.log(words[i])
        }
    }
}

const stairMaker = require('./stair-maker.js')
const phoneNumbers = require('./phone-numbers.js')
const alphabetizer = require('./alphabetizer.js')
const wordStack = require('./word-stack.js')
const reverse = require('./reverse.js')
const repeat = require('./repeat.js')

//stairMaker(words)
//alphabetizer(words)

console.log('\n')

//phoneNumbers(words)
console.log('\n')
//wordStack(words)

//reverse(words)
//repeat(words, 3)

listWords(words, false)