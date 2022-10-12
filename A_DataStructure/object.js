console.log("OBJECT SCRIPT");
const user = {}; //Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}.

// Key Dan Value 
const user2 = {key1: "value1", key2 : "value2", key3: "value3"};
// Key harus berupa string dan dituliskan sebelum ":";
// lalu diikuti dengan valuenya 

//contoh deklarasi object
const saya = {
    nama: "Ayu", 
    age : 19,
    isMaried : false,
    "asal saya" : "Klaten"
}

console.log(`Hai my name is : ${saya.nama} umur saya ${saya.age} `); 
console.log(`im live in ${user["asal saya"]}`);

// Modifikasi Object
const spaceShip={
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceShip.color = "Glossy Red"; //menginisiasi object
spaceShip["maxSpeed"] = 1300; 

console.log(spaceShip);

// menghapus property pada object
delete spaceShip.manufacturer;
console.log(spaceShip);

console.log("End OF Object Program");