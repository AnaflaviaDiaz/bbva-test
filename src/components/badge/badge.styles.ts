import { css } from 'lit';

export const badgeStyles = css`
  .badge__primary {
    background-color: var(--bg-primary);
    color: var(--color-primary);
  }

  .badge__primary-light {
    background-color: var(--bg-primary-light);
    color: var(--color-primary);
  }

  .badge__secondary {
    background-color: var(bg-secondary);
    color: var(--color-secondary);
  }

  .badge {
    display: inline-block;
    padding: 0 8px;
    border-radius: 16px;
  }
`;
