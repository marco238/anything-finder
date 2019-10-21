function _templateObject3() {
  var data = _taggedTemplateLiteral(["<film-item .film=", "></film-item>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <h2>", "</h2>\n      <input-search placeholder=", "></input-search>\n      <section class=\"films\">\n        <!-- first alternative. \n          ", "\n          The following is better and performant.\n        -->\n        ", "\n      </section>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        display: block;\n        padding: 25px;\n        --film-width-min: 100px;\n        --film-width-max: 320px;\n      }\n\n      h2 {\n        text-align: center;\n      }\n\n      section.films {\n        justify-content: center;\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(var(--film-width-min), var(--film-width-max)));\n        grid-gap: 1rem;\n      }\n\n      input-search {\n        max-width: 600px;\n        margin: 0 auto 30px;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { html, css, LitElement } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import "./components/InputSearch.js";
import "./components/FilmItem.js";

class AnythingFinder extends LitElement {
  static get styles() {
    return css(_templateObject());
  }

  static get properties() {
    return {
      title: {
        type: String
      },
      placeholder: {
        type: String
      },
      films: {
        type: Array
      }
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
    return html(_templateObject2(), this.title, this.placeholder, this.films.map(this.drawFilm), repeat(this.films, movie => movie.Title, this.drawFilm));
  }

  searchAndUpdate(event) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var response = yield _this.searchFilms(event.detail.value);

      _this.updateFilms(response);
    })();
  }

  searchFilms(film) {
    var url = "https://www.omdbapi.com/?s=".concat(film, "&plot=full&apikey=e477ed6a"); // eslint-disable-next-line no-undef

    return fetch(url).then(res => res.json());
  }

  updateFilms(films) {
    this.films = films.Search;
  }

  drawFilm(film) {
    return html(_templateObject3(), film);
  }

} // eslint-disable-next-line no-undef


customElements.define('anything-finder', AnythingFinder);