import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Variant } from '../models/variant.js';

@customElement('bbva-badge')
export class Badge extends LitElement {
  static styles = css`
    .badge__primary {
      background-color: #001391;
      color: #fff;
    }

    .badge__primary-light {
      background-color: #0c6dff;
      color: #fff;
    }

    .badge__secondary {
      color: #070e46;
      background-color: #f7f8f8;
    }

    .badge {
      display: inline-block;
      padding: 0 8px;
      border-radius: 16px;
    }
  `;

  @property({ type: String }) text: string = '';

  @property({ type: String }) variant: Variant = 'secondary';

  render() {
    return html`
      <span class="badge badge__${this.variant}">${this.text}</span>
    `;
  }
}
