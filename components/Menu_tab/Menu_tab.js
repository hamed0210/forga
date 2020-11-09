import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Styles from './Menu_tab.module.css'

const MenuTab = ({ data }) => {
	const [barWidth, setbarWidth] = useState(0)
	const [barLeft, setbarLeft] = useState(0)
	const { pathname } = useRouter()

	const handleClick = (e) => {
		const tab = e.target
		const fatherContainer = tab.parentNode
		const coords = tab.getBoundingClientRect()

		setbarWidth(coords.width + 20)
		setbarLeft(coords.x - 240)

		if (tab.classList.contains(Styles.selected)) return
		fatherContainer.childNodes.forEach((el) => {
			if (el.nodeName == 'A') el.classList.remove(Styles.selected)
		})
		tab.classList.add(Styles.selected)
	}
	return (
		<div className={Styles.container}>
			{data.map(({ icon, name }) => {
				if (icon)
					return (
						<a key={name} onClick={handleClick} className={`${Styles.item}`}>
							<span className={Styles.icon}>{icon}</span>
							<span className={Styles.name}>{name}</span>
						</a>
					)

				return (
					<a key={name} onClick={handleClick} className={`${Styles.item}`}>
						<span className={Styles.name_default}>{name}</span>
					</a>
				)
			})}
			<span
				className={Styles.bar}
				style={{ width: barWidth, left: barLeft }}
			></span>
		</div>
	)
}

export default MenuTab
