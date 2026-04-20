function pyramid(string, rowCount, showDownwards) {
    // Max space will always be equal to rowCount - 1
    // If face up then we start with max space to 0 space
    // If face down we start from 0 space to max space
    let result = "\n";
    const space = " ";
    let spaceCount = (showDownwards === false) ? rowCount-1 : 0;
    // console.log(spaceCount);

    const spaceIncrementor = (showDownwards === false) ? -1 : 1;
    // console.log(spaceIncrementor);

    const loopIncrementor = (showDownwards === false) ? 1 : -1;
    // console.log(loopIncrementor);

    let loopIdx = (showDownwards === false) ? 0 : rowCount-1;

    for (let i=0; i<rowCount; i++){
        let str = "";
        let spaceStr = space.repeat(spaceCount)
        // console.log(spaceStr);
        let charStr = string.repeat(2*loopIdx+1)
        // console.log(charStr);

        str += spaceStr
        // console.log(str);
        str += charStr
        // console.log(str);
        result = result + str + "\n"
        // console.log(result);

        spaceCount += spaceIncrementor
        loopIdx += loopIncrementor
    }
    return result
}

console.log(pyramid("V", 4, false));

