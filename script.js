console.log("Hello World"); 

console.log("Ninja Ken");
// perhitungan 
console.log(5 + 3);

console.log(20 - 8);

console.log(8 * 4);

console.log(24  / 4);

// modulo

console.log(7 % 2);
// integer
console.log("4 + 5");
 
//lat 5 
 
console.log ("guru" + "domba");

console.log ("20" + "15");

//7
let name = "Ninja Ken";
console.log (name);

let length  = 5;
let radius = 5;
console.log  (length);
console.log  (length * radius * 3);


//8 
let name = "Ninja Ken";
console.log (name);
name = "Birdie";
console.log (name);
//9
 const language = "Prancis";
 console.log (language);

 console.log ("Saya bisa berbicara bahasa" + language);

//10 template literal  

 const name = "Ninja Ken";
const age = 14;

 console.log (`Nama saya adalah ${name}`);
 console.log (`Hari ini saya berusia ${age} tahun`);

 // 11 if
 const level = 12;

 if (level > 10) {
     console.log ("Level Anda lebih tinggi dari 10")
 }


 //12 if boolean 
 const age = 24;

 console.log (age >= 18);
 console.log (age < 18);

 if (age >= 18){
     console.log("Saya berusia lebih dari 18 tahun");
 }


 //13 if boolean 

 const password = "ninjaken";

 if (password === "ninjaken"){
     console.log("Berhasil log in");
 }

 if (password !== "ninjaken") {
     console.log("Password salah");
 }

 //15 if else 
 const age = 17;

 
  if (age >= 18) {
     console.log("Saya berusia diatas 18 tahun");
   } else {
       console.log("Saya berusia dibawah 18 tahun");
   }
 
   const age = 17;

/* Ketika age lebih besar atau sama dengan 10, cetak:
"Saya berusia dibawah 18 tahun, namun diatas 9 tahun" */
if (age >= 18) {
  console.log("Saya di atas 18 tahun");
}else if (age >= 10){
    console.log("Saya berusia di bawah 18 tahun, namun di atas 9 tahun");
}else {
  console.log("saya dibawah 10 tahun");
}


// 17 and dan gabungan 

const age = 24;

if (age >= 20 && age < 30){
    console.log("Saya di usia 20-an tahun");
}


// 18 switch 
const rank = 2;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;

  // Tambahkan case ketika rank adalah 2
 case 2:
   console.log("Anda meraih medali perak!");
   break;
  
  // Tambahkan case ketika rank adalah 3
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;
  
}

// 19 swicth default 
const rank = 5;

switch (rank) {
    case 1:
      console.log("Anda meraih medali emas!");
      break;
    case 2:
      console.log("Anda meraih medali perak!");
      break;
    case 3:
      console.log("Anda meraih medali perunggu!");
      break;
  default:
      console.log("Semoga sukses dikesempatan berikutnya");
      break;
    
    
  }
  
