import '../scss/index.scss';
import home from "./views/home";
import registerCustomElement from "./custom-elements";
import page404 from "./views/page404";

export const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '404',
        component: page404
    }
]

registerCustomElement();

export const appDiv = document.getElementById('app');

let is404 = true;
routes.forEach(route => {
    if (window.location.pathname == route.path) {
        route.component();
        is404 = false;
    }
});

if (is404) {
    const page404 = routes.find(route => route.path == '404');
    if (page404 === undefined) {
        throw new Error('404 page not found');
    }
    page404.component();
}

const externalLinks = document.querySelectorAll('a.is-external');
externalLinks.forEach((link) => {
    link.setAttribute('target', '_blank');
});
