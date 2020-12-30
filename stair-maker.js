


module.exports = (word) => {
    if (typeof word === 'object') {
        word.forEach(element => {
            for (let i = 1; i <= element.length; i++) {
                console.log(element.substring(0, i))
            }
            console.log('\n')
        })
    } else {
        for (let i = 1; i <= word.length; i++) {
            console.log(word.substring(0, i))
        }
    }
}



