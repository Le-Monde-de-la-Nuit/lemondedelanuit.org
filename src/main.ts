import '../scss/index.scss';
import home from "./views/home";
import registerCustomElement from "./custom-elements";

registerCustomElement();

export const appDiv = document.getElementById('app');
if (window.location.pathname == "/") {
    home();
}

const externalLinks = document.querySelectorAll('a.is-external');
externalLinks.forEach((link) => {
    link.setAttribute('target', '_blank');
});
