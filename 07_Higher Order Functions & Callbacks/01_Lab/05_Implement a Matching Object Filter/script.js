/**
 * Pseudocode:
 * 
 * - Loop through array of objects that need to be filtered
 * - We have access of each object of main array
 * - Loop through properties of source object to check them against main array property and values (looping through source obj properties since main object might have millions of properties and its reduntant to check them against source property) 
 * - Return false if main object doesnt have source object property, so false will not include that object in final result array
 * - Return false if main object's property value doesn't match with source object's property value
 * - Return true outside loop meaning every property is checked and they dont have any conflict so include that array in final result
 */

function whatIsInAName (arrObj, srcObj) {
    const result = arrObj.filter((obj) => {
            for (const property in srcObj) {
                if (!Object.hasOwn(obj, property)) {
                    return false
                } else {
                    if (obj[property] !== srcObj[property]) {
                        return false
                    }
                }                
            }
            return true
    });

    if (result === -1) {
        return []
    }

    return result
}



// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));

