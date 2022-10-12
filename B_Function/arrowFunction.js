//fungsi dengan 1 paremeter
const sayName = name => {
    console.log(`Nama saya ${name}`)
}

//fungsi tanpa parameter
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello();

/* output
Selamat pagi semuanya!
 */

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));