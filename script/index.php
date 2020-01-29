<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="accueil.css">
    <link rel="shortcut icon" href="images/rollandGarros.ico">
    <title>GEO GARROS</title>
  </head>
  <body>
    <header>
      <p id=nomJeu>GEO GARROS</p>
      <img id="logoRolland" src="images/rollandGarros.png" height="40" width="40" >
    </header>
    <div id="bienvenue">
      <p>BIENVENUE SUR GEO GARROS !</p>
    </div>
    <div id="explicationsLancement">
      <p>Dans ce jeu, vous incarnez un joueur de tennis professionel participant au célèbre tournoi du Grand Chelem Roland Garros.</p>
      <p>Tour après tour, il vous faudra rassembler des éléments éparpillés autour du monde qui vous permettront de remporter la victoire.</p>
      <p>Jouez le plus vite possible, tout en prêtant bien attention à chacunes des instructions et popups pour espérer figurer dans le classement des meilleurs joueurs de GEO GARROS.</p>
      <p>Choisissez votre nom et jouez :</p>
      <form @submit="checkForm" id="bouttonJouer" action="page.php" method="post">
        <input id="name" v-model="name" type="text" name="name" placeholder="votre nom" maxlength="16"></input>
        <button type="submit" value="Jouer !">Jouer !</button>
      </form>
    </div>
    <div id="classement">
      <p>Retrouvez ici le classement des meilleurs joueurs de GEO GARROS :</p>

      <?php
      include('connect.php');
      mysqli_set_charset($link, "utf8");
      if ($result = mysqli_query($link, "SELECT `nom`, `score` FROM `geo garros scores` ORDER BY `score` LIMIT 6 ")){
        while ($ligne = mysqli_fetch_row($result)) {
  		  	$tab[]= $ligne;
  		  }}
      echo "<table id='tableau'><tr><th>Rang</th><th>Nom</th><th>Score (sec)</th></tr>";
      for ($i = 0; $i < sizeof($tab); $i++) {
        $elem=$tab[$i];
        $a=$i+1;
        echo "<tr><td>$a</td>";
        foreach ($elem as $value) {
          echo "<td>".$value."</td>";
        }
        echo "</tr>";
      }
      $output = "</table>";
      echo $output;
      ?>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="accueil.js" charset="utf-8"></script>
  </body>
</html>
