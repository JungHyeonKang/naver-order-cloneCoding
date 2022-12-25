import {html} from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
export default class Header extends View{
    constructor(){
        super()
    }

    render(){
        return html`<header class="header-area">
        <div class="place-header" role="banner">
            <h1 class="title">
            <a href="#" class="link-back">
                <img src="/assets/images/ico-back.svg" alt="뒤로가기" />
            </a>
            KANG 샐러드
            </h1>
            <a href="#" class="my-orders">주문내역</a>
        </div>
        <div class="place-tab scroll-x" role="tablist">
            <div class="tab-inner">
            <a href="#" class="tab" role="tab"><span class="txt">홈</span></a>
            <a href="#" class="tab is-active" role="tab"
                ><span class="txt">메뉴</span></a
            >
            <a href="#" class="tab" role="tab"><span class="txt">리뷰</span></a>
            <a href="#" class="tab" role="tab"><span class="txt">사진</span></a>
            <a href="#" class="tab" role="tab"><span class="txt">지도</span></a>
            <a href="#" class="tab" role="tab"><span class="txt">주변</span></a>
            </div>
        </div>
        </header>`
    }
}