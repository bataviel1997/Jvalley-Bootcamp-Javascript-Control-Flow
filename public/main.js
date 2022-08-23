// kontrol element form dgn id login_form
let login_form = document.getElementById('login_form');

// tambahkan even listener submit
login_form.addEventListener('submit', function(event){

// stop form dari reload page
  event.preventDefault();

// console.info([function parameterelement][ form.id child html][id atribut element input] [atribut])
  // console.info(event.target.email.value);
  // console.info(event.target.password.value);

  let input_email = event.target.email.value;
  let input_password = event.target.password.value;

  // default email dan password

  let my_email = 'kahjwd@gmail.com';
  let my_password = '123';

  // validasi email
  if(input_email != my_email){
    alert('Email Belum Terdaftar');
    return // menghentikan proses code selanjutnya

  }
  // validasi password
   if(input_password != my_password) {
     alert('Password Salah !');
     return
   }

   alert ('login berhasil');
  

});