module.exports = (wordArray) => {
    for (const word of wordArray) {
        let arr = []
        arr.push(word)
        for(i = 0; i < word.length; i++) {
            console.log(arr.join(''))
            arr.unshift(' ')
        }
        arr = []   
    }
}

