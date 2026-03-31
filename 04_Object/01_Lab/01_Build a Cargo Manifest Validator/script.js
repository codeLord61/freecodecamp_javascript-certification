const normalizeUnits = (manifest) => {
  const obj = {...manifest};
  if (manifest.unit === 'lb') {
    const updatedWeight = manifest.weight * 0.45;

    obj.weight = updatedWeight;
    obj.unit = "kg";
}
  else {
    obj.weight = manifest.weight;
    obj.unit = manifest.unit;
  }
  return obj;
};

const validateManifest = (manifest) => {
  const obj = new Object();

  // Container Id
  if (!manifest.hasOwnProperty("containerId")){
    obj.containerId = "Missing";
  } else {
    if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
      obj.containerId = "Invalid";
    }
  }

  // Destination

  if (!manifest.hasOwnProperty("destination")){
    obj.destination = "Missing";
  } else {
    if (typeof manifest.destination === 'string') {
      let trimmedDestination = manifest.destination.trim();

    if (trimmedDestination.length === 0) {
      obj.destination = "Invalid";
    } 
    } else {
      obj.destination = "Invalid";
    }
    
  }

  // Weight
  if (!manifest.hasOwnProperty("weight")){
    obj.weight = "Missing";
  } else {
    if (typeof manifest.weight === 'number' && !Number.isNaN(manifest.weight)) {
      if (manifest.weight <= 0) {
        obj.weight = "Invalid";
      }
    } else {
      obj.weight = "Invalid";
    }
  }

// Unit
let allowedUnits = ["kg", "lb"];
  if (!manifest.hasOwnProperty("unit")){
    obj.unit = "Missing";
  } else {
    if (!allowedUnits.includes(manifest.unit)) {
      obj.unit = "Invalid";
    }
  }

  // Hazmat
  if (!manifest.hasOwnProperty("hazmat")){
    obj.hazmat = "Missing";
  } else {
    if (typeof manifest.hazmat !== 'boolean') {
      obj.hazmat = "Invalid";
    }
  }
  
  // Handling validation if exist

  return obj;
}

const processManifest = (manifest) => {
  // Checking empty object, if empty = success
  if (Object.keys(validateManifest(manifest)).length === 0) {
    // Normalizing weight
    const normalizedWeightObj = normalizeUnits(manifest);
    manifest.weight = normalizedWeightObj.weight;
    manifest.unit = normalizedWeightObj.unit;

    console.log(`Validation success: ${manifest.containerId}`)
    console.log(`Total weight: ${manifest.weight} kg`);

  } else {
    console.log(`Validation error: ${manifest.containerId}`);

    console.log(validateManifest(manifest));
  }

  

};

const manifest = { containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false };

processManifest(manifest);
