import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { typographyStyles } from '../../tokens/typography.styles.js';
import { VariantHeading } from '../models/variant.model.js';
import { currencyFormatter } from '../../utils/currency-formatter.js';

@customElement('bbva-amount')
export class Amount extends LitElement {
  static styles = [typographyStyles];

  @property({ type: Number }) amount: number = 0;

  @property({ type: String }) currency: string = 'EUR';

  @property({ type: String }) locale?: Intl.LocalesArgument =
    navigator.language;

  @property({ type: String }) heading?: VariantHeading = 'xl';

  get currencyFormatted() {
    return currencyFormatter({
      locale: this.locale,
      currency: this.currency,
      amount: this.amount,
    });
  }

  render() {
    return html` <p class=${`title-${this.heading}`}>
      ${this.currencyFormatted}
    </p>`;
  }
}
