let ourArray= [];

function createUser(){
  let user = {
    name: showInput(),
    number: showInput1(),
    address: showInput2(),
    email: showInput3()
  };
  console.log(user); 
  ourArray.push(user);
  console.log(ourArray);
}

function showInput() {
  document.getElementById('display').innerHTML = document.getElementById("user_input").value; 
  //adds value to end of ourArray
  return document.getElementById("user_input").value;
}

function showInput1() {
  document.getElementById('display1').innerHTML = document.getElementById("user_input1").value; 
  return document.getElementById("user_input1").value;
}

function showInput2() {
  document.getElementById('display2').innerHTML = document.getElementById("user_input2").value; 
  return document.getElementById("user_input2").value;
}

function showInput3() {
  document.getElementById('display3').innerHTML = document.getElementById("user_input3").value; 
  return document.getElementById("user_input3").value;
}

//// is this how you set up a class as object template with more than 2 properties? (vinh)

// class myUser {
//   constructor(name, number, address, email) {
//     this.name = name;
//     this.number = number;
//     this.address = address;
//     this.email = email;
// }