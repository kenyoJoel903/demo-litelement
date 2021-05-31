import { LitElement, html, css } from 'lit-element';

export class MyCounter extends LitElement {

  
   
    static get properties() {
        return {
            counter: { type: Number }
        };
    }

    
    constructor() {
        super();
    
        this.counter = 0;
    
    }

    render() {
        return html`
        <div>Llevas ${this.counter}</div>
        <div>
            <button @click="${this.incrementar}">+1</button>
            <button @click="${this.disminutir}">-1</button>
        </div>
        <feedback-element id="feedback"></feedback-element>
        `;
    }
    get feedback() {
        return this.shadowRoot.getElementById('feedback') ;
    }

    incrementar(){
        this.counter ++;
        if(this.counter == 5) {
            this.feedback.open(`Haz llegado a ${this.counter} clicks`);
        }
    }

    disminutir() {
        this.counter --;
        if(this.counter == 0) {
            this.feedback.open(`Haz reseteado los clicks`);
        }
    }

}
customElements.define('my-counter', MyCounter);