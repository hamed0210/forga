import React from 'react'

import Styles from './cementerio.module.css'
import { menuTabCementerio, menuTabDeafault } from '../../components/SVGIcons'
import MenuTab from '../../components/Menu_tab/Menu_tab'

const Cementery = () => {
	return (
		<div className={Styles.container}>
			<MenuTab data={menuTabCementerio} />
			<MenuTab data={menuTabDeafault} />
			Cementerio
		</div>
	)
}

export default Cementery
