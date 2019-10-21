function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <img src=", " alt=\"film poster\">\n      <div class=\"film-info\">\n        <p>", "</p>\n        <p>", "</p>\n      </div>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        display: block;\n        width: 100%;\n        min-height: 400px;\n        position: relative;\n      }\n\n      img {\n        border-radius: 4px;\n        width: 100%;\n        box-shadow: 0 0 15px rgba(0, 0, 0, 0.32);\n      }\n\n      .film-info {\n        position: absolute;\n        top: 1rem;\n        width: 100%;\n        color: #fff;\n        background: linear-gradient(to right top, #7db1fe, #87a6ff, #9d99ff, #ba87ff, #d96ffc);\n        text-align: center;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { html, css, LitElement } from 'lit-element';

class FilmItem extends LitElement {
  static get styles() {
    return css(_templateObject());
  }

  static get properties() {
    return {
      film: {
        type: Object
      }
    };
  }

  render() {
    return html(_templateObject2(), this.checkPoster(this.film.Poster), this.film.Title, this.film.Year);
  }

  checkPoster(poster) {
    var defaultImg = 'https://www.crosskeysins.com/wp-content/uploads/2013/04/portrait-placeholder.jpg';
    return poster === 'N/A' ? defaultImg : poster;
  }

} // eslint-disable-next-line no-undef


customElements.define('film-item', FilmItem);