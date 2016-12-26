import { LalaTravelWebPage } from './app.po';

describe('lala-travel-web App', function() {
  let page: LalaTravelWebPage;

  beforeEach(() => {
    page = new LalaTravelWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
