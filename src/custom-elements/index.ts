import CustomSection from "./CustomSection";
import NewsCard from "./NewsCard";
import MarkdownParser from "./MarkdownParser";

export default function registerCustomElement() {
    customElements.define('custom-section', CustomSection);
    customElements.define('news-card', NewsCard);
    customElements.define('markdown-parser', MarkdownParser);
}