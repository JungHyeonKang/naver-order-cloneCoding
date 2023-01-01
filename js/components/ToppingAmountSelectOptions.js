import {html} from "lit-element/lit-element"
import View from "../view.js"
import SpinButton from "./SpinButton.js"
export default class ToppingAmountSelectOptions extends View{
    constructor(toppingAmountSelectOptions,menuAmount,increaseOptionAmount,decreaseOptionAmount){
        super()
        this.toppingAmountSelectOptions =toppingAmountSelectOptions
        this.menuAmount = menuAmount
        this.increaseOptionAmount = increaseOptionAmount
        this.decreaseOptionAmount = decreaseOptionAmount
    }
    static get properties(){
        return {
            toppingAmountSelectOptions : {
                type : Array
            },
            increaseOptionAmount : {
                type : Function
            },
            decreaseOptionAmount : {
                type : Function
            },
            menuAmount : {
                type : Number
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
            ${this.toppingAmountSelectOptions.map(({name, price , amount})=>html` 
            <li class="option-item">
                <label class="label checked">
                    <span class="label-txt">${name} <span class="price">+${price}원</span></span>
                </label>
                ${SpinButton({
                    count : amount , 
                    onIncreaseAmount : ()=>this.increaseOptionAmount(name),
                    onDecreaseAmount : ()=>this.decreaseOptionAmount(name) 
                })}
            </li>
        `)}
        </ul>
    </div>`
    }
}