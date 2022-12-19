const LINK_TERMS = 'https://www.amazon.com/gp/BIT/TOU';

class App {
  constructor() {
    this.terms_ = document.querySelector('#terms');
    this.permissions_ = document.querySelector('#permissions');
    this.continueBtn_ = document.querySelector('#continue');
    this.notNowBtn_ = document.querySelector('#not-now');
    this.dismissBtn_ = document.querySelector('#dismiss');

    this.terms_.onclick = this.openTerms.bind(this);
    this.permissions_.onclick = this.showPermissions.bind(this);
    this.continueBtn_.onclick = this.install.bind(this);
    this.notNowBtn_.onclick = this.notNow.bind(this);
    this.dismissBtn_.onclick = this.dismiss.bind(this);
  }

  openTerms() {
    opr.amazonPromotionPrivate.skipNextIncreaseInDismissCounter();
    chrome.tabs.create({url: LINK_TERMS});
  }

  showPermissions() {
    opr.amazonPromotionPrivate.showPermissions();
  }

  install() {
    opr.amazonPromotionPrivate.install(res => {
      window.close();
    });
  }

  notNow() {
    opr.amazonPromotionPrivate.hide();
    window.close();
  }

  dismiss() {
    opr.amazonPromotionPrivate.dismiss();
    window.close();
  }

  update() {
    let desc = this.uiData.desc.split(/\$\d/);
    document.querySelectorAll('#desc .part').forEach((elem, index) => {
      elem.innerText = desc[index] || '';
    });
    document.querySelector('#assistant').innerText = this.uiData.assistant;

    let legalNote = this.uiData.legalNote.split(/\$\d/);
    document.querySelectorAll('#legal-note .part').forEach((elem, index) => {
      elem.innerText = legalNote[index] || '';
    });
    this.terms_.innerText = this.uiData.terms;
    this.permissions_.innerText = this.uiData.permissions;

    this.continueBtn_.innerText = this.uiData.continue;
    this.notNowBtn_.innerText = this.uiData.notNow;
    this.dismissBtn_.innerText = this.uiData.dismiss;
  }
}
document.addEventListener('DOMContentLoaded', event => {
  let app = new App();
  app.uiData = {
    desc: chrome.i18n.getMessage('AMAZON_PROMOTION_DESCRIPTION_LABEL', ['$1']),
    assistant: chrome.i18n.getMessage('AMAZON_PROMOTION_ASSISTANT_LINK'),
    legalNote:
        chrome.i18n.getMessage('AMAZON_PROMOTION_LEGAL_LABEL', ['$1', '$2']),
    terms: chrome.i18n.getMessage('AMAZON_PROMOTION_TERMS_LINK'),
    permissions: chrome.i18n.getMessage('AMAZON_PROMOTION_PERMISSIONS_LINK'),
    continue: chrome.i18n.getMessage('AMAZON_PROMOTION_ACCEPT_BUTTON'),
    notNow: chrome.i18n.getMessage('AMAZON_PROMOTION_CANCEL_BUTTON'),
    dismiss: chrome.i18n.getMessage('AMAZON_PROMOTION_DISMISS_BUTTON'),
  };
  app.update();
});
