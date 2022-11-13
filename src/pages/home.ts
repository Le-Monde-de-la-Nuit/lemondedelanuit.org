import {appDiv as app} from "../main";

export default function home() {
    if (app === null) {
        return;
    }
    app.innerHTML = `
    <h2 class="is-2 title little-padding">Accueil</h2>
    <p class="">Bienvenue sur le site de l'association</p>
    `;
}