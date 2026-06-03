import { html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {
  AmountModel,
  BadgeModel,
  CategoryModel,
  MarketGain,
  VariantHeading,
} from '../models/index.js';
import { cardAccountStyles } from './card-account.styles.js';
import { dateFormatter } from '../../utils/index.js';
import '../amount/index.js';
import '../badge/index.js';
import '../button/index.js';
import '../category/index.js';
import '../icon/index.js';

/**
 * Tarjeta de cuenta con información financiera y acciones asociadas
 *
 * @element bbva-card-account
 *
 * @slot - Contenido de descripción adicional de la tarjeta.
 *
 * @example
 * <bbva-card-account
 *   id-card="card-account"
 *   date="2024-06-01"
 *   title-card="Cuenta Corriente"
 *   .amount=${{ amount: 1500, currency: 'USD', locale: 'en-US' }}
 *   .markerGain=${{ direction: 'up', color: 'green' }}
 *   .accountCategory=${{ categoryName: 'Cuenta', icon: { name: 'card', color: 'blue', size: 'md' } }}
 *   .badgeStatus=${{ text: 'Activa', variant: 'success' }}
 *   primary-button-text="Ver detalles"
 *   secondary-button-text="Transferir"
 *   .handlePrimaryButton=${() => console.log('Detalles')}
 *   .handleSecondaryButton=${() => console.log('Transferir')}
 * >
 *   <p>Descripción adicional de la cuenta o transacción.</p>
 * </bbva-card-account>
 */
@customElement('bbva-card-account')
export class CardAccount extends LitElement {
  static styles = [cardAccountStyles];

  @property({ type: String })
  idCard = '';

  /** Con formato ISO 'YYYY-MM-DD' - solo en la cabecera */
  @property()
  date = '';

  /** Título de la tarjeta */
  @property({ type: String })
  titleCard = '';

  /** Indicador de ganancia, se muestra al lado del importe - solo en la cabecera */
  @property({ type: Object })
  markerGain?: MarketGain;

  /**
   * Imagen de la tarjeta
   *
   * El consumidor es responsable de proporcionar
   * alternativas accesibles para imágenes o iconos.
   */
  @property({ attribute: false })
  imageTemplate?: TemplateResult;

  /** Categoría principal asociada a la cuenta */
  @property({ type: Object })
  accountCategory?: CategoryModel;

  /** Categoría secundaria asociada a la cuenta */
  @property({ type: Object })
  cardCategory?: CategoryModel;

  /** Estado de la cuenta */
  @property({ type: Object })
  badgeStatus?: BadgeModel;

  /** Monto con moneda formateado - aparece en el header y en el contenido de la tarjeta */
  @property({ type: Object })
  amount?: AmountModel;

  /** Título del botón principal, habilitará el renderizado del footer - solo en el footer */
  @property({ type: String })
  primaryButtonText?: string;

  /** Callback del botón principal */
  @property({ attribute: false })
  handlePrimaryButton?: () => void;

  /** Título del botón secundario - solo en el footer */
  @property({ type: String })
  secondaryButtonText?: string;

  /** Callback del botón secundario */
  @property({ attribute: false })
  handleSecondaryButton?: () => void;

  private _amountTemplate(
    heading?: VariantHeading,
  ): TemplateResult | typeof nothing {
    if (!this.amount) return nothing;

    return html`<bbva-amount
      .amount=${this.amount.amount}
      .currency=${this.amount.currency}
      .locale=${this.amount.locale as string}
      .heading=${heading}
    ></bbva-amount>`;
  }

  private get _gainMarketTemplate(): TemplateResult | typeof nothing {
    if (!this.markerGain) return nothing;

    const ariaMarkerGain =
      this.markerGain.direction === 'up' ? 'Aumento' : 'Disminución';

    return html`
      <span
        role="img"
        aria-label=${ariaMarkerGain}
        style="color: ${this.markerGain.color || 'currentColor'};"
        >${this.markerGain.direction === 'up' ? '▲' : '▼'}</span
      >
    `;
  }

  private get _badgeStatusTemplate(): TemplateResult | typeof nothing {
    if (!this.badgeStatus) return nothing;

    return html`
      <bbva-badge
        text=${this.badgeStatus.text}
        .variant=${this.badgeStatus.variant}
      ></bbva-badge>
    `;
  }

  private get _accountCategoryTemplate(): TemplateResult | typeof nothing {
    if (!this.accountCategory) return nothing;

    return html`
      <bbva-category
        .categoryName=${this.accountCategory.categoryName}
        .icon=${this.accountCategory.icon}
      ></bbva-category>
    `;
  }

  private get _cardCategoryTemplate(): TemplateResult | typeof nothing {
    if (!this.cardCategory) return nothing;

    return html`
      <bbva-category
        .categoryName=${this.cardCategory.categoryName}
        .icon=${this.cardCategory.icon}
      ></bbva-category>
    `;
  }

  private get _primaryButtonTemplate(): TemplateResult | typeof nothing {
    if (!this.primaryButtonText) return nothing;

    return html`<bbva-button
      title=${this.primaryButtonText}
      @button-click=${this.handlePrimaryButton}
    ></bbva-button>`;
  }

  private get _secondaryButtonTemplate(): TemplateResult | typeof nothing {
    if (!this.secondaryButtonText) return nothing;

    return html`<bbva-button
      title=${this.secondaryButtonText}
      variant="secondary"
      @button-click=${this.handleSecondaryButton}
    ></bbva-button>`;
  }

  /**
   * Renderiza el footer de acciones
   */
  private get _footerTemplate(): TemplateResult | typeof nothing {
    if (!this.primaryButtonText) return nothing;

    return html`
      <footer class="card-footer">
        ${this._primaryButtonTemplate} ${this._secondaryButtonTemplate}
      </footer>
    `;
  }

  render() {
    return html`
      <article class="card" aria-labelledby=${this.idCard}>
        <header class="card-header">
          <time datetime="${this.date}">${dateFormatter(this.date)}</time>
          <div class="card-header__amount">
            ${this._amountTemplate()} ${this._gainMarketTemplate}
          </div>
        </header>

        <div class="card-content">
          ${this.imageTemplate
            ? html`<div class="card-content__image">${this.imageTemplate}</div>`
            : nothing}

          <div class="card-content__main">
            <p id=${this.idCard} class="title-2xl">${this.titleCard}</p>

            <div>${this._amountTemplate('3xl')}</div>

            ${this._accountCategoryTemplate}

            <div>${this._badgeStatusTemplate}</div>

            ${this._cardCategoryTemplate}
          </div>

          <div class="card-content__description">
            <slot></slot>
          </div>
        </div>

        ${this._footerTemplate}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bbva-card-account': CardAccount;
  }
}
