//Dalam JavaScript sendiri terdapat built-in class bawaan, misalnya Date, Object, Array, Math, dan String. Built-in class tersebut dapat digunakan untuk memanipulasi data-data terkait dengan array, perintah matematik, manipulasi karakter, dan manipulasi objek.
//Date merupakan built-in object bawaan dari bahasa pemrograman JavaScript yang digunakan untuk utilitas terkait tanggal dan waktu. Ini sangat membantu ketika dalam program yang kita buat terdapat penggunaaan dan manipulasi tanggal dan waktu.
//Untuk menggunakannya kita dapat meng-instansiasi Date object tersebut dengan 4 cara:
// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate1 = new Date(); 
 
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const myDate2 = new Date(dateString); 
 
// #3 parameter dalam bentuk number, misal 87400000
const myDate3 = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
const myDate4 = new Date(year,month,date,hour,minute,second,millisecond); 

//contoh penggunaan date
// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
    
    const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);
    
    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
  };
  
  console.log(myAge('2000-01-22')); // 21 tahun