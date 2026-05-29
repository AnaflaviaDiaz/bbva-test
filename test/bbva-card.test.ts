import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { BbvaCard } from '../src/BbvaCard.js';
import '../src/bbva-card.js';

describe('BbvaCard', () => {
  // it('has a default header "Hey there" and counter 5', async () => {
  //   const el = await fixture<BbvaCard>(html`<bbva-card></bbva-card>`);

  //   expect(el.header).to.equal('Hey there');
  //   expect(el.counter).to.equal(5);
  // });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture<BbvaCard>(html`<bbva-card></bbva-card>`);
  //   el.shadowRoot!.querySelector('button')!.click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the header via attribute', async () => {
  //   const el = await fixture<BbvaCard>(html`<bbva-card header="attribute header"></bbva-card>`);

  //   expect(el.header).to.equal('attribute header');
  // });

  it('passes the a11y audit', async () => {
    const el = await fixture<BbvaCard>(html`<bbva-card></bbva-card>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
