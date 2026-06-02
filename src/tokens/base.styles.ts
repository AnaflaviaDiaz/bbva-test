import { css } from 'lit';

export const baseStyles = css`
  :host {
    --bg-primary: #001391;
    --bg-primary-light: #0c6dff;
    --bg-secondary: #f7f8f8;

    --color-primary: #fff;
    --color-secondary: #070e46;

    /* buttons */
    --btn-bg-primary: #001391;
    --btn-color-primary: #fff;
    --btn-bg-hover-primary: #070e46;

    --btn-bg-primary-light: #0c6dff;
    --btn-color-primary-light: #fff;
    --btn-bg-hover-primary-light: #2165ca;

    --btn-bg-secondary: #f7f8f8;
    --btn-color-secondary: #070e46;
    --btn-bg-hover-secondary: #fff;

    --btn-bg-disabled: #e2e6ea;
    --btn-color-disabled: #adb8c2;

    --btn-border-radius: 0.5rem;
    --btn-padding: 1rem 2rem;

    --btn-width: auto;

    /* font-family */
    --font-family: Helvetica, Arial, sans-serif;
  }
`;
