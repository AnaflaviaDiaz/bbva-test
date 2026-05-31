import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Variant } from '../../models/variant.js';

@customElement('bbva-button')
export class Button extends LitElement {
  static styles = css`
    :host([variant='primary']) button {
      background-color: #001391;
      color: #fff;

      &:hover {
        background-color: #070e46;
      }
    }

    :host([variant='primary-light']) button {
      background-color: #0c6dff;
      color: #fff;

      &:hover {
        background-color: #2165ca;
      }
    }

    :host([variant='secondary']) button {
      color: #070e46;
      background-color: #f7f8f8;

      &:hover {
        background-color: #fff;
      }
    }

    button {
      border-radius: var(--btn-border-radius, 8px);
      padding: var(--btn-padding, 16px 32px);
      border: none;
      cursor: pointer;

      &:disabled {
        cursor: default;
        background-color: #e2e6ea !important;
        color: #adb8c2 !important;
      }
    }
  `;

  @property({ type: String, attribute: 'title' }) titleButton = '';

  @property({ type: String, reflect: true }) variant: Variant = 'primary';

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
