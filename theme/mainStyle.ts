import { createGlobalStyle } from '@xstyled/styled-components';

const MainStyle = createGlobalStyle`
  html {
    font-size: 56.25%;
  }

  @media (min-width: 768px) {
    html {
      font-size: 62.5%;
    }
  }

  body {
    font-size: 1.4rem;
  }
`;

export default MainStyle;
