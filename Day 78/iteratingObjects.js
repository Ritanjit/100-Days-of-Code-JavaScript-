/* iterating objects in JavaScript */

// keys (properties) in objects aren't assigned an index as arrays have and their position in the object hold no importance

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    // Only change code below this line
    let count = 0;
    for (const user in allUsers) {
        let currentUser = allUsers[user].online;
        if (currentUser) {
            count++;
        }
    }
    return count;
    // Only change code above this line
}

console.log(countOnline(users));