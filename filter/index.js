const array = [];

// Affecter des valeurs
array.push(1);
array.push(10);
array.push(50);
array.push(100);

console.log(array);

// La base qui ajoute une valeur undefined
const array1 = array.map(el => {
    if(el !== 10) {
        return el * 2;
    }
});

console.log(array1);

const array2 = array.filter(el => el !== 10)
                    .map(el => el * 2);

console.log(array2);









