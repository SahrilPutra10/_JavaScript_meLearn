/**
 * Map adalah tipe data yang menyimpan koleksi data 
 * dengan format key-value layaknya Object. 
 * Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun,
 *  dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
 */

const mee = new Map();
//apabila kita ingin menetapkan nilai dari Map secara langsung, kita dapat menggunakan array multi dimensi 

const meeMap = new Map([
    ['1', 'a String key'],
    [1, 'a Number key'],
    [true, true]
]);
console.log(meeMap);
/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

/**Penjelasan
 * Array Pertama(yg berada diluar) berfungsi untuk menyimpan masing-masin elemen atau pasangan 
 * key-value dari Map. kemudian array di dalamnya, memiliki dua elemen, dimana element pertama 
 * adalah key dan element kedua adalah value. 
 */

/**
 * Ketika sudah membuat objek map. kita bisa mendapatkna nilainya berdasarkan key tertentu dengan metode get().
 * lalu unutk menambahkan pasangan key-value baru kita dapat menggunakan metode set().
 */

const meeCapital = new Map([
    ["Jakarta", "indonesia"],
    ["london", "Inggris"],
    ["Tokyo", "Jappan"]
]);
console.log(meeCapital.size); //menampilkan banyaknya array 
console.log(meeCapital.get("london")); //memanggil key dan menampilkan value dari array
console.log("New Delhi", "India"); //membuat array dengan key dan value baru 
console.log(meeCapital.size); //
console.log(meeCapital.get("New Delhi")); //memanggil key dan menampilkan value dari array 

/**
 *3
England
4
India
 */
//NOTE
//Meskipun kita bisa menetapkan dan mendapatkan data pada map seperti berikut: 

const wrongMap = new Map();

wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]);
/**
 * Namun, kode di atas bukanlah cara yang sesuai untuk mengoperasikan Map.
 * Ketika kita menetapkan nilai map seperti di atas,
 *  data akan disimpan sebagai generic object. 
 * Ini akan mengakibatkan data tidak tersimpan dalam Map query dan 
 * tidak bisa menggunakan fitur dari Map seperti .has atau .delete.
 */