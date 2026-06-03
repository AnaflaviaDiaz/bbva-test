import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { typographyStyles } from '../../tokens/index.js';
import { VariantHeading } from '../../models/index.js';
import { amountFormatter } from '../../utils/index.js';

/**
 * Muestra el monto formateado
 *
 * @element bbva-amount
 *
 * @example
 * <bbva-amount
 *   amount="2500"
 *   currency="USD"
 *   heading="2xl-bold"
 * ></bbva-amount>
 */
@customElement('bbva-amount')
export class Amount extends LitElement {
  static styles = [typographyStyles];

  /** Monto a mostrar */
  @property({ type: Number })
  amount = 0;

  /** Código ISO 4217 de la moneda.
   * @example 'USD' | 'EUR' | 'JPY'
   */
  @property({ type: String })
  currency = 'EUR';

  /** Para formatear el monto
   * @example 'de-DE' | 'es-ES' | 'en-US'
   */
  @property({ type: String })
  locale = navigator.language;

  /** Variante para el tamaño del monto */
  @property({ type: String })
  heading?: VariantHeading;

  private get _formattedAmount(): string {
    return amountFormatter({
      locale: this.locale,
      currency: this.currency,
      amount: this.amount,
    });
  }

  private get _amountClass(): string {
    return this.heading ? `title-${this.heading}` : '';
  }

  render() {
    return html` <p class=${this._amountClass}>${this._formattedAmount}</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bbva-amount': Amount;
  }
}
