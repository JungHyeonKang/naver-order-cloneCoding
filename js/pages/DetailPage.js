import { html } from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
import { getMenu} from "../api";
import {DEFAULT_MENU} from "../utils/menu.js"
export default class DetailPage extends View{
    constructor(orderTypeIndex=0,setOrderTypeIndex,addCartItem){
        super()
        const [menuId]= location.pathname.split("/").splice(-1)
        this.menuInfo = DEFAULT_MENU;
        this.orderTypeIndex = orderTypeIndex
        this.setOrderTypeIndex = setOrderTypeIndex
        this.menuAmount =1
        this.isPopupOpened = false 
        this.addCartItem = addCartItem
        getMenu(menuId).then((menu)=>this.menuInfo = menu)
    }
    static get properties(){
        return {
            menuId : {
                type : Number
            },
            menuAmount : {
                type : Number
            },
            menuInfo : {
                type : Array
            },
            onIncreaseAmount : {
                type : Function
            },
            onDecreaseAmount : {
                type : Function
            },
            orderTypeIndex : {
                type : Number  
            },
            setOrderTypeIndex : {
                type : Function  
            },
            openOptionPopup : {
                type : Function  
            },
            isPopupOpened : {
                type : Boolean  
            },
            closeOptionPopup : {
                type : Function  
            },
            addCartItem : {
                type : Function  
            },
        }
        
    }
    onIncreaseAmount(){
        this.menuAmount +=1
    }
    onDecreaseAmount(){
        if(this.menuAmount <= 1) return
        this.menuAmount -=1
    }
    openOptionPopup(){
        this.isPopupOpened = true
    }
    closeOptionPopup(){
        this.isPopupOpened = false
    }
    render(){
        return html `
         <div class="container">
        <!-- 고정헤더영역 -->
        
        <!-- // 고정헤더영역 -->

        <!-- 메뉴주문정보영역 -->
       <menu-detail-list 
       .menuInfo=${this.menuInfo} 
       .menuAmount=${this.menuAmount} 
       .onIncreaseAmount=${this.onIncreaseAmount.bind(this)} 
       .onDecreaseAmount=${this.onDecreaseAmount.bind(this)}
       .orderTypeIndex=${this.orderTypeIndex}
       .openOptionPopup=${this.openOptionPopup.bind(this)}>
       </menu-detail-list>
       <!-- //메뉴주문정보영역 -->

        <!-- 주문자리뷰영역 -->
        <div class="menu-review-area">
            <!-- 주문자사진 -->
            <div class="orderer-img-area">
                <div class="common-inner">
                    <div class="title">주문자 사진<span class="num">99</span></div>
                    <div class="scroll-x">
                        <ul class="orderer-pic-list">
                           ${this.menuInfo.pictures.map((pic)=>html`
                            <li class="orderer-pic-item">
                                <a href="#" class="orderer-pic-link">
                                    <img src="${pic}" alt="">
                                </a>
                            </li>
                           `)}
                               
                          
                           
                        </ul>
                    </div>
                </div>
            </div>
            <!-- // 주문자사진 -->

            <!-- 주문자리뷰 -->
            <div class="orderer-review-area">
                <div class="common-inner">
                    <div class="title">주문자 리뷰<span class="num">${this.menuInfo.reviews.length}</span></div>
                    <ul class="review-list">
                        ${this.menuInfo.reviews.map(({reviewerId,reviewPoint,content,orderDate})=>
                        html` 
                            <li class="review-item">
                                <div class="review-star">
                                    <span class="ico-star-group">
                                        <span class="ico-star-group-fill" style="width: 90%;"></span>
                                    </span>
                                    <span class="point">${reviewPoint}</span>
                                </div>
                                <p class="review-text">${content}</p>
                                <div class="review-info">
                                    <span class="review-nickname">${reviewerId}</span>
                                    <span class="review-date">${orderDate}</span>
                                </div>
                            </li>
                        `)}
                    </ul>

                    <button class="btn-more">더보기</button>
                </div>
            </div>
            <!-- //주문자리뷰 -->
        </div>
        <!-- // 주문자리뷰영역 -->

        <!-- 옵션팝업영역 -->
       <option-popup 
       .menuInfo=${this.menuInfo} 
       .menuAmount=${this.menuAmount} 
       .onIncreaseAmount=${this.onIncreaseAmount.bind(this)} 
       .onDecreaseAmount=${this.onDecreaseAmount.bind(this)}
       .isPopupOpened=${this.isPopupOpened}
       .closeOptionPopup=${this.closeOptionPopup.bind(this)}
       .orderTypeIndex=${this.orderTypeIndex}
       .addCartItem=${this.addCartItem.bind(this)}>
       </option-popup>
        <!-- //옵션팝업영역 -->
    </div>`
    }
}