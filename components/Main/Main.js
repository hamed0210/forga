import React from 'react'

import Styles from './Main.module.css'

const Main = ({ children }) => {
	return <section className={Styles.container}>{children}</section>
}

export default Main
