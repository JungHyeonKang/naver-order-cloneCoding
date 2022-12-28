import { html } from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
import { getRecentMenu , getMenuGroups} from "../api";
export default class MenuPage extends View{
    constructor(){
        super()
        this.recentItems = [] // 최근 주문 리스트
        this.menuGroups = [];
        this.selectedCategory = '추천' //카테고리 추천으로 디폴트
        getRecentMenu().then((response)=> this.recentItems = response)
        getMenuGroups().then((response)=> this.menuGroups = response)
    }
    onChangeCategory(categoryName){
        this.selectedCategory = categoryName
    }
    handleCategorySelect(category){
        this.selectedCategory = category;
        const y = document.querySelector(`[data-scroll-id=${category}]`).getBoundingClientRect().top; //해당 돔객체 위치 찾기

        window.scrollBy({
            top: y - 140,
            left: 0,
            behavior: "smooth",
          });
    }
    redirectDetailPage(id){
        console.log("gd")
        history.pushState(null,null,`/detail/${id}`)
        dispatchEvent(new PopStateEvent("popstate"));
    }
    static get properties(){
        return{
            recentItems : {
                type : Array  
            },
            menuGroups : {
                type : Array  
            },
            onChangeCategory : {
                type : Function  
            },
            selectedCategory : {
                type : String  
            },
        }
    }
   render(){
    const categories = this.menuGroups.map(({category,categoryName}= menuGroup)=>({category,categoryName}))
    
    return html `
    <!-- 주문정보영역 -->
    <div class="order-info-area">
        <div class="common-inner">
            <div class="info-main">
                <div class="info-main-title">
                    <div class="title">
                        <svg viewBox="0 0 18 18" class="ico-n-logo">
                            <path fill-rule="evenodd" fill="currentColor"
                                d="M18 0v18H0V0h18zM7.255 4.582H4.473v9.054h2.915V8.79l3.357 4.846h2.782V4.582h-2.915v4.846L7.255 4.582z">
                            </path>
                        </svg>
                        주문
                    </div>
                </div>

                <!-- 주문분류 -->
                <tab-list></tab-list>
                
                <div class="info-main-notice alert hidden">
                    <svg aria-hidden="true" class="ico-clock" viewBox="0 0 13 13" width="13" height="13" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor"
                            d="M6.5 0a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm.492 1.137v4.157l2.792 2.674-.692.722-3.1-2.97V2.137h1z">
                        </path>
                    </svg>
                    지금은 주문을 받을 수 없습니다.
                </div>

                <!-- 최근 주문 내역 -->
                <recent-menu-list .recentItems=${this.recentItems} .redirectDetailPage=${this.redirectDetailPage.bind(this)}></recent-menu-list>
                
            </div>
        </div>
    </div>
    <!-- // 주문정보영역 -->

    <!-- 메뉴카테고리영역 -->
    <category-tab-list .handleCategorySelect=${this.handleCategorySelect.bind(this)} .categories=${categories} .onChangeCategory=${this.onChangeCategory} .selectedCategory=${this.selectedCategory}></category-tab-list>
    <!-- // 메뉴카테고리영역 -->

    <!-- 메뉴리스트영역 -->
    ${this.menuGroups.map((menuGroup)=>
            html`<menu-list .menuGroup=${menuGroup}></menu-list>`
        )}
    
    <!-- // 메뉴리스트영역 -->

    <!-- 담은메뉴영역 -->
    <div class="order-box-area">
        <div class="common-inner">
            <div>
                <p class="menu-name">메뉴이름</p>
                <p class="menu-price">9,999원</p>
            </div>
            <a href="./order.html" class="btn-order">
                <span class="txt">주문하기</span>
                <span class="icon">
                    <img src="./assets/images/ico-cart-fill.svg" alt="" aria-hidden="true" class="ico-cart">
                    <span class="num">1</span>
                </span>
            </a>
        </div>
    </div>
    <!-- //담은메뉴영역 -->
    <!-- 맨위로 -->
    <div class="go-to-top">
        <a href="#" class="link">Top<i class="ico-up"></i></a>
    </div>
    <!-- // 맨위로 -->
    </div>
    <div class="dimmed-layer hidden"></div>
    <div class="order-type-popup hidden">
    <p class="title">어디서 드시나요?</p>
    <div class="type-list">
        <a href="#" class="type-item" onClick="popupClose()">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
                <path fill="currentColor"
                    d="M232,359.6V264a8,8,0,0,0-8-8c-48.86,0-55.71,83.833-55.978,87.4a8,8,0,0,0,4.4,7.754L184,356.944v2.66l-6.2,62.008A24,24,0,0,0,201.68,448h12.64A24,24,0,0,0,238.2,421.612ZM184.549,339.33a175.605,175.605,0,0,1,7.365-33.019c6.148-18.091,14.226-29.1,24.086-32.853V352H200a8,8,0,0,0-4.422-7.155Zm35.7,90.038A7.91,7.91,0,0,1,214.32,432H201.68a8,8,0,0,1-7.961-8.8L199.24,368h17.52l5.521,55.2A7.908,7.908,0,0,1,220.252,429.368Z" />
                <path fill="currentColor"
                    d="M488,8H424a8,8,0,0,0-8,8v8H248.982a43.35,43.35,0,0,0-20.7,5.278L149.959,72H56c-13.458,0-24,14.056-24,32,0,16.748,9.185,30.1,21.351,31.811l-36.068,122.1c-.032.109-.062.219-.09.328a40.073,40.073,0,0,0-1.193,9.7V496a8,8,0,0,0,8,8H384a8,8,0,0,0,8-8V268.608a39.933,39.933,0,0,0-1.626-11.287L357.042,143.993A43.281,43.281,0,0,0,399.881,104H416v16a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V16A8,8,0,0,0,488,8ZM48,104c0-9.767,4.738-16,8-16H284.687l-32,32H56C52.738,120,48,113.767,48,104ZM297.193,258.24a40.073,40.073,0,0,0-1.193,9.7V488H32V267.939a24.077,24.077,0,0,1,.679-5.668L69.978,136H238.213a35.245,35.245,0,0,0,51.9,45.826L328.6,151.889,297.283,257.912C297.251,258.021,297.221,258.131,297.193,258.24ZM344,467.314,364.686,488H323.314Zm31.025-205.475a23.947,23.947,0,0,1,.975,6.769V476.686l-24-24V280a8,8,0,0,0-16,0V452.687l-24,24V267.939a24.077,24.077,0,0,1,.679-5.668l31.3-105.976ZM416,88H396.773A12.788,12.788,0,0,0,384,100.773,27.258,27.258,0,0,1,356.773,128H337.107a11.282,11.282,0,0,0-6.892,2.365L280.288,169.2a19.226,19.226,0,0,1-25.4-28.771l54.768-54.769A8,8,0,0,0,304,72H183.374l52.571-28.676A27.3,27.3,0,0,1,248.982,40H416Zm64,24H432V24h48Z" />
                <path fill="currentColor"
                    d="M160,264a8,8,0,0,0-16,0v24H128V264a8,8,0,0,0-16,0v24H96V264a8,8,0,0,0-16,0v32h.015a7.974,7.974,0,0,0,.83,3.578l15.019,30.039L89.245,422.29A24,24,0,0,0,113.184,448h13.632a24,24,0,0,0,23.939-25.71l-6.619-92.673,15.019-30.039a7.974,7.974,0,0,0,.83-3.578H160Zm-20.944,40-8,16H108.944l-8-16Zm-6.384,125.451A7.919,7.919,0,0,1,126.816,432H113.184a8,8,0,0,1-7.98-8.569L111.449,336h17.1l6.245,87.431A7.919,7.919,0,0,1,132.672,429.451Z" />
            </svg>
            <p class="desc">포장해서 가져갈게요</p>
            <span class="btn-selection">선택</span>
        </a>
        <a href="#" class="type-item" onClick="popupClose()">
            <svg class="icon" height="637pt" viewBox="-20 -46 637.33396 637" width="637pt"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="m587.648438 98.503906c-6.167969-.769531-11.789063 3.605469-12.558594 9.765625l-23.769532 190.148438h-87.714843l-11.589844-65.710938c-.945313-5.375-5.617187-9.296875-11.078125-9.296875h-283.75c-5.449219 0-10.117188 3.90625-11.074219 9.273438l-11.738281 65.726562h-88.191406l-23.769532-190.140625c-.769531-6.164062-6.394531-10.535156-12.558593-9.765625-6.164063.769532-10.539063 6.394532-9.7656252 12.558594l25.0000002 200c.703125 5.628906 5.488281 9.855469 11.160156 9.855469h20.054688l-23.652344 141.898437c-1.019532 6.128906 3.121094 11.921875 9.246094 12.949219 6.132812 1.019531 11.929687-3.121094 12.949218-9.25l24.269532-145.597656h51.25l-34.253907 191.769531c-.765625 4.269531.996094 8.601562 4.515625 11.125l.265625.191406c33.007813 23.65625 77.019531 25.097656 111.503907 3.644532 45.183593 21.308593 97.554687 21.207031 142.660156-.28125 20.160156 10.535156 42.503906 16.226562 65.25 16.621093.800781.015625 1.597656.019531 2.398437.019531 24.015625-.015624 47.660157-5.9375 68.847657-17.25l4.054687-2.167968c4.289063-2.296875 6.617187-7.085938 5.773437-11.875l-33.8125-191.796875h50.820313l24.265625 145.597656c.621094 4 3.34375 7.359375 7.128906 8.796875 3.789063 1.429688 8.050782.722656 11.167969-1.867188 3.113281-2.582031 4.605469-6.640624 3.894531-10.628906l-23.652344-141.898437h20.054688c5.675781 0 10.460938-4.226563 11.164062-9.855469l25-200c.769532-6.164062-3.605468-11.785156-9.765624-12.558594zm-221.085938 409.46875v-144.554687c0-6.210938-5.035156-11.25-11.25-11.25-6.210938 0-11.25 5.039062-11.25 11.25v144.238281c-38.445312 17.84375-82.800781 17.84375-121.25 0v-100.488281c0-6.210938-5.035156-11.25-11.25-11.25-6.210938 0-11.25 5.039062-11.25 11.25v101.488281c-24.6875 15.257812-55.804688 15.523438-80.746094.6875l47.039063-263.425781h264.894531l46.3125 262.625c-35.039062 17.617187-76.390625 17.40625-111.25-.570313zm0 0" />
                <path fill="currentColor"
                    d="m217.5 208.914062h150c6.214844 0 11.25-5.035156 11.25-11.25-.058594-43.257812-32.113281-79.796874-75-85.488281v-10.507812c0-6.214844-5.035156-11.25-11.25-11.25-6.210938 0-11.25 5.035156-11.25 11.25v10.507812c-42.878906 5.691407-74.941406 42.230469-75 85.488281 0 6.214844 5.039062 11.25 11.25 11.25zm75-75c30.855469.046876 57.265625 22.140626 62.75 52.5h-125.5c5.488281-30.359374 31.894531-52.453124 62.75-52.5zm0 0" />
                <path fill="currentColor"
                    d="m330 87.167969c6.214844 0 11.25-5.039063 11.25-11.25v-28.75c0-6.210938-5.035156-11.25-11.25-11.25-6.210938 0-11.25 5.039062-11.25 11.25v28.75c0 6.210937 5.039062 11.25 11.25 11.25zm0 0" />
                <path fill="currentColor"
                    d="m278.75 65.917969c6.214844 0 11.25-5.039063 11.25-11.25v-45c0-6.210938-5.035156-11.25-11.25-11.25-6.210938 0-11.25 5.039062-11.25 11.25v45c0 6.210937 5.039062 11.25 11.25 11.25zm0 0" />
                <path fill="currentColor"
                    d="m231.25 95.917969c6.214844 0 11.25-5.039063 11.25-11.25v-23.75c0-6.210938-5.035156-11.25-11.25-11.25-6.210938 0-11.25 5.039062-11.25 11.25v23.75c0 6.210937 5.039062 11.25 11.25 11.25zm0 0" />
            </svg>
            <p class="desc">매장에서 먹고 갈게요</p>
            <span class="btn-selection">선택</span>
        </a>
    </div>
    </div>`;
   }
}