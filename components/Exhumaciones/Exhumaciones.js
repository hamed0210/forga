import React, { useState } from 'react'

import MenuTab from '../MenuTab/MenuTabDefault'
import {
	menuTabDefault,
	dataForSolicitantes,
	dataForFallecidos,
	dataForExhumaciones,
	dataForExhumacionesConsult,
} from '../DataForComponents'
import Form from '../Form/Form'
import InputForm from '../InputForm/InputForm'
import Consultas from '../Consults/Consults'

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
		if (components == 'Consultas')
			return <Consultas header={dataForExhumacionesConsult} />
	}

	return (
		<>
			<MenuTab data={menuTabDefault} handleProps={handleClickTab} />
			{renderProps()}
		</>
	)
}

export default Exhumaciones
