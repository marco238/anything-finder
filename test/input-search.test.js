import { html, fixture, expect, assert } from '@open-wc/testing';

import '../src/components/InputSearch';

describe('InputSearch', () => {
  it('Component has X properties', async () => {
    const el = await fixture(html`
      <input-search></input-search>
    `);

    expect(el.value).to.be.a('string');
    expect(el.placeholder).to.be.a('string');
    assert.equal(el.regExp instanceof RegExp, true);
    expect(el.buttonLabel).to.be.a('string');
    expect(el.isValidValue).to.be.a('boolean');
    expect(el.eventName).to.be.a('string');
  });
  
  it('Properties have default values', async () => {
    const el = await fixture(html`
      <input-search></input-search>
    `);

    expect(el.value).to.equal('');
    expect(el.placeholder).to.equal('Type here...');
    expect(el.regExp.toString()).to.equal(new RegExp(/([^\s])/).toString());
    expect(el.buttonLabel).to.equal('Find');
    expect(el.isValidValue).to.equal(false);
    expect(el.eventName).to.equal('search-item');
  });

  it('Can override properties via attributes', async () => {
    const el = await fixture(html`
      <input-search
        value="attribute title"
        placeholder="attribute placeholder"
        buttonLabel="attribute button"
        isValidValue
        eventName="attribute event">
      </input-search>
    `);

    expect(el.value).to.equal('attribute title');
    expect(el.placeholder).to.equal('attribute placeholder');
    expect(el.buttonLabel).to.equal('attribute button');
    expect(el.isValidValue).to.equal(true);
    expect(el.eventName).to.equal('attribute event');
  });

  it('onInputChange() method', async () => {
    const event = {
      target: {
        value: 'H'
      }
    };
    const regExp = new RegExp(/([^\s])/);

    const el = await fixture(html`
      <input-search></input-search>
    `);

    el.onInputChange(event);
    expect(el.isValidValue).to.equal(regExp.test(event.target.value));
  });

  it('sendValue() method', async () => {
    const el = await fixture(html`
      <input-search></input-search>
    `);

    el.addEventListener(el.eventName, (e) => {
      expect(e.detail.value).to.equal(el.value);
    });
    el.sendValue();
  });

  it('updateValue() method', async () => {
    const event = {
      target: {
        value: 'H'
      }
    };

    const el = await fixture(html`
      <input-search></input-search>
    `);

    el.updateValue(event);
    expect(el.value).to.equal('H');
  });
});
