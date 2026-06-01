import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { typographyStyles } from '../../tokens/typography.styles.js';

@customElement('bbva-amount')
export class Amount extends LitElement {
  static styles = [typographyStyles];

  @property({ type: String }) amount: string = '';

  @property({ type: String }) heading: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' =
    'xl';

  render() {
    return html`<p class=${`title-${this.heading}`}>${this.amount}</p>`;
  }
}
