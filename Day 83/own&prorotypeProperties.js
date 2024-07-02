
/* own vs prototype properties in JavaScript */

// own properties - properties special to each contructor instance (object)
// prototype properties - properties shared by all instances and is same for all

// constructor functions
function Books(name,author) {
    this.name = name;
    this.author = author;
}

// own properties
let enp = new Books('Eleanor & Park','Rainbow Powell');

// prototype properties
Books.prototype.genre = 'young-adult';

// collecting own and prototype propeties for an instance
let ownProperty = [];
let proptypeProperty = [];

for (let property in enp) {
    if (enp.hasOwnProperty(property)) {
        ownProperty.push(property);
    } else {
        proptypeProperty.push(property);
    }
}

console.log('\n\nown properties : ' + ownProperty + '\n');
console.log('prototype properties : ' + proptypeProperty + '\n\n');





