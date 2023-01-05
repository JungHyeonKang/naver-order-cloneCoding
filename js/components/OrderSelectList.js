import {html} from "lit-element/lit-element"
import View from "../view.js"
import { getKoreanMoneyString } from "../utils/currency.js";
import SpinButton from "./SpinButton.js";
export default class OrderSelectList extends View{
    constructor(orderTypeIndex=0,cartItems=[],increaseOrderAmount,decreaseOrderAmount,deleteCartItem){
        super()
        this.orderTypeIndex = orderTypeIndex;
        this.cartItems = cartItems;
        this.increaseOrderAmount=increaseOrderAmount;
        this.decreaseOrderAmount = decreaseOrderAmount
        this.deleteCartItem =deleteCartItem
     }
     static get properties(){
         return {
             orderTypeIndex : {
                 type : Number
             },
             cartItems : {
                 type : Array
             },
             increaseOrderAmount : {
                type : Function
            },
            decreaseOrderAmount : {
                type : Function
            },
            getFinalPrice : {
                type : Function
            },
            deleteCartItem : {
                type : Function
            },
         }
     }
     getFinalPrice(){
        const finalPrice =this.cartItems.reduce((acc , item)=>{
            return acc + item.price * item.amount
        },0)
        return finalPrice
     }
        
    render(){
        return html`
        <div class="order-content-body">
        <!-- 담은 메뉴 없음 -->
        ${this.cartItems.length === 0 
        ? html`<div class="no-order hidden">
        <img class="icon" src="./assets/images/ico-exclaim.svg" alt="" aria-hidden="true">
        <p class="txt">담은 메뉴가 없습니다.</p>
        </div>` 
        : html` 
        <!-- 담은 메뉴 있음 -->
        <ul class="menu-list">
        ${this.cartItems.map((item)=> html 
        `<li class="menu-item">
        <div class="menu-img-area">
            <img src="${item.menuInfo.imageUrl}" alt="{메뉴명}"
                class="menu-img" width="74" height="74">
        </div>
        <div class="menu-info-area">
            <p class="menu-name-group">
                <span class="menu-name">${item.menuInfo.name}</span>
            </p>
            <p class="menu-desc">${item.menuInfo.description}</p>
            <button class="btn-option">옵션변경</button>
            <div class="amount-and-price">
                ${SpinButton({
                    count : item.amount,
                    onIncreaseAmount : () => this.increaseOrderAmount(item.menuInfo.id),
                    onDecreaseAmount : () => this.decreaseOrderAmount(item.menuInfo.id)
                })}
                <p class="menu-price">${getKoreanMoneyString(item.price * item.amount)}원</p>
            </div>
        </div>
        <button class="btn-delete" @click=${()=>this.deleteCartItem(item.menuInfo.id)}>
            <img src="./assets/images/ico-close.svg" alt="삭제" class="ico-delete">
        </button>
        </li>
        <!-- // 담은 메뉴 있음 -->
    `)}
    </ul>

    <div class="order-total">
    <span class="total-txt">총 주문금액</span>
    <span class="total-price">${getKoreanMoneyString(this.getFinalPrice())}원</span>
    </div>
    `}   

       

       
    </div>`
    }
}