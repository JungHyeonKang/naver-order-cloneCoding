import { html } from "../../node_modules/lit-element/lit-element"
import View from "../view.js"

export default class MenuPage extends View{
    constructor(){
        super()
    }

    render(){
        return html`
        <header-part></header-part>
        <h1>메뉴페이지</h1>`
    }
} 