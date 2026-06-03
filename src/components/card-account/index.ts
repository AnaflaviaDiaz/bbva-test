// TODO: test, storybook, docs, accessibilidad

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

@customElement('bbva-card-account')
export class CardAccount extends LitElement {
  static styles = [cardAccountStyles];

  // YYYY-MM-DD
  @property({ attribute: false })
  date = '';

  // body card
  @property({ type: String, attribute: 'title' })
  titleCard = '';

  @property({ type: Object })
  markerGain?: MarketGain;

  // footer card
  @property({ type: Boolean, attribute: 'has-action-buttons' })
  hasActionButtons = false;

  @property({ attribute: false })
  imageTemplate?: TemplateResult;

  // account category
  @property({ type: Object })
  accountCategory?: CategoryModel;

  @property({ type: Object })
  cardCategory?: CategoryModel;

  @property({ type: Object })
  badgeStatus?: BadgeModel;

  @property({ type: Object })
  amount?: AmountModel;

  @property({ attribute: false })
  descriptionTemplate?: TemplateResult;

  @property({ type: String })
  primaryButtonText?: string;

  @property({ attribute: false })
  handlePrimaryButton?: () => void;

  @property({ type: String })
  secondaryButtonText?: string;

  @property({ attribute: false })
  handleSecondaryButton?: () => void;

  private _amountTemplate(
    heading?: VariantHeading,
  ): TemplateResult | typeof nothing {
    return this.amount
      ? html`<bbva-amount
          .amount=${this.amount.amount}
          .currency=${this.amount.currency}
          .locale=${this.amount.locale as string}
          .heading=${heading}
        ></bbva-amount>`
      : nothing;
  }

  private get _gainMarketTemplate(): TemplateResult | typeof nothing {
    return this.markerGain
      ? html`
          <span style="${this.markerGain.color || 'currentColor'}"
            >${this.markerGain.direction === 'up' ? '▲' : '▼'}</span
          >
        `
      : nothing;
  }

  private get _primaryButtonTemplate(): TemplateResult | typeof nothing {
    return this.handlePrimaryButton && this.primaryButtonText
      ? html`<bbva-button
          title=${this.primaryButtonText}
          @button-click=${this.handlePrimaryButton}
        ></bbva-button>`
      : nothing;
  }

  private get _secondaryButtonTemplate(): TemplateResult | typeof nothing {
    return this.handleSecondaryButton && this.secondaryButtonText
      ? html`<bbva-button
          title=${this.secondaryButtonText}
          variant="secondary"
          @button-click=${this.handleSecondaryButton}
        ></bbva-button>`
      : nothing;
  }

  private get _actionButtonsTemplate(): TemplateResult | typeof nothing {
    return this.hasActionButtons
      ? html`
          <footer class="card-footer">
            ${this._primaryButtonTemplate} ${this._secondaryButtonTemplate}
          </footer>
        `
      : nothing;
  }

  private get _badgeStatusTemplate(): TemplateResult | typeof nothing {
    return this.badgeStatus
      ? html`
          <bbva-badge
            text=${this.badgeStatus.text}
            .variant=${this.badgeStatus.variant}
          ></bbva-badge>
        `
      : nothing;
  }

  private get _accountCategoryTemplate(): TemplateResult | typeof nothing {
    return this.accountCategory
      ? html`
          <bbva-category
            .categoryName=${this.accountCategory.categoryName}
            .icon=${this.accountCategory.icon}
          ></bbva-category>
        `
      : nothing;
  }

  private get _cardCategoryTemplate(): TemplateResult | typeof nothing {
    return this.cardCategory
      ? html`
          <bbva-category
            .categoryName=${this.cardCategory.categoryName}
            .icon=${this.cardCategory.icon}
          ></bbva-category>
        `
      : nothing;
  }

  render() {
    return html`
      <article class="card">
        <!-- TODO: agregar trend component -->
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
            <h2>${this.title}</h2>

            <div>${this._amountTemplate('3xl')}</div>

            ${this._accountCategoryTemplate}

            <div>${this._badgeStatusTemplate}</div>

            ${this._cardCategoryTemplate}
          </div>

          <div class="card-content__description">
            <slot></slot>
          </div>
        </div>

        <!-- footer -->
        ${this._actionButtonsTemplate}
      </article>
    `;
  }
}
