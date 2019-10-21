import { html, fixture, expect } from '@open-wc/testing';

import '../src/AnythingFinder.js';

describe('AnythingFinder', () => {
  it('Component has X properties', async () => {
    const el = await fixture(html`
      <anything-finder></anything-finder>
    `);

    expect(el.title).to.be.a('string');
    expect(el.placeholder).to.be.a('string');
    expect(el.films).to.be.an('array');
  });
  
  it('Properties have default values', async () => {
    const el = await fixture(html`
      <anything-finder></anything-finder>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.placeholder).to.equal('Type movie`s name...');
    expect(el.films.length).to.equal(0);
  });

  it('Can override properties via attributes', async () => {
    const el = await fixture(html`
      <anything-finder
        title="attribute title"
        placeholder="attribute placeholder">
      </anything-finder>
    `);

    expect(el.title).to.equal('attribute title');
    expect(el.placeholder).to.equal('attribute placeholder');
  });

  it('searchAndUpdate() method', async () => {
    const event = {
      detail: {
        value: 'Hulk'
      }
    };

    const el = await fixture(html`
      <anything-finder></anything-finder>
    `);

    await el.searchAndUpdate(event);
    expect(el.films.length).to.be.above(0);
  });
  
  it('updateFilms() method', async () => {
    const testFilms = {
      Search: ['Ironman', 'Robocop']
    };

    const el = await fixture(html`
      <anything-finder></anything-finder>
    `);

    el.updateFilms(testFilms);
    expect(el.films).to.equal(testFilms.Search);
  });

  it('drawFilm() method', async () => {
    const el = await fixture(html`
      <anything-finder></anything-finder>
    `);

    expect(el.drawFilm()).to.be.an('object');
    expect(el.drawFilm().type).to.equal('html');
  });
});
