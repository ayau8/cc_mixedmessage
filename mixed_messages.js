//Draw a random number

const randomNum = num => {
    return Math.floor(Math.random() * num)
};

//Data Set

const dataSet = {
    names: ['Vanessa', 'Isaac', 'Cathy', 'Alvin', 'Sam'],
    sexualities: ['Homosexual', 'Heterosexual', 'Bisexual', 'Asexual'],
    exSexPartners: ['Less than 10', 'More than 10 and Less than 20', 'More than 20 and Less than 30', 'More than 30 and less than 40', 'More than 40']
}

//Draw the random sentence

const randomSentence = () => {
    let resultSentence = [];
    
    for (let factor in dataSet) {
        switch(factor){
            case 'names':
                resultSentence.push(dataSet.names[randomNum(dataSet.names.length)]);
            break;
            case 'sexualities':
                resultSentence.push(dataSet.sexualities[randomNum(dataSet.sexualities.length)]);
            break;
            case 'exSexPartners':
                resultSentence.push(dataSet.exSexPartners[randomNum(dataSet.exSexPartners.length)]);
            break;
        }
    }
    return `${resultSentence[0]} is ${resultSentence[1]}, and had sex partner of ${resultSentence[2]}`
}

console.log(randomSentence());


