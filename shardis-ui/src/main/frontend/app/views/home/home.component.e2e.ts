/*
 * TODO: ES5 for now until I make a webpack plugin for protractor
 */
describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'Spring Angular 2 starter';
    expect(subject).toEqual(result);
  });

  
});
