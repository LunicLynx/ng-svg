import { SvgdemoPage } from './app.po';

describe('svgdemo App', function() {
  let page: SvgdemoPage;

  beforeEach(() => {
    page = new SvgdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
