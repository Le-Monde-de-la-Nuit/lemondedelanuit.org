import '../scss/index.scss';
import home from "./pages/home";

export const appDiv = document.getElementById('app');
if (window.location.pathname == "/") {
    home();
}