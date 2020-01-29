# Bienvenue sur Géo Garros !
Pour pouvoir jouer à **Géo Garros**, veuillez suivre les instructions suivantes :

• Définissez le dossier « **script** » comme le dossier racine de votre server local (*MAMP* ou *WAMP* par exemple).

• Importez notre base de données en important le fichier « **geo_garros.sql** » dans votre base de données locale. Pour cela, depuis la page d’accueil de votre serveur local, ouvrez l’éditeur de la base de données locale, créez une nouvelle base en la nommant « **geo garros** » et importez-y notre base de données.

Si vous travaillez avec une autre base de données locale que *phpMyAdmin* avec *MAMP*, alors vous devez redéfinir la connexion à votre base de données locale dans notre code source. Pour cela, ouvrez le fichier « **connect.php** » dans le fichier « **script** » pour l'éditer et ajouter les coordonnées de votre base de données locale à ces variables :
- *$host_et_port_bdd* pour l’hôte et le port de votre base de données. (Ex : "localhost:3306")
- *$identifiant* pour l'identifiant pour accéder à votre base de données. (Ex : "root")
- *$mot_de_passe* pour le mot de passe pour accéder à votre base de données. (Ex : "root")
- *$nom_bdd* pour le nom que vous avez choisi pour la base de données. (Ex : "geo garros")
Si vous utilisez la base de données locale *phpMyAdmin* avec *MAMP* et que vous avez nommé votre base de données « **geo garros** », vous n’avez pas besoin de redéfinir ces variables.

• Connectez-vous à internet.

• Connectez-vous à votre serveur local, en tapant « **localhost** » dans la barre URL de votre navigateur.

Vous pouvez alors commencer à jouer.