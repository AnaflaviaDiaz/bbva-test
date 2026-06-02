import { expect, fixture, html } from '@open-wc/testing';
import './index.js';

describe('Button', () => {
  it('should render with default values', async () => {
    const element = await fixture(html`<bbva-button></bbva-button>`);
    const button = element.shadowRoot?.querySelector('button');
    expect(button?.textContent.trim()).to.equal('');
    expect(button?.getAttribute('type')).to.equal('button');
    expect(button?.hasAttribute('disabled')).to.equal(false);
  });

  it('should render with provided properties', async () => {
    const element = await fixture(
      html`<bbva-button
        title="Click me"
        variant="secondary"
        type="submit"
        disabled
      ></bbva-button>`,
    );
    const button = element.shadowRoot?.querySelector('button');
    expect(button?.textContent.trim()).to.equal('Click me');
    expect(button?.getAttribute('type')).to.equal('submit');
    expect(button?.hasAttribute('disabled')).to.equal(true);
    expect(element.getAttribute('variant')).to.equal('secondary');
  });

  it('should dispatch custom event on click', async () => {
    const element = await fixture(
      html`<bbva-button title="Click me"></bbva-button>`,
    );
    const button = element.shadowRoot?.querySelector('button');
    let eventDetail = {};
    element.addEventListener('button-click', (event: any) => {
      eventDetail = event.detail;
    });
    button?.click();
    expect(eventDetail).to.deep.equal({ title: 'Click me', type: 'button' });
  });

  it('should test if it is accessible', async () => {
    const element = await fixture(
      html`<bbva-button title="Accessible Button"></bbva-button>`,
    );
    await expect(element).to.be.accessible();
  });
});
