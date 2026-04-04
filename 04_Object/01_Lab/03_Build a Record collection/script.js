const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        albumTitle: "ABBA Gold",
    },
};

function updateRecords(records, id, prop, value) {
    // Delete property if value equal to empty string
    if (value.trim().length === 0) {
        delete records[id][prop];
        return records;
    }

    // If property is 'tracks' and value isn't empty string
    if (prop !== "tracks" && value.trim().length !== 0) {
        records[id][prop] = value;
        return records;
    }

    // If property is 'tracks', value isn't empty string & album doesn't have 'tracks' property
    if (
        prop === "tracks" &&
        value.trim().length !== 0 &&
        !records[id].hasOwnProperty("tracks")
    ) {
        let arr = [];
        arr.push(value);
        records[id][prop] = arr;

        return records;
    }

    // If property is 'tracks', value isn't empty string & album does have 'tracks' property
    if (
        prop === "tracks" &&
        value.trim().length !== 0 &&
        records[id].hasOwnProperty("tracks")
    ) {
        records[id][prop].push(value);

        return records;
    }
}
