document.addEventListener("DOMContentLoaded",function(){

    console.log("hallo")




    //planetes systeme solaire
    let Mercure = {

        titre: "Mercure",

        description: "<p><strong>Mercure</strong> est la planète la plus proche du Soleil.<br>Bouillante le jour (jusqu'à +430°C),glacée la nuit (jusqu'à -180°C)<br><br><br><strong>Une journée y dure plus longtemps qu’une année !</strong><br><br>-> Elle met 59 jours terrestres pour tourner sur elle-même, mais seulement 88 jours<br> pour faire le tour du Soleil.-> Elle met 59 jours terrestres pour tourner sur elle-même, mais seulement 88 jours<br> pour faire le tour du Soleil.</p>",
        
        source: "Pixabay -> https://pixabay.com/fr/",

        src: "Images/mercury-6618698_1280.jpg"

    }

    let Venus = {

        titre: "Vénus",

        description: "<p><strong>Vénus</strong> est la deuxième planète la plus proche du Soleil.<br><br>Sa température moyenne à la surface est de +460°C (planète la plus chaude).<br><br><br><strong>Elle tourne à l’envers !</strong><br><br>-> Vénus a une rotation rétrograde : le Soleil s’y lève à l’ouest <br>et se couche à l’est.</p>",

        source: "NASA -> https://science.nasa.gov/photojournal/",

        src: "Images/1080px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_(cropped).jpg"

    }

    let LaTerre = {

        titre: "La Terre",

        description: "<p><strong>La Terre</strong> est la troisième planète la plus proche du Soleil.<br><br>Sa température moyenne à la surface est de +15°C.<br><br><br><strong>Elle n’est pas parfaitement ronde !</strong><br><br>-> La Terre est légèrement aplatie aux pôles à cause de sa rotation : c’est un géoïde.</p>",

        source: "NASA -> https://science.nasa.gov/earth/earth-observatory/",

        src: "Images/960px-Earth_Western_Hemisphere.jpg"

    }

    let Mars = {

        titre: "Mars",

        description:"<p><strong>Mars</strong> est la quatrième planète la plus proche du Soleil. <br><br>Sa température moyenne à la surface est de -63°C. <br><br><br><strong>Elle possède le plus grand volcan du Système solaire !</strong><br><br>-> Olympus Mons est presque 3 fois plus haut que l’Everest.</p>",

        source: "ESA & MPS for OSIRIS Team -> https://commons.wikimedia.org/wiki/Mars#/media/File:OSIRIS_Mars_true_color.jpg",

        src: "Images/960px-OSIRIS_Mars_true_color.jpg"

    }

    let Jupiter = {

        titre: "Jupiter",

        description: "<p><strong>Jupiter</strong> est la cinquième planète la plus proche du Soleil. <br><br>Sa température moyenne à la surface est de -145°C. <br><br><br><strong>Elle pourrait contenir toutes les autres planètes !</strong><br><br>-> Son volume est si immense (1,431 28 × 1015 km3 soit 1 321,3 Terres) qu’on pourrait y <br> loger toutes les planètes du Système solaire… avec de la place en plus.</p>",

        source: "pixabay.com -> https://pixabay.com/fr/",

        src: "Images/jupiter-5263284_1280.jpg"

    }

    let Saturne = {

        titre: "Saturne",

        description: "<p><strong>Saturne</strong> est la sixième planète la plus proche du Soleil. <br><br>Sa température moyenne à la surface est de -178°C. <br><br><br><strong>Elle flotterait sur l’eau (en théorie) !</strong><br><br>-> Sa densité moyenne est plus faible que celle de l’eau.</p>",

        source: "pixabay.com -> https://pixabay.com/fr/",

        src: "Images/astronomy-6924051_1280.jpg",
        
    }

    let Uranus = {

        titre: "Uranus",

        description: "<p><strong>Uranus</strong> est la septième planète la plus proche du Soleil. <br><br>Sa température moyenne à la surface est de -224°C (planète la plus froide). <br><br><br><strong>Elle roule autour du Soleil !</strong><br><br>-> Son axe est incliné à ~98°, ce qui la fait tourner presque couchée sur le côté.</p>",

        source: "pixabay.com -> https://pixabay.com/fr/",

        src: "Images/uranus-11625_1280.jpg"

    }

    let Neptune = {

        titre: "Neptune",

        description: "<p><strong>Neptune</strong> est la huitième planète la plus proche du Soleil. <br><br>Sa température moyenne à la surface est de -214°C. <br><br><br><strong>Elle a les vents les plus rapides connus !</strong><br><br>-> Les vents y dépassent 2 000 km/h, plus rapides que la vitesse du son sur Terre.</p>",

        source: "pixabay.com -> https://pixabay.com/fr/",

        src: "Images/neptune-67537_1280.jpg"

    }


    //exoplanetes

    let ProximaCenturib = {

        titre: "Proxima Centauri b",

        description: "<p><strong>Promima Centuri b</strong> est une planète situé à environ 4,24 années-lumière de la Terre.<br><br>Elle est plus massif que la Terre et orbite dans la zone habitable de son Étoile Proxima Centuri.<br><br><br><strong>La voisine la plus proche de notre Soleil !</strong><br><br>-> Même si Proxima Centauri b est proche en termes astronomiques, un voyage avec la technologie actuelle prendrait des dizaines de milliers d’années pour l’atteindre.</p>",

        source: "ESO -> https://www.eso.org/public/images/ann16056a/",

        src: "Images/ann16056a.jpg"

    }


    let Kepler186f = {

        titre: "Kepler 186 f",

        description: "<p><strong>Kepler 186 f</strong> est une planète situé à environ 582 années-lumière de la Terre.<br><br>Elle fait presque la même taille que la Terre (1,1x le rayon de la Terre) et orbite dans la zone habitable de son Étoile Kepler 186 f.<br><br><br><strong>Elle a marqué un tournant dans le monde de la recherche spatiale !</strong><br><br>-> Kepler-186f a été la première exoplanète de taille comparable à la Terre découverte dans la zone habitable d’une autre étoile, ce qui a ouvert de grandes perspectives pour la recherche de vie extraterrestre.</p>",

        source: "NASA -> https://commons.wikimedia.org/wiki/Category:Kepler-186_f?uselang=fr#/media/File:Kepler186f-ArtistConcept-20140417.jpg",

        src: "Images/1280px-Kepler186f-ArtistConcept-20140417.jpg"
    };

    let TRAPPIST1e = {

        titre: "TRAPPIST-1e",

        description: "<p><strong>TRAPPIST-1e</strong> est une planète situé à environ 39 années-lumière de la Terre.<br><br>Elle fait presque la même taille que la Terre (0,92x le rayon de la Terre) et orbite dans la zone habitable de son Étoile TRAPPIST-1.<br><br><br><strong>Une planète au cœur d’un système extraordinaire !</strong><br><br>-> TRAPPIST-1e fait partie d’un système de sept planètes telluriques, toutes très proches les unes des autres, si bien qu’un lever de soleil sur TRAPPIST-1e pourrait être visible depuis plusieurs planètes voisines !</p>",

        source: "NASA -> https://science.nasa.gov/photojournal/trappist-1-planet-lineup-updated-feb-2018/",

        src: "Images/TRAPPIST-1e_artist_impression_2018.jpg"
    };

    let Pegasib = {

        titre: "51 Pegasi b",

        description: "<p><strong>51 Pegasi b</strong> est une planète situé à environ 50,9 années-lumière de la Terre.<br><br>Elle est beaucoup plus massif que la Terre (0,92x le rayon de la Terre) et orbite dans la zone habitable de son Étoile 51 Pegasi b.<br><br><br><strong>La pionnière des exoplanètes !</strong><br><br>-> 51 Pegasi b a été la première exoplanète découverte autour d’une étoile de type solaire en 1995, marquant le début de l’ère moderne de la recherche d’exoplanètes.</p>",

        source: "ESO -> https://www.eso.org/public/russia/images/eso1517a/",

        src: "Images/960px-Artist_impression_of_the_exoplanet_51_Pegasi_b.jpg"
    };

    // trous noirs stellaires

    let CygnusX1 = {
        titre: "Cygnus X-1",
        description: "<p><strong>Cygnus X-1</strong> est un trou noir stellaire situé à environ 6 070 années-lumière de la Terre.<br><br>Le rayon de son horizon des évènement est d'environ de 62km et sa masse est d'environ 21x celle du Soleil.<br><br><br><strong>Un des trous noirs les plus célèbres !</strong><br><br>-> Cygnus X-1 a été le premier trou noir candidat confirmé grâce à ses émissions de rayons X et à ses effets gravitationnels sur son étoile compagnon, devenant un objet clé pour comprendre les trous noirs stellaires.</p>",
        source: "NASA -> https://www.nasa.gov/",
        src: "Images/1016px-Black_hole_Cygnus_X-1.jpg"
    };

    let StarGROJ165540 = {

        titre: "Star GRO J1655-40",

        description: "<p><strong>Star GRO J1655-40</strong> est un trou noir stellaire situé à environ 11 000 années-lumière de la Terre.<br><br>Le rayon de son horizon des évènement est d'environ de 19km et sa masse est d'environ 6,3x celle du Soleil.<br><br><br><strong>Un trou noir qui fait parler de lui !</strong><br><br>-> GRO J1655-40 est célèbre pour avoir été le premier trou noir observé en train de lancer des jets de matière à grande vitesse, ce qui a permis aux astronomes d’étudier les phénomènes extrêmes liés aux trous noirs stellaires.</p>",

        source: "NASA -> https://chandra.cfa.harvard.edu/photo/2006/j1655/",

        src: "Images/lossy-page1-1458px-GRO_J1655-40-_NASA's_Chandra_Answers_Black_Hole_Paradox_(2006-j1655_-_j1655_ill_disk).tiff.jpg"
    };

    // trou noir supermassif

    let SagittariusA = {
        titre: "Sagittarius A*",

        description: "<p><strong>Sagittarius A*</strong> est un trou noir supermassif situé au centre de notre galaxie, la Voie Lactée, à environ 26 700 années-lumière de la Terre.<br><br>Le rayon de son horizon des évènement est d'environ de 17,7 millions de km et sa masse est d'environ 4 millions de fois celle du Soleil.<br><br><br><strong>Le géant caché au cœur de la Voie Lactée !</strong><br><br>-> Malgré sa masse énorme, Sagittarius A* est relativement « petit » comparé à sa force gravitationnelle, et les astronomes peuvent observer les mouvements des étoiles autour de lui pour mieux comprendre la nature des trous noirs supermassifs.</p>",

        source: "EHT Collaboration -> https://www.eso.org/public/images/eso2208-eht-mwa/",

        src: "Images/1080px-Primera_imagen_de_Sgr_A__tomada_por_el_Event_Horizon_Telescope_Collaboration.jpg"
    };

    let Ton618 = {

        titre: "Ton 618",

        description: "<p><strong>Ton 618</strong> est un trou noir supermassif situé à environ 10,4 milliards d'années-lumière de la Terre.<br><br>Le rayon de son horizon des évènement est d'environ de 190 milliards de km (soit 43x plus grand que notre système solaire) et sa masse est d'environ 66 milliards de fois celle du Soleil.<br><br><br><strong>Le colosse du cosmos !</strong><br><br>-> TON 618 est aussi un quasar ultra-lumineux, brillant des centaines de milliers de milliards de fois plus fort que le Soleil, car il attire de grandes quantités de matière qui chauffent et émettent une lumière intense en tombant vers le trou noir.</p>",

        source: "Pablo Carlos Budassi -> https://commons.wikimedia.org/wiki/File:Ton618.png#/media/File:Ton618.png",

        src: "Images/960px-Ton618.jpg"
    };




    let corpsCelestes = [

        // planetes systeme solaire
        Mercure,
        Venus,
        LaTerre,
        Mars,
        Jupiter,
        Saturne,
        Uranus,
        Neptune,

        // exoplanètes
        ProximaCenturib,
        Kepler186f,
        TRAPPIST1e,
        Pegasib,

        // trous noirs stellaires
        CygnusX1,
        StarGROJ165540,

        // trou noir supermassif
        SagittariusA,
        Ton618
    ];





})

