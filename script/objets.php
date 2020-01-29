<?php
include('connect.php');
mysqli_set_charset($link, "utf8");

if ($result = mysqli_query($link, "SELECT * FROM `geo garros objets`")) {
  while ($ligne = mysqli_fetch_assoc($result)) {
    $tableau[]=$ligne;
  }
}
echo json_encode($tableau);
?>
