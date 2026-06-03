import { html, LitElement, type TemplateResult } from 'lit';

import './components/button/index.js';
import './components/badge/index.js';
import './components/amount/index.js';
import './components/icon/index.js';
import './components/category/index.js';
import './components/card-account/index.js';
import { CardAccountModel } from './components/models/index.js';
import { typographyStyles } from './tokens/index.js';

const cardAccountData: CardAccountModel = {
  date: '2026-06-05',
  title: 'Titulo',
  amount: {
    amount: 9_999.99,
    heading: 'xl',
    currency: 'EUR',
    locale: 'de-DE',
  },
  marketGain: {
    direction: 'up',
  },
  badgeStatus: { text: 'Status', variant: 'primary' },
  accountCategory: { categoryName: '•1234', icon: { name: 'account' } },
  cardCategory: { categoryName: 'Category', icon: { name: 'car' } },
  hasActionButtons: true,
  primaryButtonText: 'Primary',
  handlePrimaryButton: () => console.log('Primary button clicked'),
  secondaryButtonText: 'Secondary',
  handleSecondaryButton: () => console.log('Secondary button clicked'),
};

export class BbvaCard extends LitElement {
  static styles = [typographyStyles];

  descriptionTemplate: TemplateResult | undefined = html`
    <p>Hola que tal</p>
    <ul>
      <li>Hola</li>
      <li>Hola</li>
      <li>
        Hola que tal Hola que tal Hola que talHola que tal
        <strong> Hola que talHola que </strong>
        tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal
        Hola que tal Hola que tal
      </li>
      <li>
        Hola que tal Hola que tal Hola que talHola que tal
        <strong> Hola que talHola que </strong>
        tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal
        Hola que tal Hola que tal
      </li>
      <li>
        Hola que tal Hola que tal Hola que talHola que tal
        <strong> Hola que talHola que </strong>
        tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal
        Hola que tal Hola que tal
      </li>
    </ul>
  `;

  imgTemplate: TemplateResult = html`<img
    src="https://www.bbva.es/content/dam/public-web/bbvaes/images/personas/productos/cuentas/cuenta-online/promo-1200/1080x720-cuenta-online-saldos.im1774256762253im.jpg?imwidth=768"
    alt="BBVA Logo"
    width="100%"
  />`;

  render() {
    return html`<bbva-card-account
      .date=${cardAccountData.date}
      .title=${cardAccountData.title}
      .amount=${cardAccountData.amount}
      .accountCategory=${cardAccountData.accountCategory}
      .cardCategory=${cardAccountData.cardCategory}
      .badgeStatus=${cardAccountData.badgeStatus}
      .imageTemplate=${this.imgTemplate}
      .markerGain=${cardAccountData.marketGain}
      ?has-action-buttons=${cardAccountData.hasActionButtons}
      .primaryButtonText=${cardAccountData.primaryButtonText}
      .handlePrimaryButton=${cardAccountData.handlePrimaryButton}
      .secondaryButtonText=${cardAccountData.secondaryButtonText}
      .handleSecondaryButton=${cardAccountData.handleSecondaryButton}
    >
      ${this.descriptionTemplate}
    </bbva-card-account> `;
  }
}
