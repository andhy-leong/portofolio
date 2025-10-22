// Menu hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    document.querySelector(".nav-links").classList.remove("show");
  });
});

// Thème clair/sombre
const themeToggle = document.createElement("button");
themeToggle.id = "theme-toggle";
themeToggle.textContent = "☀️ / 🌙";
document.querySelector("nav").appendChild(themeToggle);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// --- Traduction de la page ---
const translations = {
  fr: {
    "nav-accueil": "Accueil",
    "nav-apropos": "À propos",
    "nav-formations": "Formations",
    "nav-competences": "Compétences",
    "nav-projets": "Projets",
    "titre": "RAHARISON Leong Foc Sing Andhy",
    "sous-titre": "Étudiant en troisième année de BUT Informatique",
    "apropos-titre": "À propos de moi",
    "apropos-texte1": "Je suis un étudiant en troisième année de BUT Informatique, spécialisé dans le développement d'applications et de logiciels.",
    "apropos-texte2": "Au cours de ma formation et à travers divers projets académiques, j'ai acquis de nombreuses compétences en développement backend et frontend. J'ai également exploré plusieurs autres domaines, tels que le réseau, la cryptographie et les bases de l'intelligence artificielle.",
    "formations-titre": "Formations",
    "but": "BUT Informatique – IUT Nice Côte d'Azur",
    "but-parcours": "Parcours : Développement d'applications et de logiciels",
    "bac": "Baccalauréat STMG – Lycée “Collège de France”",
    "bac-specialites": "Spécialités : Mercatique et Droit/ Economie",
    "competences-titre": "Compétences",
    "h3-langages": "Langages",
    "h3-web": "Web & Mobile",
    "h3-db": "Base de données",
    "h3-outils": "Outils & Environnement",
    "h3-reseaux": "Réseaux & Sécurité",
    "li-rsa": "Chiffrement RSA",
    "h3-os": "Systèmes d’exploitation",
    "projets-titre": "Mes Projets",
    "paires-desc": "Développement d'un jeu de paires en langage C, en utilisant la bibliothèque ncurses pour l'interface terminal.",
    "websaver-desc": "Réalisation d'un outil en Java pour télécharger l'intégralité d'un site web (fichiers HTML, CSS et JS) à partir de son URL.",
    "webcompress-desc": "Extension du projet WebPageSaver permettant de compresser les fichiers téléchargés afin d'optimiser le stockage.",
    "ecommerce-desc": "Conception d'une plateforme e-commerce structurée autour du pattern d'architecture MVVM pour garantir une séparation claire des responsabilités.",
    "erp-desc": "Création d'un ERP pour la gestion d'une station-service, avec un front-end réactif en Vue.js et un back-end en PHP.",
    "blindtest-desc": "Réalisation d'une application de blind test interactive qui interroge l'API de Deezer pour les extraits musicaux et gère les réponses en temps réel via des appels REST.",
    "quiz-desc": "Architecture d'une application de quiz full-stack, combinant un front-end en React et un back-end robuste en Java (Spring Boot) qui communiquent via une API REST.",
    "mouton-desc": "Conception d'un jeu de cartes multijoueur, incluant une gestion réseau complexe pour synchroniser un plateau central, des écrans de joueurs, un mode espion et des bots à difficulté variable.",
    "multimedia-desc": "Tous mes projets réalisés en initiation multimédia.",
    "learnmalagasy-desc": "Conception d'une application web d'apprentissage du malgache, développée entièrement en HTML, CSS et JavaScript pur. Toute la logique de progression par niveaux, les leçons interactives et les quiz sont gérés côté client, avec une sauvegarde de l'avancement de l'utilisateur dans le localStorage du navigateur.",
    "langues-titre": "Langues",
    "lang-fr": "Français",
    "niveau-fr": "Langue maternelle",
    "lang-en": "Anglais",
    "niveau-en": "Courant (B2)",
    "lang-mg": "Malgache",
    "niveau-mg": "Langue maternelle",
    "lang-zh": "Chinois (cantonnais)",
    "niveau-zh": "Intermédiaire (B1)",
    "lang-es": "Espagnol",
    "niveau-es": "Débutant (A2)",
    "footer-contact": "Contact",
    "footer-location": "Nice, France",
    "footer-suivez": "Suivez-moi",
    "cv-download": "Télécharger mon CV",
    "cv-download-header": "Mon CV"
  },
  en: {
    "nav-accueil": "Home",
    "nav-apropos": "About",
    "nav-formations": "Education",
    "nav-competences": "Skills",
    "nav-projets": "Projects",
    "titre": "RAHARISON Leong Foc Sing Andhy",
    "sous-titre": "Third-year Computer Science Student",
    "apropos-titre": "About Me",
    "apropos-texte1": "I am a third-year student in Computer Science, specializing in application and software development.",
    "apropos-texte2": "Throughout my education and various academic projects, I have acquired numerous skills in backend and frontend development. I have also explored several other fields, such as networking, cryptography, and the fundamentals of artificial intelligence.",
    "formations-titre": "Education",
    "but": "Bachelor’s degree in Computer Science – IUT Nice Côte d'Azur",
    "but-parcours": "Major: Application and Software Development",
    "bac": "High School Diploma (STMG) – “Collège de France” High School",
    "bac-specialites": "Specialties: Marketing and Law/Economics",
    "competences-titre": "Skills",
    "h3-langages": "Languages",
    "h3-web": "Web & Mobile",
    "h3-db": "Databases",
    "h3-outils": "Tools & Environment",
    "h3-reseaux": "Networks & Security",
    "li-rsa": "RSA Encryption",
    "h3-os": "Operating Systems",
    "projets-titre": "My Projects",
    "paires-desc": "Developed a memory game in C, featuring a terminal-based user interface powered by the ncurses library.",
    "websaver-desc": "Built a Java-based tool to download the entire content of a website, including all HTML, CSS, and JavaScript files, from a given URL.",
    "webcompress-desc": "Enhanced the WebPageSaver project by adding an automatic file compression feature to optimize storage space.",
    "ecommerce-desc": "Engineered an e-commerce platform using the MVVM architectural pattern to ensure a clear separation of concerns and maintainable code.",
    "erp-desc": "Created a comprehensive ERP system for managing a gas station, featuring a responsive front-end built with Vue.js and a back-end powered by PHP.",
    "blindtest-desc": "Developed an interactive music quiz application that queries the Deezer API for song clips and manages real-time answers through REST API calls.",
    "quiz-desc": "Architected a full-stack quiz application combining a React front-end with a robust Java (Spring Boot) back-end, communicating via a REST API.",
    "mouton-desc": "Designed a multiplayer card game with complex network management to synchronize a central game board, player screens, a spectator mode, and bots with varying difficulty levels.",
    "multimedia-desc": "All my projects from the multimedia initiation course.",
    "learnmalagasy-desc": "Designed a web application for learning Malagasy, developed entirely in pure HTML, CSS, and JavaScript. All logic for level progression, interactive lessons, and quizzes is handled client-side, with user progress saved in the browser's localStorage.",
    "langues-titre": "Languages",
    "lang-fr": "French",
    "niveau-fr": "Native",
    "lang-en": "English",
    "niveau-en": "Fluent (B2)",
    "lang-mg": "Malagasy",
    "niveau-mg": "Native",
    "lang-zh": "Chinese (Cantonese)",
    "niveau-zh": "Intermediate (B1)",
    "lang-es": "Spanish",
    "niveau-es": "Beginner (A2)",
    "footer-contact": "Contact",
    "footer-location": "Nice, France",
    "footer-suivez": "Follow me",
    "cv-download": "Download my Resume",
    "cv-download-header": "My Resume"
  },
  mg: {
    "nav-accueil": "Fandraisana",
    "nav-apropos": "Mombamomba ahy",
    "nav-formations": "Fiofanana",
    "nav-competences": "Fahaiza-manao",
    "nav-projets": "Tetikasa",
    "titre": "RAHARISON Leong Foc Sing Andhy",
    "sous-titre": "Mpiana-draharaha taona fahatelo amin'ny Siansa Informatika",
    "apropos-titre": "Mombamomba ahy",
    "apropos-texte1": "Mpiana-draharaha taona fahatelo amin'ny Siansa Informatika aho, manampahaizana manokana amin'ny famolavolana rindrambaiko sy fampiharana.",
    "apropos-texte2": "Nandritra ny fiofanako sy tamin'ny alalan'ny tetikasa isan-karazany, dia nahazo fahaiza-manao maro momba ny 'backend' sy 'frontend' aho. Nikaroka sehatra hafa koa aho, toa ny tambajotra, ny kriptografia, ary ny fototry ny faharanitan-tsaina artifisialy.",
    "formations-titre": "Fiofanana",
    "but": "Diplaoma Avo amin'ny Siansa Informatika – IUT Nice Côte d'Azur",
    "but-parcours": "Lalana: Famolavolana rindrambaiko sy fampiharana",
    "bac": "Bakalôrea STMG – Lisea “Collège de France”",
    "bac-specialites": "Manokana: Varotra sy Lalàna/Toekarena",
    "competences-titre": "Fahaiza-manao",
    "h3-langages": "Fiteny Fandaharana",
    "h3-web": "Tranonkala & Finday",
    "h3-db": "Tahirinkevitra",
    "h3-outils": "Fitaovana & Tontolo Iainana",
    "h3-reseaux": "Tambajotra & Fiarovana",
    "li-rsa": "Fanafenana RSA",
    "h3-os": "Rafitra Fiasana",
    "projets-titre": "Ireo Tetikasako",
    "paires-desc": "Famolavolana lalao mitady tsiroaroa amin'ny fiteny C, mampiasa ny tranomboky ncurses ho an'ny seho eo amin'ny terminal.",
    "websaver-desc": "Famoronana fitaovana amin'ny Java ahafahana maka ny votoatin'ny tranonkala iray manontolo avy amin'ny URL-ny.",
    "webcompress-desc": "Fanitarana ny tetikasa WebPageSaver amin'ny alàlan'ny famatrarana ho azy ireo rakitra nalaina mba hitsitsiana toerana.",
    "ecommerce-desc": "Famolavolana sehatra e-varotra miorina amin'ny maodely MVVM mba hiantohana ny fizarana andraikitra mazava.",
    "erp-desc": "Famoronana ERP ho an'ny fitantanana tobin-tsolika, miaraka amin'ny Vue.js ho an'ny 'front-end' ary PHP ho an'ny 'back-end'.",
    "blindtest-desc": "Fanaovana rindrambaiko 'blind test' mifandray amin'ny API an'i Deezer mba hakana hira sy hitantanana valiny haingana.",
    "quiz-desc": "Fananganana rindrambaiko 'quiz' feno, mampifandray ny React amin'ny 'front-end' sy Java (Spring Boot) amin'ny 'back-end'.",
    "mouton-desc": "Famolavolana lalao karatra misy rafitra tambajotra mba hampifandrindrana ny sehatra foibe sy ny efijerin'ny mpilalao.",
    "multimedia-desc": "Ny tetikasako rehetra tamin'ny fampidirana amin'ny haino aman-jery.",
    "learnmalagasy-desc": "Famolavolana rindrambaiko an-tranonkala hianarana teny malagasy, namboarina tamin'ny HTML, CSS, ary JavaScript madio tanteraka. Ny lojika rehetra momba ny fandrosoana isan-tsokajiny, ny lesona ifandrimbonana, ary ny quiz dia tantanina eo amin'ny lafiny client, ary voatahiry ao amin'ny localStorage ny fivoaran'ny mpampiasa.",
    "langues-titre": "Fiteny",
    "lang-fr": "Frantsay",
    "niveau-fr": "Teny nibeazana",
    "lang-en": "Anglisy",
    "niveau-en": "Mahay (B2)",
    "lang-mg": "Malagasy",
    "niveau-mg": "Teny nibeazana",
    "lang-zh": "Sinoa (Kantoniana)",
    "niveau-zh": "Antonony (B1)",
    "lang-es": "Espaniola",
    "niveau-es": "Vao manomboka (A2)",
    "footer-contact": "Fifandraisana",
    "footer-location": "Nice, Frantsa",
    "footer-suivez": "Manaraha ahy",
    "cv-download": "Alao ny CV-ko",
    "cv-download-header": "Ny CV-ko"
  }
};

// --- Carousel du Footer ---
document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.querySelector(".carousel-container");
  const slide = document.querySelector(".carousel-slide");

  if (carouselContainer && slide) {
    const images = document.querySelectorAll(".carousel-slide img");

    if (images.length > 1) {
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
      let counter = 0;
      const size = images[0].clientWidth;
      let slideInterval; 

      const goToNext = () => {
        if (counter >= images.length - 1) {
          counter = -1; 
        }
        slide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      };

      const startSlideShow = () => {
        slideInterval = setInterval(goToNext, 3000);
      };

      const stopSlideShow = () => {
        clearInterval(slideInterval);
      };

      nextBtn.addEventListener("click", () => {
        goToNext();
        stopSlideShow(); 
        startSlideShow(); 
      });

      prevBtn.addEventListener("click", () => {
        if (counter <= 0) {
          counter = images.length; 
        }
        slide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        stopSlideShow();
        startSlideShow(); 
      });

      carouselContainer.addEventListener('mouseenter', stopSlideShow);
      carouselContainer.addEventListener('mouseleave', startSlideShow);

      startSlideShow();
    }
  }
});

// --- Sélecteur de langue ---
document.getElementById("lang-select").addEventListener("change", e => {
  const lang = e.target.value;
  const cvBtnFooter = document.getElementById("cv-download-btn");
  const cvBtnHeader = document.getElementById("cv-header-btn");

  // Met à jour tous les éléments textuels
  document.querySelectorAll("[data-text]").forEach(el => {
    const key = el.getAttribute("data-text");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Modifie le CV en fonction de la langue
  if (lang === "en") {
    // Bouton du footer
    cvBtnFooter.href = "ressources/CV_RAHARISON_LEONG_EN.pdf";
    cvBtnFooter.setAttribute("download", "Resume_Andhy_RAHARISON.pdf");
    // Bouton du header
    cvBtnHeader.href = "ressources/CV_RAHARISON_LEONG_EN.pdf"; 
    cvBtnHeader.setAttribute("download", "Resume_Andhy_RAHARISON.pdf");
  } else {
    // Bouton du footer
    cvBtnFooter.href = "ressources/CV_RAHARISON_LEONG_FR.pdf";
    cvBtnFooter.setAttribute("download", "CV_Andhy_RAHARISON.pdf");
    // Bouton du header 
    cvBtnHeader.href = "ressources/CV_RAHARISON_LEONG_FR.pdf";
    cvBtnHeader.setAttribute("download", "CV_Andhy_RAHARISON.pdf");
  }
});
