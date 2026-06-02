import { css } from 'lit';

import { baseStyles, typographyStyles } from '../../tokens/index.js';

export const cardAccountStyles = [
  baseStyles,
  typographyStyles,
  css`
    :host {
      bbva-button {
        --btn-width: 100%;
      }
    }

    .card {
      position: relative;
      background-position: center;
      background-size: cover;
      border-radius: 1rem;
      background-color: var(--color-primary);
      padding: 0.5rem;
    }

    .card-header {
      position: sticky;
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--color-primary);
    }

    .card-content__image {
      height: 100%;
      width: auto;
      min-width: 100%;
      border-radius: 0.5rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
    }

    .card-content__main {
      flex-direction: column;
      gap: 1rem;
      display: flex;
      margin-top: 1rem;
    }

    .card-content__description {
      margin-top: 1rem;
    }

    .card-footer {
      display: flex;
      flex-direction: column;
      position: sticky;
      gap: 0.5rem;
      padding: 0.5rem 0;
      bottom: 0;
      background-color: var(--color-primary);

      bbva-button {
        flex: 1;
      }
    }

    @media (min-width: 768px) {
      .card-footer {
        flex-direction: row;
      }

      .card-content__image {
        width: 40%;
        min-width: auto;
      }
    }
  `,
];
