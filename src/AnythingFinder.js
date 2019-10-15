import { html, css, LitElement } from 'lit-element';
import "./components/InputSearch.js";
import "./components/FilmItem.js";

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
      films: { type: Array }
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.placeholder = 'Introduce película';
    this.films = [];
    this.addEventListener('search-item', this.searchFilm);
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <input-search placeholder=${this.placeholder}></input-search>
      <section class="films">
        ${this.films.map(this.drawFilm)}
      </section>
    `;
  }

  searchFilm(event) {
    console.log('buscar ' + event.detail.value);
    const film = event.detail.value;
    const url = `https://www.omdbapi.com/?s=${film}&plot=full&apikey=e477ed6a`;
    fetch(url)
      .then(res => res.json())
      .then(this.updateFilms.bind(this));
  }

  updateFilms(films) {
    this.films = films.Search;
  }

  drawFilm(film) {
    return html`<film-item .film=${film}></film-item>`;
  }
}

window.customElements.define('anything-finder', AnythingFinder);