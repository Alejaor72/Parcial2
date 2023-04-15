import "./components/export"
import styles from "./components/Joke/Joke.css"
import styles1 from "./components/Categories/Categories.css"
import {traer_categorias} from "./components/data"
import {traer_joke} from "./components/data"
import Joke, { Attribute1 } from "./components/Joke/Joke"
import Categories, { Attribute } from "./components/Categories/Categories"


class AppContainer extends HTMLElement {
    CategoriesList: Categories[] = [];
    JokesList: Joke[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const datachuck = await traer_categorias();
        console.log("datachuck",datachuck)
        datachuck.forEach((data: any) => {
            console.log("asdf",data);
        });

        //const datajoke = await traer_joke(category);
        //console.log("datajoke",datajoke)
        //datajoke.forEach((data: any) => {
        //    console.log("kkkkkk",data);
        //});

        datachuck.forEach((data: any) => {
            const CategorieCard = this.ownerDocument.createElement("my-categories") as Categories;
             CategorieCard.setAttribute(Attribute.name, data);
                this.CategoriesList.push(CategorieCard);
        });
        this.render(this.CategoriesList);

        //datajoke.forEach((data: any) => {
            //const JokeCard = this.ownerDocument.createElement("my-joke") as Joke;
             //JokeCard.setAttribute(Attribute.name, data);
                //this.JokesList.push(JokeCard);
        //});
        //this.render(this.JokesList);
    }

    render(CategoriesList:any) {
        const CategorieCards = this.ownerDocument.createElement("section")
        CategorieCards.className = "categoriesSection"        
        this.CategoriesList.forEach((CategorieCard) => {
            CategorieCards.appendChild(CategorieCard)
        });
        this.shadowRoot?.appendChild(CategorieCards);

        CategorieCards.addEventListener("click", async () =>{
            const jokes = await traer_joke(CategorieCards)
            console.log(jokes)

                const Joke = this.ownerDocument.createElement("my-joke");
                Joke.setAttribute(Attribute1.value, jokes.value);
                this.shadowRoot?.appendChild(Joke);

        })
    }
}

customElements.define("app-container", AppContainer);