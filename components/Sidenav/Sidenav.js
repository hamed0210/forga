import React from 'react'

import Styles from './Sidenav.module.css'
import SidenavItem from './Sidenav_Item/Sidenav_item'
import { sidenavIcons } from '../SVGIcons'

const sidenav = () => {
	return (
		<div className={Styles.container}>
			<nav>
				<div className={Styles.sidenav}>
					<span className={Styles.icons}></span>
					<ul className={Styles.menu}>
						{sidenavIcons.map(({ icon, name }) => {
							return <SidenavItem key={name} icons={icon} names={name} />
						})}
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default sidenav
