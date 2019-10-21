import { html, css, LitElement } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
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

      h2 {
        text-align: center;
      }

      section.films {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--film-width-min), var(--film-width-max)));
        grid-gap: 1rem;
      }

      input-search {
        max-width: 600px;
        margin: 0 auto 30px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      placeholder: { type: String },
      films: { type: Array }
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.placeholder = 'Type movie`s name...';
    this.films = [];
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('search-item', this.searchAndUpdate);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('search-item', this.searchAndUpdate);
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <input-search placeholder=${this.placeholder}></input-search>
      <section class="films">
        <!-- first alternative. 
          ${this.films.map(this.drawFilm)}
          The following is better and performant.
        -->
        ${repeat(this.films, movie => movie.Title, this.drawFilm)}
      </section>
    `;
  }

  async searchAndUpdate(event) {
    const response = await this.searchFilms(event.detail.value);
    this.updateFilms(response);
  }

  searchFilms(film) {
    const url = `https://www.omdbapi.com/?s=${film}&plot=full&apikey=e477ed6a`;
    // eslint-disable-next-line no-undef
    return fetch(url)
      .then(res => res.json());
  }

  updateFilms(films) {
    this.films = films.Search;
  }

  drawFilm(film) {
    return html`<film-item .film=${film}></film-item>`;
  }
}

// eslint-disable-next-line no-undef
customElements.define('anything-finder', AnythingFinder);