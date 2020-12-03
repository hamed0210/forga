import React, { useState } from 'react'

import MenuTab from 'components/MenuTab/MenuTabDefault'
import Form from 'components/Form/Form'
import InputForm from 'components/InputForm/InputForm'
import Consultas from 'components/Consults/Consults'
import {
	menuTabDefault,
	dataForUsuarios,
	dataForUsuariosConsult,
} from 'components/DataForComponents'

const Usuarios = () => {
	const [components, setComponents] = useState('Nuevos')

	const handleClickTab = (e) => {
		setComponents(e)
	}

	const renderProps = () => {
		if (components == 'Nuevos')
			return (
				<Form>
					<InputForm data={dataForUsuarios} />
				</Form>
			)
		if (components == 'Consultas')
			return <Consultas header={dataForUsuariosConsult} />
	}

	return (
		<>
			<MenuTab data={menuTabDefault} handleProps={handleClickTab} />
			{renderProps()}
		</>
	)
}

export default Usuarios
