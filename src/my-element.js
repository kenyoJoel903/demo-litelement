import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`
            <p>Soy My Element</p>
        `;
    }
}
customElements.define('my-element', MyElement);