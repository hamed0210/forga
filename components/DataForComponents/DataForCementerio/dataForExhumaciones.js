const dataForExhumaciones = [
	{
		title: 'Traslado',
		inputs: [
			{
				label: 'De',
				placeholder: 'Escriba codigo boveda',
				type: 'text',
				htmlFor: 'de_ex',
				id: 'de_ex',
				name: 'de_ex',
				required: true,
				autoFocus: false,
			},
			{
				label: 'Hacia',
				placeholder: 'Escriba codigo boveda',
				type: 'text',
				htmlFor: 'hacia_ex',
				id: 'hacia_ex',
				name: 'hacia_ex',
				required: true,
				autoFocus: false,
			},
			{
				label: 'Fecha de exhumacion',
				type: 'date',
				htmlFor: 'date_ex_bo',
				id: 'date_ex_bo',
				name: 'date_ex_bo',
				required: true,
				autoFocus: false,
			},
		],
	},
]

export default dataForExhumaciones
