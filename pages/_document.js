import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
					<link rel='stylesheet' href='/all.css' />
					<script defer src='/all.js'></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
