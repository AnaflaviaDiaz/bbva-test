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
      :host {
        bbva-button {
          --btn-width: 100%;
        }
      }

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

      .card-footer {
        display: flex;
        gap: 0.5rem;
        padding: 0.5rem;
        flex-direction: column;

        bbva-button {
          flex: 1;
        }
      }

      @media (min-width: 768px) {
        .card-footer {
          flex-direction: row;
        }
      }
    `,
  ];

  @property({ attribute: false }) date = '';

  @property({ type: Object }) amount?: AmountModel;

  @property({ type: Boolean, attribute: 'has-action-buttons' })
  hasActionButtons = false;

  @property({ type: String }) primaryButtonText?: string;

  @property({ attribute: false }) handlePrimaryButton?: () => void;

  @property({ type: String }) secondaryButtonText?: string;

  @property({ attribute: false }) handleSecondaryButton?: () => void;

  private get _amountTemplate(): TemplateResult | typeof nothing {
    return this.amount
      ? html`<bbva-amount
          .amount=${this.amount.amount}
          .currency=${this.amount.currency}
          .locale=${this.amount.locale as string}
        ></bbva-amount>`
      : nothing;
  }

  private get _primaryButtonTemplate(): TemplateResult | typeof nothing {
    return this.handlePrimaryButton && this.primaryButtonText
      ? html`<bbva-button
          title=${this.primaryButtonText}
          @button-click=${this.handlePrimaryButton}
        ></bbva-button>`
      : nothing;
  }

  private get _secondaryButtonTemplate(): TemplateResult | typeof nothing {
    return this.handleSecondaryButton && this.secondaryButtonText
      ? html`<bbva-button
          title=${this.secondaryButtonText}
          variant="secondary"
          @button-click=${this.handleSecondaryButton}
        ></bbva-button>`
      : nothing;
  }

  private get _actionButtonsTemplate(): TemplateResult | typeof nothing {
    return this.hasActionButtons
      ? html`
          <footer class="card-footer">
            ${this._primaryButtonTemplate} ${this._secondaryButtonTemplate}
          </footer>
        `
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

        <!-- footer -->
        ${this._actionButtonsTemplate}
      </article>
    `;
  }
}
