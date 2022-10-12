/**
 *  Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.
 */

//deklarasi set
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);
/* output
Set(3) { 1, 4, 6 }
*/

/**PENJELASAN 
 *  Secara otomatis Set akan membuang angka yang sama, sehingga nilai yang tersimpan adalah {1, 4, 6}.
 */

//menambahkan data pada set kita bisa memakai fungsi add();

const meeSet = new Set([1, 2, 5, 2, 1]);
meeSet.add(5);
meeSet.add(10);
meeSet.add(6);
/**
 * FUNGSI ADD
 * hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.
 */

meeSet.delete(2);
/**
 * Delete
 *  Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
 */

console.log(meeSet);