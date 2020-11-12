import React from 'react'

import Styles from './Form.module.css'
import InputForm from '../InputForm/InputForm'

const Form = () => {
	return (
		<form className={Styles.form} action=''>
			<div className={Styles.form_group}>
				<InputForm />
			</div>
			<span className={Styles.separator}></span>
			<button className={`btn btn_success ${Styles.btn}`} type='submit'>
				Enviar
			</button>
		</form>
	)
}

export default Form
