import { html, css, LitElement } from 'lit-element';

export class FilmItem extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        max-width: 320px;
        min-height: 400px;
        position: relative;
      }

      img {
        width: 100%;
      }

      .film-info {
        position: absolute;
        bottom: 1rem;
        width: 100%;
        color: white;
        background-color: rgba(255, 0, 0, 0.8);
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      film: { type: Object }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <img src=${this.checkPoster(this.film.Poster)} alt="film poster">
      <div class="film-info">
        <p>${this.film.Title}</p>
        <p>${this.film.Year}</p>
      </div>
    `;      
  }

  checkPoster(poster) {
    const defaultImg = 'https://www.crosskeysins.com/wp-content/uploads/2013/04/portrait-placeholder.jpg';
    return poster === 'N/A' ? defaultImg : poster;
  }

}

window.customElements.define('film-item', FilmItem);