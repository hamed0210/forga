import React from 'react'
import { useRouter } from 'next/router'

import Styles from './login.module.css'

const Index = () => {
	const router = useRouter()
	const handleClick = () => {
		router.push('/')
	}

	return (
		<div className={Styles.login}>
			<div className={Styles.logo_group}>
				<img className={Styles.logo} src='/assets/logo.svg' alt='logo' />
				<img className={Styles.forga} src='/assets/forga.svg' alt='forga' />
			</div>
			<form className={Styles.form} action=''>
				<div className={Styles.inputGroup_container}>
					<div className={Styles.inputGroup}>
						<label className={Styles.label} htmlFor='email'>
							Correo
						</label>
						<input
							className={Styles.input}
							type='text'
							name='email'
							id='email'
							placeholder='Escriba correo electronico'
							required
							autoFocus
						/>
					</div>
					<div className={Styles.inputGroup}>
						<label className={Styles.label} htmlFor='pass'>
							Contraseña
						</label>
						<input
							className={Styles.input}
							type='password'
							name='pass'
							id='pass'
							placeholder='Escriba contraseña'
							required
							autoFocus
						/>
					</div>
				</div>
				<button
					onClick={handleClick}
					className={`${Styles.btn} btn  btn_success`}
				>
					Entrar
				</button>
			</form>
		</div>
	)
}

export default Index
