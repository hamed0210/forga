import React from 'react'

import Styles from './cementerio.module.css'
import { menuTabCementerio } from '../../components/SVGIcons'
import DimanicMenuTab from '../../components/Menu_tab/DimanicMenu_tab/DimanicMenu_tab'
import DefaultMenuTab from '../../components/Menu_tab/DefaultMenu_tab'

const Cementery = () => {
	return (
		<div className={Styles.container}>
			<DimanicMenuTab props={menuTabCementerio} />
			<DefaultMenuTab />
			Cementerio
		</div>
	)
}

export default Cementery
