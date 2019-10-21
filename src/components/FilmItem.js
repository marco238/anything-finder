import { html, css, LitElement } from 'lit-element';

class FilmItem extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        min-height: 400px;
        position: relative;
      }

      img {
        border-radius: 4px;
        width: 100%;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.32);
      }

      .film-info {
        position: absolute;
        top: 1rem;
        width: 100%;
        color: #fff;
        background: linear-gradient(to right top, #7db1fe, #87a6ff, #9d99ff, #ba87ff, #d96ffc);
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      film: { type: Object }
    };
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

// eslint-disable-next-line no-undef
customElements.define('film-item', FilmItem);