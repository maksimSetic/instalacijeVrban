export const data = [
	{
		title: 'Što kažu naši klijenti',
		description:
			'Naši klijenti rado ostaju s našim uslugama već nekoliko godina. Pogledajte stvarne recenzije naših klijenata.',
		image: './assets/clients.jpg',
	},
	{
		title: 'Sigurnost na prvom mjestu ',
		description: 'Saznajte više o sigurnosnim sustavima kako biste bili sigurni da su vaši proizvodi uvijek sigurni',
		image: './assets/security.jpg',
	},
	{
		title: 'Naš tim',
		description: 'Naš tim se sastoji od najboljih stručnjaka u industriji, naučite o njima',
		image: './assets/teamwork.jpg',
	},
	{
		title: 'Naše usluge',
		description: 'Saznajte više o hardveru i softveru koji se koriste za vašu uslugu',
		image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
	},
	{
		title: 'Naši top klijenti',
		description: 'Pružali smo usluge vrhunskim klijentima u industriji',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
