import { AppProps } from 'next/app';
import { GlobalStyles } from '../public/styles';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles></GlobalStyles>
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    </>
  );
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
