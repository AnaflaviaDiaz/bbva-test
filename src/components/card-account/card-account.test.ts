/* eslint-disable no-unused-expressions */
import { expect, fixture } from '@open-wc/testing';
import { html, TemplateResult } from 'lit';

import { AmountModel, CardAccountModel } from '../models/index.js';
import './index.js';
import '../amount/index.js';
import '../badge/index.js';
import '../category/index.js';
import '../icon/index.js';
import '../button/index.js';

const descriptionTemplate: TemplateResult | undefined = html`
  <p>Description</p>
  <ul>
    <li>Hola</li>
    <li>
      Hola que tal
      <strong> Hola que tal</strong>
    </li>
  </ul>
`;

const imgTemplate: TemplateResult = html`<img
  src="https://www.bbva.es/content/dam/public-web/bbvaes/images/personas/productos/cuentas/cuenta-online/promo-1200/1080x720-cuenta-online-saldos.im1774256762253im.jpg?imwidth=768"
  alt="BBVA Logo"
  width="100%"
/>`;

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
  imageTemplate: imgTemplate,
  badgeStatus: { text: 'Status', variant: 'primary' },
  accountCategory: { categoryName: '•1234', icon: { name: 'account' } },
  cardCategory: { categoryName: 'Category', icon: { name: 'car' } },
  primaryButtonText: 'Primary Button',
  handlePrimaryButton: () => {},
  secondaryButtonText: 'Secondary Button',
  handleSecondaryButton: () => {},
};

describe('CardACcount', () => {
  it('should render with default values', async () => {
    const element = await fixture(
      html`<bbva-card-account></bbva-card-account>`,
    );
    const article = element.shadowRoot?.querySelector('article');
    expect(article).to.exist;
    expect(article?.className).to.equal('card');
  });

  it('should render with custom values', async () => {
    const element = (await fixture(
      html`<bbva-card-account
        .date=${cardAccountData.date}
        .title=${cardAccountData.title}
        .amount=${cardAccountData.amount}
        .accountCategory=${cardAccountData.accountCategory}
        .cardCategory=${cardAccountData.cardCategory}
        .badgeStatus=${cardAccountData.badgeStatus}
        .imageTemplate=${imgTemplate}
        .markerGain=${cardAccountData.marketGain}
        .primaryButtonText=${cardAccountData.primaryButtonText}
        .handlePrimaryButton=${cardAccountData.handlePrimaryButton}
        .secondaryButtonText=${cardAccountData.secondaryButtonText}
        .handleSecondaryButton=${cardAccountData.handleSecondaryButton}
      >
        ${descriptionTemplate}
      </bbva-card-account> `,
    )) as any;
    await element.updateComplete;

    const article = element.shadowRoot?.querySelector('article');
    expect(article?.className).to.equal('card');

    const amountEl = element.shadowRoot?.querySelector('bbva-amount') as any;
    if (amountEl) await amountEl.updateComplete;
    const amountP = amountEl?.shadowRoot?.querySelector('p');
    expect(amountP?.textContent?.trim()).to.not.equal('');

    const badgeEl = element.shadowRoot?.querySelector('bbva-badge') as any;
    if (badgeEl) await badgeEl.updateComplete;
    const badgeSpan = badgeEl?.shadowRoot?.querySelector('span');
    expect(badgeSpan?.textContent).to.equal('Status');

    const categoryEls = element.shadowRoot?.querySelectorAll('bbva-category');
    const firstCategory = categoryEls && (categoryEls[0] as any);
    if (firstCategory) await firstCategory.updateComplete;
    expect(firstCategory?.shadowRoot?.textContent).to.contain('•1234');

    const slot = element.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedNodes({ flatten: true }) ?? [];
    expect(assigned.length).to.be.greaterThan(0);
  });

  describe('Header', () => {
    it('should render header with date, formatted amount and currency', async () => {
      const element = (await fixture(
        html`<bbva-card-account
          .date=${'2026-06-05'}
          .amount=${{
            amount: 7885.23,
            currency: 'EUR',
            locale: 'de-DE',
          } as AmountModel}
        ></bbva-card-account>`,
      )) as any;

      await element.updateComplete;

      const header = element?.shadowRoot?.querySelector('header');
      expect(header).to.exist;

      const time = element.shadowRoot?.querySelector(
        'time',
      ) as HTMLTimeElement | null;
      expect(time).to.exist;
      expect(time?.getAttribute('datetime')).to.equal('2026-06-05');
      expect(time?.textContent?.trim()).to.equal('05/06/2026');

      const amountEl = element.shadowRoot?.querySelector('bbva-amount') as any;
      expect(amountEl).to.exist;
      if (amountEl) await amountEl.updateComplete;

      const p = amountEl?.shadowRoot?.querySelector('p');
      expect(p).to.exist;

      expect(p?.textContent).to.equal('7.885,23\u00A0€');
    });

    it('should render header with date, formatted amount, currency and markedGain', async () => {
      const element = (await fixture(
        html`<bbva-card-account
          .date=${cardAccountData.date}
          .markerGain=${cardAccountData.marketGain}
          .amount=${cardAccountData.amount}
        ></bbva-card-account>`,
      )) as any;

      await element.updateComplete;

      const header = element?.shadowRoot?.querySelector('header');
      expect(header).to.exist;

      const time = element.shadowRoot?.querySelector(
        'time',
      ) as HTMLTimeElement | null;
      expect(time).to.exist;
      expect(time?.getAttribute('datetime')).to.equal('2026-06-05');
      expect(time?.textContent?.trim()).to.equal('05/06/2026');

      const amountEl = element.shadowRoot?.querySelector('bbva-amount') as any;
      expect(amountEl).to.exist;
      if (amountEl) await amountEl.updateComplete;

      const p = amountEl?.shadowRoot?.querySelector('p');
      expect(p).to.exist;

      expect(p?.textContent).to.equal('9.999,99\u00A0€');
    });
  });

  describe('Content', () => {
    it('should render with badgeStatus, account and card Categories', async () => {
      const element = (await fixture(
        html`<bbva-card-account
          .amount=${cardAccountData.amount}
          .accountCategory=${cardAccountData.accountCategory}
          .cardCategory=${cardAccountData.cardCategory}
          .badgeStatus=${cardAccountData.badgeStatus}
        >
        </bbva-card-account> `,
      )) as any;
      await element.updateComplete;

      const cardContent = element.shadowRoot?.querySelector('.card-content');
      expect(cardContent).to.exist;

      const amountEl = element.shadowRoot?.querySelector('bbva-amount') as any;
      if (amountEl) await amountEl.updateComplete;
      const amountP = amountEl?.shadowRoot?.querySelector('p');
      expect(amountP?.textContent?.trim()).to.not.equal('');

      const badgeEl = element.shadowRoot?.querySelector('bbva-badge') as any;
      if (badgeEl) await badgeEl.updateComplete;
      const badgeSpan = badgeEl?.shadowRoot?.querySelector('span');
      expect(badgeSpan?.textContent).to.equal('Status');

      const categoryEls = element.shadowRoot?.querySelectorAll('bbva-category');
      const firstCategory = categoryEls && (categoryEls[0] as any);
      if (firstCategory) await firstCategory.updateComplete;
      expect(firstCategory?.shadowRoot?.textContent).to.contain('•1234');
    });

    it('should render with Image', async () => {
      const element = (await fixture(
        html`<bbva-card-account .imageTemplate=${cardAccountData.imageTemplate}>
        </bbva-card-account> `,
      )) as any;
      await element.updateComplete;

      const cardContent = element.shadowRoot?.querySelector('.card-content');
      expect(cardContent).to.exist;

      const cardContentImage = element.shadowRoot?.querySelector(
        '.card-content__image',
      );
      expect(cardContentImage).to.exist;
    });

    it('should render with Description template', async () => {
      const element = (await fixture(
        html`<bbva-card-account>${descriptionTemplate}</bbva-card-account>`,
      )) as any;

      await element.updateComplete;

      const descriptionContainer = element?.shadowRoot?.querySelector(
        '.card-content__description',
      );
      expect(descriptionContainer).to.exist;

      const slottedParagraph = element.querySelector('p');
      expect(slottedParagraph).to.exist;
      expect(slottedParagraph?.textContent?.trim()).to.equal('Description');

      const slottedItem = element.querySelector('li');
      expect(slottedItem).to.exist;
      expect(slottedItem?.textContent?.trim()).to.contain('Hola');
    });
  });

  describe('Footer', () => {
    it('should render footer with primary button', async () => {
      const element = (await fixture(
        html`<bbva-card-account
          .primaryButtonText=${cardAccountData.primaryButtonText}
          .handlePrimaryButton=${cardAccountData.handlePrimaryButton}
        ></bbva-card-account>`,
      )) as any;

      await element.updateComplete;

      const footer = element?.shadowRoot?.querySelector('footer');
      expect(footer).to.exist;

      const button = element.shadowRoot?.querySelector('bbva-button') as any;
      expect(button).to.exist;
      if (button) await button.updateComplete;

      const buttonTitle = button?.getAttribute('title');
      expect(buttonTitle).to.equal('Primary Button');
    });

    it('should render footer with primary and secondary button', async () => {
      const clickLog: string[] = [];

      const element = (await fixture(
        html`<bbva-card-account
          .primaryButtonText=${'Primary Button'}
          .handlePrimaryButton=${() => {
            clickLog.push('primary');
          }}
          .secondaryButtonText=${'Secondary Button'}
          .handleSecondaryButton=${() => {
            clickLog.push('secondary');
          }}
        ></bbva-card-account>`,
      )) as any;

      await element.updateComplete;

      const footer = element?.shadowRoot?.querySelector('footer');
      expect(footer).to.exist;

      const buttons = element.shadowRoot?.querySelectorAll('bbva-button');
      expect(buttons?.length).to.equal(2);

      const primaryButton = buttons?.[0] as any;
      if (primaryButton) await primaryButton.updateComplete;
      expect(primaryButton?.getAttribute('title')).to.equal('Primary Button');

      // Click on the native button inside shadow DOM
      const primaryNativeButton =
        primaryButton?.shadowRoot?.querySelector('button');
      primaryNativeButton?.click();
      await new Promise(r => {
        setTimeout(r, 100);
      });
      expect(clickLog).to.include('primary');

      const secondaryButton = buttons?.[1] as any;
      if (secondaryButton) await secondaryButton.updateComplete;
      expect(secondaryButton?.getAttribute('title')).to.equal(
        'Secondary Button',
      );

      const secondaryNativeButton =
        secondaryButton?.shadowRoot?.querySelector('button');
      secondaryNativeButton?.click();
      await new Promise(r => {
        setTimeout(r, 100);
      });
      expect(clickLog).to.include('secondary');
    });
  });
});
