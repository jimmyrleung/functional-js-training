function countWords(inputWords) {
    const wordsObject = inputWords.reduce((obj, currentArrayValue) => {
        obj[currentArrayValue] = obj[currentArrayValue] ? obj[currentArrayValue] + 1 : 1;
        return obj;
    }, {})

    return wordsObject;
}

module.exports = countWords