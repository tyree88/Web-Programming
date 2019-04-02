<html>
    
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php 
    extract ($_POST);
    session_start();
    //if logged 
    if ($_SERVER["REQUEST_METHOD"] == "POST") 
    {
        // collect value of input field
        $username = $_POST['username'];
        $password = $_POST['password'];
        if (empty($username)) 
        {
            echo "username is empty";
        }
        else if (empty($password)){
            echo "password is empty";
        }
        else 
        {
            echo $username $password;

        }
    }

    


?>
</body>
</html>