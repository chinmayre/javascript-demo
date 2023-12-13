function evenAndOdd() {
  //   var no = 27;
  var no = prompt("Enter any number: ");
  if (no % 2 == 0) {
    console.log(no, " is an even number");
  } else {
    console.log(no, " is an odd number");
  }
}

// evenAndOdd();

function add() {
  var x = parseInt(prompt("Enter First Numbr: "));
  var y = parseInt(prompt("Enter Second Number: "));

  document.write("Sum of the numbers is: ", x + y);
}

// add();

var users = [];

function getDetails() {
  var name = document.getElementById("user_name").value;
  var email = document.getElementById("email").value;

  console.log("Name: ", name, " Email: ", email);

  var user = {
    user_name: name,
    user_email: email,
  };

  users.push(user);
  //   console.log(`USERS LIST: ${users[0]["user_name"]}`);
  document.getElementById("user_info").innerHTML = "";

  for (let user_data of users) {
    document.getElementById("user_info").innerHTML =
      document.getElementById("user_info").innerHTML +
      "<div>Name: " +
      user_data.user_name +
      " Email: " +
      user_data.user_email +
      "</div>";
  }
}
