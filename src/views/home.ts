import {appDiv as app} from "../main";

export default function home() {
    if (app === null) {
        throw new Error("App div not found");
    }
}
