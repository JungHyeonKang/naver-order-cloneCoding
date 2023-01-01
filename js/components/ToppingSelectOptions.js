import {html} from "lit-element/lit-element"
import View from "../view.js"
export default class ToppingSelectOptions extends View{
    constructor(selectOptions , toggleOption){
        super()
        this.selectOptions = selectOptions
        this.toggleOption = toggleOption
    }
    static get properties(){
        return {
            selectOptions : {
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
                <span class="badge">선택</span>
                <span class="text">토핑추가</span>
            </p>
            <p class="desc">최대 5개까지 선택할 수 있습니다.</p>
        </div>
        <ul class="option-list">
            ${this.selectOptions.map(({name , price , isSelected})=>html` 
            <li class="option-item">
                <input type="checkbox" id="${name}" class="input-check" .checked="${isSelected}" @click=${()=>this.toggleOption(name)}>
                <label for="${name}" class="label">
                    <span class="label-txt">${name} <span class="price">+${price}원</span></span>
                    <span class="label-icon"></span>
                </label>
            </li>
            `)}
        </ul>
    </div>`
    }
}