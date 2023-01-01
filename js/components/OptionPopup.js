import {html} from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
import SpinButton from "./SpinButton.js"
import { getOptions } from "../api"

const DEFAULT_OPTION = {
    id: 1,
    baseOptions: [],
    toppingSelectOptions: [],
    toppingAmountSelectOptions: [],
  };

export default class OptionPopup extends View{
    constructor(menuInfo,menuAmount,onIncreaseAmount,onDecreaseAmount,isPopupOpened,closeOptionPopup,orderTypeIndex=0){
        super()
        this.isOpened = false;
        this.menuInfo = menuInfo
        this.menuAmount = menuAmount
        this.onIncreaseAmount = onIncreaseAmount
        this.onDecreaseAmount = onDecreaseAmount
        this.isPopupOpened = isPopupOpened
        this.closeOptionPopup = closeOptionPopup
        this.orderTypeIndex = 
        this.option = DEFAULT_OPTION
        const [id] =location.pathname.split("/").splice(-1)
         getOptions(id).then((option)=>this.option = option)
    }
    static get properties(){
        return {
            isPopupOpened : {
                type : Boolean
            },
            menuInfo : {
                type : Object
            },
            onIncreaseAmount : {
                type : Function
            },
            onDecreaseAmount : {
                type : Function
            },
            menuAmount : {
                type : Number
            },
            closeOptionPopup : {
                type : Function
            },
            orderTypeIndex : {
                type : Number
            },
            option : {
                type : Object
            },
            toggleBaseOptions : {
                type : Function
            },
        }
    }
    toggleBaseOptions(optionName){
        const newOption = {...this.option}
        newOption.baseOptions.forEach((option)=>{
            if(option.name === optionName){
                option.isSelected = true
                return;
            }
            option.isSelected = false
        })
        this.option = newOption;
    }
    render(){
        return html` 
        <!-- 옵션팝업영역 -->
        <div class="option-popup-area ${this.isPopupOpened === true ? 'show' : ''}">
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
                            <img src="${this.menuInfo.imageUrl}" alt="" class="menu-img">
                        </div>
                        <div class="menu-detail-area">
                            <p class="menu-name">
                                <span class="name">${this.menuInfo.name}</span>
                            </p>
                            <div class="amount-select">
                            ${SpinButton({
                                count : this.menuAmount , 
                                onIncreaseAmount : this.onIncreaseAmount,
                                 onDecreaseAmount : this.onDecreaseAmount 
                            })}
                            </div>
                        </div>
                        <button class="btn-close" @click=${()=>this.closeOptionPopup()}>
                            <img src="/assets/images/ico-close.svg" alt="" class="ico-close">
                        </button>
                    </div>
                </div>

                <!-- 메뉴옵션영역 -->
                <div class="content-body">
                    <topping-baseoptions-list 
                    .baseOptions=${this.option.baseOptions} 
                    .toggleOption=${this.toggleBaseOptions.bind(this)}>
                    </topping-baseoptions-list>
                    <topping-selectoptions-list></topping-selectoptions-list>
                    <topping-amountoptions-list></topping-amountoptions-list>
                </div>

                <div class="content-bottom">
                    <button class="btn-order">1개 담기 9,999원</button>
                </div>
            </div>
        </div>
        `
    }
}