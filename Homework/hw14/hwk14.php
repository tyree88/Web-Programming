<?php
setcookie("user", "logged_in", time() + 3600, '/');
?>
<html>
<body>

<?php


// Echo session variables that were set on previous page
$_SESSION["user"] = "email";
$_SESSION["password"] = "email";
<form>
    <input type="email" name="email" id="email">
    <input type="password" name="password" id="password">
    <input type="submit">
    
</form>
?>

</body>
</html>