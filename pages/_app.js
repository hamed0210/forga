import App from 'next/app'
import { useRouter } from 'next/router'

import '../reset.css'
import '../global.css'
import Header from '../components/Header/Header'
import Sidenav from '../components/Sidenav/Sidenav'
import Main from '../components/Main/Main'

function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter()

	return (
		<div className='App'>
			{pathname === '/login' ? (
				<Component {...pageProps} />
			) : (
				<section className='content_app'>
					<Header />
					<Sidenav />
					<Main>
						<Component {...pageProps} />
					</Main>
				</section>
			)}
		</div>
	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
