import { css } from 'lit';
import { baseStyles } from '../../tokens/base.styles.js';

export const buttonStyles = [
  baseStyles,
  css`
    :host([variant='primary']) button {
      background-color: var(--btn-bg-primary);
      color: var(--btn-color-primary);

      &:hover {
        background-color: var(--btn-bg-hover-primary);
      }
    }

    :host([variant='primary-light']) button {
      background-color: var(--btn-bg-primary-light);
      color: var(--btn-color-primary-light);

      &:hover {
        background-color: var(--btn-bg-hover-primary-light);
      }
    }

    :host([variant='secondary']) button {
      background-color: var(--btn-bg-secondary);
      color: var(--btn-color-secondary);

      &:hover {
        background-color: var(--btn-bg-hover-secondary);
      }
    }

    button {
      border-radius: var(--btn-border-radius);
      padding: var(--btn-padding);
      border: none;
      cursor: pointer;
      width: var(--btn-width);

      &:disabled {
        cursor: default;
        background-color: var(--btn-bg-disabled) !important;
        color: var(--btn-color-disabled) !important;
      }
    }
  `,
];
