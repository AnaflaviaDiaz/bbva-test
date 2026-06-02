import { expect, fixture, html } from '@open-wc/testing';

import './index.js';

describe('Icon', () => {
  it('should render with default values', async () => {
    const element = await fixture(html`<bbva-icon></bbva-icon>`);
    const span = element.shadowRoot?.querySelector('span');
    expect(span?.className).to.equal('icon icon__md');
    expect(span?.getAttribute('style')).to.equal('color: currentColor;');
  });

  it('should render with custom values', async () => {
    const element = await fixture(
      html`<bbva-icon name="account" color="red" size="lg"></bbva-icon>`,
    );
    const span = element.shadowRoot?.querySelector('span');
    expect(span?.className).to.equal('icon icon__lg');
    expect(span?.getAttribute('style')).to.equal('color: red;');
  });

  it('should test if it is accessible', async () => {
    const element = await fixture(
      html`<bbva-icon name="account" color="red" size="lg"></bbva-icon>`,
    );
    await expect(element).to.be.accessible();
  });
});
