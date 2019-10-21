import { html, fixture, expect } from '@open-wc/testing';

import '../src/components/FilmItem';

const film = {
  Title: 'Candyman',
  Year: 1992,
  Poster: 'https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
};

const noPosterFilm = {
  Title: 'Candyman',
  Year: 1992,
  Poster: 'N/A'
};

describe('InputSearch', () => {
  it('Component has X properties', async () => {
    const el = await fixture(html`
      <film-item .film=${film}></film-item>
    `);

    expect(el.film).to.be.an('object');
  });

  it('sendValue() method', async () => {
    const el = await fixture(html`
      <film-item .film=${film}></film-item>
    `);

    expect(el.checkPoster(film.Poster)).to.equal('https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg');
    expect(el.checkPoster(noPosterFilm.Poster)).to.equal('https://www.crosskeysins.com/wp-content/uploads/2013/04/portrait-placeholder.jpg');
  });
});
