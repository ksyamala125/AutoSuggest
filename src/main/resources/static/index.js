// alert("hello from js")
console.log("hello from js")
var users = [
   { "name":"syamala",
    "gender":"Female",
    "img":"jane.png"

       }    ,
{
    "name":"john",
    "gender":"Male",
    "img":"john.png"

}
]
var id = 0;

function toggleUser(){
    id = (id + 1)%2
    // get the elements

    // 1: image
    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;

    // 2: name
    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;

    // 3: gender
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;

}
