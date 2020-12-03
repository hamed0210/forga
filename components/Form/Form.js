import React from 'react'

import Styles from './Form.module.css'

const Form = ({ children }) => {
	return (
		<form className={Styles.form} action=''>
			<div className={Styles.form_group}>{children}</div>
			<span className={Styles.separator}></span>
			<button className={`btn btn_success ${Styles.btn}`} type='submit'>
				Enviar
			</button>
		</form>
	)
}

export default Form
