import { css } from 'lit';

export const typographyStyles = css`
  :host {
    color: #070e46;
    font-family: Helvetica, Arial, sans-serif;
  }

  .title-5xl {
    font-weight: 700;
    font-size: 4rem; // 64px
    line-height: 4.5rem; // 72px
  }

  .title-4xl {
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.5rem; // 56px
  }

  .title-3xl {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem; // 48px
  }

  .title-2xl {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem; // 40px
  }

  .title-xl {
    font-weight: 700;
    font-size: 1.5rem; // 24px
    line-height: 2rem; // 32px
  }
`;
