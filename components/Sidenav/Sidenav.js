import React, { useState } from 'react'

import Styles from './Sidenav.module.css'
import SidenavItem from './Sidenav_Item/Sidenav_item'
import { dataForSidenav } from '../DataForComponents'

const sidenav = () => {
	const [selectedTop, setselectedTop] = useState(0)

	const handleSelected = (coords) => {
		setselectedTop(coords.top - 70)
	}

	return (
		<div className={Styles.container}>
			<nav>
				<div className={Styles.sidenav}>
					<span className={Styles.icons}></span>
					<ul className={Styles.menu}>
						{dataForSidenav.map(({ icon, name }) => {
							return (
								<SidenavItem
									key={name}
									icons={icon}
									names={name}
									selected={handleSelected}
								/>
							)
						})}
						<span
							className={Styles.selected}
							style={{ top: selectedTop }}
						></span>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default sidenav
