import React from 'react'

import Styles from './cementerio.module.css'
import { menuTabCementerio, menuTabDeafault } from '../../components/SVGIcons'
import MenuTab from '../../components/Menu_tab/Menu_tab'

const Cementery = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.tab_container}>
				{menuTabCementerio.map(({ icon, name }) => {
					return <MenuTab key={name} icons={icon} names={name} />
				})}
			</div>
			<div className={Styles.tab_container}>
				{menuTabDeafault.map(({ name }) => {
					return <MenuTab key={name} names={name} />
				})}
			</div>
			{/* <DefaultMenuTab /> */}
			Cementerio
		</div>
	)
}

export default Cementery
