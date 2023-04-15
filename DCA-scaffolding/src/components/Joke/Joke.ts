import styles from "./Jokes.css"

export enum Attribute1 {
    "categories" = "categories",
    "icon" = "icon",
    "value" = "value"

}

class Joke extends HTMLElement {
    categories?: string;
    icon?: string;
    value?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute1, null> = {
            categories: null,
            icon: null,
            value: null
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute1,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``
                
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
                 
                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="">
                <section>
                <p>${this.value}</p>
                <img src="${this.icon}" alt="">
                </section>
                `;
            }
        }
    }

customElements.define("my-joke", Joke);
export default Joke;