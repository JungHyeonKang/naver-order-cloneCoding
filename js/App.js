import {html} from '../node_modules/lit-element/lit-element';
import View from './view';

export default class App extends View{
    constructor(){
        super()
        this.currenPage = "menu"
        window.onpopstate = () =>{
            const [,currenPage,id]=location.pathname.split("/")
            this.currenPage = currenPage
            console.log(this.currenPage)
        }
    }
    static get properties(){
        return{
            currenPage : {
                type : String  
            },
        }
    }
    route(){
        switch (this.currenPage) {
            case "detail":
                return html `<detail-page></detail-page>`
               
            default:
                return html `<menu-page></menu-page>`
                
        }
    }
    render(){
        return this.route()
    }
}