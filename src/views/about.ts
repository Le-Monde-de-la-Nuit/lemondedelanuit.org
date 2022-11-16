import {appDiv as app} from "../main";

export default function about() {
    if (app === null) {
        throw new Error("App div not found");
    }
    fetch(window.location.origin + "/page/about.md").then(async response => {
        // @ts-ignore
        app.innerHTML = `
        <custom-section title="À propos" is-larger>
            <markdown-parser is-larger>
                ${await response.text()}
            </markdown-parser>
        </custom-section>
        `
    });
}
