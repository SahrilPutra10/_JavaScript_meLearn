// apa itu destructing ? 
/**
 * "Destructuring dalam JavaScript merupakan sintaksis yang dapat 
 * mengeluarkan nilai dari array atau properties dari sebuah object 
 * ke dalam satuan yang lebih kecil."
 */

// pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.


const profile = { 
    firstName : "Jhon",
    lastName : "Doe",
    age : 18
}
// DESTRUCTING OBJECT 
const {firstName, lastName, age} = profile; //tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi
console.log(firstName, lastName, age);
/* output:
John Doe 18
*/

//// menginisialisasi nilai baru melalui destructuring object
let namaBaru = "maria";
let umur = 27;
({namaBaru, umur} = profile);
console.log(namaBaru);
console.log(umur);
 /*Saat melakukan destructuring assignment, 
    kita perlu menuliskan destructuring object di dalam tanda kurung. 
    Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat JavaScript mengira 
    kita membuat block statement, sementara block statement tidak bisa berada pada sisi kiri assignment
 */

    const newProfiles = {
        newName : "Galih",
        newLastName : "Saputra",
        newAge : 20,
    }

//DEFAULT VALUES
/**
 * Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang 
 * bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined
 */
const {newName, newLastName, isMale} = newProfiles;
console.log(firstName)
console.log(age)
console.log(isMale)
/* output:
John
18
undefined
*/
/**
 * kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan.
 * Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai default-nya.
 * cth : 
 * const {newName, newLastName, isMale = false} = newProfiles;
 */

//Assigning to Different Local Variable Names
//proses destrukturisasi object bisa menggunakan penamaan variabel lokal yang berbeda
const {newName : localName, newAge: localAge} = newProfiles;
console.log(localName);
console.log(localAge);
