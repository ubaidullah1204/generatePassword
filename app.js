let inputslider = document.getElementById( "inputslider");
let slidervalue  = document.getElementById("slidervalue");
let tolowercase  = document.getElementById("tolowercase");
let touppercase  = document.getElementById("touppercase");
let tonumber     = document.getElementById("tonumber");
let symbols  = document.getElementById("symbols");
let passbtn  = document.getElementById("passbtn");
let inputpass  = document.getElementById("inputpass");

slidervalue.textContent =  inputslider.value;
inputslider.addEventListener( "input" , ()=> {
    slidervalue.textContent =  inputslider.value;

})

passbtn.addEventListener( "click", ()=> {
    inputpass.value = generatePassword();
})

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let symbol = "!@#$%&*()";


function generatePassword(){
    let genpassword = "";
    let allchar = "";

    allchar +=  tolowercase.checked ? lowercase : ""; 
    allchar +=  touppercase.checked ? uppercase : ""; 
    allchar +=  tonumber.checked ? number : ""; 
    allchar +=  symbols.checked ? symbol : ""; 

// if( allchar == "" || allchar.length == 0){
//     return genpassword; 
// }

for( let i = 0 ; i < inputslider.value ; i++)
    genpassword += allchar.charAt(Math.floor(Math.random() * allchar.length ));
   return genpassword;
}