import React from 'react'

import Styles from './Consults.module.css'

const Consults = ({ header, data = '' }) => {
	return (
		<div className={Styles.container}>
			<div className={Styles.filters}>
				<div className={Styles.search_container}>
					<input
						className={Styles.search}
						type='search'
						name=''
						id=''
						placeholder='Escriba busqueda'
					/>
					<span className={Styles.search_icon}>
						<i className='fas fa-search'></i>
					</span>
				</div>
			</div>
			<div className={Styles.result}>
				<div className={Styles.header}>
					{header.map((el, index) => {
						return (
							<span key={index} className={Styles.title}>
								{el.title}
							</span>
						)
					})}
				</div>
				<div className={Styles.item}>
					{data ? (
						data.map((el, index) => {
							return (
								<span key={index} className={Styles.data}>
									{el.data}
								</span>
							)
						})
					) : (
						<span className={Styles.data}>No hay datos registrados</span>
					)}
				</div>
			</div>
		</div>
	)
}

export default Consults
