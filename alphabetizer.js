module.exports = (word) => {
    word.sort()
    word.forEach(element => {
        console.log(element)
    })
    console.log('\n')
    word.sort(function (a, b) {
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    });
    word.forEach(element => {
        console.log(element)
    })
}





