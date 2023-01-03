import {html} from "lit-element/lit-element"
import View from "../view.js"
import { getKoreanMoneyString } from "../utils/currency.js";
import SpinButton from "./SpinButton.js";
export default class OrderSelectList extends View{
    constructor(orderTypeIndex=0,cartItems=[]){
        super()
        this.orderTypeIndex = orderTypeIndex;
        this.cartItems = cartItems
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
         }
     }
    increaseOrderAmount(){

    }
    decreaseOrderAmount(){

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
                <div class="amount-select">
                    <button class="btn-minus enabled" aira-label="빼기"></button>
                    <span class="amount">${item.amount}</span>
                    <button class="btn-plus enabled" aria-label="더하기"></button>
                </div>
                <p class="menu-price">${getKoreanMoneyString(item.price)}원</p>
            </div>
        </div>
        <button class="btn-delete">
            <img src="./assets/images/ico-close.svg" alt="삭제" class="ico-delete">
        </button>
        </li>
    `)}
    </ul>

    <div class="order-total">
    <span class="total-txt">총 주문금액</span>
    <span class="total-price">29,997원</span>
    </div>
    `}   
        <!-- // 담은 메뉴 없음 -->

        <!-- 담은 메뉴 있음 -->
       

       
        <!-- // 담은 메뉴 있음 -->
    </div>`
    }
}