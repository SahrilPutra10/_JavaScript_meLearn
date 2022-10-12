//property
//Property adalah atribut dari sebuah objek, property sendiri dapat berupa tipe data primitive

//cara 1
class Mail {
    constructor() {
        this.from = 'pengirim@mee.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };
}

//cara 2
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherPrototype = 'the values';
};

Mail.prototype.sendMessage = function (msg, to) {
    console.log(`you send: ${msg} to  ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru
};

//mengubah code
class Mail {
    constructor() {
        this.from = 'pengirim@mee.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@mee.com', 'aku@gmail.com');

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com

 menunjukan bahwa ketika kita ingin menginisialisasi ataupun mengakses sebuah attribute global dari sebuah kelas, maka harus menggunakan this.attributeName.

**/

// 2 bagian property dalam oop 
//Internal interface : method dan property yang dapat diakses oleh method lain namun tidak bisa diambil/dijalankan di luar kelas tersebut.
//External interface : method dan property yang dapat diakses di luar kelas itu sendiri.

//dalam JavaScript sendiri terdapat 2 jenis akses identifier untuk sebuah field
//Public : dapat diakses dari mana pun.
//Private : hanya dapat diakses dari dalam kelas itu sendiri.
