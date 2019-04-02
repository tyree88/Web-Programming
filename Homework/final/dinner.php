
<!DOCTYPE html>

<html>
<head>
  <title>Potluck Dinner</title>
  <link rel="stylesheet" type="text/css" href="dinner.css" />
  <!--<script src="dinner.js"></script>-->
</head>
<?php 
    function start(){
        if(!isset($_COOKIE["id"])){
            if($_SERVER['REQUEST_METHOD'] === 'POST'){
                if(isset($_POST["username"])){
                    $username = $_POST["username"];
                    $password = $_POST["password"];
                    
                   $key = 'dinner';
                    $method = 'aes-128-cfb';
                    
                    $encrypt = openssl_encrypt($password,$method,$key);
                    //echo $encrypt;
                    if($username =="guest"/* && $encrypt =="azk1sSiwHV+YLvCHS8Cplz9pzaF05hbBDrZc/fhiXiaZElyZ+sOlRA=="*/ ){
                        
                        setcookie("id",$username,time()+36);
                        setcookie("timeloggedin",time(),time()+36);
                        dinnerForm();
                        
                    }
                    else{
                        ?>
                    <p> Bad Creditentials</p>
                    <p style="text-align:center;"><a href="dinner.php"> Back to the mainpage </a></p>

                    <?php 
                    //header("Refresh : 3, url=dinner.php");
                    }
                }
            }
            else{
                login();
            }
        }
        //insert into Database
        else{
            
            if($_SERVER['REQUEST_METHOD']==="POST")
            {
                $username = $_POST['username'];
                $items = $_POST['items'];
                $host = "summer-2018.cs.utexas.edu";
                $user = "tyree";
                $password = "Unity&Atom6Verity";
               $db = "cs329e_tyree";
                $port = "3306";
                $connect = mysqli_connect ($host, $user, $password, $db, $port);
                /*
                $host = "192.168.64.2";
                $user = "root";
                $password = "";
                $db = "final";
                $port = "3306";
                
                $connect = mysqli_connect($host,$user,$password,$db,$port);
                */
                if (empty($connect))
                {
                    die("mysqli_connect failed first round error :".mysqli_connect_error());
                }
                echo "Conntect to".mysqli_get_host_info($connect) ."</br>";
                
                if($username !="" && $items !=""){
                    $stmt = mysqli_prepare($connect,"INSERT INTO dinner VALUES(?,?)");
                    mysqli_stmt_bind_param ($stmt, 'ss', $username, $items);
                    mysqli_stmt_execute($stmt);
                    mysqli_stmt_close($stmt);
                }
                
                echo "<h1> Thank you for everything </h1>";
                ?>
                <p style="text-align:center;"><a href="dinner.php"> Back to the mainpage </a></p>
                <?php
               // header("Refresh : 3, url=dinner.php");
            }
            else{
                dinnerForm();
            }
        }

    }
function dinnerForm(){
?>
  <form method="post">
    <table class="main_table">
      <tr>
        <td>
          Name:
        </td>
        <td>
          Items:
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" id="username" name="username" maxlength="20" />
        </td>
        <td>
          <input type="text" id="items" name="items" maxlength="100" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="submit" id="submit" name="submit" />
        </td>
        <td>
          <input type="reset" name="reset" />
        </td>
      </tr>
<?php
/*
    global $host, $user, $password, $db, $port ;
    $connect = mysqli_connect($host, $user,$password,$db, $port);
  */
                $username = $_POST['username'];
                $items = $_POST['items'];
                $host = "summer-2018.cs.utexas.edu";
                $user = "tyree";
                $password = "Unity&Atom6Verity";
               $db = "cs329e_tyree";
                $port = "3306";
                $connect = mysqli_connect ($host, $user, $password, $db, $port);  
    if (empty($connect))
    {
        die("mysqli_connect failed:".mysqli_connect_error);
    }
    echo "Conntect to" .mysqli_get_host_info($connect). "<br>";
    
    
    
    $data = mysqli_query($connect, "SELECT * from dinner");
    while($row = $data->fetch_row())
    {
        ?>
        
            <tr>
            <td>
              <?php echo $row[0]; ?>
            </td>
            <td>
              <?php echo $row[1]; ?>
            </td>
          </tr>
          <?php
        }
        $data->free();
      ?>
    </table>
  </form>
    <?php // END OF FORM
}
    
function login(){
    ?>
    <form method="post">
        <table style="margin: auto; background-color: lightgrey;">
      <tr>
        <td>
          Name:
        </td>
        <td>
          <input type="text" id="username" name="username" />
        </td>
      </tr>
      <tr>
        <td>
          Password:
        </td>
        <td>
          <input type="password" id="password" name="password" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="submit" name="submit" />
        </td>
  
      </tr>
    </table>
    </form>
    <?php 
}
?>
<body> 
    <h1 style="text-align : center"> Potluck Dinner</h1>
    <?php start(); ?>
    
</body>
</html>
