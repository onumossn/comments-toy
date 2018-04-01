import { CommentsToyPage } from './app.po';

describe('comments-toy App', () => {
  let page: CommentsToyPage;

  beforeEach(() => {
    page = new CommentsToyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
