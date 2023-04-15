import styles from "./Categories.css"

export enum Attribute {
    "name" = "name",

}

class Categories extends HTMLElement {
    name?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            name: null,
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
        propName: Attribute,
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
                <button>${this.name}</button>
                </section>
                `;
            }
        }
    }

customElements.define("my-categories", Categories);
export default Categories;