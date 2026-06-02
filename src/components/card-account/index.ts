import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../../tokens/base.styles.js';
import { AmountModel } from '../models/amount.model.js';
import '../amount/index.js';

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
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
      }
    `,
  ];

  @property({ attribute: false }) date = '';

  @property({ type: Object }) amount?: AmountModel;

  private get _amountTemplate(): TemplateResult | typeof nothing {
    return this.amount
      ? html`<bbva-amount
          .amount=${this.amount.amount}
          .currency=${this.amount.currency}
          .locale=${this.amount.locale as string}
        ></bbva-amount>`
      : nothing;
  }

  render() {
    return html`
      <article class="card">
        <header class="card-header">
          <p>${this.date}</p>
          ${this._amountTemplate}
        </header>

        <div class="card-content"></div>

        <footer class="card-footer"></footer>
      </article>
    `;
  }
}
