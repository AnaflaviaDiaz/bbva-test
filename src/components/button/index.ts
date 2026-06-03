import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { VariantColor } from '../../models/variant.model.js';
import { buttonStyles } from './button.styles.js';

/**
 * @element bbva-button
 *
 * @example
 * <bbva-button
 *   title="Click me"
 *   variant="secondary"
 *   type="submit"
 *   disabled
 * ></bbva-button>
 */
@customElement('bbva-button')
export class Button extends LitElement {
  static styles = [buttonStyles];

  /** Texto del botón */
  @property({ type: String, attribute: 'title' })
  titleButton = '';

  @property({ type: String, reflect: true })
  variant: VariantColor = 'primary';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  type: 'button' | 'submit' = 'button';

  private _handleClick() {
    this.dispatchEvent(
      new CustomEvent('button-click', {
        detail: { title: this.titleButton, type: this.type },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <button
        type=${this.type}
        aria-label=${this.titleButton}
        ?disabled=${this.disabled}
        @click="${this._handleClick}"
      >
        ${this.titleButton}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bbva-button': Button;
  }
}
