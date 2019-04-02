/*
if (screen.width <= 699) 
{
document.location = "mindex.html";
}
*/

console.log("location is"+window.location.hash );
$('p').hover(function () {
    jQuery(this).addClass('hover');
}, function () {
    jQuery(this).removeClass('hover');
});


$("button").click(function(){
    $("#mp-p").animate({fontSize: "30px"});
});
//var a = document.body.scrollTop();

$("button").click(function(){
    $("#body-container").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
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