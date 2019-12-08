// Validiates email address taking text as it input
/*function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
  {
    document.form1.text1.focus();
    return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  document.form1.text1.focus();
  return false;
  }
}*/

// This ensures that both boxes on the form are filled out
function validateForm() {
    var email = document.forms["contact"]["email"].value; 
    var sortAlgo = document.forms["contact"]["sortingAlgos"].value;    
    
    if (email === "" && sortAlgo === "") {
    alert("Email address and sorting algorithm cannot be blank.");
    return false; 
    }
    
    if (sortAlgo === "" && email !== " ") {
    alert("Sorting Algorithm cannot be blank");
    return false;
    }
  
    if (email === " " && sortAlgo !== " ") {
    alert("Email cannot be blank");
    return false;
    }
}
