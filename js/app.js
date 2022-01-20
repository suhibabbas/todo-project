var userNamme = prompt("Please enter your name", "");
 var gender = prompt("Please enter your gender (male of female)", "");
var newGender = gender.toLowerCase();

var age = prompt("Please enter your age ",);
if(age <= 0){
    alert("the age is not correct plz re-enter it again");
    age = prompt("Please enter your age ",);

}
var ask = prompt("do you wants to skip the welcoming message","");
 var newAsk=ask.toLowerCase();
if (newAsk !="yes" ){
    if(newGender == "male"){
        alert("welcome Mr: " + userNamme );
    }else if(newGender == "female"){
        alert("welcome Ms: " + userNamme );
    }else {
        alert("welcome: " + userNamme );
    }
}
