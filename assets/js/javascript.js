let x = document.querySelector(".container-navbar");
const link = document.querySelectorAll("a");
let title = document.querySelector("#headerTitle");
const paragraph1 = document.querySelector("#headerFirst");
const paragraph2 = document.querySelector("#headerSecond");
const paragraph3 = document.querySelector("#headerThird");
const paragraph4 = document.querySelector("#resumeTitle");
const paragraph5 = document.querySelectorAll(".buttonSections");
const paragraph6 = document.querySelector("#portfolioTitle");
const navbar = document.querySelectorAll(".nav-link");
let header = document.querySelector("header");
let section = document.querySelectorAll("section");

(function () {
  // language translation
  const data = {
    en: {
      title: "Hello,",
      para1: "I am Carolina.",
      para2: "I am a front-end web developer.",
      para3: "Welcome!",
      para4: "Resume",
      para5: "Let's go",
      para6: "Portfolio",
      nav1: "Resume",
      nav2: "Portfolio"
    },
    fr: {
      title: "Salut,",
      para1: "Je m'appelle Carolina.",
      para2: "Je suis un développeur web front-end.",
      para3: "Bienvenu(e)!",
      para4: "Curriculum vitae",
      para5: "C'est parti",
      para6: "Portfolio",
      nav1: "Curriculum vitae",
      nav2: "Portfolio"
    },
    es: {
      title: "Hola,",
      para1: "Me llamo Carolina.",
      para2: "Soy desarrolladora web front-end.",
      para3: "Bienvenido/a!",
      para4: "Curriculum vitae",
      para5: "Ingresar",
      para6: "Portfolio",
      nav1: "Curriculum vitae",
      nav2: "Portfolio"
    },
  };

  // define language reload onclick illiteration
  link.forEach((element) => {
    if (element.attributes.href.value == "#") {
      element.addEventListener("click", () => {
        x.querySelector(".active").classList.remove("active");
        element.classList.add("active");
        const y = element.getAttribute("language");
        
        navbar[0].textContent = data[y].nav1;
        navbar[1].textContent = data[y].nav2;
        title.textContent = data[y].title;
        paragraph1.textContent = data[y].para1;
        paragraph2.textContent = data[y].para2;
        paragraph3.textContent = data[y].para3;
        paragraph4.textContent = data[y].para4;
        paragraph5.forEach((item) => (item.textContent = data[y].para5));
        paragraph6.textContent = data[y].para6;
      });
    }
  });
})();

/* Scroll */

function scrollBar() {
  let scrollPos = this.scrollY;
  let height = this.innerHeight / 1.5;

  if (this.scrollY > height) {
    document.body.classList.add("is-visible");
    x.classList.add("visible");

    section.forEach(
      (item) => (
        item.classList.add("visible")
      )
    );
  } else {
    document.body.classList.remove("is-visible");
    x.classList.remove("visible");
    /*title.style.fontSize = `${size}px`;*/
    section.forEach(
      (item) => (
        item.classList.remove("visible")
      )
    );
  }
}

window.addEventListener("scroll", scrollBar);
