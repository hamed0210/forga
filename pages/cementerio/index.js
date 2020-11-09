import React, { useState } from 'react'

import Styles from './cementerio.module.css'
import { menuTabCementerio, menuTabDeafault } from '../../components/SVGIcons'
import MenuTab from '../../components/Menu_tab/Menu_tab'

const Cementery = () => {
	const [barWidth, setbarWidth] = useState(0)
	const [barLeft, setbarLeft] = useState(0)

	const handleBar = (e) => {
		const width = e[0],
			x = e[1]
		console.log(x)
		setbarWidth(width)
		setbarLeft(x)
	}

	return (
		<div className={Styles.container}>
			<MenuTab data={menuTabCementerio} />
			<MenuTab data={menuTabDeafault} />
			Cementerio
		</div>
	)
}

export default Cementery
