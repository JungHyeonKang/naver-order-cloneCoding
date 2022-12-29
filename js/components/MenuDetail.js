import {html} from "lit-element/lit-element"
import View from "../view.js"
import {getKoreanMoneyString} from "../utils/currency.js"
export default class MenuDetail extends View{
    constructor(menuInfo={}){
        super()
        this.menuInfo = menuInfo
    }
    static get properties(){
        return {
            menuInfo : {
                type : Object
            }
        }
        
    }
    render(){
        return html` 
        <div class="menu-detail-area">
        <!-- 메뉴이미지영역 -->
        <div class="menu-img"
            style="background-image: url('${this.menuInfo.imageUrl}');">
        </div>

        <!-- 메뉴주문정보영역 -->
        <div class="menu-info-area">
            <div class="common-inner">
                <!-- 메뉴정보영역 -->
                <p class="menu-name-group">
                    <span class="menu-name">${this.menuInfo.name}</span>
                    <span class="badge-popular">인기</span>
                </p>

                <div class="menu-info-group">
                    <span class="menu-price">${getKoreanMoneyString(this.menuInfo.price)}원</span>
                    <span class="menu-grade"><img src="./assets/images/ico-star.svg" alt=""
                            class="ico-star">${this.menuInfo.reviewPoint}</span>
                    <span class="menu-number-of-order">주문수<em>${this.menuInfo.orderCount}</em></span>
                </div>

                <p class="menu-desc">${this.menuInfo.description}</p>
                <!-- // 메뉴정보영역 -->

                <!-- 메뉴주문영역 -->
                <div class="order-type-area">
                    <div class="type-select">
                        <div class="title">
                            <svg viewBox="0 0 18 18" class="ico-n-logo">
                                <path fill-rule="evenodd" fill="currentColor"
                                    d="M18 0v18H0V0h18zM7.255 4.582H4.473v9.054h2.915V8.79l3.357 4.846h2.782V4.582h-2.915v4.846L7.255 4.582z">
                                </path>
                            </svg>
                            주문
                        </div>
                        <div class="tab-switch-box" role="tablist">
                            <a href="#" class="tab-switch is-active" role="tab">🛍&nbsp;&nbsp;포장</a>
                            <a href="#" class="tab-switch" role="tab">🍽&nbsp;&nbsp;매장</a>
                        </div>
                    </div>
                    <div class="type-amount">
                        <div class="title">수량</div>
                        <div class="amount-select">
                            <button class="btn-minus" aira-label="빼기" disabled></button>
                            <span class="amount disabled">1</span>
                            <button class="btn-plus" aria-label="더하기"></button>
                        </div>
                    </div>
                    <button class="btn-order" onClick="popupOpen()">1개 담기 9,999원</button>
                    <!-- <button class="btn-order" disabled>지금 주문 가능한 시간이 아닙니다.</button> -->
                </div>
                <!-- // 메뉴주문영역 -->
            </div>
        </div>
    </div>`
    }
}