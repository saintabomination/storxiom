import { createGlobalStyle } from '@xstyled/styled-components';

const MainStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }

  @keyframes loaderSpin {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(720deg) }
  }
`;

export default MainStyle;
