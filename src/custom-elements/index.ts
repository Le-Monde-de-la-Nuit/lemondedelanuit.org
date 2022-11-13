import CustomSection from "./CustomSection";
import NewsCard from "./NewsCard";

export default function registerCustomElement() {
    customElements.define('custom-section', CustomSection);
    customElements.define('news-card', NewsCard);
}