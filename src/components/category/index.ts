import { html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../icon/index.js';
import { IconModel } from '../models/index.js';
import { categoryStyles } from './category.styles.js';

@customElement('bbva-category')
export class Category extends LitElement {
  static styles = [categoryStyles];

  @property({ type: String, attribute: 'category-name' }) categoryName = '';

  @property({ type: Object }) icon?: IconModel;

  private get _iconTemplate(): TemplateResult | typeof nothing {
    if (!this.icon) return nothing;

    return html`<bbva-icon
      .color=${this.icon.color ?? 'currentColor'}
      .size=${this.icon.size ?? 'md'}
      .name=${this.icon.name}
    ></bbva-icon>`;
  }

  render() {
    return html`<div class="category">
      ${this._iconTemplate}
      <span>${this.categoryName}</span>
    </div>`;
  }
}
