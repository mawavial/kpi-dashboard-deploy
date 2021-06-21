import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../utils/theme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../store';

const store = createStore(reducers);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp
