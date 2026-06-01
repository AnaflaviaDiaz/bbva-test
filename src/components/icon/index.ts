import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { icons, IconName } from './list.js';
import { VariantSize } from '../models/variant.model.js';
import { iconStyles } from './icon.styles.js';

@customElement('bbva-icon')
export class Icon extends LitElement {
  @property({ type: String }) name: IconName = 'card';

  @property({ type: String }) color = 'currentColor';

  @property({ type: String }) size: VariantSize = 'md';

  @property({ attribute: 'alt-text' }) altText: string = '';

  static styles = [iconStyles];

  render() {
    const icon = icons[this.name];

    return html`
      <span
        class=${`icon icon__${this.size}`}
        role="img"
        aria-label=${this.altText}
        style="color: ${this.color};"
      >
        ${icon}
      </span>
    `;
  }
}
