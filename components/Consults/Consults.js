import React from 'react'

import Styles from './Consults.module.css'

const Consults = () => {
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
						autoFocus
					/>
					<span className={Styles.search_icon}>
						<i className='fas fa-search'></i>
					</span>
				</div>
			</div>
			<div className={Styles.result}>
				{/* <table className={Styles.table}>
					<tr className={Styles.header}>
						<th className={Styles.title}>Id fallecido</th>
						<th className={Styles.title}>Nombres</th>
						<th className={Styles.title}>Apellidos</th>
						<th className={Styles.title}>Certi</th>
						<th className={Styles.title}>Solicitantes</th>
						<th className={Styles.title}>Nombres</th>
					</tr>
					<tr className={Styles.item}>
						<td className={Styles.data}>1046814333</td>
						<td className={Styles.data}>Andres</td>
						<td className={Styles.data}>Villarreal</td>
						<td className={Styles.data}>dff33</td>
						<td className={Styles.data}>Carlos</td>
						<td className={Styles.data}>Martinez</td>
					</tr>
					<tr className={Styles.item}>
						<td className={Styles.data}>1046814333</td>
						<td className={Styles.data}>Andres</td>
						<td className={Styles.data}>Villarreal</td>
						<td className={Styles.data}>dff33</td>
						<td className={Styles.data}>Carlos</td>
						<td className={Styles.data}>Martinez</td>
					</tr>
				</table> */}
				<div className={Styles.header}>
					<span className={Styles.title}>Id fallecido</span>
					<span className={Styles.title}>Nombres</span>
					<span className={Styles.title}>Apellidos</span>
					<span className={Styles.title}>Certi</span>
					<span className={Styles.title}>Solicitantes</span>
					<span className={Styles.title}>Nombres</span>
				</div>
				<div className={Styles.item}>
					<span className={Styles.data}>1046814333</span>
					<span className={Styles.data}>Andres</span>
					<span className={Styles.data}>Villarreal</span>
					<span className={Styles.data}>dff33</span>
					<span className={Styles.data}>Carlos</span>
					<span className={Styles.data}>Martinez</span>
				</div>
				<div className={Styles.item}>
					<span className={Styles.data}>1046814333</span>
					<span className={Styles.data}>Andres</span>
					<span className={Styles.data}>Villarreal</span>
					<span className={Styles.data}>dff33</span>
					<span className={Styles.data}>Carlos</span>
					<span className={Styles.data}>Martinez</span>
				</div>
			</div>
		</div>
	)
}

export default Consults
