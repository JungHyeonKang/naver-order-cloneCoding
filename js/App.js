import {html} from '../node_modules/lit-element/lit-element';
import View from './view';

export default class App extends View{
    constructor(){
        super()
        this.currenPage = "menu"
        this.orderTypeIndex =0
        this.cartItems = []
        window.onpopstate = () =>{
            const [,currenPage]=location.pathname.split("/")
            this.currenPage = currenPage
        }
    }
    static get properties(){
        return{
            currenPage : {
                type : String  
            },
            orderTypeIndex : {
                type : Number  
            },
            setOrderTypeIndex : {
                type : Function  
            },
            cartItems : {
                type : Array  
            },
        }
    }
    setOrderTypeIndex(index){
        this.orderTypeIndex = index
    }
    addCartItem(menu){
        const newCartItems = [...this.cartItems]
        newCartItems.push(menu)
        this.cartItems = newCartItems;
        history.pushState(null,null,"/")
        dispatchEvent(new PopStateEvent("popstate"))
    }
    route(){
        switch (this.currenPage) {
            case "detail":
                return html `<detail-page
                .orderTypeIndex=${this.orderTypeIndex} 
                .setOrderTypeIndex=${this.setOrderTypeIndex.bind(this)}
                .addCartItem=${this.addCartItem.bind(this)}>
                </detail-page>`
            
            case "order":
                return html `<order-page 
                .orderTypeIndex=${this.orderTypeIndex} 
                .cartItems=${this.cartItems}>
                </order-page>`    
               
            default:
                return html `<menu-page 
                .orderTypeIndex=${this.orderTypeIndex} 
                .setOrderTypeIndex=${this.setOrderTypeIndex.bind(this)}
                .cartItems=${this.cartItems}>
                </menu-page>`                
        }
    }
    render(){
        return this.route()
    }
}