import { html, css, LitElement } from 'lit-element';

class InputSearch extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        height: 70px;
        padding: 1rem 0;
        box-sizing: border-box;
      }
      input {
        flex-grow: 1;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        padding-left: 10px;
      }
      ::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
      button {
        width: 60px;
        margin-left: 1rem;
        padding: 0 20px;
        border: none;
        border-radius: 4px;
        background: linear-gradient(to right top, #7db1fe, #87a6ff, #9d99ff, #ba87ff, #d96ffc);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
        color: #fff;
        cursor: pointer;
      }
      button:disabled {
        background: #fff;
        color: rgba(0, 0, 0, 0.3);
        box-shadow: none;
        border: 1px solid rgba(0, 0, 0, 0.12);
        cursor: auto;
      }
    `;
  }

  static get properties() {
    return {
      value: { type: String },
      placeholder: { type: String },
      regExp: { type: Object },
      buttonLabel: { type: String },
      isValidValue: { type: Boolean },
      eventName: { type: String }
    };
  }

  constructor() {
    super();
    this.value = '';
    this.placeholder = 'Type here...';
    this.buttonLabel = 'Find';
    this.regExp = new RegExp(/([^\s])/); //empty value
    this.isValidValue = false;
    this.eventName = 'search-item';
  }

  render() {
    return html`
      <input type="text"
        value=${this.value} placeholder=${this.placeholder}
        @keyup=${this.onInputChange} @change=${this.updateValue}
      >
      <button .disabled=${!this.isValidValue} @click=${this.sendValue}> ${this.buttonLabel} </button>
    `;      
  }

  onInputChange(event) {
    const inputValue = event.target.value;
    this.isValidValue = this.regExp.test(inputValue);
  }

  sendValue() {
    // eslint-disable-next-line no-undef
    const event = new CustomEvent(this.eventName, {
      detail: {
        value: this.value
      },
      composed: true // add this to allow event bubbling
    });
    this.dispatchEvent(event);
  }

  updateValue(event) {
    this.value = event.target.value;
  }

}

// eslint-disable-next-line no-undef
customElements.define('input-search', InputSearch);