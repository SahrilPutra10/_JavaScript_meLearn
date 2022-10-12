//class method
//Class Method adalah function atau method yang ada di dalam sebuah object.
// sebuah class harus di-instantiate terlebih dahulu menjadi object baru bisa dijalankan. 

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@mee.com');
/**
output-nya berhasil:
you send: hallo to penerima@dicoding.com from pengirim@mee.com
**/

//static method
//Static method adalah function atau method yang sama seperti class method, akan tetapi untuk mengaksesnya tidak perlu meng-instantiate class. Kita cukup menuliskan nama kelas dan nama method-nya secara langsung (NamaClass.namaMethod()).

class Mail{
    static isValidPhone(phone) {
      return typeof phone === 'number';
    }
  }

//constructor
//Ketika kita membuat sebuah objek, adakalanya karakteristik dari blueprint yang kita buat harus sudah didefinisikan bersamaan dengan sebuah objek saat pertama kali diinisiasi. Constructor adalah sebuah method/function yang dijalankan pertama kali ketika object dibuat. 

// cara 1
class Mail {
    constructor(author) {
        this.from = author;
        console.log('is instantiated', author);
    };
}
 
// cara 2
function Mail(author) {
    this.from = author;
    console.log('is instantiated', author);
}

//Dari contoh constructor di atas, maka cara pemanggilannya menjadi seperti di bawah ini:
const Mail1 = new Mail("emailku@mee.com");

//Karena JavaScript bukan bahasa dengan dukungan static type maka sebenarnya kita dapat melakukan instansiasi dengan parameter sesuka kita:
const Mail3 = new Mail(085000111222); // misalkan untuk SMS
const mail2 = new Mail("emailku@mee.com"); // misalkan untuk Email