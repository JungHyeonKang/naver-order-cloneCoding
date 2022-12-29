import { html } from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
import { getRecentMenu , getMenuGroups,getMenu} from "../api";
export default class DetailPage extends View{
    constructor(){
        super()
        const [menuId]= location.pathname.split("/").splice(-1)
        this.menuInfo = {};
         getMenu(menuId).then((menu)=>this.menuInfo = menu)
    }
    static get properties(){
        return {
            menuId : {
                type : Number
            },
            menuInfo : {
                type : Object
            }
        }
        
    }
    render(){
        return html `
         <div class="container">
        <!-- 고정헤더영역 -->
        
        <!-- // 고정헤더영역 -->

        <!-- 메뉴주문정보영역 -->
       <menu-detail-list .menuInfo=${this.menuInfo}></menu-detail-list>
       <!-- //메뉴주문정보영역 -->
        <!-- 주문자리뷰영역 -->
        <div class="menu-review-area">
            <!-- 주문자사진 -->
            <div class="orderer-img-area">
                <div class="common-inner">
                    <div class="title">주문자 사진<span class="num">99</span></div>
                    <div class="scroll-x">
                        <ul class="orderer-pic-list">
                            <li class="orderer-pic-item">
                                <a href="#" class="orderer-pic-link">
                                    <img src="https://via.placeholder.com/104/fff/000" alt="">
                                </a>
                            </li>
                            <li class="orderer-pic-item">
                                <a href="#" class="orderer-pic-link">
                                    <img src="https://via.placeholder.com/104/fff/000" alt="">
                                </a>
                            </li>
                            <li class="orderer-pic-item">
                                <a href="#" class="orderer-pic-link">
                                    <img src="https://via.placeholder.com/104/fff/000" alt="">
                                </a>
                            </li>
                            <li class="orderer-pic-item">
                                <a href="#" class="orderer-pic-link">
                                    <img src="https://via.placeholder.com/104/fff/000" alt="">
                                </a>
                            </li>
                            <li class="orderer-pic-item">
                                <a href="#" class="orderer-pic-link">
                                    <img src="https://via.placeholder.com/104/fff/000" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- // 주문자사진 -->

            <!-- 주문자리뷰 -->
            <div class="orderer-review-area">
                <div class="common-inner">
                    <div class="title">주문자 리뷰<span class="num">999</span></div>
                    <ul class="review-list">
                        <li class="review-item">
                            <div class="review-star">
                                <span class="ico-star-group">
                                    <span class="ico-star-group-fill" style="width: 90%;"></span>
                                </span>
                                <span class="point">4.5</span>
                            </div>
                            <p class="review-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                                repellat nihil enim doloremque! Illo fugit excepturi natus quis est error officiis nulla
                                saepe voluptatem accusantium, ab necessitatibus eveniet facilis numquam?</p>
                            <div class="review-info">
                                <span class="review-nickname">zero****</span>
                                <span class="review-date">2021. 10. 7 주문</span>
                            </div>
                        </li>

                        <li class="review-item">
                            <div class="review-star">
                                <span class="ico-star-group">
                                    <span class="ico-star-group-fill" style="width: 80%;"></span>
                                </span>
                                <span class="point">4.0</span>
                            </div>
                            <p class="review-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                                repellat nihil enim doloremque! Illo fugit excepturi natus quis est error officiis nulla
                                saepe voluptatem accusantium, ab necessitatibus eveniet facilis numquam?</p>
                            <div class="review-info">
                                <span class="review-nickname">zero****</span>
                                <span class="review-date">2021. 10. 7 주문</span>
                            </div>
                        </li>

                        <li class="review-item">
                            <div class="review-star">
                                <span class="ico-star-group">
                                    <span class="ico-star-group-fill" style="width: 70%"></span>
                                </span>
                                <span class="point">3.5</span>
                            </div>
                            <p class="review-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                                repellat nihil enim doloremque! Illo fugit excepturi natus quis est error officiis nulla
                                saepe voluptatem accusantium, ab necessitatibus eveniet facilis numquam?</p>
                            <div class="review-info">
                                <span class="review-nickname">zero****</span>
                                <span class="review-date">2021. 10. 7 주문</span>
                            </div>
                        </li>
                    </ul>

                    <button class="btn-more">더보기</button>
                </div>
            </div>
            <!-- //주문자리뷰 -->
        </div>
        <!-- // 주문자리뷰영역 -->

        <!-- 옵션팝업영역 -->
        <div class="option-popup-area">
            <div class="dimmed-layer light"></div>
            <div class="menu-option-popup">
                <svg class="content-top-pattern" width="100%" height="100%">
                    <defs>
                        <pattern id="pattern-triangle" x="0" y="0" width="10" height="11" patternUnits="userSpaceOnUse">
                            <polygon points="5 5, 10 10, 10 11, 0 11, 0 10"></polygon>
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-triangle)"></rect>
                </svg>

                <div class="content-top">
                    <div class="common-inner">
                        <div class="menu-img-area">
                            <img src="https://via.placeholder.com/70/fff/000" alt="" class="menu-img">
                        </div>
                        <div class="menu-detail-area">
                            <p class="menu-name">
                                <span class="name">메뉴 이름</span>
                                <span class="badge">포장</span>
                            </p>
                            <div class="amount-select">
                                <button class="btn-minus" aira-label="빼기" disabled></button>
                                <span class="amount disabled">1</span>
                                <button class="btn-plus" aria-label="더하기"></button>
                            </div>
                        </div>
                        <button class="btn-close" onClick="popupClose()">
                            <img src="./assets/images/ico-close.svg" alt="" class="ico-close">
                        </button>
                    </div>
                </div>

                <div class="content-body">
                    <div class="option-group">
                        <div class="option-title">
                            <p class="title">
                                <span class="badge required">필수</span>
                                <span class="text">베이스 선택</span>
                            </p>
                        </div>
                        <ul class="option-list">
                            <li class="option-item">
                                <input type="radio" id="rd1" class="input-radio" name="base" checked>
                                <label for="rd1" class="label">
                                    <span class="label-txt">추쳔대로</span>
                                    <span class="label-icon"></span>
                                </label>
                            </li>
                            <li class="option-item">
                                <input type="radio" id="rd2" class="input-radio" name="base">
                                <label for="rd2" class="label">
                                    <span class="label-txt">채소볼</span>
                                    <span class="label-icon"></span>
                                </label>
                            </li>
                            <li class="option-item">
                                <input type="radio" id="rd3" class="input-radio" name="base">
                                <label for="rd3" class="label">
                                    <span class="label-txt">곡물볼</span>
                                    <span class="label-icon"></span>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div class="option-group">
                        <div class="option-title">
                            <p class="title">
                                <span class="badge">선택</span>
                                <span class="text">토핑추가</span>
                            </p>
                            <p class="desc">최대 5개까지 선택할 수 있습니다.</p>
                        </div>
                        <ul class="option-list">
                            <li class="option-item">
                                <input type="checkbox" id="chk1" class="input-check" checked>
                                <label for="chk1" class="label">
                                    <span class="label-txt">채소추가(기본 제공량의 30% 추가) <span class="price">+900원</span></span>
                                    <span class="label-icon"></span>
                                </label>
                            </li>
                            <li class="option-item">
                                <input type="checkbox" id="chk2" class="input-check">
                                <label for="chk2" class="label">
                                    <span class="label-txt">곡물추가(기본 제공량의 50% 추가) <span class="price">+900원</span></span>
                                    <span class="label-icon"></span>
                                </label>
                            </li>
                            <li class="option-item">
                                <input type="checkbox" id="chk3" class="input-check">
                                <label for="chk3" class="label">
                                    <span class="label-txt">시저 드레싱 추가 <span class="price">+900원</span></span>
                                    <span class="label-icon"></span>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div class="option-group">
                        <div class="option-title">
                            <p class="title">
                                <span class="badge">선택</span>
                                <span class="text">토핑추가</span>
                            </p>
                            <p class="desc">최대 5개까지 선택할 수 있습니다.</p>
                        </div>
                        <ul class="option-list">
                            <li class="option-item">
                                <label class="label checked">
                                    <span class="label-txt">치킨 <span class="price">+1,500원</span></span>
                                </label>
                                <div class="amount-select">
                                    <button class="btn-minus enabled" aira-label="빼기"></button>
                                    <span class="amount">2</span>
                                    <button class="btn-plus enabled" aria-label="더하기"></button>
                                </div>
                            </li>
                            <li class="option-item">
                                <label class="label">
                                    <span class="label-txt">에그 <span class="price">+900원</span></span>
                                </label>
                                <div class="amount-select">
                                    <button class="btn-minus" aira-label="빼기" disabled></button>
                                    <span class="amount">1</span>
                                    <button class="btn-plus enabled" aria-label="더하기"></button>
                                </div>
                            </li>
                            <li class="option-item">
                                <label class="label">
                                    <span class="label-txt">치킨소시지 <span class="price">+1,900원</span></span>
                                </label>
                                <div class="amount-select">
                                    <button class="btn-minus" aira-label="빼기" disabled></button>
                                    <span class="amount">1</span>
                                    <button class="btn-plus enabled" aria-label="더하기"></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="content-bottom">
                    <button class="btn-order">1개 담기 9,999원</button>
                </div>
            </div>
        </div>
        <!-- //옵션팝업영역 -->
    </div>`
    }
}