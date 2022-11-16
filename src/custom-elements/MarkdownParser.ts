import {marked} from "marked";

export default class MarkdownParser extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const content = this.innerHTML;
        const parsed = marked.parse(content);
        this.innerHTML = this.finalParse(parsed, this.hasAttribute('is-larger'));
    }
    private finalParse(content: string, isLarger: boolean): string {
        while (content.includes('<pre><code>')) {
            content = content
                .replace('<pre><code>', '<p>')
                .replace('</code></pre>', '</p>');
        }
        while (content.includes('<a href="')) {
            content = content.replace('<a', '<a class="is-external" target="_blank"');
        }
        if (isLarger) {
            return this.parseLarger(content);
        }
        while (content.includes('<h2 id="')) {
            content = content.replace('<h2 id="', '<h2 class="title is-3" id="');
        }
        return content;
    }
    private parseLarger(content: string): string {
        while (content.includes('<p>')) {
            content = content.replace('<p>', '<p class="larger">');
        }
        while (content.includes('<h2 id="')) {
            content = content.replace('<h2 id="', '<h2 class="title is-3 larger" id="');
        }
        return content;
    }
};
