<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Sign Up!</title>
</head>
<body>
	<?php 
		$script = $_SERVER['PHP_SELF'];
		$file = fopen("signup.txt", "r");
		$scheduled = [];
		while (true){
			$line = fgets($file);
			if ($line == ""){
				break;
			}
			$signup = explode(":", $line);
			$time = $signup[0];
			$name = $signup[1];
			$scheduled[$time] = $name;
		}
		fclose($file);
		$times = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];
		extract ($_POST);
		foreach ($times as $t){
			if (!empty($_POST[$t])){
				if (!array_key_exists($t, $scheduled)){
					$name = $_POST[$t];
					$file = fopen("signup.txt", "a");
					fwrite($file, "$t:$name \n");
					fclose($file);
					$scheduled[$t]=$name;
				}
			}
		}
	?>
	<form action="<?php $script ?>" method="post">
		<table border="1">
			<caption>Sign-up Sheet</caption>
			<?php 
				foreach ($times as $t){
					if ($t=="8" || $t=="9" || $t=="10" || $t=="11"){
						echo "<tr><td> $t:00 am</td>";
					}
					else{
						echo "<tr><td> $t:00 pm</td>";
					}
					if (array_key_exists($t,$scheduled)){
						
						echo "<td> $scheduled[$t] </td></tr>";
					}
					else {
						echo "<td><input type='text' size='30' name=$t></td></tr>";
					}
				}
			?>
		</table>
		<input type="submit" value="Sign Up">
		<input type="reset" value="Clear">
	</form>

 
</body>
</html>