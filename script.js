const closeBtn = document.querySelector(".close-button");
const menuBtnMobile = document.querySelector(".menu-button"); //nodo que despliega menu mobile

//eventos de abrir y cerrar menu mobile
const toogleMobileNavigation = () => {
  let element = document.getElementById("mobile-navigation");
  element.classList.toggle("mobile-navigation__open");
};

closeBtn.addEventListener("click", toogleMobileNavigation);
menuBtnMobile.addEventListener("click", toogleMobileNavigation);
//******************************************************************//

const linksRender = document.querySelectorAll(".link-render"); //etiquetas a de navegacion
const main = document.querySelector("main"); //main que se renderiza
//const links = document.querySelectorAll('a[href^="#"]'); //etiquetas de navegacion, otra forma de seleccionarlo//

const changeClassesAnchorTag = () => {
  linksRender.forEach((e) =>
    e.addEventListener("click", toogleMobileNavigation)
  );
  linksRender.forEach((element, i) => {
    element.addEventListener("click", (evt) => {
      evt.preventDefault();

      linksRender.forEach((element) => {
        element.classList.remove("mobile-navigation--item__active");
        element.classList.remove("navigation--item__active");
      });

      let data = evt.target.getAttribute("data-page");

      let seleccionMobile = document.querySelector(
        `div.mobile-navigation a[data-page='${data}']`
      );
      seleccionMobile.classList.add("mobile-navigation--item__active");

      let seleccion = document.querySelector(
        `nav.navigation a[data-page='${data}']`
      );
      seleccion.classList.add("navigation--item__active");

      fetch(`${data}.html`)
        .then((response) => response.text())
        .then((data) => (main.innerHTML = `${data}`));
    });
  });
};

const asincrona = async () => {
  fetch("./home.html")
    .then((response) => response.text())
    .then((data) => (main.innerHTML = data));
};

const navigation = document.querySelector(".navigation");

document.addEventListener("DOMContentLoaded", async () => {
  asincrona();
  changeClassesAnchorTag();
});
