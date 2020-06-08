const data = require("../components/data/languages.json");

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const executeScroll = (targetRef) => scrollToRef(targetRef);

const languages = () => {
  const link = document.querySelectorAll("a");
  let x = document.querySelector(".container-navbar");
  let title = document.querySelector("#headerTitle");
  const paragraph1 = document.querySelector("#headerFirst");
  const paragraph2 = document.querySelector("#headerSecond");
  const paragraph3 = document.querySelector("#headerThird");
  const paragraph4 = document.querySelector("#resumeTitle");
  const paragraph5 = document.querySelector("#portfolioTitle");
  const paragraph6 = document.querySelectorAll(".buttonSections");
  const navbar = document.querySelectorAll(".nav-link");
  console.log(data);
  console.log(link, window.location);
  link.forEach((element) => {
    console.log(element.attributes);
    if (element.attributes.href.value === "#") {
      
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
        paragraph5.textContent = data[y].para6;
        paragraph6.forEach((item) => (item.textContent = data[y].para5));
      });
    }
  });
};

module.exports = { languages, executeScroll };
