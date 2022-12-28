import {html} from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
export default class CategoryList extends View{
    constructor(categories=[] , onChangeCategory,selectedCategory ,handleCategorySelect){
        super()
        this.categories = categories
        this.onChangeCategory = onChangeCategory
        this.selectedCategory= selectedCategory
        this.handleCategorySelect = handleCategorySelect
    }
    static get properties(){
        return{
            categories : {
                type : Array
            },
            onChangeCategory : {
                type : Function
            },
            selectedCategory : {
                type : String
            },
            handleCategorySelect : {
                type : Function
            },
        }
    }
    render(){
        return html` 
        <div class="menu-category-area">
            <div class="common-inner">
                <ul class="category-list scroll-x">
                    ${this.categories.map(({category,categoryName})=>
                    html`
                    <li class="category-item" @click=${()=>this.onChangeCategory(categoryName)}>
                        <a href="#" @click=${()=>this.handleCategorySelect(category)} class="category-tab ${this.selectedCategory === categoryName ? 'is-active' : ''}" >${categoryName}</a>
                    </li>
                    `)}
                </ul>-
            </div>
        </div>`
    }
}