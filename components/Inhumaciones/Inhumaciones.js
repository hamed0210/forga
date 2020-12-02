import React, { useState } from 'react'

import Styles from './Inhumaciones.module.css'
import MenuTab from '../MenuTab/MenuTabDefault'
import {
	menuTabDefault,
	dataForInhumaciones,
	dataForInhumacionesConsult,
	dataForSolicitantes,
	dataForFallecidos,
} from '../DataForComponents'
import Form from '../Form/Form'
import InputForm from '../InputForm/InputForm'
import Consultas from '../Consults/Consults'

const Inhumaciones = () => {
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
					<div>
						<InputForm data={dataForInhumaciones} />
					</div>
				</Form>
			)
		if (components == 'Consultas')
			return <Consultas header={dataForInhumacionesConsult} />
	}

	return (
		<>
			<MenuTab data={menuTabDefault} handleProps={handleClickTab} />
			{renderProps()}
		</>
	)
}

export default Inhumaciones
