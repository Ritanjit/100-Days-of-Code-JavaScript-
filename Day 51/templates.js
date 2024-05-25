
/* Templates in JavaScript */

// object
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

// function to get failure message in template
const failuresList = (arr) => {
    const failureItems = [];
    for (let i = 0; i <= arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);            // `backtick`
    }
    return failureItems;
}

/* display */
console.log('\n\n\t\t\t -- WARNING --\n');
// iterating function result using template
for (let i=0;i<failuresList(result.failure).length;i++) {
    console.log(`
            ${i+1}. ${failuresList(result.failure)[i]}`);
}
console.log('\n');

// TIP: `templates` can call variable values directly inside them and also do not require line indentation methods like \n or \t











