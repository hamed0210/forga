import React, { useState } from 'react'

import MenuTab from '../MenuTab/MenuTabDefault'
import {
	menuTabDefault,
	dataForBovedas,
	dataForBovedasConsult,
} from '../DataForComponents'
import Form from '../Form/Form'
import InputForm from '../InputForm/InputForm'
import Consultas from '../Consults/Consults'

const Bovedas = () => {
	const [components, setComponents] = useState('Nuevos')

	const handleClickTab = (e) => {
		setComponents(e)
	}

	const renderProps = () => {
		if (components == 'Nuevos')
			return (
				<Form>
					<InputForm data={dataForBovedas} />
				</Form>
			)
		if (components == 'Consultas')
			return <Consultas header={dataForBovedasConsult} />
	}

	return (
		<>
			<MenuTab data={menuTabDefault} handleProps={handleClickTab} />
			{renderProps()}
		</>
	)
}

export default Bovedas
