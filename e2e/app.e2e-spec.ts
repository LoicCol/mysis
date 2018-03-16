import { MysisPage } from './app.po';

describe('mysis App', function() {
  let page: MysisPage;

  beforeEach(() => {
    page = new MysisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
