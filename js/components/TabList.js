import {html, render} from "../../node_modules/lit-element/lit-element"
import View from "../view.js"
const ORDER_TYPE_MESSAGE = [
    "가지고 갈수 있게 포장해 드립니다",
    "매장에서 드실 수 있게 준비해드립니다",
    "계신 곳으로 배달됩니다,"
]
const TABS = [
    {
        text : html `&nbsp;&nbsp;포장`,
        imageUrl :'/assets/images/ico-check.svg'
    },
    {
        text : html `&nbsp;&nbsp;매장`,
        imageUrl :'/assets/images/ico-check.svg'
    },  {
        text : html `&nbsp;&nbsp;배달`,
        imageUrl :'/assets/images/ico-check.svg'
    },
];

export default class TabList extends View{
    constructor(){
        super()
        this.tabIndex = 0
    }
    onChangeTab(index){
        this.tabIndex = index
    }
    static get properties(){ //상태 관리
      return {
        tabIndex : {
            type : Number
        },
        onChangeTab : {
            type : Function
        },
      }
    }
    render(){
        return html `
        <div class="tab-switch-box" role="tablist">
        ${TABS.map((tab , index)=>
            html`
             <a href="#" class="tab-switch ${index === this.tabIndex ? 'is-active' : ''}" role="tab" @click=${()=>this.onChangeTab(index)}>
            ${tab.text}
            <img src="${tab.imageUrl}" alt="" class="ico-check" aria-hidden="true">
            </a>`
        )}    
        </div>
        <div class="info-main-notice">
            ${ORDER_TYPE_MESSAGE[this.tabIndex]}
        </div>
        `
    }
}

