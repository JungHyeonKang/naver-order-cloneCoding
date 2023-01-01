import {html} from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
export default class ToppingBaseOptions extends View{
    constructor(baseOptions=[] , toggleOption){
        super()
        this.baseOptions = baseOptions
        this.toggleOption = toggleOption
    }
    static get properties(){
        return {
            baseOptions : {
                type : Array
            },
            toggleOption : {
                type : Function
            },
        }
    }
    render(){
        return html` 
        <div class="option-group">
        <div class="option-title">
            <p class="title">
                <span class="badge required">필수</span>
                <span class="text">베이스 선택</span>
            </p>
        </div>
        <ul class="option-list">
            ${this.baseOptions.map(({name , isSelected})=>html`
             <li class="option-item">
                <input type="radio" id="${name}" class="input-radio" name="base" .checked="${isSelected}" @click=${()=>this.toggleOption(name)}>
                <label for="${name}" class="label">
                    <span class="label-txt">${name}</span>
                    <span class="label-icon"></span>
                </label>
            </li>
        `)}
        </ul>
    </div>`
    }
}