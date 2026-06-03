/* eslint-disable no-unused-expressions */
import { expect, fixture, html } from '@open-wc/testing';

import './index.js';
import { IconModel } from '../../models/icon.model.js';

describe('Category', () => {
  it('should render with default values', async () => {
    const element = await fixture(html`<bbva-category></bbva-category>`);
    const div = element.shadowRoot?.querySelector('div');
    expect(div?.className).to.equal('category');
  });

  it('should render with category name', async () => {
    const categoryName = 'Detalle';
    const element = await fixture(
      html`<bbva-category category-name=${categoryName}></bbva-category>`,
    );
    const span = element.shadowRoot?.querySelector('span');
    expect(span?.textContent).to.equal(categoryName);
  });

  it('should render with icon', async () => {
    const icon: IconModel = {
      name: 'card',
      color: 'red',
      size: 'lg',
    };
    const element = await fixture(
      html`<bbva-category category-name="Card" .icon=${icon}></bbva-category>`,
    );

    const span = element.shadowRoot?.querySelector('span');
    expect(span?.textContent).to.equal('Card');

    const bbvaIcon = element.shadowRoot?.querySelector(
      'bbva-icon',
    ) as Element & {
      name: string;
      color: string;
      size: string;
    };

    expect(bbvaIcon).to.exist;
    expect(bbvaIcon.name).to.equal('card');
    expect(bbvaIcon.color).to.equal('red');
    expect(bbvaIcon.size).to.equal('lg');
  });

  it('should render with icon and default size icon', async () => {
    const icon: IconModel = {
      name: 'card',
      color: 'red',
    };
    const element = await fixture(
      html`<bbva-category
        category-name="Card Test"
        .icon=${icon}
      ></bbva-category>`,
    );

    const span = element.shadowRoot?.querySelector('span');
    expect(span?.textContent).to.equal('Card Test');

    const bbvaIcon = element.shadowRoot?.querySelector(
      'bbva-icon',
    ) as Element & {
      name: string;
      color: string;
      size: string;
    };

    expect(bbvaIcon).to.exist;
    expect(bbvaIcon.name).to.equal('card');
    expect(bbvaIcon.color).to.equal('red');
    expect(bbvaIcon.size).to.equal('md');
  });
});
