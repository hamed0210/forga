import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Styles from './Sidenav_item.module.css'

const Sidenav_item = ({ icons, names, selected }) => {
	const links = names.toLowerCase()
	const { pathname } = useRouter()

	useEffect(() => {
		const items = document.querySelectorAll(`.${Styles.container}`)

		if (pathname == '/') {
			items.item(0).classList.add(Styles.selected)
			selected(items.item(0).getBoundingClientRect())
			return
		}
		if (pathname == '/cementerio') {
			items.item(1).classList.add(Styles.selected)
			selected(items.item(1).getBoundingClientRect())
			return
		}
		if (pathname == '/usuarios') {
			items.item(2).classList.add(Styles.selected)
			selected(items.item(2).getBoundingClientRect())
			return
		}
	}, [pathname])

	const handleClick = (e) => {
		const item = e.target.parentNode,
			fatherContainer = e.target.parentNode.parentNode.childNodes

		const coords = item.getBoundingClientRect()
		selected(coords)

		if (item.classList.contains(Styles.selected)) return

		fatherContainer.forEach((el) => {
			el.classList.remove(Styles.selected)
		})

		item.classList.add(Styles.selected)
	}

	return (
		<li onClick={handleClick} className={Styles.container}>
			<Link href={links === 'home' ? '/' : links} passHref>
				<a className={Styles.item}>
					<span className={Styles.icons}>{icons}</span>
					<span className={Styles.names}>{names}</span>
				</a>
			</Link>
		</li>
	)
}

export default Sidenav_item
