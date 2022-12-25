import {html , LitElement} from '../node_modules/lit-element/lit-element';

export default class App extends LitElement{
    constructor(){
        super()
    }
    createRenderRoot(){
        return this;
    }
    render(){
        return html`<h1>하이하이2</h1>`   
    }
}