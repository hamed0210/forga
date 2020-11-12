import React from 'react'

import Styles from './InputForm.module.css'

const InputForm = () => {
	return (
		<fieldset className={Styles.fieldset}>
			<legend className={Styles.legend}>Solicitante</legend>
			<div className={Styles.inputGroup_container}>
				<div className={Styles.inputGroup}>
					<label className={Styles.label} htmlFor='id'>
						Identificación:
					</label>
					<input
						className={Styles.input}
						type='number'
						id='id'
						name='id'
						min='1'
						placeholder='Escriba su identificación'
						required
						autoFocus
					/>
				</div>
				<div className={Styles.inputGroup}>
					<label className={Styles.label} htmlFor='names'>
						Nombres:
					</label>
					<input
						className={Styles.input}
						type='text'
						id='names'
						placeholder='Escriba sus nombres'
					/>
				</div>
			</div>
		</fieldset>
	)
}

export default InputForm
