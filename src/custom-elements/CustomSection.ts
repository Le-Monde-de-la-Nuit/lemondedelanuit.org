export default class CustomSection extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const content = this.innerHTML;
        const title = this.getAttribute('title');
        this.innerHTML = `<section class="section"><h2 class="is-2 title little-padding">${title}</h2>${content}</section>`;
    }
};
