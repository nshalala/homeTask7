
let email = 'admin@gmail.com';
let password = '12345';

function checkLoginInfo(){
    let inpEmail = document.getElementById("inpEmail").value;
    let inpPass = document.getElementById("inpPass").value;

    if(inpEmail == email){
        if(inpPass == password){
            alert("Login Successfull");
        }else{
            alert("Invalid Email or Password");
        }
    }else{
        alert("Invalid Email or Password");
    }
}