import { LitElement, html, css } from 'lit-element';

export class FeedbackElement extends LitElement {

  
    static get properties() {
        return {
            msg: { type: String },
            opened: {type: Boolean}
        };
    }

    static get styles() {
        return css`
        div {
            position: fixed;
            bottom: 0px;
            left: 0px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #e74c3c;
            color: white;
            width: 100%;
            transition: all 0.7s ease-in;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 1px;
        }
        .opened {
            height: 100px;
            font-size: 2em;
        }
        `;
    }

    
    

    render() {
        return html`
        <div class="${this.opened ? 'opened' : ''}">
            ${this.msg}
        </div>
        `;
    }

    open(mensaje) {
        this.msg = mensaje;
        this.opened = true;

        setTimeout(() => {
            this.opened = false;
        }, 3000);
    }
}
customElements.define('feedback-element', FeedbackElement);