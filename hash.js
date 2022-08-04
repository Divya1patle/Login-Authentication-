/*we have alredy given id for what write users in forms i.e so for validation*/

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//add event
form.addEventListener("btn", (event) => {
  //When we submit then data get submited.this is callback function & anonymous also we can say. submit button pr event listener add krre.
  event.preventDefault(); //if we put this one nd submit then not submit
  validate();
});

const isEmail = (email) => {
  //we want user is not write @ before i.e index 1
  var atSymbol = email.indexOf("@");
  if (atSymbol < 1) return false; //index no 1 if < 1 hua so that means its in starting so we dont need this.

  var dot = email.lastIndexOf("."); //ex->divya.patle.123@fmak.c so that means it select first index becoz we use here dot after divya. that's why we put lastIndex i.e dot will be at last
  if (dot <= atSymbol + 3) return false; //@ ke bd 2 letter likna hi hai. then hi dot use krenege.
  if (dot === email.length - 1) return false; // this was just checking we have use dot at last or not.dot ka index & email ki length - 1 === hai then we can say ki after (.) there is nothing. ex-> tha@p. -> length->6-1=5, @->3, (.) ka index->5.if not satisfy then return false.
  return true; //if satisfy hai then gives true.
};

//define the validate function

const validate = () => {
  const username = username.value.trim(); //we have used trim for remove white space of before nd after the text.
  const email = email.value.trim();
  const phone = phone.value.trim();
  const password = password.value.trim();
  const cpassword = cpassword.value.trim();

  // validate username
  if (username === "") {
    /*if username is blank then show error*/
    setError(username, "username cannot be blank"); // we have pass 2 arguments
  } else if (username.length <= 2) {
    //if user length is  2 or less than 2 then it call error function  ->username min 3char
    setError(username, "username min 3 char");
  } else {
    //when if no issue then we have to call one function for success
    setSuccess(username);
  }

  //validate email
  if (email === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(email)) {
    //if isEmail function is no satisfy then give this error ms
    setErrorMsg(email, "Not a valid email");
  } else {
    setSuccessMsg(email);
  }

  //validate phone
  if (phone === "") {
    setErrorMsg(phone, "phone cannot be blank");
  } else if (phone.length != 10) {
    //if isEmail function is no satisfy then give this error ms
    setErrorMsg(phone, "Not a valid phone number");
  } else {
    setSuccessMsg(phone);
  }

  //validate password
  if (password === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if (password.length <= 5) {
    //if isEmail function is no satisfy then give this error ms
    setErrorMsg(password, "Minimum 6 char");
  } else {
    setSuccessMsg(password);
  }

  //validate confirm password
  if (cpassword === "") {
    setErrorMsg(cpassword, "confirm password cannot be blank");
  } else if (password != cpassword) {
    //if isEmail function is no satisfy then give this error ms
    setErrorMsg(cpassword, "password not matching");
  } else {
    setSuccessMsg(cpassword);
  }
};
// // function setErrorMsg(element, errormsg) {
// //   const formcontrol = element.parentElement;
// //   formcontrol.classList.add("error");
// // }
function setErrorMsg(a, errormsgs) {
  const formControl = a.parentElement; //directly pta chlega ki kis form control ke sath km kree
  const small = formControl.querySelector("small");
  formControl.className("form-control error"); //we can add different class.
  small.innerText = errormsgs; //error msg ko pane ke liye.
  const fa = formControl.querySelector(".fa");
  fa.className = "fa fa-check-circle";
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.classsName = "form-control success";
}
