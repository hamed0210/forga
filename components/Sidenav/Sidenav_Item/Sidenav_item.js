import React, { useState } from 'react'
import Link from 'next/link'

import Styles from './Sidenav_item.module.css'

const Sidenav_item = ({ icons, names }) => {
	const links = names.toLowerCase()

	const [selected, setSelected] = useState('sidenav_not_selected')
	const [sidenavName, setSidenavName] = useState('')

	const handleClick = (e) => {
		// const item = e.target.parentNode.classList[0]
		if (selected === 'sidenav_selected') return

		if (selected === 'sidenav_not_selected') {
			setSelected('sidenav_selected')
			setSidenavName('sidenav_item_name')
		}
	}

	return (
		<li onClick={handleClick} className={`${Styles.container} ${selected}`}>
			<Link href={links === 'home' ? '/' : links} passHref>
				<a className={Styles.item}>
					<span className={Styles.icons}>{icons}</span>
					<span className={`${Styles.names}  ${sidenavName}`}>{names}</span>
				</a>
			</Link>
		</li>
	)
}

export default Sidenav_item
