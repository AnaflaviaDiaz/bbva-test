import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { VariantColor } from '../../models/variant.model.js';
import { badgeStyles } from './badge.styles.js';

/**
 * @element bbva-badge
 *
 * @example
 * <bbva-badge
 *   text=${this.badgeStatus.text}
 *   .variant=${this.badgeStatus.variant}
 * ></bbva-badge>
 */
@customElement('bbva-badge')
export class Badge extends LitElement {
  static styles = [badgeStyles];

  @property({ type: String })
  text: string = '';

  @property()
  variant?: VariantColor = 'secondary';

  render() {
    return html`
      <span class="badge badge__${this.variant}">${this.text}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bbva-badge': Badge;
  }
}
