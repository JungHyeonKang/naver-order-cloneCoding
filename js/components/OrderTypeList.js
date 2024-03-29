import {html} from "../../node_modules/lit-element/lit-element"
import View from "../view.js"

const ORDER_TYPE_HEADING = [
    "포장할게요",
    "매장에서 식사를 준비해둘게요",
    "배달해드릴께요",
  ];

const ORDER_TYPE_MESSAGE = [
    "가지고 갈수 있게 포장해 드립니다",
    "매장에서 드실 수 있게 준비해드립니다",
    "계신 곳으로 배달됩니다,"
]
export default class OrderTypeList extends View{
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
        }
    }
    render(){
        return html`
        <div class="order-content-top">
        <p class="title">${ORDER_TYPE_HEADING[this.orderTypeIndex]}
            <svg width="18" height="18" viewBox="0 0 12 12" class="ico-takeout">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M3.558 3.997a21.21 21.21 0 00-.014.682 1.194 1.194 0 101.495 1.155c0-.42-.223-.811-.582-1.025.005-.372.012-.645.018-.77.01-.186.022-.37.037-.548h2.976c.016.175.028.358.038.546.006.125.013.398.018.772a1.194 1.194 0 00.611 2.218 1.194 1.194 0 00.304-2.348c-.003-.218-.007-.49-.01-.573-.011-.228-.024-.43-.039-.615h2.102c.346 0 .629.275.629.612a.628.628 0 01-.01.102l-.782 6.443a.623.623 0 01-.62.512H2.3a.622.622 0 01-.619-.51L.869 4.203a.595.595 0 01.104-.449.627.627 0 01.516-.263h2.102c-.013.153-.023.32-.033.506zm1.058-1.345C4.774 1.708 5.057.844 6 .844c.942 0 1.226.864 1.384 1.808h-2.77zm5.896 0H8.314C8.03.768 7.357 0 6.001 0 4.64 0 3.969.768 3.686 2.652H1.489c-.081 0-.164.006-.244.02-.4.065-.746.278-.978.602-.223.313-.31.691-.246 1.066l.811 6.447C.952 11.49 1.57 12 2.3 12h7.43c.73 0 1.346-.509 1.467-1.214l.782-6.443c.015-.078.021-.159.021-.24 0-.8-.667-1.45-1.488-1.45z">
                </path>
            </svg>
        </p>
        <p class="desc">${ORDER_TYPE_MESSAGE[this.orderTypeIndex]}</p>
        <p class="count">담은 메뉴: ${this.cartItems.length}개</p>
        </div>
    `
    }
}