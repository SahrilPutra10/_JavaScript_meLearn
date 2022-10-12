// Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya
function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}
init();

/* output
Halo, Obi Wan
 */

/**
 * JavaScript tidak memiliki cara untuk mendeklarasikan suatu fungsi atau variabel menjadi private seperti bahasa Java. 
 * Sehingga sebuah fungsi atau variabel bisa diakses dari mana pun. Kenapa kita membutuhkan private method? 
 * Salah satunya adalah untuk membatasi akses ke fungsi atau variabel.
 */

 let counter = 0;

 let add = () => {
     return ++counter;
 }
 
 console.log(add());
 console.log(add());
 counter = 23;
 console.log(add());
 
 /* output
 1
 2
 24

 Nilai counter akan bertambah ketika kita memanggil fungsi add().
  Namun, kita juga bisa mengubah nilai counter secara langsung dengan assignment operator.
  */

  //Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure:

  let adding = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = adding();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */