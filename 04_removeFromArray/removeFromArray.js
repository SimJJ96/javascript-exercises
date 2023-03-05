const removeFromArray = function(array, ...valueToRemove) {
    // Use hashmap  to store the item for O(1) get
    let hashMap = new Map ();
    
    // key = arr value, value = index;
    for (let i=0; i < array.length; i++) {
        hashMap.set(array[i], i);
    }

    valueToRemove.forEach(element => {
        hashMap.delete(element);
    });

    return Array.from(hashMap.keys());
};

// Do not edit below this line
module.exports = removeFromArray;
