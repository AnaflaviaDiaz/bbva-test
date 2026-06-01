import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { typographyStyles } from '../../tokens/typography.styles.js';
import { VariantHeading } from '../models/variant.model.js';

@customElement('bbva-amount')
export class Amount extends LitElement {
  static styles = [typographyStyles];

  @property({ type: String }) amount: string = '';

  @property({ type: String }) heading?: VariantHeading = 'xl';

  render() {
    return html`<p class=${`title-${this.heading}`}>${this.amount}</p>`;
  }
}
