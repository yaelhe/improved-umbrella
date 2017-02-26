'use strict';

describe('fetch', () => {
  it('should wait for fetch', () => {
    browser.get('/fetch');
    $('.fetch-button').click();
    expect($('.result').getText()).to.be('done');
  });
});