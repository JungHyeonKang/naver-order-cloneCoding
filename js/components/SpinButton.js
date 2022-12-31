import { html } from "../../node_modules/lit-element/lit-element"

const SpinButton = ({count , onIncreaseAmount , onDecreaseAmount}) =>{
    return html `
    <div class="amount-select">
        <button class="btn-minus" aira-label="빼기" @click=${onDecreaseAmount}></button>
            <span class="amount disabled">${count}</span>
        <button class="btn-plus enabled" aria-label="더하기" @click=${onIncreaseAmount}></button>
    </div>`
}

export default SpinButton