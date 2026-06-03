import { html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../icon/index.js';
import { IconModel } from '../models/index.js';
import { categoryStyles } from './category.styles.js';

/**
 * Categoría con ícono opcional
 * @element bbva-category
 *
 * @example
 * <bbva-category
 *   category-name="Category"
 *   .icon=${{ name: 'card', color: 'red', size: 'lg' }}
 * ></bbva-category>
 */
@customElement('bbva-category')
export class Category extends LitElement {
  static styles = [categoryStyles];

  /** Texto de la categoría */
  @property({ type: String, attribute: 'category-name' })
  categoryName = '';

  @property({ type: Object })
  icon?: IconModel;

  private get _iconTemplate(): TemplateResult | typeof nothing {
    if (!this.icon) return nothing;

    return html`<bbva-icon
      .color=${this.icon.color ?? 'currentColor'}
      .size=${this.icon.size ?? 'md'}
      .name=${this.icon.name}
      aria-hidden="true"
    ></bbva-icon>`;
  }

  render() {
    return html`<div class="category">
      ${this._iconTemplate}
      <span>${this.categoryName}</span>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bbva-category': Category;
  }
}
