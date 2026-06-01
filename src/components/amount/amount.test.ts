import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

import './index.js';

describe('Amount', () => {
  it('should render with default values', async () => {
    const element = await fixture(html`<bbva-amount></bbva-amount>`);
    const p = element.shadowRoot?.querySelector('p');

    expect(p?.textContent).to.equal('0,00\u00A0€');
    expect(p?.className).to.equal('');
  });

  it('should render with formatted amount', async () => {
    const element = await fixture(
      html`<bbva-amount
        .locale=${'de-DE'}
        .currency=${'EUR'}
        .amount=${1_200.23}
      ></bbva-amount>`,
    );

    const p = element.shadowRoot?.querySelector('p');
    expect(p?.textContent).to.equal('1.200,23\u00A0€');
    expect(p?.className).to.equal('');
  });

  it('should render with title class', async () => {
    const element = await fixture(
      html`<bbva-amount
        .locale=${'de-DE'}
        .currency=${'EUR'}
        .amount=${1_200.23}
        .heading=${'2xl'}
      ></bbva-amount>`,
    );

    const p = element.shadowRoot?.querySelector('p');
    expect(p?.textContent).to.equal('1.200,23\u00A0€');
    expect(p?.className).to.equal('title-2xl');
  });

  it('should test if it is accessible', async () => {
    const element = await fixture(
      html`<bbva-amount
        .locale=${'de-DE'}
        .currency=${'EUR'}
        .amount=${1_200.23}
      ></bbva-amount>`,
    );
    await expect(element).to.be.accessible();
  });

  it('updates when amount changes', async () => {
    const el = await fixture(html`
      <bbva-amount amount="100" currency="EUR" locale="es-ES"></bbva-amount>
    `) as any;

    let p = el.shadowRoot?.querySelector('p');
    expect(p?.textContent).to.equal('100,00\u00A0€');

    el.amount = 250;

    await el.updateComplete;

    p = el.shadowRoot?.querySelector('p');
    expect(p?.textContent).to.equal('250,00\u00A0€');
  });
});
