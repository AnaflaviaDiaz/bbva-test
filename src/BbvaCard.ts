import { html, LitElement } from 'lit';

import './components/button/index.js';

export class BbvaCard extends LitElement {

  render() {
    return html`
      <bbva-button title="base"></bbva-button>
      <bbva-button variant="secondary" title="secondary"></bbva-button>
      <bbva-button variant="primary-light" title="primary-light"></bbva-button>
    `;
  }
}
