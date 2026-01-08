const characters = [   
    "A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y",
    "Z","a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w",
    "x","y","z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9","~",
    "`","!","@","#","$","%","^","&",
    "*","(",")","_","-","+","=","{",
    "[","}","]",",","|",":",";","<",
    ">",".","?",
    "/"];

let firstPassword = document.getElementById("password1")
let secondPassword = document.getElementById("password2")

let lengthEL = document.getElementById("length-el")
lengthEL.value = 14


function doGenerate(){
    firstPassword.textContent  = ""
    secondPassword.textContent = ""
    for(let i = 0; i < lengthEL.value; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        firstPassword.textContent += characters[randomIndex]
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        secondPassword.textContent += characters[randomIndex2]
    }  
}


function copy1() {
    let text = firstPassword.textContent
    navigator.clipboard.writeText(text)
    alert("Password copied to clipboard!")
}

function copy2() {
    let text = secondPassword.textContent
    navigator.clipboard.writeText(text)
    alert("Password copied to clipboard!")
}

function doReset() {
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    
}

