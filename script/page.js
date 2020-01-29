//Carte brute.
var centrage_initial = [48.847143, 2.249233];
var map = L.map('carte').setView(centrage_initial, 17);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


//Fonction de remplissage des objets de leurs attributs.
function rempli_object(object,i,r) {
  object.id=parseFloat(r[i].id);
  object.nom=r[i].nom;
  object.type=r[i].type;
  object.latitude=parseFloat(r[i].latitude);
  object.longitude=parseFloat(r[i].longitude);
  object.zoom_minimal=parseFloat(r[i].zoom_minimal);
  object.indice=r[i].indice;
  object.code=r[i].code;
  object.lien_image=r[i].lien_image;
}

//Tout le reste du code dans le fetch pour pouvoir utiliser les éléments de la bdd.
fetch('objets.php', {
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
.then(r => r.json())
.then(r=> {

  //Création des objets.
  var chaussures=new Object();
  var raquette=new Object();
  var soleil=new Object();
  var preparateur_physique=new Object();
  var preparateur_mental=new Object();
  var potion=new Object();
  var ingredient_secret=new Object();
  var coach_de_legende=new Object();

  //Remplissage des objets avec les valeurs de la bdd.
  rempli_object(chaussures,0,r);
  rempli_object(raquette,1,r);
  rempli_object(soleil,2,r);
  rempli_object(preparateur_physique,3,r);
  rempli_object(preparateur_mental,4,r);
  rempli_object(potion,5,r);
  rempli_object(ingredient_secret,6,r);
  rempli_object(coach_de_legende,7,r);

  //Ajout de l'attribut form qui créer le formulaire pour répondre aux deux énigmes.
  preparateur_physique.form="<p>"+preparateur_physique.indice+"</p><label for='inputCode'>Code :</label><input id='inputCode' type='text'/><button id='popupBoutton' type='submit'>Répondre</button>";
  coach_de_legende.form="<p>"+coach_de_legende.indice+"</p><label for='inputCode'>Code :</label><input id='inputCode' type='text'/><button id='popupBoutton' type='submit'>Répondre</button>";

  //Création des joueurs adverses:
  var nadal = new Object();
  nadal.image="images/nadal.png";
  var almagro = new Object();
  almagro.image="images/almagro.png";
  var djokovic = new Object();
  djokovic.image="images/djokovic.png";
  var monfils = new Object();
  monfils.image="images/monfils.png";
  var murray = new Object();
  murray.image="images/murray.png";
  var federer = new Object();
  federer.image="images/federer.png";
  var delPotro = new Object();
  delPotro.image="images/delPotro.png";


  //Initialisation du jeu en faisant apparaître Almagro, écriture de la première instruction et création du premier marker.
  Almagro();
  setTimeout( function() {ecrire_instruction("Au premier tour, vous rencontrez Nicolas Almagro. Pour espérer gagner, il vous faudra d'abord récupérer vos chaussures que vous avez oublié au premier tournoi du Grand Chelem de la saison.");},6500);
  def_marker(chaussures);

  //Fonction d'enchainement du jeu après que l'icone soit rangée dans sa case : faire apparaître la fenêtre du match, l'instruction suivante et le marker suivant.
  function apres(objet) {
    if (objet.nom=="chaussures") {
      setTimeout(function() {fenetre_apparait(delPotro);},500);
      def_marker(raquette)
      setTimeout(function() {ecrire_instruction("Au second tour, vous êtes face à Juan Martin Del Potro. Pour contrer ce joueur puissant, récupérer votre raquette fétiche sur les lieux du célèbre tournoi de terre battue italien.");},12000);
    }
    if (objet.nom=="raquette") {
      setTimeout(function() {fenetre_apparait(murray);},500);
      def_marker(soleil);
      setTimeout(function() {ecrire_instruction("Pour le troisième tour, vous faites face à l'ex numéro 1 mondial Andy Murray, cependant la pluie menace la tenue du match, aller récupérer le soleil argentin pour disputer le match.");},12000);
    }
    if (objet.nom=='soleil') {
      setTimeout(function() {fenetre_apparait(monfils);},500);
      def_marker(preparateur_physique);
      setTimeout(function() {ecrire_instruction("Vous commencez à être fatigué après 3 matchs gagnés, un préparateur physique vous attend sur les hauts plateaux kenyans pour vous donner quelques conseils pour garder la forme.");},12000);
    }
    if (objet.nom=='préparateur physique') {
      setTimeout(function() {fenetre_apparait(djokovic);},500);
      def_marker(preparateur_mental);
      setTimeout(function() {ecrire_instruction("A ce niveau de la compétition, l'écart de niveau entre les joueurs se ressère, il faut donc un très bon mental pour l'emporter. Allez récupérer votre préparateur mental tibétain.");},12000);
    }
    if (objet.nom=='préparateur mental') {
      setTimeout(function() {fenetre_apparait(federer);},500);
      def_marker(potion);
      setTimeout(function() {ecrire_instruction("Vous êtes en demi-finale, pour gagner, il vous faut la boisson secrete que vous a concocté un marabout béninois, attention à bien lire l'instruction concernant l'utilisation de cette potion.");},12000);
    }
    if (objet.nom=='ingrédient secret') {
      setTimeout(function() {fenetre_apparait(nadal);},500);
      def_marker(coach_de_legende);
      setTimeout(function() {ecrire_instruction("C'est l'heure de la finale, face à l'invincible Rafael Nadal, maître des lieux, pour esperer gagner, le célèbre champion Yannick Noah vous attend a Memphis pour devenir votre coach de légende.");},12000);
    }
    if (objet.nom=='potion') {
      def_marker(ingredient_secret);
    }
    if (objet.nom=='coach de légende') {
      setTimeout(function() {fenetre_apparait(null);},500);
      clearInterval(chronometre);
      var temps_actuel = Date.now() - start;
      score(Math.floor(temps_actuel/1000).toString());
      setTimeout(function() {ecrire_instruction("Bravo vous avez gagné le tournoi de Roland Garros, votre nom s'inscrit parmi les légendes du tennis !");
        redirection_rebours(15)},9000);
    }
  }


  //Fonction d'enregistrement du score dans la bdd.
  function score(score){
    var nom=document.getElementById("nomJoueur").textContent;
    var data="nom="+nom+"&score="+score;
    fetch('score.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  //Fonction de création et d'actualisation du chronomètre.
  var start = Date.now();
  var chronometre=setInterval(chrono, 1000);
  function chrono() {
      var millis = Date.now() - start;
      document.getElementById("chrono").innerHTML= "Score : "+Math.floor(millis/1000)+" sec";
  }

  //Fonction de redirection vers la page d'accueil selon "temps" (en secondes).
  function redirection_rebours(temps) {
    //Fonction d'actualisation du temps restant avant redirection.
    setInterval(function(){
      temps=temps-1;
      document.getElementById("rebours").innerHTML="Vous allez être redirigé vers la page d'accueil dans "+temps+" secondes.";
      if (temps==1) {
        document.getElementById("rebours").innerHTML="Vous allez être redirigé vers la page d'accueil dans "+temps+" seconde.";
      }
    }, 1000);
    //Fonction de redirection au terme du "temps" (en secondes) choisi.
    setTimeout(function() {document.location.href="index.php";},(temps-1)*1000);
  }

  //Fonction d'apparition du formulaire dans les popups.
  function popUp(marker,objet){
    marker.bindPopup(objet.form);
    marker.openPopup();
    var buttonSubmit = L.DomUtil.get('popupBoutton');
    var input = L.DomUtil.get('inputCode');
    L.DomEvent.addListener(buttonSubmit, 'click', function (e) {
      if (input.value.toUpperCase()==objet.code) {
        OnClick(marker,objet);
      }
      else {
        alert("Mauvais code.")
      }
    });
  }

  //Fonction d'apparition des popups lors du passage de la souris.
  function popUp2(marker,message) {
    marker.bindPopup(message);
    marker.on('mouseover', function (e) {
      this.openPopup();
    });
    marker.on('mouseout', function (e) {
      this.closePopup();
    });
  }

  var display = document.getElementById('texte');
  //Fonction d'écriture des instructions dans la case prévue.
  function ecrire_instruction(texte) {
          display.innerHTML='';
  				for(var i = 0, l = texte.length; i < l; i++) {
  					(function(i) {
  						setTimeout(function() {
  							display.innerHTML += texte.charAt(i);
  						}, i *30);
  					}(i));
  				}
  }

  //Fonction de création des markers sur la carte.
  function def_marker(objet){
    icone=new L.icon({iconUrl:objet.lien_image,iconSize:[60,60],popupAnchor:[0,-30]});
    var marker = new L.marker([objet.latitude, objet.longitude],{icon:icone}).addTo(map);
    if (objet.nom=="préparateur physique") {
      marker.on("click",function(){popUp(marker,objet)});
      map.on('zoomend',function(){ marker_disparait(objet.zoom_minimal,marker) });
    }
    else if (objet.nom=="potion") {
      popUp2(marker,"Cliquez pour prendre la potion. "+potion.indice);
      marker.on('click',function() {OnClick(marker,objet)});
      map.on('zoomend',function(){ marker_disparait(objet.zoom_minimal,marker) });
    }
    else if (objet.nom=='coach de légende') {
      marker.on("click",function(){popUp(marker,objet) });
      map.on('zoomend',function(){ marker_disparait(objet.zoom_minimal,marker) });
      }
    else {
      popUp2(marker,"Cliquez pour récupérer");
      marker.on('click',function() {OnClick(marker,objet) });
      map.on('zoomend',function(){ marker_disparait(objet.zoom_minimal,marker) });
      }
  }

  //Fonction d'apparition des markers en fonction du zoom.
  function marker_disparait(zoom_min,marker) {
    if (map.getZoom() <zoom_min){
            map.removeLayer(marker);
    }
    else {
            map.addLayer(marker);
        }
  }

  //Fonction de rangement des icones dans la boite au clic.
  function OnClick(marker,object){
    if (object.nom=='potion') {
      map.removeEventListener("zoomend");
      map.removeLayer(marker);
      apres(object);
    }
    else if (object.nom=='ingrédient secret') {
      map.removeEventListener("zoomend");
      map.removeLayer(marker);
      var deposeObjet=document.getElementById('deposeObjet');
      var objet = document.createElement("div");
      objet.className="objet";
      deposeObjet.appendChild(objet);
      var img=new Image();
      img.src=potion.lien_image;
      img.width=marker.options.icon.options.iconSize[0];
      img.lenght=marker.options.icon.options.iconSize[1];
      objet.appendChild(img);
      apres(object);
    }
    else {
      map.removeEventListener("zoomend");
      map.removeLayer(marker);
      var deposeObjet=document.getElementById('deposeObjet');
      var objet = document.createElement("div");
      objet.className="objet";
      deposeObjet.appendChild(objet);
      var img=new Image();
      img.src=marker.options.icon.options.iconUrl;
      img.width=marker.options.icon.options.iconSize[0];
      img.length=marker.options.icon.options.iconSize[1];
      objet.appendChild(img);
      apres(object);}
    }

  //Fonction d'apparition du premier joueur : Almagro.
  function Almagro() {
    var imageRolland=document.getElementById('imageRolland');
    var elements_a_flouter=document.getElementsByClassName('flou');
    for (var i = 0; i < elements_a_flouter.length; i++) {
      elements_a_flouter[i].style.filter="blur(5px)";
    }
    var centre= document.createElement("div");
    centre.id="centre";
    imageRolland.after(centre);
    var image_joueur=new Image();
    image_joueur.src=almagro.image;
    image_joueur.width=300;
    image_joueur.lenght=450;
    var tp=0;
    var it=setInterval(frame,3);
    //Fonction d'apparition au centre de l'écran d'Almagro en grand en fondu entrant.
    function frame() {
      if (tp==1000) {
        clearInterval(it);
      }
      else {
        centre.appendChild(image_joueur);
        tp++;
        centre.style.opacity=(tp/1000).toString();
      }
    }
    //Fonction d'apparition en petit du joueur dans le stade.
    setTimeout(function() {
      centre.remove();
      var lieu_image= document.createElement("div");
      lieu_image.className='image_joueur';
      imageRolland.appendChild(lieu_image);
      image_joueur.width=130;
      image_joueur.height=247;
      lieu_image.appendChild(image_joueur);
      for (var i = 0; i < elements_a_flouter.length; i++) {
        elements_a_flouter[i].style.filter=null;
      }
    },6000);
  }

  //Fonction d'apparition de la fenetre indiquant le match et la victoire + flou second plan.
  function fenetre_apparait(joueur) {
    var imageRolland=document.getElementById('imageRolland');
    var elements_a_flouter=document.getElementsByClassName('flou');
    for (var i = 0; i < elements_a_flouter.length; i++) {
      elements_a_flouter[i].style.filter="blur(8px)";
    }
    var fenetre = document.createElement("div");
    fenetre.id="fenetre";
    imageRolland.after(fenetre);
    var rectangle=document.createElement("div");
    rectangle.id="rectangle";
    fenetre.appendChild(rectangle);
    var load=document.createElement("div");
    rectangle.appendChild(load);
    var match=document.createElement('p');
    match.id="match";
    rectangle.appendChild(match);
    match.innerHTML="Match en cours";
    var image_load=new Image();
    image_load.src="images/load.gif";
    load.appendChild(image_load);
    //Fonction d'apparition de la fenetre et d'annonce de la victoire.
    setTimeout(function() {
      fenetre.innerHTML='';
      var victoire=document.createElement('p');
      victoire.id="victoire";
      var texte=document.createTextNode("Victoire !");
      victoire.appendChild(texte);
      fenetre.appendChild(victoire);
    }, 2700);
    if (joueur==null) {
      //Fonction d'apparition de la fenetre lors du jeu fini, le tournoi est gagné.
      setTimeout(function() {
        var victoire=document.getElementById('victoire');
        victoire.innerHTML='';
        victoire.innerHTML="Bravo vous avez gagné le tournoi !";
        var image_feu=new Image();
        image_feu.src="images/giphy.gif";
        image_feu.style.height="300px";
        fenetre.appendChild(image_feu);
      },4700);
      //Fonction de suppression de la fenetre et défloutage.
      setTimeout(function() {
        for (var i = 0; i < elements_a_flouter.length; i++) {
          elements_a_flouter[i].style.filter=null;
        }
        fenetre.remove();
        var imageRolland = document.getElementById("imageRolland");
        imageRolland.innerHTML='';
        var lieu_image= document.createElement("div");
        lieu_image.className='image_joueur';
        imageRolland.appendChild(lieu_image);
        var img=new Image();
        img.src="images/victoire.png";
        img.height=300;
        lieu_image.appendChild(img);
      }, 8700);
    }
    else {
      //Fonction de suppression de la fenetre.
      setTimeout(function() {
        fenetre.remove();
      }, 4700);
      //Fonction d'apparition du prochain joueur adverse en grand au centre de l'écran.
      setTimeout(function() {
        display.innerHTML='';
        imageRolland.innerHTML='';
        var centre= document.createElement("div");
        centre.id="centre";
        imageRolland.after(centre);
        var image_joueur=new Image();
        image_joueur.src=joueur.image;
        image_joueur.width=300;
        image_joueur.lenght=450;
        var tp=0;
        var it=setInterval(frame,3);
        //Fonction du fondu entrant.
        function frame() {
          if (tp==1000) {
            clearInterval(it);
          }
          else {
            centre.appendChild(image_joueur);
            tp++;
            centre.style.opacity=(tp/1000).toString();
          }
        }
        //Fonction de suppression de la fenetre et création du joueur en petit dans le stade.
        setTimeout(function() {
          centre.remove();
          var imageRolland = document.getElementById("imageRolland");
          imageRolland.innerHTML='';
          var lieu_image= document.createElement("div");
          lieu_image.className='image_joueur';
          imageRolland.appendChild(lieu_image);
          var img=new Image();
          img.src=joueur.image;
          if (joueur==federer){
            img.width=130;
          }
          else{
            img.width=150;
          }
          lieu_image.appendChild(img);
          for (var i = 0; i < elements_a_flouter.length; i++) {
            elements_a_flouter[i].style.filter=null;
          }
        },6000);
      },5500);
    }
  }

//fin du .then():
})
