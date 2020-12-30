const words = [
    'humorous', 
    'simultaneous', 
    'synonymous', 
    'disingenuous', 
    'subconcious', 
    'magnamimous', 
    'stratus', 
    'desirous',
    'raucous',
    'advantageous',
    'claustrophobia',
    'mischievous',
    'voracious',
    'stupendous',
    'wondrous'
];

const stairMaker = require('./stair-maker.js')
const phoneNumbers = require('./phone-numbers.js')
const alphabetizer = require('./alphabetizer.js')
const wordStack = require('./word-stack.js')

stairMaker(words)
alphabetizer(words)

console.log('\n')

phoneNumbers(words)
console.log('\n')
wordStack(words)