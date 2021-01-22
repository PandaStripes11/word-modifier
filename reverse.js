module.exports = (words) => {
    for ( let i = 0; i < words.length; i++ ) {
        const word = words[i]
        let reverse_word = word + ' '
        for (let i = word.length - 1; i >= 0; i--) {
            reverse_word += word.charAt(i)
        }
        console.log(reverse_word)
    } 
}