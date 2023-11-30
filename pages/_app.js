// _app.js
import Layout from '../components/layout.js';
import '../styles/global.css';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

