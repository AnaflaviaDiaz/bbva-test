import { css } from 'lit';

export const typographyStyles = css`
  :host {
    color: #070e46;
    font-family: Helvetica, Arial, sans-serif;
  }

  .title-5xl,
  .title-5xl-bold {
    font-size: 4rem; // 64px
    line-height: 4.5rem; // 72px
  }

  .title-4xl,
  .title-4xl-bold {
    font-size: 3rem;
    line-height: 3.5rem; // 56px
  }

  .title-3xl,
  .title-3xl-bold {
    font-size: 2.5rem;
    line-height: 3rem; // 48px
  }

  .title-2xl,
  .title-2xl-bold {
    font-size: 2rem;
    line-height: 2.5rem; // 40px
  }

  .title-xl,
  .title-xl-bold {
    font-size: 1.5rem; // 24px
    line-height: 2rem; // 32px
  }

  .title-5xl-bold,
  .title-4xl-bold,
  .title-3xl-bold,
  .title-2xl-bold,
  .title-xl-bold {
    font-weight: 700;
  }
`;
