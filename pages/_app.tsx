import { ThemeProvider } from '@xstyled/styled-components';

import type { AppProps } from 'next/app';

import mainTheme from '../theme/mainTheme';
import MainStyle from '../theme/MainStyle';
import ResetStyles from '../theme/ResetStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <ResetStyles />
      <MainStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
