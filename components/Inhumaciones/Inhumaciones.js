import React from 'react'

import Styles from './Inhumaciones.module.css'
import MenuTab from '../Menu_tab/Menu_tab'
import { menuTabDefault } from '../DataForComponents'
import Form from '../Form/Form'

const Inhumaciones = () => {
	return (
		<>
			<MenuTab data={menuTabDefault} />
			<Form />
		</>
	)
}

export default Inhumaciones
