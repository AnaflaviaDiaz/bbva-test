import { css } from 'lit';

export const iconStyles = css`
  :host {
    display: inline-flex;
    line-height: 0;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon__sm {
    width: 1rem;
    height: 1rem;
  }

  .icon__md {
    width: 1.5rem;
    height: 1.5rem;
  }

  .icon__lg {
    width: 2rem;
    height: 2rem;
  }

  .icon__xl {
    width: 2.5rem;
    height: 2.5rem;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
