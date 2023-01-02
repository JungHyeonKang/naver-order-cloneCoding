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
    addCartItem(){

    }
    route(){
        switch (this.currenPage) {
            case "detail":
                return html `<detail-page
                .orderTypeIndex=${this.orderTypeIndex} 
                .setOrderTypeIndex=${this.setOrderTypeIndex.bind(this)}>
                </detail-page>`
            
            case "order":
                return html `<order-page>
                </order-page>`    
               
            default:
                return html `<menu-page 
                .orderTypeIndex=${this.orderTypeIndex} 
                .setOrderTypeIndex=${this.setOrderTypeIndex.bind(this)}>
                </menu-page>`                
        }
    }
    render(){
        return this.route()
    }
}