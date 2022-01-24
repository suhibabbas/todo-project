
let userNamme = prompt("Please enter your name", "");
let gender = prompt("Please enter your gender (male of female)", "");
let newGender = gender.toLowerCase();


let age = prompt("Please enter your age ",);
if(age <= 0){
    alert("the age is not correct plz re-enter it again");
    age = prompt("Please enter your age ",);
}


let ask = prompt("do you wants to skip the welcoming message","");
 let newAsk=ask.toLowerCase();

if (newAsk !="yes" ){
    if(newGender == "male"){
        alert("welcome Mr: " + userNamme );
    }else if(newGender == "female"){
        alert("welcome Ms: " + userNamme );
    }else {
        alert("welcome: " + userNamme );
    }
}


let userStatus = prompt("are you married?",)

let userJob = prompt("do you have a jab?",)

let userPc = prompt("can you use a computer?",)


const us = (arr)=>{

    for (let i =0 ; i<arr.length ; i++){
        if(arr[i]!= "yes" && arr[i]!= "no"  ){
            arr[i] ="invalid"
        }
    }
    
    return arr;
}

let x = (us([userStatus , userJob , userPc]));
console.log(x)
