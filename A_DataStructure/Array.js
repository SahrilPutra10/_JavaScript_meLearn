// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel
let myArr = ["cokelat", 42.5, 22, true, "Hello"];
console.log(myArr);
// Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index

//menambahkan data pada array 
myArr.push('JavaScript') //menggunakan syntax push agar dapat menambah data; 
console.log(myArr);

// modifikasi Array 
myArr.pop(); // untuk mengeluarkan data atau elemen terakhir dari array,
myArr.shift(); //mengeluarkan elemen pertama dari array
myArr.unshift("apple"); // untuk menambahkan elemen di awal array.

delete myArr[1]; //menghapus data dari array;
//output setelah dihapus 
/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]

delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
*/
//Untuk menghapus elemen
myArr.splice(2, 1) //// Menghapus dari index 2 sebanyak 1 elemen

//output terakhir 

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

console.log(myArr);