function buttonNav() {
  const x = document.getElementById("mobileNavbar");
  const y = document.getElementById("header");
  if (x.className === "nav" && y.className === "container-navbar unfold") {
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
  const title = document.querySelector(".aboutMeTitle");
  const paragraph1 = document.querySelector(".aboutMeFirst");
  const paragraph2 = document.querySelector(".aboutMeSecond");

  // language translation
  const data = {
    en: {
      title: "Welcome!",
      para1: "I am Carolina",
      para2: "and I am front-end web developer",
    },
    fr: {
      title: "Bienvenu(e)!",
      para1: "Je m'appelle Carolina",
      para2: "et je suis un développeur front-end",
    },
    es: {
      title: "Bienvenido/a!",
      para1: "Me llamo Carolina",
      para2: "y soy desarrolladora web",
    },
  };


  // define language reload onclick illiteration
  link.forEach((element) => {
    const x = document.querySelector(".container-navbar");
    element.addEventListener("click", () => {
      x.querySelector(".active").classList.remove("active");
      element.classList.add("active");
      const y = element.getAttribute("language");
      console.log(data)
      title.textContent = data[y].title;
      paragraph1.textContent = data[y].para1;
      paragraph2.textContent = data[y].para2;
    });
  });
})();