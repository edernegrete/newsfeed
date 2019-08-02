import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import NProgressCSS from './nprogress';

const DefaultStyles = createGlobalStyle`
  :root {
    --baseFont: system-ui;
    --black: #29415B;
    --white: white;
    --primary: #d53f8c;
    --secondary: #a0aec0;
    --warning: #ffa003;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 1rem;
    font-family: var(--baseFont);
    color: var(--black);
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  a {
    text-decoration: none;
  }
  input {
    font-family: var(--baseFont);
  }
  button {
    user-select: none;
    &:active {
      transform: scale(0.95);
    }
  }
  .switch-wrapper {
    position: relative;
    & > div {
      position: absolute;
      width: 100%;
    }
  }


`;

const BaseStyles = () => (
  <Fragment>
    <NProgressCSS />
    <DefaultStyles />
  </Fragment>
);

export default BaseStyles;
