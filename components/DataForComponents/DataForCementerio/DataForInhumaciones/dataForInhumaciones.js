const dataForInhumaciones = [
	{
		title: 'Propietario',
		inputs: [
			{
				label: 'Identificacion',
				placeholder: 'Escriba su identificacion',
				type: 'number',
				htmlFor: 'id_pro',
				id: 'id_pro',
				name: 'id_pro',
				required: true,
				autoFocus: false,
			},
			{
				label: 'Autorizacion',
				placeholder: 'Escriba sus autorizacion',
				type: 'text',
				htmlFor: 'aut_pro',
				id: 'aut_pro',
				name: 'aut_pro',
				required: true,
				autoFocus: false,
			},
			{
				label: 'Fecha de autorizacion',
				type: 'date',
				htmlFor: 'date_aut_pro',
				id: 'date_aut_pro',
				name: 'date_aut_pro',
				required: true,
				autoFocus: false,
			},
		],
	},
	{
		title: 'Boveda',
		inputs: [
			{
				label: 'Boveda',
				placeholder: 'Escriba cod boveda',
				type: 'text',
				htmlFor: 'cod_bo',
				id: 'cod_bo',
				name: 'cod_bo',
				required: true,
				autoFocus: false,
			},
			{
				label: 'cilindro',
				placeholder: 'Escriba su cilindro',
				type: 'text',
				htmlFor: 'cil_bo',
				id: 'cil_bo',
				name: 'cil_bo',
				required: true,
				autoFocus: false,
			},
		],
	},
]

export default dataForInhumaciones
