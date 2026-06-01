import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { IconModel } from '../models/icon.model.js';
import { categoryStyles } from './category.styles.js';

@customElement('bbva-category')
export class Category extends LitElement {
  static styles = [categoryStyles];

  @property({ type: String, attribute: 'category-name' }) categoryName: string =
    '';

  @property({ type: Object }) icon?: IconModel;

  iconTemplate() {
    return (
      this.icon &&
      html`<bbva-icon
        .color=${this.icon.color ?? ''}
        .alt-text=${this.icon?.altText}
        .size=${this.icon.size ?? 'md'}
        .name=${this.icon.name}
      ></bbva-icon>`
    );
  }

  render() {
    return html`<div class="category">
      ${this.iconTemplate()}
      <span>${this.categoryName}</span>
    </div>`;
  }
}
