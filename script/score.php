<?php
include('connect.php');
mysqli_set_charset($link, "utf8");

if (isset($_POST)) {
  $nom=$_POST['nom'];
  $score=$_POST['score'];
}

mysqli_query($link, "INSERT INTO `geo garros scores`(`nom`, `score`) VALUES ('$nom',$score)")
 ?>
