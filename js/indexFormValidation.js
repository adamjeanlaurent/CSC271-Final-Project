// This ensures that both boxes on the form are filled out correctly
function validateForm() {
    var email = document.forms["contact"]["email"].value; 
    var sortAlgo = document.forms["contact"]["sortingAlgos"].value; 
    
    // This is the format that will determine if an email address is 
    // valid or not
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    // The following conditionals will be the cases in which the 
    // following inputs are invalid. There are 5 cases.
    
    // Case 1: both email and sorting algorithm are blank (invalid input)
    if (email === "" && sortAlgo === "") {
      alert("Email address and sorting algorithm cannot be blank.");
      return false; 
    }
    
    // Case 2: only email is left blank (invalid input)
    if (sortAlgo === "" && email !== "") {
      alert("Sorting Algorithm cannot be blank");
      return false;
    }
    
    // Case 3:only sorting algorithm is left blank (invalid input)
    if (email === "" && sortAlgo !== "") {
      alert("Email cannot be blank");
      return false;
    }
  
   // Case 4: email address is invalid and sorting algorithm is not blank (invalid input)
   if(!email.match(mailformat) && sortAlgo !== "") {
      alert("Email address is invalid.");
      return false;
    }
   
    // Case 5: email address is invalid and sorting algorithm is blank (invalid input)
   if(!email.match(mailformat) && sortAlgo === "") {
      alert("Email address is invalid. Sorting algorithm cannot be blank.");
      return false;
    }
}
