let resultsArray = []

function decimalToBinary(num) {
    let power = 0
    while (num >= (2**power)) {
        resultsArray.push(0)
        power++
    }

    resultsArray[0] = 1

    power-- 
    let newNum = num - (2**(power))

    let index = 0 
    
    while (power > -1) {
        if (newNum === 0) { 
            break; 

        } else if (newNum === (2**power)) { 
            resultsArray[index] = 1 
            break; 
    
        } else if ((2**power) < newNum) { 
            resultsArray[index] = 1 
            newNum = newNum - (2**(power)) 
        }

        index++
        power--
    }
    return(resultsArray.join(""))
}

console.log(decimalToBinary(numberGoesHere))