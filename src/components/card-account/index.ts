import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { baseStyles } from '../../tokens/base.styles.js';
import { dateFormatter } from '../../utils/date-formatter.js';
import { VariantHeading } from '../models/variant.model.js';
import '../amount/index.js';

const currentDay = dateFormatter(new Date());

const amount = {
  amount: 9_999.99,
  heading: 'xl' as VariantHeading,
  currency: 'EUR',
  locale: 'de-DE',
};

@customElement('bbva-card-account')
export class CardAccount extends LitElement {
  static styles = [
    baseStyles,
    css`
      .card {
        position: relative;
        background-position: center;
        background-size: cover;
        border-radius: 1rem;
        background-color: var(--color-primary);
      }

      .card-header {
        padding: 0 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ];

  render() {
    return html`
      <article class="card">
        <header class="card-header">
          <p>${currentDay}</p>
          <bbva-amount
            .amount=${amount.amount}
            .currency=${amount.currency}
            .locale=${amount.locale}
          ></bbva-amount>
        </header>

        <div class="card-content"></div>

        <footer class="card-footer"></footer>
      </article>
    `;
  }
}
