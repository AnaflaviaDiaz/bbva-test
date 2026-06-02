import { css } from 'lit';

import { typographyStyles } from '../../tokens/index.js';

export const categoryStyles = [
  typographyStyles,
  css`
    .category {
      display: flex;
      align-items: center;
    }

    bbva-icon {
      margin-right: 0.5rem;
    }
  `,
];
