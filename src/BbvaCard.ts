import { html, LitElement } from 'lit';

import './atoms/button/index.js';

export class BbvaCard extends LitElement {

  render() {
    return html`
      <bbva-button title="base"></bbva-button>
      <bbva-button title="base" disabled></bbva-button>
      <bbva-button variant="secondary" title="secondary"></bbva-button>
      <bbva-button variant="primary-light" title="primary-light"></bbva-button>
    `;
  }
}
