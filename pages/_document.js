import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<title>Forga</title>
					<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
					<link rel='stylesheet' href='/all.css' />
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&display=swap'
						rel='stylesheet'
					/>
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
