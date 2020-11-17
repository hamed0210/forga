import React, { useState } from 'react'

import MenuTab from '../Menu_tab/Menu_tab'
import {
	menuTabDefault,
	dataForSolicitantes,
	dataForFallecidos,
	dataForExhumaciones,
} from '../DataForComponents'
import Form from '../Form/Form'
import InputForm from '../InputForm/InputForm'

const Exhumaciones = () => {
	const [components, setComponents] = useState('Nuevos')

	const handleClickTab = (e) => {
		setComponents(e)
	}

	const renderProps = () => {
		if (components == 'Nuevos')
			return (
				<Form>
					<InputForm data={dataForSolicitantes} />
					<InputForm data={dataForFallecidos} />
					<InputForm data={dataForExhumaciones} />
				</Form>
			)
		if (components == 'Consultas') return 'Consultas'
	}

	return (
		<>
			<MenuTab data={menuTabDefault} handleProps={handleClickTab} />
			{renderProps()}
		</>
	)
}

export default Exhumaciones
