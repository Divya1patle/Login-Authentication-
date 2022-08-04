//add event

document.getElementById("btn").addEventListener("click", function (event) {
  //When we submit then data get submited.this is callback function & anonymous also we can say. submit button pr event listener add krre.
  event.preventDefault(); //if we put this one nd submit then not submit

  validate();
});

var form = document.getElementById("forms").onclick;

var username = document.getElementById("username");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

const sendData = (usernameValue, successRate, count) => {
  if (successRate === count) {
    alert("Registration Successful");
    swal("Welcome " + usernameValue, "Registration Successful", "success");
    location.href = `demo.html?username=${(usernameValue, emailValue, phoneValue, passwordValue, cpasswordValue)}`;
 
  }
};

//for final data validation
const successMsg = (usernameValue) => {
  let formCon = document.getElementsByClassName("form-control");
  var count = formCon.length - 1;
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var successRate = 0 + i;
      console.log(successRate);
      sendData(usernameValue, successRate, count);
    } else {
      return false;
    }
  }
};

//define the validate function

function validate() {
  var usernameValue = username.value.trim();
  var emailValue = email.value.trim();
  var phoneValue = phone.value.trim();
  var passwordValue = password.value.trim();
  var cpasswordValue = cpassword.value.trim();

  // validate username
  if (usernameValue == "") {
    setError(username, "Username can't be blank");
  } else {
    setSuccess(username);
  }

  //validate email
  if (emailValue == "") {
    setError(email, "Email can't be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Email is not Valid");
  } else {
    setSuccess(email);
  }

  //validate phone
  if (phoneValue == "") {
    setError(phone, "Phone can't be blank");
  } else {
    if (phoneValue.length != 10) {
      setError(phone, "Not a valid number");
    }
    setSuccess(phone);
  }

  //validate password
  if (passwordValue == "") {
    setError(password, " password can't be blank");
  } else if (passwordValue.length <= 8) {
    setError(password, "Password should be Minimum 8 character");
  } else {
    setSuccess(password);
  }

  //validate confirm password
  if (cpasswordValue == "") {
    setError(cpassword, " Confirm password can't be blank");
  } else if (passwordValue !== cpasswordValue) {
    setError(cpassword, "Password does not match");
  } else {
    setSuccess(cpassword);
  }

  successMsg(usernameValue); //here just calling the function.
}

function setError(u, msg) {
  var parentBox = u.parentElement; //
  parentBox.className = "form-control error"; //classname means we can remove nd add also new class.
  var small = parentBox.querySelector("small");
  var fa = parentBox.querySelector(".fa");
  small.innerText = msg;
  fa.className = "fa fa-exclamation-circle";
}

function setSuccess(u) {
  var parentBox = u.parentElement;
  parentBox.className = "form-control success";
  var fa = parentBox.querySelector(".fa");
  fa.className = "fa fa-check-circle";
}

function isEmail(email) {
  //we want user is not write @ before i.e index 1
  var atSymbol = email.indexOf("@");
  if (atSymbol < 1) return false; //index no 1 if < 1 hua so that means its in starting so we dont need this
  var dot = email.lastIndexOf("."); //ex->divya.patle.123@fmak.c so that means it select first index becoz we use here dot after divya. that's why we put lastIndex i.e dot will be at last
  if (dot <= atSymbol + 3) return false; //@ ke bd 2 letter likna hi hai. then hi dot use krenege.
  if (dot === email.length - 1) return false; // this was just checking we have use dot at last or not.dot ka index & email ki length - 1 === hai then we can say ki after (.) there is nothing. ex-> tha@p. -> length->6-1=5, @->3, (.) ka index->5.if not satisfy then return false.
  return true; //if satisfy hai then gives true.
}
