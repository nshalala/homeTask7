//#region --- Task1

// let userAge;

// while(!userAge){
//     userAge = prompt("Enter your age, please: ");
// }

// if(userAge > 20){
//     alert("Welcome to our page!!");
// }else{
//     alert("Your access denied!! You must be over 20 to view page content.");
// }

//#endregion

//#region --- Task2

let inp = document.getElementById("number");
let result = document.getElementById("result");

function isEven(){
    let num = +inp.value;
    if(num % 2){
        result.innerHTML = "The number is odd.";
    }else{
        result.innerHTML = "The number is even.";
    }
}

//#endregion