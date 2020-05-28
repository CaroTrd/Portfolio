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

