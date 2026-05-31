import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Variant } from '../models/variant.js';
import { badgeStyles } from './badge.styles.js';
import { baseStyles } from '../../tokens/base-styles.js';

@customElement('bbva-badge')
export class Badge extends LitElement {
  static styles = [baseStyles, badgeStyles];

  @property({ type: String }) text: string = '';

  @property({ type: String }) variant: Variant = 'secondary';

  render() {
    return html`
      <span class="badge badge__${this.variant}">${this.text}</span>
    `;
  }
}
