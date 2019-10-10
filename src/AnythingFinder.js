import { html, css, LitElement } from 'lit-element';
import "./components/InputSearch.js";

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
    this.placeholder = 'Introduce película';
    this.addEventListener('search-item', this.searchFilm);
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <input-search placeholder=${this.placeholder}></input-search>
    `;
  }

  searchFilm(event) {
    console.log('buscar ' + event.detail.value);
  }
}

window.customElements.define('anything-finder', AnythingFinder);