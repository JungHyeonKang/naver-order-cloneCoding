import { html } from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
import { getRecentMenu , getMenuGroups,getMenu} from "../api";
import { getKoreanMoneyString } from "../utils/currency";

export default class MenuPage extends View{
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
            redirectMenuPage : {
                type : Function
            },
        }
    }
    redirectMenuPage(){
        history.pushState(null,null,"/")
        dispatchEvent(new PopStateEvent("popstate"))
    }
    render(){
        return html`
        <div class="container order">
        <div class="order-form-area">
            <!-- 주문서 타이틀 -->
            <div class="page-title-area">
                <p class="title">주문서</p>
                <button class="btn-close" @click=${()=>this.redirectMenuPage()}>
                    <img src="./assets/images/ico-close-white.svg" alt="닫기" class="ico-close">
                </button>
            </div>
            <!-- // 주문서 타이틀 -->

            <!-- 주문서 메뉴 -->
            <div class="order-content">
                <div class="common-inner">
                    <order-type-list .orderTypeIndex=${this.orderTypeIndex} .cartItems=${this.cartItems}></order-type-list>
                    
                    <order-select-list 
                    .orderTypeIndex=${this.orderTypeIndex} 
                    .cartItems=${this.cartItems}>
                    </order-select-list>

                    
                </div>
                <a class="btn-menu-add" @click=${()=>this.redirectMenuPage()} ><i class="ico-add"></i>메뉴추가</a>
            </div>
            <!-- // 주문서 메뉴 -->

            <!-- 주문자 정보 -->
            <div class="order-content-extra">
                <div class="common-inner">
                    <div class="orderer-info-area">
                        <p class="title">주문자 정보</p>
                        <ul class="info-list">
                            <li class="info-item">
                                <p class="info-title">일회용 수저, 포크</p>
                                <div class="option-group">
                                    <div class="option-item">
                                        <input type="radio" id="need" class="input-radio" name="disposables" checked>
                                        <label for="need" class="input-radio-button need">필요해요</label>
                                    </div>
                                    <div class="option-item">
                                        <input type="radio" id="no-need" class="input-radio" name="disposables">
                                        <label for="no-need" class="input-radio-button no-need">필요 없어요</label>
                                    </div>
                                </div>
                            </li>
                            <li class="info-item">
                                <p class="info-title">요청사항</p>
                                <input type="text" placeholder="(선택) 요청사항을 입력해 주세요." class="input-text">
                            </li>
                            <li class="info-item">
                                <p class="info-title">주문자 연락처<span class="fw700 color-point">(필수)</span></p>
                                <input type="text" placeholder="연락처를 입력해 주세요." class="input-text" required>
                            </li>
                        </ul>
                    </div>

                    <div class="place-map-area">
                        <p class="title">주문 매장 위치</p>
                        <div class="map-area">
                            <div class="place-address-box">
                                <p class="place-name">샐러드 제로베이스점</p>
                                <p class="place-address">서울시 강남구 역삼동 123-4</p>
                                <p class="place-address-detail">역삼역 8번 출구로 나와서 직진 410m</p>
                            </div>
                            <img src="https://via.placeholder.com/400x170?text=map image" alt="" class="img-map">
                        </div>
                    </div>

                    <div class="agreement-area">
                        <p class="title">개인정보 수집, 제공</p>

                        <ul class="agreement-list">
                            <li class="agreement-item is-open">
                                <div class="agreement-title">
                                    <span class="txt">개인정보 수집 동의</span>
                                    <button class="btn-toggle">
                                        <img src="./assets/images/ico-arrow-gray.svg" alt="">
                                    </button>
                                </div>
                                <div class="agreement-content">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus
                                    voluptatibus sit officia natus asperiores molestias placeat magni, corporis eius
                                    laboriosam facere nemo obcaecati tenetur reiciendis quam in consequuntur
                                    beatae?<br><br>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus
                                    voluptatibus sit officia natus asperiores molestias placeat magni, corporis eius
                                    laboriosam facere nemo obcaecati tenetur reiciendis quam in consequuntur
                                    beatae?<br><br>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus
                                    voluptatibus sit officia natus asperiores molestias placeat magni, corporis eius
                                    laboriosam facere nemo obcaecati tenetur reiciendis quam in consequuntur
                                    beatae?<br><br>
                                </div>
                            </li>
                            <li class="agreement-item">
                                <div class="agreement-title">
                                    <span class="txt">개인정보 제공 동의</span>
                                    <button class="btn-toggle">
                                        <img src="./assets/images/ico-arrow-gray.svg" alt="">
                                    </button>
                                </div>
                                <div class="agreement-content">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus
                                    voluptatibus sit officia natus asperiores molestias placeat magni, corporis eius
                                    laboriosam facere nemo obcaecati tenetur reiciendis quam in consequuntur
                                    beatae?
                                </div>
                            </li>
                            <li class="agreement-item">
                                <div class="agreement-title color-point">
                                    <span class="txt">주문취소 및 환불 유의사항</span>
                                    <button class="btn-toggle">
                                        <img src="./assets/images/ico-arrow-gray.svg" alt="">
                                    </button>
                                </div>
                                <div class="agreement-content">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus
                                    voluptatibus sit officia natus asperiores molestias placeat magni, corporis eius
                                    laboriosam facere nemo obcaecati tenetur reiciendis quam in consequuntur
                                    beatae?
                                </div>
                            </li>
                        </ul>

                        <p class="agreement-info-txt">주문 서비스 이용을 위한 개인정보 수집 및 제3자 제공, 취소/환불 규정을 확인하였으며 이에 동의합니다.</p>
                    </div>
                </div>
            </div>
            <!-- // 주문자 정보 -->

            <!-- 주문하기 버튼 -->
            <div class="btn-order-area">
                <button class="btn-order">
                    <svg viewBox="0 0 18 18" width="18" height="18" class="ico-n-logo">
                        <path fill-rule="evenodd" fill="currentColor"
                            d="M18 0v18H0V0h18zM7.255 4.582H4.473v9.054h2.915V8.79l3.357 4.846h2.782V4.582h-2.915v4.846L7.255 4.582z">
                        </path>
                    </svg> 주문하기
                </button>
            </div>
            <!-- // 주문하기 버튼 -->

            <!-- 맨위로 -->
            <div class="go-to-top">
                <a href="#" class="link">Top<i class="ico-up"></i></a>
            </div>
            <!-- // 맨위로 -->
        </div>

        <!-- 모달 -->
        <div class="modal-wrapper hidden">
            <div class="dimmed-layer light"></div>
            <div class="modal-container">
                <div class="modal-content">
                    <button class="btn-close" onClick="modalClose()">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L14 14" stroke="#999" stroke-width="1.5" />
                            <path d="M2 14L14 2" stroke="#999" stroke-width="1.5" />
                        </svg>
                    </button>
                    <div class="modal-icon">
                        <svg viewBox="0 0 32 32" width="38" height="38">
                            <path fill="currentColor"
                                d="M15,8H17c0.6,0,1-0.4,1-1s-0.4-1-1-1H15c-0.6,0-1,0.4-1,1S14.4,8,15,8z" />
                            <path fill="currentColor"
                                d="M29.9,20.5C29.7,20.2,29.3,20,29,20h-1.1c-0.5-4.4-4.1-8.8-8.7-10.2c-2.1-0.7-4.4-0.7-6.5,0C8.2,11.2,4.5,15.6,4.1,20H3   c-0.3,0-0.7,0.2-0.9,0.5s-0.2,0.7,0,1C3.5,24.3,6.3,26,9.5,26h13.1c3.1,0,6-1.7,7.4-4.6C30,21.1,30,20.8,29.9,20.5z M13.3,11.7   c1.7-0.5,3.6-0.5,5.3,0c3.7,1.1,6.8,4.7,7.3,8.3H6.1C6.6,16.4,9.6,12.9,13.3,11.7z M22.5,24H9.5c-1.8,0-3.4-0.7-4.6-2h22.2   C25.9,23.3,24.3,24,22.5,24z" />
                        </svg>
                    </div>
                    <h1 class="modal-title">모달 제목</h1>
                    <p class="modal-desc">모달에 관련된 설명글이 적힙니다.</p>
                </div>
                <div class="btn-area">
                    <button class="btn-cancel" onClick="modalClose()">취소</button>
                    <button class="btn-confirm" onClick="modalClose()">확인</button>
                </div>
            </div>
        </div>
        <!-- // 모달 -->
    </div>`
    }
}

