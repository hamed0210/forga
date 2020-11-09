import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Styles from './Menu_tab.module.css'

const MenuTab = ({ data }) => {
	const [barWidth, setbarWidth] = useState(0)
	const [barLeft, setbarLeft] = useState(0)
	const { pathname } = useRouter()

	useEffect(() => {
		const contents = document.querySelectorAll(`.${Styles.bar}`)
		let firstBar = '',
			lastBar = '',
			firstItem_firstBar = '',
			firstItem_lastBar = ''

		if (contents.length > 1) {
			firstBar = contents.item(0)
			lastBar = contents.item(1)
			firstItem_firstBar = firstBar.parentNode.firstChild
			firstItem_lastBar = lastBar.parentNode.firstChild

			firstBar.style.width = `${
				firstItem_firstBar.getBoundingClientRect().width + 20
			}px`
			lastBar.style.width = `${
				firstItem_lastBar.getBoundingClientRect().width + 20
			}px`

			firstItem_firstBar.classList.add(Styles.selected)
			firstItem_lastBar.classList.add(Styles.selected)
		} else {
			firstBar = contents.item(0)
			firstItem_firstBar = firstBar.parentNode.firstChild
			firstBar.style.width = `${
				firstItem_firstBar.getBoundingClientRect().width + 20
			}px`
			firstItem_firstBar.classList.add(Styles.selected)
		}
	}, [])

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
						<a
							key={name}
							onClick={handleClick}
							className={`${Styles.item} menuTab_item`}
						>
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
