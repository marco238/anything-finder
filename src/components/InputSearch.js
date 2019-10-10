import { html, css, LitElement } from 'lit-element';

export class InputSearch extends LitElement {
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
      }
      button {
        margin-left: 1rem;
      }
    `;
  }

  static get properties() {
    return {
      value: { type: String },
      placeholder: { type: String },
      regExp: { type: String },
      buttonLabel: { type: String },
      isValidValue: { type: Boolean },
      eventName: { type: String }
    };
  }

  constructor() {
    super();
    this.value = '';
    this.buttonLabel = 'buscar';
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

window.customElements.define('input-search', InputSearch);