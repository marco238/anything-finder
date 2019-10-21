function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <input type=\"text\"\n        value=", " placeholder=", "\n        @keyup=", " @change=", "\n      >\n      <button .disabled=", " @click=", "> ", " </button>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        display: flex;\n        height: 70px;\n        padding: 1rem 0;\n        box-sizing: border-box;\n      }\n      input {\n        flex-grow: 1;\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        border-radius: 4px;\n        padding-left: 10px;\n      }\n      ::placeholder {\n        color: rgba(0, 0, 0, 0.3);\n      }\n      button {\n        width: 60px;\n        margin-left: 1rem;\n        padding: 0 20px;\n        border: none;\n        border-radius: 4px;\n        background: linear-gradient(to right top, #7db1fe, #87a6ff, #9d99ff, #ba87ff, #d96ffc);\n        box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);\n        color: #fff;\n        cursor: pointer;\n      }\n      button:disabled {\n        background: #fff;\n        color: rgba(0, 0, 0, 0.3);\n        box-shadow: none;\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        cursor: auto;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { html, css, LitElement } from 'lit-element';

class InputSearch extends LitElement {
  static get styles() {
    return css(_templateObject());
  }

  static get properties() {
    return {
      value: {
        type: String
      },
      placeholder: {
        type: String
      },
      regExp: {
        type: Object
      },
      buttonLabel: {
        type: String
      },
      isValidValue: {
        type: Boolean
      },
      eventName: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.value = '';
    this.placeholder = 'Type here...';
    this.buttonLabel = 'Find';
    this.regExp = new RegExp(/([^\s])/); //empty value

    this.isValidValue = false;
    this.eventName = 'search-item';
  }

  render() {
    return html(_templateObject2(), this.value, this.placeholder, this.onInputChange, this.updateValue, !this.isValidValue, this.sendValue, this.buttonLabel);
  }

  onInputChange(event) {
    var inputValue = event.target.value;
    this.isValidValue = this.regExp.test(inputValue);
  }

  sendValue() {
    // eslint-disable-next-line no-undef
    var event = new CustomEvent(this.eventName, {
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

} // eslint-disable-next-line no-undef


customElements.define('input-search', InputSearch);