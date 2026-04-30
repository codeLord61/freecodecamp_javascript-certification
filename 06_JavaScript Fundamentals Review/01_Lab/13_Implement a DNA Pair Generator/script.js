function getPairbyBase(baseStrand) {
    const DNA = {
        A: "T",
        T: "A",
        C: "G",
        G: "C",
    };

    return [baseStrand, DNA[baseStrand]];
}

function pairElement(string) {
    let result = [];

    for (const char of string) {
        result.push(getPairbyBase(char));
    }

    return result;
}

console.log(pairElement("ATCGA"));
