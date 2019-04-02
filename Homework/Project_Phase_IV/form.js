function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    if (fname == "" || lname=="" || phone==""||email=="") 
    {
        alert("Name must be filled out");
        return false;
    }
}