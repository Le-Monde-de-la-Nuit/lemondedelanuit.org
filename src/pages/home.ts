import {appDiv as app} from "../main";

export default function home() {
    if (app === null) {
        return;
    }
    app.innerHTML = `
        <h1>Home</h1>
    `;
}