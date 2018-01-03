import { RafaelsAppPage } from './app.po';

describe('rafaels-app App', () => {
  let page: RafaelsAppPage;

  beforeEach(() => {
    page = new RafaelsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
