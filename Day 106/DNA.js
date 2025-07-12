/* DNA paring in JavaScript */

function pairElement(str) {

    const pairing = str => {
        switch (str) {
            case "A":
                return ["A", "T"];
            case "T":
                return ["T", "A"];
            case "C":
                return ["C", "G"];
            case "G":
                return ["G", "C"];
            default: return
                break;
        }
    }

    const res = [];

    for (let i = 0; i < str.length; i++) {
        res.push(pairing(str[i]));
    }

    return res;
}

let a = pairElement("GCG");
console.log(a);