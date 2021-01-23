module.exports = (words, repeatAmount) => {
    for (let i = 0; i < words.length; i++) {
        word = words[i]
        let string = ''
        for (let j = 0; j < repeatAmount; j++) {
            string += word + ' '
        }
        console.log(string)
    }
}