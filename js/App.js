import {html} from '../node_modules/lit-element/lit-element';
import View from './view';

export default class App extends View{
    constructor(){
        super()
    }
    render(){
        return html `<menu-page></menu-page>`
    }
}