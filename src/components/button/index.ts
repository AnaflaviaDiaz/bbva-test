import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { VariantColor } from '../models/variant.js';
import { baseStyles } from '../../tokens/base.styles.js';
import { buttonStyles } from './button.styles.js';

@customElement('bbva-button')
export class Button extends LitElement {
  static styles = [baseStyles, buttonStyles];

  @property({ type: String, attribute: 'title' }) titleButton = '';

  @property({ type: String, reflect: true }) variant: VariantColor = 'primary';

  @property({ type: Boolean }) disabled: boolean = false;

  @property({ type: String }) type: 'button' | 'submit' = 'button';

  render() {
    return html`
      <button
        type=${this.type}
        aria-label=${this.titleButton}
        ?disabled=${this.disabled}
      >
        ${this.titleButton}
      </button>
    `;
  }
}
