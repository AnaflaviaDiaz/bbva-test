import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { typographyStyles } from '../../tokens/typography.styles.js';
import { VariantHeading } from '../models/variant.model.js';
import { amountFormatter } from '../../utils/amount-formatter.js';

@customElement('bbva-amount')
export class Amount extends LitElement {
  static styles = [typographyStyles];

  @property({ type: Number }) amount = 0;

  @property({ type: String }) currency = 'EUR';

  @property({ type: String }) locale = navigator.language;

  @property({ type: String }) heading?: VariantHeading = 'xl';

  private get _formattedAmount(): string {
    return amountFormatter({
      locale: this.locale,
      currency: this.currency,
      amount: this.amount,
    });
  }

  render() {
    return html` <p class=${`title-${this.heading}`}>
      ${this._formattedAmount}
    </p>`;
  }
}
