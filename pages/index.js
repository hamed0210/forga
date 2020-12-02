import React from 'react'

import Styles from './index.module.css'

const Home = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.container_left}>
				<div className={Styles.welcome}>
					<div className={Styles.welcome_left}>
						<span className={Styles.saludo_day}>Buenos dias!</span>
						<p className={Styles.saludo}>
							<span className={Styles.hello}>Hola Alvaro</span>
							<span className={Styles.welcome_forga}>, Bienvenido a forga</span>
						</p>
					</div>
					<div className={Styles.welcome_right}>
						<img src='assets/welcome.svg' alt='welcome' />
					</div>
				</div>
				<div className={Styles.calendar_container}>
					<p className={Styles.title}>Febrero</p>
					<div className={Styles.calendar}></div>
				</div>
			</div>
			<div className={Styles.container_right}>
				<div className={Styles.users_container}>
					<p className={Styles.title}>Chat</p>
					<div className={Styles.users}></div>
				</div>
			</div>
		</div>
	)
}

export default Home
