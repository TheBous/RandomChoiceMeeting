/**
 * Created by thebous on 31/07/17.
 */

//Const array simulate DB
const ArrayUser = new Array(new User("Luca", "Valsecchi"), new User("Giovanni", "Muchacha"), new User("Francesco", "Perdifiori"));

//Empty array with ecluded user
let ExclusionUser = new Array();

//print already existing user
for(let i = 0; i < ArrayUser.length; i++){
    let li = document.createElement('li');
    li.innerHTML = ArrayUser[i].getName() + "" + ArrayUser[i].getSurname() + '<button id=' + ArrayUser[i].getName() + ArrayUser[i].getSurname() + ' onclick="assente(this.id)">elimina</button>';
    document.getElementById("ul").appendChild(li);

}

// function that add user
function checkAndAdd(name, surname) {
    let found = ArrayUser.some(function (user) {
        return user.name === name && user.surname === surname;
    });
    if (!found && (!name == "" || !surname == "")) {
        ArrayUser.push(new User(name, surname));
        let li2 = document.createElement('li');
        li2.innerHTML = ArrayUser[(ArrayUser.length) - 1].getName() + " " + ArrayUser[(ArrayUser.length) - 1].getSurname() + '<button id=' + ArrayUser[ArrayUser.length - 1].getName() + ArrayUser[ArrayUser.length - 1].getSurname() + ' onclick="assente(this.id)">elimina</button>';
        document.getElementById("ul").appendChild(li2);
    }
    else {
        console.warn("Error entry");
    }
}

// function that delete user if he/she's absent
function assente(id){
    ExclusionUser.push(new ExcludedUser(ArrayUser[returnIndex(id)].getName(), ArrayUser[returnIndex(id)].getSurname(), new Date()));
    ArrayUser.splice(returnIndex(id),1);
    document.getElementById(id).style.visibility = 'hidden';
    console.info("New Array spliced: ", ArrayUser);
    showExcluded();
}

//function call from view for randomize
function getRandom(){
    getRandomIndex(ArrayUser.length - 1);
}

//function that randomize number in array index
function getRandomIndex(max) {
    if(max >= 0){
        let random = Math.floor(Math.random() * (max + 1));
        document.write("<h1> Choiced user: " + ArrayUser[random].getName() +" "+ ArrayUser[random].getSurname());
    }
    else
        console.warn("Empty array");
}

//function that show ecluded user
function showExcluded(){
    for(let user of ExclusionUser){
        if(ExclusionUser.length > 0){
            console.info("Excluded user: ", user);
        }
        else
            console.warn("No excluded people!");
    }
}

//function that return index of elements from view
function returnIndex(credential) {
    return foundIndex = ArrayUser.findIndex(function (user) {
        return user.getName() + user.getSurname() === credential;
    });
}
