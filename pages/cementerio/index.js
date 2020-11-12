import React, { useState } from 'react'

import Styles from './cementerio.module.css'
import { menuTabCementerio } from '../../components/DataForComponents'
import MenuTab from '../../components/Menu_tab/Menu_tab'
import Inhumaciones from '../../components/Inhumaciones/Inhumaciones'
import Exhumaciones from '../../components/Exhumaciones/Exhumaciones'
import Bovedas from '../../components/Bovedas/Bovedas'

const Cementery = () => {
	const [components, setComponents] = useState('Inhumaciones')

	const handleClickTab = (e) => {
		setComponents(e)
	}

	const renderProps = () => {
		if (components == 'Inhumaciones') return <Inhumaciones />
		if (components == 'Exhumaciones') return <Exhumaciones />
		if (components == 'Bovedas') return <Bovedas />
	}

	return (
		<div className={Styles.container}>
			<MenuTab data={menuTabCementerio} handleProps={handleClickTab} />
			{renderProps()}
		</div>
	)
}

export default Cementery
