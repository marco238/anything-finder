import { html, css, LitElement } from 'lit-element';

export class AnythingFinder extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
    `;
  }
}

window.customElements.define('anything-finder', AnythingFinder);