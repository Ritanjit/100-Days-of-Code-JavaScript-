function mutation(arr) {
    let a = arr[0].toLowerCase();
    let b = arr[1].toLowerCase();
    for (let i = 0; i < b.length; i++) {
        if (a.indexOf(b) < 0) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));