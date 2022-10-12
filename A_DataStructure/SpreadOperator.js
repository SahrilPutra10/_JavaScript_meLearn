// digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. 
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);
/* output
Seafood Salad Nugget Soup
*/
//menggabungkan dua buah array ke dalam array baru dengan Spread Operator
const Kesukaan = [ "seafood", "salad", "Nugget", "soup"];
const others = ["cake", "pie", "Donut"];

const allMyFavorite = [...Kesukaan,...others];

console.log(allMyFavorite);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

//Spread Operators juga bisa digunakan pada object literals 
//kita dapat menggabungkan beberapa objek dengan kode yang lebih ringkas
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj);
/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/
