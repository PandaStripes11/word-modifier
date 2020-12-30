module.exports = (wordArray) => {
        for (const word of wordArray) {
                let arr = []
                for (let i = 0; i <= word.length; i++) {
                        let char = word.substring(i, i+1)
                        if (char === 'a' || char === 'b' || char === 'c'){
                                arr[arr.length] = '2'
                        } 
                        else if (char === 'd' || char === 'e' || char === 'f') {
                                arr[arr.length] = '3'
                        } 
                        else if (char === 'g' || char === 'h' || char === 'i') {
                                arr[arr.length] = '4'
                        } 
                        else if (char === 'j' || char === 'k' || char === 'l') {
                                arr[arr.length] = '5'
                        }
                        else if (char === 'l' || char === 'm' || char === 'n') {
                                arr[arr.length] = '6'
                        }
                        else if (char === 'p' || char === 'q' || char === 'r' || char === 's') {
                                arr[arr.length] = '7'
                        }
                        else if (char === 't' || char === 'u' || char === 'v') {
                                arr[arr.length] = '8'
                        }
                        else if (char === 'w' || char === 'x' || char === 'y' || char === 'z') {
                                arr[arr.length] = '9'
                        }
                }
                console.log(arr.join(''))
                arr = []
        }
}











