function buttonNav() {
  const x = document.getElementById("mobileNavbar");
  const y = document.getElementById("header");
  if (
    x.className === "nav" &&
    y.className === "container-navbar unfold" &&
    x.className === "nav"
  ) {
    x.className += " close";
    y.className += " fold";
  } else {
    x.className = "nav";
    y.className = "container-navbar unfold";
  }
}

(function () {
  //define language reload
  const link = document.querySelectorAll("a");
  const title = document.querySelector("#aboutMeTitle");
  const paragraph1 = document.querySelector("#aboutMeFirst");
  const paragraph2 = document.querySelector("#aboutMeSecond");
  const paragraph3 = document.querySelector("#aboutMeThird");
  const paragraph4 = document.querySelector("#resumeTitle");
  const paragraph5 = document.querySelector("#resumeFirst");

  // language translation
  const data = {
    en: {
      title: "Hello,",
      para1: "I am Carolina.",
      para2: "I am a front-end web developer.",
      para3: "Welcome!",
      para4: "Resume",
      para5: "Let's go",
    },
    fr: {
      title: "Salut,",
      para1: "Je m'appelle Carolina.",
      para2: "Je suis un développeur front-end.",
      para3: "Bienvenu(e)!",
      para4: "Curriculum vitae",
      para5: "C'est parti",
    },
    es: {
      title: "Hola,",
      para1: "Me llamo Carolina.",
      para2: "Soy desarrolladora web.",
      para3: "Bienvenido/a!",
      para4: "Curriculum vitae",
      para5: "Ingresar",
    },
  };

  // define language reload onclick illiteration
  link.forEach((element) => {
    const x = document.querySelector(".container-navbar");
    if (element.attributes.href.value == "#") {
      element.addEventListener("click", () => {
        x.querySelector(".active").classList.remove("active");
        element.classList.add("active");
        const y = element.getAttribute("language");
        title.textContent = data[y].title;
        paragraph1.textContent = data[y].para1;
        paragraph2.textContent = data[y].para2;
        paragraph3.textContent = data[y].para3;
        paragraph4.textContent = data[y].para4;
        paragraph5.textContent = data[y].para5;
      });
    }
  });
})();

/* Scroll */

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

function loop() {
  var elementsToShow = document.querySelectorAll(".show-on-scroll");
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
      element.classList.remove("not-visible");
    } else {
      element.classList.remove("is-visible");
      element.classList.add("not-visible");
    }
  });
  scroll(loop);
}

window.addEventListener("scroll", function () {
  loop();
  console.log("Scrolling");
});


