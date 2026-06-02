import { expect, fixture } from '@open-wc/testing';
import './index.js';
import { html } from 'lit';

describe('Badge', () => {
  it('should render with default values', async () => {
    const element = await fixture(html`<bbva-badge></bbva-badge>`);
    const span = element.shadowRoot?.querySelector('span');

    expect(span?.textContent).to.equal('');
    expect(span?.className).to.equal('badge badge__secondary');
  });

  it('should render with text and primary variant', async () => {
    const element = await fixture(
      html`<bbva-badge text="Test" variant="primary"></bbva-badge>`,
    );
    const span = element.shadowRoot?.querySelector('span');

    expect(span?.textContent).to.equal('Test');
    expect(span?.className).to.equal('badge badge__primary');
  });
});
