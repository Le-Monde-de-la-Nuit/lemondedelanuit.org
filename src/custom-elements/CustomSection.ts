export default class CustomSection extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const content = this.innerHTML;
        const title = this.getAttribute('title');
        const isLarger = this.hasAttribute('is-larger');
        if (isLarger) {
            this.innerHTML = `<section class="section"><h2 class="is-2 title little-padding larger">${title}</h2>${content}</section>`;
        } else {
            this.innerHTML = `<section class="section"><h2 class="is-2 title little-padding">${title}</h2>${content}</section>`;
        }
    }
};
