import { browser, by, element } from 'protractor';

export class AppPage {
  [x: string]: any;
  navigateTo(link: string) {
    return browser.get(link);
  }

  getParagraphText(selector: string) {
    return element(by.css(selector)).getText();
  }

  getElement(selector: string){
    return element(by.css(selector));

  }
  getElements(selector: string){
      return element.all(by.css(selector));

  }
}
