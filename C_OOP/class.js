//Class adalah hal yang sangat penting dalam pemrograman berorientasi objek. Hal itu karena class menyediakan informasi tentang suatu object.
//Class sendiri dalam paradigma OOP secara teknis merupakan sebuah blueprint dalam mendefinisikan karakteristik dari sebuah objek.
//penulisan class di JavaScript sendiri bisa menggunakan dua cara, yakni melalui sintaks function ataupun class.


//function: Menggunakan pendekatan Prototype
function Mail() {
    this.from = 'pengirim@mee.com';
  };
   
  Mail.prototype.sendMessage = function(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  };

  //function : tanpa pendekatan prototype
  function Mail(){
    this.from = "pengirim@mee.com",
    this.sendMessage = function(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
    } 
  };
  // pemanggilan
 
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@mee.com');
 
/**
output:
you send: hallo to penerima@mee.com from pengirim@dicoding.com
**/