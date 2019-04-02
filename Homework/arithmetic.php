<?php

session_start();

if (!isset($_SESSION["number"]))
{
  $_SESSION["number"] = 0;
  $_SESSION["answer"] = 0;
  $_SESSION["correct"] = 0;
  $_SESSION["question"] = "";
}

$total_number = 10;

print <<<TOP
<html>
<head>
<title> Arithmetic Quiz </title>
</head>
<body>
<h3> Arithmetic Quiz </h3>
TOP;

$number = $_SESSION["number"];
$answer = $_SESSION["answer"];
$correct = $_SESSION["correct"];
$question = $_SESSION["question"];

if ($number == 0)
{
  print <<<FIRST
  <p> You will be given $total_number questions in this quiz. <br /><br/>
      Here is your first question: <br /><br />
  </p>
FIRST;
}

if ($number > 0)
{
  if ($_POST["answer"] == $answer)
  {
    $correct++;
    $_SESSION["correct"] = $correct;
    print <<<CORRECT
      Yes you are correct: $question  $answer. <br /><br />
CORRECT;
  }
  else
  {
    print <<<WRONG
      Sorry, that is not correct: $question $answer.
      <br /><br />
WRONG;
  }
}

if ($number >= $total_number)
{
  print <<<FINAL_SCORE
  Your final score is $correct correct out of $total_number. <br /><br />
  Thank you for playing. <br /><br />
FINAL_SCORE;
  session_destroy();
}
else
{
  $number++;
  $_SESSION["number"] = $number;
  $x = rand(1, 100);
  $y = rand(1, 100);
  $question = $x . " + " . $y . " = ";
  $answer = $x + $y;
  $_SESSION["question"] = $question;
  $_SESSION["answer"] = $answer;
  $script = $_SERVER['PHP_SELF'];
  print <<<FORM
  <form method = "post" action = $script>
  $question
  <input type = "text" name = "answer" value = "" size = "5" />
  <input type = "submit" value = "Check Answer" />
  </form>
FORM;
}

print <<<BOTTOM
</body>
</html>
BOTTOM;

?>
