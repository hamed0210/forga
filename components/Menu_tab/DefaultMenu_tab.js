import React from 'react'

import Styles from './DefaultMenu_tab.module.css'

const DefaultMenuTab = () => {
	return (
		<div className={Styles.container}>
			<span className={Styles.item}>Nuevos</span>
			<span className={Styles.item}>Consultas</span>
		</div>
	)
}

export default DefaultMenuTab
