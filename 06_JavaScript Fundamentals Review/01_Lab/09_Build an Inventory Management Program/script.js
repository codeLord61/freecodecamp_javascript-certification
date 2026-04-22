const inventory = [
    {
        name: "potato",
        quantity: 1,
    },
    {
        name: "peyaj",
        quantity: "2",
    },
];

function addProduct(productObj) {
    // check if object already exists
    for (const obj of inventory) {
        const objName = obj["name"].toLowerCase();
        const producObjName = productObj["name"].toLowerCase();

        // if product with same name exists in inventory
        if (Object.hasOwn(obj, "name") && objName === producObjName) {
            obj.quantity += productObj.quantity;
            console.log(`${producObjName} quantity updated`);
            return;
        }
    }

    //   add input product when input product is not found in inventory
    productObj.name = productObj.name.toLowerCase();
    inventory.push(productObj);
    console.log(`${productObj.name} added to inventory`);
}

function findProductIndex(productName) {
    let idx = 0;
    for (const obj of inventory) {
        if (
            Object.hasOwn(obj, "name") &&
            obj.name === productName.toLowerCase()
        ) {
            return idx;
        }
        idx++;
    }

    //   return -1 when not found
    return -1;
}

function removeProduct(productName, quantity) {
    productName = productName.toLowerCase();
    let idx = 0;

    for (const obj of inventory) {
        // Product found
        if (Object.hasOwn(obj, "name") && obj.name === productName) {
            const subtractResult = obj.quantity - quantity;
            if (subtractResult < 0) {
                console.log(
                    `Not enough ${productName} available, remaining pieces: ${obj.quantity}`,
                );
                return;
            } else if (subtractResult == 0) {
                // Delete object
                inventory.splice(idx, 1);
                return;
            } else {
                obj.quantity = subtractResult;
                console.log(
                    `Remaining ${productName} pieces: ${subtractResult}`,
                );
                return;
            }
        }
        idx++;
    }
    console.log(`${productName} not found`);
}

console.log(
    addProduct({
        name: "FLOUR",
        quantity: 5,
    }),
);
// console.log(findProductIndex("flour"));

removeProduct("FLOUR", 2);
console.log(inventory);
