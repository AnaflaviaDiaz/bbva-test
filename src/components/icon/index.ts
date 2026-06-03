import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { icons, IconName } from './list.js';
import { VariantSize } from '../../models/index.js';
import { iconStyles } from './icon.styles.js';

/**
 * Ícono personalizado basado en SVG
 * @element bbva-icon
 *
 * @example
 * <bbva-icon name="card" color="red" size="lg"></bbva-icon>
 */
@customElement('bbva-icon')
export class Icon extends LitElement {
  @property({ type: String }) name: IconName = 'card';

  @property({ type: String }) color = 'currentColor';

  @property({ type: String }) size: VariantSize = 'md';

  static styles = [iconStyles];

  render() {
    const icon = icons[this.name];

    return html`
      <span class=${`icon icon__${this.size}`} style="color: ${this.color};">
        ${icon}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bbva-icon': Icon;
  }
}
