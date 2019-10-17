import { html, css, LitElement } from 'lit-element';
import "./components/InputSearch.js";
import "./components/FilmItem.js";

class AnythingFinder extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        --film-width-min: 100px;
        --film-width-max: 320px;
      }

      section.films {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--film-width-min), var(--film-width-max)));
        grid-gap: 1rem;
      }

      input-search {
        max-width: 600px;
        margin: 0 auto;
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
    this.placeholder = 'Type movie`s name...';
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

customElements.define('anything-finder', AnythingFinder);