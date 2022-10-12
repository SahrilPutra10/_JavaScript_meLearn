//overriding method
//Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) pada sebuah method ataupun constructor yang dimiliki oleh parent class. Sehingga, ia dapat disesuaikan dengan behavior di child class.


//overriding constructor
//Sebelumnya kita telah mempelajari tentang constructor dan juga pewarisan. Pada contoh kasus di inheritance atau pewarisan, kita menemukan kasus seperti di bawah ini.
class WhatsApp extends Mail{
    constructor() {
      super();
      this.username = 'meeLearn';
      this.isBussinessAccount = true;
    }
  }
   
  //pemanggilan
  const wa1 = new WhatsApp('080111000222');
  //Sekarang bagaimana jika kita menambahkan username dan isBussinessAccount ke dalam constructor? 
  class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super();
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}
 
const wa2 = new WhatsApp('mee', true, '089989090898');

//overriding method
//Hampir sama dengan overriding constructor, tetapi yang di-override di sini adalah method yang ada pada parent class. Pada dasarnya semua method yang ada pada kelas parent dapat diakses langsung di child kelasnya (as is).
//Untuk tetap melakukan eksekusi kode pada parent class maka perlu menggunakan operator super.methodName().

sendMessage = (msg, to) => {
    super.sendMessage(msg, to);
    console.log('Send by WA');
}

//note
//super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor.
//super.methodName(...) digunakan untuk memanggil parent method.