// This ensures that both boxes on the form are filled out
function validateForm() {
    var email = document.forms["contact"]["email"].value; 
    var sortAlgo = document.forms["contact"]["sortingAlgos"].value; 
  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email === "" && sortAlgo === "") {
      alert("Email address and sorting algorithm cannot be blank.");
      return false; 
    }
    
    if (sortAlgo === "" && email !== "") {
      alert("Sorting Algorithm cannot be blank");
      return false;
    }
  
    if (email === "" && sortAlgo !== "") {
      alert("Email cannot be blank");
      return false;
    }
  
   if(!email.match(mailformat) && sortAlgo !== "") {
      alert("Email address is invalid.");
      return false;
    }
  
   if(!email.match(mailformat) && sortAlgo === "") {
      alert("Email address is invalid. Sorting algorithm cannot be blank.");
      return false;
    }
}
