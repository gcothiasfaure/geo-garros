<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="page.css">
    <link rel="shortcut icon" href="images/rollandGarros.ico">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
    <title>GEO GARROS</title>
  </head>
  <body>
    <?php  if ( isset($_POST) ) { $var=$_POST["name"]; } ?>
    <header class="flou">
      <p id="nomJeu">GEO GARROS</p>
      <a href="index.php">QUITTER LE JEU</a>
      <p>Joueur : <span id="nomJoueur"><?php echo $var ?> <br> </span><span id="chrono">Score : 0 sec</span></p>
      <img id="logoRolland" src="images/rollandGarros.png" height="40" width="40" >
    </header>
      <div id="carte" class="flou"></div>
      <div id="instructions" class="flou"> <p id="texte"></p> <p id="rebours"></p> </div>
      <div id="deposeObjet" class="flou"></div>
      <div id="imageRolland" class="flou"></div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>
    <script src="page.js" charset="utf-8"></script>
  </body>

</html>
