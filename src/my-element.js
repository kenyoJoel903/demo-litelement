import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {

    static get properties() {
        return {
            quien: { type: String }
        };
    }

 

    render() {
        return html`
            <p>Hola ${this.quien}</p>
        `;
    }
}
customElements.define('my-element', MyElement);