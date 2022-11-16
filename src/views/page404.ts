import {appDiv as app} from "../main";

export default function page404() {
    if (app === null) {
        throw new Error("App div not found");
    }
    app.innerHTML = `
    <custom-section title="Erreur 404">
        <p>
            Impossible de trouver la page.
        </p>
        <p>
            <a href="/" class="btn mt-2">Accueil</a>        
        </p>
    </custom-section>
    `
}