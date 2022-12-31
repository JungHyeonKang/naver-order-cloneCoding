import {html} from '../node_modules/lit-element/lit-element';
import View from './view';

export default class App extends View{
    constructor(){
        super()
        this.currenPage = "menu"
        this.orderTypeIndex =0
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
        }
    }
    setOrderTypeIndex(index){
        console.log(index)
        this.orderTypeIndex = index
    }
    route(){
        switch (this.currenPage) {
            case "detail":
                return html `<detail-page
                .orderTypeIndex=${this.orderTypeIndex} 
                .setOrderTypeIndex=${this.setOrderTypeIndex.bind(this)}>
                </detail-page>`
               
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