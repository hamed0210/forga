import React from 'react'

import Styles from './InputForm.module.css'

const InputForm = ({ data }) => {
	return data.map((el, index) => {
		return (
			<fieldset key={index} className={Styles.fieldset}>
				<legend className={Styles.legend}>{el.title}</legend>
				<div className={Styles.inputGroup_container}>
					{el.inputs.map((el, index) => {
						return (
							<div key={index} className={Styles.inputGroup}>
								<label className={Styles.label} htmlFor={el.htmlFor}>
									{el.label}
								</label>
								<input
									className={Styles.input}
									type={el.type}
									id={el.id}
									name={el.name}
									placeholder={el.placeholder}
									required={el.required}
									autoFocus={el.autoFocus}
								/>
							</div>
						)
					})}
				</div>
			</fieldset>
		)
	})
}

export default InputForm
