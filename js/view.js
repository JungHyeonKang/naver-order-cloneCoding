import { LitElement } from '../node_modules/lit-element/lit-element';

export default class View extends LitElement{
    createRenderRoot(){
        return this;
    }
}