import {html, render} from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
export default class RecentMenuList extends View{
    constructor(recentItems=[]){
        super()
        this.recentItems = recentItems
    }
    static get properties(){
        return{
            recentItems : {
                type : Array
            },
        }
    }
    render(){
        return html `
        <div class="recent-order-area">
        <div class="recent-title">
            <img src="./assets/images/ico-clock.svg" alt="" class="ico-clock">최근<br>주문
        </div>
        <div class="recent-menu-area scroll-x">
            <ul class="recent-menu-list">
            ${this.recentItems.map(({name , imageUrl,price,isPopular} = item)=>
                html` 
                <li class="recent-menu-item is-ordered">
                <a>
                    <div class="menu-img-area">
                        ${isPopular ? html`<span class="badge-popular">인기</span>` : ''}
                        <img class="menu-img" src="${imageUrl}" alt="메뉴사진">
                    </div>
                    <p class="menu-name">${name}</p>
                    <p class="menu-price">${price}원</p>
                </a>
                <a href="#" class="badge-cart">
                    <img src="./assets/images/ico-cart.svg" alt="주문하기" class="ico-cart">
                </a>
                </li>`
            )}
            </ul>
        </div>
    </div>`
    }
}