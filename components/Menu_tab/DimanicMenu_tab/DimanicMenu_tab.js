import React from 'react'

import Styles from './DimanicMenu_tab.module.css'

const DimanicMenuTab = ({ props }) => {
	return (
		<div className={Styles.container}>
			{props.map((el) => {
				return (
					<div className={Styles.item}>
						<span className={Styles.icon}>{el.icon}</span>
						<span className={Styles.name}>{el.name}</span>
					</div>
				)
			})}
		</div>
	)
}

export default DimanicMenuTab
