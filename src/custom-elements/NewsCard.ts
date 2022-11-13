export default class NewsCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const content = this.generateContent(this.innerHTML, 250);

        const image = this.getAttribute('src');
        const link = this.getAttribute('href');
        const title = this.getAttribute('title');
        const alt = this.getAttribute('alt');
        let html = "<div class='card news-card'>";
        html += `<div class='card-header'><img alt="${alt}" src="${image}" class="card-image"></div>`;
        html += `<div class='card-body'><h3 class="card-title">${title}`;
        html += `<a href="${link}"><span aria-hidden="true" class="card-invisible-link"></span></a></h3>`;
        html += `<div class="card-content">${content}</div></div></div>`;
        this.innerHTML = html;
    }

    private generateContent(content: string, lengthMax: number = 150): string {
        if (content.length <= lengthMax) {
            return content;
        }
        const last = content.substring(lengthMax-1, lengthMax)
        if (last === ".") {
            return content.substring(0, lengthMax) + "..";
        } else if (last === " ") {
            return content.substring(0, lengthMax-1) + "...";
        }
        return content.substring(0, lengthMax) + "...";
    }
}