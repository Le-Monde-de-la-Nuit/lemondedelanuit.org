import '../scss/index.scss';
import home from "./views/home";
import registerCustomElement from "./custom-elements";
import page404 from "./views/page404";
import about from "./views/about";

export const routes = [
    {
        path: '',
        component: home
    },
    {
        path: '404',
        component: page404
    },
    {
        path: 'about',
        component: about
    }
]

registerCustomElement();

export const appDiv = document.getElementById('app');
const path = window.location.pathname.substring(1);

let is404 = true;
routes.forEach(route => {
    if (route.path.startsWith(path) && path !== '') {
        route.component();
        is404 = false;
    }
});

if (is404 && path !== '') {
    const page404 = routes.find(route => route.path == '404');
    if (page404 === undefined) {
        throw new Error('404 page not found');
    }
    page404.component();
} else if (path === '') {
    home();
}

const externalLinks = document.querySelectorAll('a.is-external');
externalLinks.forEach((link) => {
    link.setAttribute('target', '_blank');
});
