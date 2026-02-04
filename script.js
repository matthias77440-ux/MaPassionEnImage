document.addEventListener("DOMContentLoaded", function () {

    console.log("hello")

    
    //recharger jusqu'en haut
    window.onload = function() {
    window.scrollTo(0, 0); // x = 0, y = 0 -> tout en haut
    };

    //bouton landing -> hovering
    function enter() {
        document.querySelector(".bton .fleche-blanche").classList.remove("fleche-blanche")
        document.querySelector(".bton .fleche").classList.add("fleche-noire")
    }
    document.querySelector(".bton").addEventListener("mouseover", enter)

    function leave() {
        document.querySelector(".bton .fleche-noire").classList.remove("fleche-noire")
        document.querySelector(".bton .fleche").classList.add("fleche-blanche")
    }
    document.querySelector(".bton").addEventListener("mouseout", leave)


    //bouton landing -> débloque le sroll
    //bouton remonte -> rend visible
    function bas() {
        document.querySelector(".locked").classList.remove("locked")
        document.querySelector(".voir").classList.remove("cache")
        console.log("je scroll")
    }
    document.querySelector(".bton").addEventListener("click", bas)


    //bouton remonte -> bloque le scroll + rend invisible
    function haut() {
        document.querySelector(".ver").classList.add("locked")
        document.querySelector(".voir").classList.add("cache")
        console.log("je remonte")
    }
    document.querySelector(".remonte").addEventListener("click", haut)


    //bouton remonte -> hovering
    function enter2() {
        document.querySelector(".remonte .fleche-w").classList.remove("fleche-w")
        document.querySelector(".remonte .fleche").classList.add("fleche-b")
    }
    document.querySelector(".remonte").addEventListener("mouseover", enter2)

    function leave2() {
        document.querySelector(".remonte .fleche-b").classList.remove("fleche-b")
        document.querySelector(".remonte .fleche").classList.add("fleche-w")
    }
    document.querySelector(".remonte").addEventListener("mouseout", leave2)


    //Ajoute et retire la description pour systeme-solaire à l'hovering
    function ajouttosys() {
        document.querySelector(".systeme-solaire").innerHTML = "<p>Le Système Solaire est un ensemble de 8 planètes.<br><br>Il constitue aussi un paradis de recherche et d'observation.<br><br>Le système solaire est le point de départ de ma passion pour l'espace !</p>"
    }
    document.querySelector(".systeme-solaire").addEventListener("mouseenter", ajouttosys)

    function retiretosys() {
        document.querySelector(".systeme-solaire").innerHTML = "<h2>Système Solaire</h2>"
    }
    document.querySelector(".systeme-solaire").addEventListener("mouseleave", retiretosys)


    //Ajoute et retire la description pour exoplanete à l'hovering
    function ajouttoexp() {
        document.querySelector(".exoplanete").innerHTML = "<p>Dans l'Univers, il existe des milions de planètes en dehors de notre Système Solaire.<br><br>Ces planètes constituent des véritables nids à découvertes et pourrais même y habiter la vie !<br><br>Seul problème, ces planètes se situent à plusieurs années lumière de La Terre.</p>"
    }
    document.querySelector(".exoplanete").addEventListener("mouseenter", ajouttoexp)

    function retiretoexp() {
        document.querySelector(".exoplanete").innerHTML = "<h2>Exoplanètes</h2>"
    }
    document.querySelector(".exoplanete").addEventListener("mouseleave", retiretoexp)


    //Ajoute et retire la description pour petit-trou à l'hovering
    function ajouttostel() {
        document.querySelector(".petit-trou").innerHTML = "<p>Les trous noirs stellaires se forment après l’explosion en supernova d’une étoile très massive.<br><br>Pour moi, les trous noirs sont les entités les plus intéressantes de l’Univers. <br><br>Les trous noirs sont tellement mystérieux qu’on ne sait presque rien sur eux.</p>"
    }
    document.querySelector(".petit-trou").addEventListener("mouseenter", ajouttostel)

    function retiretostel() {
        document.querySelector(".petit-trou").innerHTML = "<h2>Trous Noirs Stellaires</h2>"
    }
    document.querySelector(".petit-trou").addEventListener("mouseleave", retiretostel)


    //Ajoute et retire la description pour grand-trou à l'hovering
    function ajouttomass(){
        document.querySelector(".grand-trou").innerHTML = "<p>Les trous noirs supermassifs sont des objets cosmiques situés au centre des galaxies, parfois à des millions ou des milliards d’années-lumière de la Terre.<br><br> Ils possèdent une masse colossale, allant de des millions à des milliards de fois celle du Soleil, et exercent une gravité si forte que rien ne peut s’en échapper, même la lumière.<br><br>Contrairement aux trous noirs stellaires, ils sont beaucoup plus grands, dépassant parfois la taille de notre système solaire.<br><br> Ce sont, par ailleurs, mes trous noirs préférés : plus ils sont gros, plus je les aime !</p>"
    }
    document.querySelector(".grand-trou").addEventListener("mouseenter", ajouttomass)

    function retiretomass(){
        document.querySelector(".grand-trou").innerHTML = "<h2>Trous Noirs Supermassifs</h2>"
    }
    document.querySelector(".grand-trou").addEventListener("mouseleave",retiretomass)


    //affiche l'onglet système solaire ainsi que la flèche de retour
    function seeSysSol() {
        document.querySelector("#SysSol").classList.remove("hide")
        document.querySelector("#deuxieme>h1").innerHTML = ""
        document.querySelector("#deuxieme .retour").classList.remove("hide")
        document.querySelector("#troisieme .retour").classList.add("hide")
        document.querySelector("#TrouStel").classList.add("hide")
        document.querySelector("#Massif").classList.add("hide")
        document.querySelector("#troisieme>h1").innerHTML = "Les Trous Noirs"
        console.log("ok")
    }
    document.querySelector(".systeme-solaire").addEventListener("click", seeSysSol)

    //inverse de la fonction précédente
    function unseeSysSol() {
        document.querySelector("#SysSol").classList.add("hide")
        document.querySelector("#deuxieme>h1").innerHTML = "Les Planètes"
        document.querySelector("#deuxieme .retour").classList.add("hide")
        console.log("d'acc")
    }
    document.querySelector(".retour").addEventListener("click", unseeSysSol)

    document.querySelector("nav").addEventListener("click", bas)


    //affiche l'onglet exoplanete ainsi que la flèche de retour
    function seeExPl() {
        document.querySelector("#ExPl").classList.remove("hide")
        document.querySelector("#deuxieme>h1").innerHTML = ""
        document.querySelector("#deuxieme .retour").classList.remove("hide")
        document.querySelector("#troisieme .retour").classList.add("hide")
        document.querySelector("#TrouStel").classList.add("hide")
        document.querySelector("#Massif").classList.add("hide")
        document.querySelector("#troisieme>h1").innerHTML = "Les Trous Noirs"
        console.log("ok")
    }
    document.querySelector(".exoplanete").addEventListener("click", seeExPl)

    //inverse de la fonction précédente
    function unseeExPl() {
        document.querySelector("#ExPl").classList.add("hide")
        document.querySelector("#deuxieme>h1").innerHTML = "Les Planètes"
        document.querySelector("#deuxieme .retour").classList.add("hide")
        console.log("d'acc")
    }
    document.querySelector("#deuxieme .retour").addEventListener("click", unseeExPl)


    //affiche l'onglet petit-trou ainsi que la flèche de retour
    function seePti (){
        document.querySelector("#TrouStel").classList.remove("hide")
        document.querySelector("#troisieme>h1").innerHTML = ""
        document.querySelector("#troisieme .retour").classList.remove("hide")
        console.log("ok")
    }
    document.querySelector(".petit-trou").addEventListener("click", seePti)

    //inverse de la fonction précédente
    function unseePti() {
        document.querySelector("#TrouStel").classList.add("hide")
        document.querySelector("#troisieme>h1").innerHTML = "Les Trous Noirs"
        document.querySelector("#troisieme .retour").classList.add("hide")
        console.log("d'acc")
    }
    document.querySelector("#troisieme .retour").addEventListener("click", unseePti)


    //affiche l'onglet petit-trou ainsi que la flèche de retour
    function seeGr (){
        document.querySelector("#Massif").classList.remove("hide")
        document.querySelector("#troisieme>h1").innerHTML = ""
        document.querySelector("#troisieme .retour").classList.remove("hide")
        console.log("ok")
    }
    document.querySelector(".grand-trou").addEventListener("click", seeGr)

    //inverse de la fonction précédente
    function unseeGr() {
        document.querySelector("#Massif").classList.add("hide")
        document.querySelector("#troisieme>h1").innerHTML = "Les Trous Noirs"
        document.querySelector("#troisieme .retour").classList.add("hide")
        console.log("d'acc")
    }
    document.querySelector("#troisieme .retour").addEventListener("click", unseeGr)



    //popup

    const images = document.querySelectorAll(".image-cliquable")

    const popup = document.getElementById("popup")

    const popupImg = document.getElementById("popup-img")

    images.forEach(function zoom(image) {
        image.addEventListener("click", function () {
            const img = image.querySelector("img")

            popup.style.display = "flex"
            popupImg.src = img.src
        })
    })

    document.querySelector(".popup p").addEventListener("click", function(){
        popup.style.display = "none"
    })

    
// Récupère les champs et les éléments d'affichage
    const titreInput = document.getElementById("titre")

    const descriptionInput = document.getElementById("description")

    const imageInput = document.getElementById("url")

    const nomInput = document.getElementById("nom")
    const lienInput = document.getElementById("lien")


    const afficheTitre = document.getElementById("afficheTitre")

    const afficheDescription = document.getElementById("afficheDescription")

    const afficheImage = document.getElementById("afficheImage")

    const afficheNom = document.getElementById("afficheNom")
    const afficheLien = document.getElementById("afficheLien")

// Écoute les relâchements de touches pour le champ titre
    titreInput.addEventListener("keyup", function() {
    // Met à jour l'élément afficheTitre avec le contenu du champ titre
    afficheTitre.textContent = titreInput.value;
    
    })

// Écoute les relâchements de touches pour le champ description
    descriptionInput.addEventListener("keyup", function() {
    // Met à jour l'élément afficheDescription avec le contenu du champ description
    afficheDescription.textContent = descriptionInput.value;
    })

    imageInput.addEventListener("keyup", function(){
        afficheImage.src = imageInput.value
    })



    

    const double = document.querySelector("#double");
    const img = document.querySelector(".rempl img");

    console.log(double, img); // DEBUG

    double.addEventListener("click", function () {
        console.log("cliqué");

        if (double.classList.contains("height")) {
            double.classList.remove("height");
            double.classList.add("width");

            img.style.width = "600px";
            img.style.padding = "0";
        } else {
            double.classList.remove("width");
            double.classList.add("height");

            img.style.width = "350px";
            img.style.paddingLeft = "125px";
            img.style.paddingRight = "125px";
        }
    });


    const footer = document.querySelector("footer");

    footer.addEventListener("click", function () {

    if (footer.classList.contains("diminue")) {
        footer.classList.add("augmente");
        footer.classList.remove("diminue");
        footer.innerHTML = "<p>Identité : MARÉCHAL Matthias<br><br>Coordonées : 8 Chemin des Vignes Luzancy, 77138<br><br>Numéro de téléphone : 07 66 18 64 51<br><br>Mentions relatives à la propriété intellectuelle : Images libre de droit sous conditions de citer l'auteur ainsi qu'un lien vers la source.<br><br>Mentions relatives à l'hébergement du site : <br>Nom de l'hébergeur : o2switch.<br>Adresse : Chem. des Pardiaux, 63000 Clermont-Ferrand, France<br>Numéro de téléphone : O4 44 44 60 40<br>Site web : https://www.o2switch.fr/</p>";

    } else if (footer.classList.contains("augmente")) {
        footer.classList.add("diminue");
        footer.classList.remove("augmente");
        footer.innerHTML = "<p>mentions légales</p>";
    }

    });



});
    

