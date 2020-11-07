import React, { useState } from 'react'

import Styles from './Menu_tab.module.css'

const DimanicMenuTab = ({ icons, names }) => {
	const [selected, setSelected] = useState('tab_not_selected')

	const handleClick = (e) => {
		if (selected === 'tab_selected') return

		if (selected === 'tab_not_selected') {
			setSelected('tab_selected')
		}
	}

	if (icons)
		return (
			<div
				key={names}
				onClick={handleClick}
				className={`${Styles.item} ${selected}`}
			>
				<span className={Styles.icon}>{icons}</span>
				<span className={Styles.name}>{names}</span>
			</div>
		)

	return (
		<div onClick={handleClick} className={`${Styles.item} ${selected}`}>
			<span className={Styles.name_default}>{names}</span>
		</div>
	)
}

export default DimanicMenuTab
