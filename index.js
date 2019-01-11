//prompt//

var name = prompt("Please enter your name.");
if (name !== "") {
  alert("Hello: " + name);
} else {
  alert("You need to enter your name in the field.");
  prompt("Please try again.")
}

//confirm//

var c = confirm("Are you sure?");
if (c) {
  alert("You are sure.");
} else {
  alert("You are not sure.");
}