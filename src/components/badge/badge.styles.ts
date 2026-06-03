import { css } from 'lit';

import { baseStyles, typographyStyles } from '../../tokens/index.js';

export const badgeStyles = [
  baseStyles,
  typographyStyles,
  css`
    .badge__primary {
      background-color: var(--bg-primary);
      color: var(--color-primary);
    }

    .badge__primary-light {
      background-color: var(--bg-primary-light);
      color: var(--color-primary);
    }

    .badge__secondary {
      background-color: var(--bg-secondary);
      color: var(--color-secondary);
    }

    .badge {
      display: inline-block;
      padding: 0 0.5rem;
      border-radius: 1rem;
      font-style: italic;
      line-height: 1.5rem;
    }
  `,
];
