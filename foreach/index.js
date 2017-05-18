const array = [];

// Affecter des valeurs
array.push(1);
array.push(10);
array.push(50);
array.push(100);

console.log(array);

// Lire les valeurs du tableau
let n = array.length;

for(let i = 0; i < n; i++) {
    console.log(array[i]);
}

// Façon différente de le faire !!!
array.forEach(function(el) {
    console.log(el);
});

console.log("Nouvelle convention écriture...");

// Encore une façon différente de le faire !!!
array.forEach((el, i) => {
    console.log(el);
    console.log(i);
});

array.forEach((el, i) => console.log(el, i));

console.log("Nouvelle convention écriture...");

// // Encore encore une façon différente de le faire !!!
array.forEach(el => {
    console.log(el);
});

console.log("Nouvelle convention écriture...");

// // Encore encore encore une façon différente de le faire !!!
array.forEach(el => console.log(el));







