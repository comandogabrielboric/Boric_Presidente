import _ from 'lodash'

const chile = [
	{
		nombreCompleto: 'Región de Arica y Parinacota',
		prefijo: 'Región de',
		nombre: 'Arica y Parinacota',
		regex: 'Arica_y_Parinacota',
		romano: 'XV',
		numero: '15',
		iso_3166_2: 'CL-AP',
		provincias: [
			{
				nombre: 'Arica',
				comunas: [
					{
						nombre: 'Arica',
						distrito: '1',
						codigo: '15101'
					},
					{
						nombre: 'Camarones',
						distrito: '1',
						codigo: '15102'
					}
				]
			},
			{
				nombre: 'Parinacota',
				comunas: [
					{
						nombre: 'Putre',
						distrito: '1',
						codigo: '15201'
					},
					{
						nombre: 'General Lagos',
						distrito: '1',
						codigo: '15202'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Tarapacá',
		prefijo: 'Región de',
		nombre: 'Tarapacá',
		regex: 'Tarapaca',
		romano: 'I',
		numero: '1',
		iso_3166_2: 'CL-TA',
		provincias: [
			{
				nombre: 'Iquique',
				comunas: [
					{
						nombre: 'Iquique',
						distrito: '2',
						codigo: '01101'
					},
					{
						nombre: 'Alto Hospicio',
						distrito: '2',
						codigo: '01102'
					}
				]
			},
			{
				nombre: 'Tamarugal',
				comunas: [
					{
						nombre: 'Pozo Almonte',
						distrito: '2',
						codigo: '01201'
					},
					{
						nombre: 'Camiña',
						distrito: '2',
						codigo: '01402'
					},
					{
						nombre: 'Colchane',
						distrito: '2',
						codigo: '01403'
					},
					{
						nombre: 'Huara',
						distrito: '2',
						codigo: '01404'
					},
					{
						nombre: 'Pica',
						distrito: '2',
						codigo: '01405'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Antofagasta',
		prefijo: 'Región de',
		nombre: 'Antofagasta',
		regex: 'Antofagasta',
		romano: 'II',
		numero: '2',
		iso_3166_2: 'CL-AN',
		provincias: [
			{
				nombre: 'Antofagasta',
				comunas: [
					{
						nombre: 'Antofagasta',
						distrito: '3',
						codigo: '02101'
					},
					{
						nombre: 'Mejillones',
						distrito: '3',
						codigo: '02102'
					},
					{
						nombre: 'Sierra Gorda',
						distrito: '3',
						codigo: '02103'
					},
					{
						nombre: 'Taltal',
						distrito: '3',
						codigo: '02104'
					}
				]
			},
			{
				nombre: 'El Loa',
				comunas: [
					{
						nombre: 'Calama',
						distrito: '3',
						codigo: '02201'
					},
					{
						nombre: 'Ollagüe',
						distrito: '3',
						codigo: '02202'
					},
					{
						nombre: 'San Pedro de Atacama',
						distrito: '3',
						codigo: '02203'
					}
				]
			},
			{
				nombre: 'Tocopilla',
				comunas: [
					{
						nombre: 'Tocopilla',
						distrito: '3',
						codigo: '02301'
					},
					{
						nombre: 'María Elena',
						distrito: '3',
						codigo: '02302'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Atacama',
		prefijo: 'Región de',
		nombre: 'Atacama',
		regex: 'Atacama',
		romano: 'III',
		numero: '3',
		iso_3166_2: 'CL-AT',
		provincias: [
			{
				nombre: 'Copiapó',
				comunas: [
					{
						nombre: 'Copiapó',
						distrito: '4',
						codigo: '03101'
					},
					{
						nombre: 'Caldera',
						distrito: '4',
						codigo: '03102'
					},
					{
						nombre: 'Tierra Amarilla',
						distrito: '4',
						codigo: '03103'
					}
				]
			},
			{
				nombre: 'Chañaral',
				comunas: [
					{
						nombre: 'Chañaral',
						distrito: '4',
						codigo: '03201'
					},
					{
						nombre: 'Diego de Almagro',
						distrito: '4',
						codigo: '03202'
					}
				]
			},
			{
				nombre: 'Huasco',
				comunas: [
					{
						nombre: 'Vallenar',
						distrito: '4',
						codigo: '03301'
					},
					{
						nombre: 'Alto del Carmen',
						distrito: '4',
						codigo: '03302'
					},
					{
						nombre: 'Freirina',
						distrito: '4',
						codigo: '03303'
					},
					{
						nombre: 'Huasco',
						distrito: '4',
						codigo: '03304'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Coquimbo',
		prefijo: 'Región de',
		nombre: 'Coquimbo',
		regex: 'Coquimbo',
		romano: 'IV',
		numero: '4',
		iso_3166_2: 'CL-CO',
		provincias: [
			{
				nombre: 'Elqui',
				comunas: [
					{
						nombre: 'La Serena',
						distrito: '5',
						codigo: '04101'
					},
					{
						nombre: 'Coquimbo',
						distrito: '5',
						codigo: '04102'
					},
					{
						nombre: 'Andacollo',
						distrito: '5',
						codigo: '04103'
					},
					{
						nombre: 'La Higuera',
						codigo: '04104'
					},
					{
						nombre: 'Paiguano',
						distrito: '5',
						codigo: '04105'
					},
					{
						nombre: 'Vicuña',
						distrito: '5',
						codigo: '04106'
					}
				]
			},
			{
				nombre: 'Choapa',
				comunas: [
					{
						nombre: 'Illapel',
						distrito: '5',
						codigo: '04201'
					},
					{
						nombre: 'Canela',
						distrito: '5',
						codigo: '04202'
					},
					{
						nombre: 'Los Vilos',
						distrito: '5',
						codigo: '04203'
					},
					{
						nombre: 'Salamanca',
						distrito: '5',
						codigo: '04204'
					}
				]
			},
			{
				nombre: 'Limarí',
				comunas: [
					{
						nombre: 'Ovalle',
						distrito: '5',
						codigo: '04301'
					},
					{
						nombre: 'Combarbalá',
						distrito: '5',
						codigo: '04302'
					},
					{
						nombre: 'Monte Patria',
						distrito: '5',
						codigo: '04303'
					},
					{
						nombre: 'Punitaqui',
						distrito: '5',
						codigo: '04304'
					},
					{
						nombre: 'Río Hurtado',
						distrito: '5',
						codigo: '04305'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Valparaíso',
		prefijo: 'Región de',
		nombre: 'Valparaíso',
		regex: 'Valparaiso',
		romano: 'V',
		numero: '5',
		iso_3166_2: 'CL-VS',
		provincias: [
			{
				nombre: 'Valparaíso',
				comunas: [
					{
						nombre: 'Valparaíso',
						distrito: '7',
						codigo: '05101'
					},
					{
						nombre: 'Casablanca',
						distrito: '7',
						codigo: '05102'
					},
					{
						nombre: 'Concón',
						distrito: '7',
						codigo: '05103'
					},
					{
						nombre: 'Juan Fernández',
						distrito: '7',
						codigo: '05104'
					},
					{
						nombre: 'Puchuncaví',
						distrito: '6',
						codigo: '05105'
					},
					{
						nombre: 'Quintero',
						distrito: '6',
						codigo: '05107'
					},
					{
						nombre: 'Viña del Mar',
						distrito: '7',
						codigo: '05109'
					}
				]
			},
			{
				nombre: 'Isla de Pascua',
				comunas: [
					{
						nombre: 'Isla de Pascua',
						distrito: '7',
						codigo: '05201'
					}
				]
			},
			{
				nombre: 'Los Andes',
				comunas: [
					{
						nombre: 'Los Andes',
						distrito: '6',
						codigo: '05301'
					},
					{
						nombre: 'Calle Larga',
						distrito: '6',
						codigo: '05302'
					},
					{
						nombre: 'Rinconada',
						distrito: '6',
						codigo: '05303'
					},
					{
						nombre: 'San Esteban',
						distrito: '6',
						codigo: '05304'
					}
				]
			},
			{
				nombre: 'Petorca',
				comunas: [
					{
						nombre: 'La Ligua',
						distrito: '6',
						codigo: '05401'
					},
					{
						nombre: 'Cabildo',
						distrito: '6',
						codigo: '05402'
					},
					{
						nombre: 'Papudo',
						distrito: '6',
						codigo: '05403'
					},
					{
						nombre: 'Petorca',
						distrito: '6',
						codigo: '05404'
					},
					{
						nombre: 'Zapallar',
						distrito: '6',
						codigo: '05405'
					}
				]
			},
			{
				nombre: 'Quillota',
				comunas: [
					{
						nombre: 'Quillota',
						distrito: '6',
						codigo: '05501'
					},
					{
						nombre: 'La Calera',
						distrito: '6',
						codigo: '05502'
					},
					{
						nombre: 'Hijuelas',
						distrito: '6',
						codigo: '05503'
					},
					{
						nombre: 'La Cruz',
						distrito: '6',
						codigo: '05504'
					},
					{
						nombre: 'Nogales',
						distrito: '6',
						codigo: '05506'
					}
				]
			},
			{
				nombre: 'San Antonio',
				comunas: [
					{
						nombre: 'San Antonio',
						distrito: '7',
						codigo: '05601'
					},
					{
						nombre: 'Algarrobo',
						distrito: '7',
						codigo: '05602'
					},
					{
						nombre: 'Cartagena',
						distrito: '7',
						codigo: '05603'
					},
					{
						nombre: 'El Quisco',
						distrito: '7',
						codigo: '05604'
					},
					{
						nombre: 'El Tabo',
						distrito: '7',
						codigo: '05605'
					},
					{
						nombre: 'Santo Domingo',
						distrito: '7',
						codigo: '05606'
					}
				]
			},
			{
				nombre: 'San Felipe de Aconcagua',
				comunas: [
					{
						nombre: 'San Felipe',
						distrito: '6',
						codigo: '05701'
					},
					{
						nombre: 'Catemu',
						distrito: '6',
						codigo: '05702'
					},
					{
						nombre: 'Llaillay',
						distrito: '6',
						codigo: '05703'
					},
					{
						nombre: 'Panquehue',
						distrito: '6',
						codigo: '05704'
					},
					{
						nombre: 'Putaendo',
						distrito: '6',
						codigo: '05705'
					},
					{
						nombre: 'Santa María',
						distrito: '6',
						codigo: '05706'
					}
				]
			},
			{
				nombre: 'Marga Marga',
				comunas: [
					{
						nombre: 'Quilpué',
						distrito: '6',
						codigo: '05801'
					},
					{
						nombre: 'Limache',
						distrito: '6',
						codigo: '05802'
					},
					{
						nombre: 'Olmué',
						distrito: '6',
						codigo: '05803'
					},
					{
						nombre: 'Villa Alemana',
						distrito: '6',
						codigo: '05804'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región Metropolitana de Santiago',
		prefijo: 'Región',
		nombre: 'Metropolitana',
		regex: 'Metropolitana',
		romano: 'XIII',
		numero: '13',
		iso_3166_2: 'CL-RM',
		provincias: [
			{
				nombre: 'Santiago',
				comunas: [
					{
						nombre: 'Santiago',
						distrito: '10',
						codigo: '13101'
					},
					{
						nombre: 'Cerrillos',
						distrito: '8',
						codigo: '13102'
					},
					{
						nombre: 'Cerro Navia',
						distrito: '9',
						codigo: '13103'
					},
					{
						nombre: 'Conchalí',
						distrito: '9',
						codigo: '13104'
					},
					{
						nombre: 'El Bosque',
						distrito: '13',
						codigo: '13105'
					},
					{
						nombre: 'Estación Central',
						distrito: '8',
						codigo: '13106'
					},
					{
						nombre: 'Huechuraba',
						distrito: '9',
						codigo: '13107'
					},
					{
						nombre: 'Independencia',
						distrito: '9',
						codigo: '13108'
					},
					{
						nombre: 'La Cisterna',
						distrito: '9',
						codigo: '13109'
					},
					{
						nombre: 'La Florida',
						distrito: '12',
						codigo: '13110'
					},
					{
						nombre: 'La Granja',
						distrito: '10',
						codigo: '13111'
					},
					{
						nombre: 'La Pintana',
						distrito: '12',
						codigo: '13112'
					},
					{
						nombre: 'La Reina',
						distrito: '11',
						codigo: '13113'
					},
					{
						nombre: 'Las Condes',
						distrito: '11',
						codigo: '13114'
					},
					{
						nombre: 'Lo Barnechea',
						distrito: '11',
						codigo: '13115'
					},
					{
						nombre: 'Lo Espejo',
						distrito: '13',
						codigo: '13116'
					},
					{
						nombre: 'Lo Prado',
						distrito: '9',
						codigo: '13117'
					},
					{
						nombre: 'Macul',
						distrito: '10',
						codigo: '13118'
					},
					{
						nombre: 'Maipú',
						distrito: '8',
						codigo: '13119'
					},
					{
						nombre: 'Ñuñoa',
						distrito: '10',
						codigo: '13120'
					},
					{
						nombre: 'Pedro Aguirre Cerda',
						distrito: '13',
						codigo: '13121'
					},
					{
						nombre: 'Peñalolén',
						distrito: '11',
						codigo: '13122'
					},
					{
						nombre: 'Providencia',
						distrito: '10',
						codigo: '13123'
					},
					{
						nombre: 'Pudahuel',
						distrito: '8',
						codigo: '13124'
					},
					{
						nombre: 'Quilicura',
						distrito: '8',
						codigo: '13125'
					},
					{
						nombre: 'Quinta Normal',
						distrito: '9',
						codigo: '13126'
					},
					{
						nombre: 'Recoleta',
						distrito: '9',
						codigo: '13127'
					},
					{
						nombre: 'Renca',
						distrito: '9',
						codigo: '13128'
					},
					{
						nombre: 'San Joaquín',
						distrito: '10',
						codigo: '13129'
					},
					{
						nombre: 'San Miguel',
						distrito: '13',
						codigo: '13130'
					},
					{
						nombre: 'San Ramón',
						distrito: '13',
						codigo: '13131'
					},
					{
						nombre: 'Vitacura',
						distrito: '11',
						codigo: '13132'
					}
				]
			},
			{
				nombre: 'Cordillera',
				comunas: [
					{
						nombre: 'Puente Alto',
						distrito: '12',
						codigo: '13201'
					},
					{
						nombre: 'Pirque',
						distrito: '12',
						codigo: '13202'
					},
					{
						nombre: 'San José de Maipo',
						distrito: '12',
						codigo: '13203'
					}
				]
			},
			{
				nombre: 'Chacabuco',
				comunas: [
					{
						nombre: 'Colina',
						distrito: '8',
						codigo: '13301'
					},
					{
						nombre: 'Lampa',
						distrito: '8',
						codigo: '13302'
					},
					{
						nombre: 'Tiltil',
						distrito: '8',
						codigo: '13303'
					}
				]
			},
			{
				nombre: 'Maipo',
				comunas: [
					{
						nombre: 'San Bernardo',
						distrito: '14',
						codigo: '13401'
					},
					{
						nombre: 'Buin',
						distrito: '14',
						codigo: '13402'
					},
					{
						nombre: 'Calera de Tango',
						distrito: '14',
						codigo: '13403'
					},
					{
						nombre: 'Paine',
						distrito: '14',
						codigo: '13404'
					}
				]
			},
			{
				nombre: 'Mellipilla',
				comunas: [
					{
						nombre: 'Melipilla',
						distrito: '14',
						codigo: '13501'
					},
					{
						nombre: 'Alhué',
						distrito: '14',
						codigo: '13502'
					},
					{
						nombre: 'Curacaví',
						distrito: '14',
						codigo: '13503'
					},
					{
						nombre: 'María Pinto',
						distrito: '14',
						codigo: '13504'
					},
					{
						nombre: 'San Pedro',
						distrito: '14',
						codigo: '13505'
					}
				]
			},
			{
				nombre: 'Talagante',
				comunas: [
					{
						nombre: 'Talagante',
						distrito: '14',
						codigo: '13601'
					},
					{
						nombre: 'El Monte',
						distrito: '14',
						codigo: '13602'
					},
					{
						nombre: 'Isla de Maipo',
						distrito: '14',
						codigo: '13603'
					},
					{
						nombre: 'Padre Hurtado',
						distrito: '14',
						codigo: '13604'
					},
					{
						nombre: 'Peñaflor',
						distrito: '14',
						codigo: '13605'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región Libertador Bernardo O\'Higgins',
		prefijo: 'Región de',
		nombre: 'O\'Higgins',
		regex: 'OHiggins',
		romano: 'VI',
		numero: '6',
		iso_3166_2: 'CL-LI',
		provincias: [
			{
				nombre: 'Cachapoal',
				comunas: [
					{
						nombre: 'Rancagua',
						distrito: '15',
						codigo: '06101'
					},
					{
						nombre: 'Codegua',
						distrito: '15',
						codigo: '06102'
					},
					{
						nombre: 'Coinco',
						distrito: '15',
						codigo: '06103'
					},
					{
						nombre: 'Coltauco',
						distrito: '15',
						codigo: '06104'
					},
					{
						nombre: 'Doñihue',
						distrito: '15',
						codigo: '06105'
					},
					{
						nombre: 'Graneros',
						distrito: '15',
						codigo: '06106'
					},
					{
						nombre: 'Las Cabras',
						distrito: '16',
						codigo: '06107'
					},
					{
						nombre: 'Machalí',
						distrito: '15',
						codigo: '06108'
					},
					{
						nombre: 'Malloa',
						distrito: '15',
						codigo: '06109'
					},
					{
						nombre: 'Mostazal',
						distrito: '15',
						codigo: '06110'
					},
					{
						nombre: 'Olivar',
						distrito: '15',
						codigo: '06111'
					},
					{
						nombre: 'Peumo',
						distrito: '16',
						codigo: '06112'
					},
					{
						nombre: 'Pichidegua',
						distrito: '16',
						codigo: '06113'
					},
					{
						nombre: 'Quinta de Tilcoco',
						distrito: '15',
						codigo: '06114'
					},
					{
						nombre: 'Rengo',
						distrito: '15',
						codigo: '06115'
					},
					{
						nombre: 'Requínoa',
						distrito: '15',
						codigo: '06116'
					},
					{
						nombre: 'San Vicente',
						distrito: '16',
						codigo: '06117'
					}
				]
			},
			{
				nombre: 'Cardenal Caro',
				comunas: [
					{
						nombre: 'Pichilemu',
						distrito: '16',
						codigo: '06201'
					},
					{
						nombre: 'La Estrella',
						distrito: '16',
						codigo: '06202'
					},
					{
						nombre: 'Litueche',
						distrito: '16',
						codigo: '06203'
					},
					{
						nombre: 'Marichihue',
						distrito: '16',
						codigo: '06204'
					},
					{
						nombre: 'Navidad',
						distrito: '16',
						codigo: '06205'
					},
					{
						nombre: 'Paredones',
						distrito: '16',
						codigo: '06206'
					}
				]
			},
			{
				nombre: 'Colchagua',
				comunas: [
					{
						nombre: 'San Fernando',
						distrito: '16',
						codigo: '06301'
					},
					{
						nombre: 'Chépica',
						distrito: '16',
						codigo: '06302'
					},
					{
						nombre: 'Chimbarongo',
						distrito: '16',
						codigo: '06303'
					},
					{
						nombre: 'Lolol',
						distrito: '16',
						codigo: '06304'
					},
					{
						nombre: 'Nancagua',
						distrito: '16',
						codigo: '06305'
					},
					{
						nombre: 'Palmilla',
						distrito: '16',
						codigo: '06306'
					},
					{
						nombre: 'Peralillo',
						distrito: '16',
						codigo: '06307'
					},
					{
						nombre: 'Placilla',
						distrito: '16',
						codigo: '06308'
					},
					{
						nombre: 'Pumanque',
						distrito: '16',
						codigo: '06309'
					},
					{
						nombre: 'Santa Cruz',
						distrito: '16',
						codigo: '06310'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región del Maule',
		prefijo: 'Región del',
		nombre: 'Maule',
		regex: 'Maule',
		romano: 'VII',
		numero: '7',
		iso_3166_2: 'CL-ML',
		provincias: [
			{
				nombre: 'Talca',
				comunas: [
					{
						nombre: 'Talca',
						distrito: '17',
						codigo: '07101'
					},
					{
						nombre: 'Constitución',
						distrito: '17',
						codigo: '07102'
					},
					{
						nombre: 'Curepto',
						distrito: '17',
						codigo: '07103'
					},
					{
						nombre: 'Empedrado',
						distrito: '17',
						codigo: '07104'
					},
					{
						nombre: 'Maule',
						distrito: '17',
						codigo: '07105'
					},
					{
						nombre: 'Pelarco',
						distrito: '17',
						codigo: '07106'
					},
					{
						nombre: 'Pencahue',
						distrito: '17',
						codigo: '07107'
					},
					{
						nombre: 'Río Claro',
						distrito: '17',
						codigo: '07108'
					},
					{
						nombre: 'San Clemente',
						distrito: '17',
						codigo: '07109'
					},
					{
						nombre: 'San Rafael',
						distrito: '17',
						codigo: '07110'
					}
				]
			},
			{
				nombre: 'Cauquenes',
				comunas: [
					{
						nombre: 'Cauquenes',
						distrito: '18',
						codigo: '07201'
					},
					{
						nombre: 'Chanco',
						distrito: '18',
						codigo: '07202'
					},
					{
						nombre: 'Pelluhue',
						distrito: '18',
						codigo: '07203'
					}
				]
			},
			{
				nombre: 'Curicó',
				comunas: [
					{
						nombre: 'Curicó',
						distrito: '17',
						codigo: '07301'
					},
					{
						nombre: 'Hualañé',
						distrito: '17',
						codigo: '07302'
					},
					{
						nombre: 'Licantén',
						distrito: '17',
						codigo: '07303'
					},
					{
						nombre: 'Molina',
						distrito: '17',
						codigo: '07304'
					},
					{
						nombre: 'Rauco',
						distrito: '17',
						codigo: '07305'
					},
					{
						nombre: 'Romeral',
						distrito: '17',
						codigo: '07306'
					},
					{
						nombre: 'Sagrada Familia',
						distrito: '17',
						codigo: '07307'
					},
					{
						nombre: 'Teno',
						distrito: '17',
						codigo: '07308'
					},
					{
						nombre: 'Vichuquén',
						distrito: '17',
						codigo: '07309'
					}
				]
			},
			{
				nombre: 'Linares',
				comunas: [
					{
						nombre: 'Linares',
						distrito: '18',
						codigo: '07401'
					},
					{
						nombre: 'Colbún',
						distrito: '18',
						codigo: '07402'
					},
					{
						nombre: 'Longaví',
						distrito: '18',
						codigo: '07403'
					},
					{
						nombre: 'Parral',
						distrito: '18',
						codigo: '07404'
					},
					{
						nombre: 'Retiro',
						distrito: '18',
						codigo: '07405'
					},
					{
						nombre: 'San Javier',
						distrito: '18',
						codigo: '07406'
					},
					{
						nombre: 'Villa Alegre',
						distrito: '18',
						codigo: '07407'
					},
					{
						nombre: 'Yerbas Buenas',
						distrito: '18',
						codigo: '07408'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Ñuble',
		prefijo: 'Región de',
		nombre: 'Ñuble',
		regex: 'Nuble',
		romano: 'XVI',
		numero: '16',
		iso_3166_2: 'CL-NU',
		provincias: [
			{
				nombre: 'Itata',
				comunas: [
					{
						nombre: 'Cobquecura',
						distrito: '19',
						codigo: '08403'
					},
					{
						nombre: 'Coelemu',
						distrito: '19',
						codigo: '08404'
					},
					{
						nombre: 'Ninhue',
						distrito: '19',
						codigo: '08408'
					},
					{
						nombre: 'Portezuelo',
						distrito: '19',
						codigo: '08412'
					},
					{
						nombre: 'Quirihue',
						distrito: '19',
						codigo: '08414'
					},
					{
						nombre: 'Ránquil',
						distrito: '19',
						codigo: '08415'
					},
					{
						nombre: 'Treguaco',
						distrito: '19',
						codigo: '08420'
					}
				]
			},
			{
				nombre: 'Diguillín',
				comunas: [
					{
						nombre: 'Bulnes',
						distrito: '19',
						codigo: '08402'
					},
					{
						nombre: 'Chillán Viejo',
						distrito: '19',
						codigo: '08406'
					},
					{
						nombre: 'Chillán',
						distrito: '19',
						codigo: '08401'
					},
					{
						nombre: 'El Carmen',
						distrito: '19',
						codigo: '08407'
					},
					{
						nombre: 'Pemuco',
						distrito: '19',
						codigo: '08410'
					},
					{
						nombre: 'Pinto',
						distrito: '19',
						codigo: '08411'
					},
					{
						nombre: 'Quillón',
						distrito: '19',
						codigo: '08413'
					},
					{
						nombre: 'San Ignacio',
						distrito: '19',
						codigo: '08418'
					},
					{
						nombre: 'Yungay',
						distrito: '19',
						codigo: '08421'
					}
				]
			},
			{
				nombre: 'Punilla',
				comunas: [
					{
						nombre: 'Coihueco',
						distrito: '19',
						codigo: '08405'
					},
					{
						nombre: 'Ñiquén',
						distrito: '19',
						codigo: '08409'
					},
					{
						nombre: 'San Carlos',
						distrito: '19',
						codigo: '08416'
					},
					{
						nombre: 'San Fabián',
						distrito: '19',
						codigo: '08417'
					},
					{
						nombre: 'San Nicolás',
						distrito: '19',
						codigo: '08419'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región del Bío-Bío',
		prefijo: 'Región del',
		nombre: 'Bío-Bío',
		regex: 'Bio_Bio',
		romano: 'VIII',
		numero: '8',
		iso_3166_2: 'CL-BI',
		provincias: [
			{
				nombre: 'Concepción',
				comunas: [
					{
						nombre: 'Concepción',
						distrito: '20',
						codigo: '08101'
					},
					{
						nombre: 'Coronel',
						distrito: '20',
						codigo: '08102'
					},
					{
						nombre: 'Chiguayante',
						distrito: '20',
						codigo: '08103'
					},
					{
						nombre: 'Florida',
						distrito: '20',
						codigo: '08104'
					},
					{
						nombre: 'Hualqui',
						distrito: '20',
						codigo: '08105'
					},
					{
						nombre: 'Lota',
						distrito: '21',
						codigo: '08106'
					},
					{
						nombre: 'Penco',
						distrito: '20',
						codigo: '08107'
					},
					{
						nombre: 'San Pedro de la Paz',
						distrito: '20',
						codigo: '08108'
					},
					{
						nombre: 'Santa Juana',
						distrito: '20',
						codigo: '08109'
					},
					{
						nombre: 'Talcahuano',
						distrito: '20',
						codigo: '08110'
					},
					{
						nombre: 'Tomé',
						distrito: '20',
						codigo: '08111'
					},
					{
						nombre: 'Hualpén',
						distrito: '20',
						codigo: '08112'
					}
				]
			},
			{
				nombre: 'Arauco',
				comunas: [
					{
						nombre: 'Lebu',
						distrito: '21',
						codigo: '08201'
					},
					{
						nombre: 'Arauco',
						distrito: '21',
						codigo: '08202'
					},
					{
						nombre: 'Cañete',
						distrito: '21',
						codigo: '08203'
					},
					{
						nombre: 'Contulmo',
						distrito: '21',
						codigo: '08204'
					},
					{
						nombre: 'Curanilahue',
						distrito: '21',
						codigo: '08205'
					},
					{
						nombre: 'Los Álamos',
						distrito: '21',
						codigo: '08206'
					},
					{
						nombre: 'Tirúa',
						distrito: '21',
						codigo: '08207'
					}
				]
			},
			{
				nombre: 'Biobío',
				comunas: [
					{
						nombre: 'Los Ángeles',
						distrito: '21',
						codigo: '08301'
					},
					{
						nombre: 'Antuco',
						distrito: '21',
						codigo: '08302'
					},
					{
						nombre: 'Cabrero',
						distrito: '21',
						codigo: '08303'
					},
					{
						nombre: 'Laja',
						distrito: '21',
						codigo: '08304'
					},
					{
						nombre: 'Mulchén',
						distrito: '21',
						codigo: '08305'
					},
					{
						nombre: 'Nacimiento',
						distrito: '21',
						codigo: '08306'
					},
					{
						nombre: 'Negrete',
						distrito: '21',
						codigo: '08307'
					},
					{
						nombre: 'Quilaco',
						distrito: '21',
						codigo: '08308'
					},
					{
						nombre: 'Quilleco',
						distrito: '21',
						codigo: '08309'
					},
					{
						nombre: 'San Rosendo',
						distrito: '21',
						codigo: '08310'
					},
					{
						nombre: 'Santa Bárbara',
						distrito: '21',
						codigo: '08311'
					},
					{
						nombre: 'Tucapel',
						distrito: '21',
						codigo: '08312'
					},
					{
						nombre: 'Yumbel',
						distrito: '21',
						codigo: '08313'
					},
					{
						nombre: 'Alto Biobío',
						distrito: '21',
						codigo: '08314'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de la Araucanía',
		prefijo: 'Región de la',
		nombre: 'Araucanía',
		regex: 'Araucania',
		romano: 'IX',
		numero: '9',
		iso_3166_2: 'CL-AR',
		provincias: [
			{
				nombre: 'Cautín',
				comunas: [
					{
						nombre: 'Temuco',
						distrito: '23',
						codigo: '09101'
					},
					{
						nombre: 'Carahue',
						distrito: '23',
						codigo: '09102'
					},
					{
						nombre: 'Cunco',
						distrito: '23',
						codigo: '09103'
					},
					{
						nombre: 'Curarrehue',
						distrito: '23',
						codigo: '09104'
					},
					{
						nombre: 'Freire',
						distrito: '23',
						codigo: '09105'
					},
					{
						nombre: 'Galvarino',
						distrito: '22',
						codigo: '09106'
					},
					{
						nombre: 'Gorbea',
						distrito: '23',
						codigo: '09107'
					},
					{
						nombre: 'Lautaro',
						distrito: '22',
						codigo: '09108'
					},
					{
						nombre: 'Loncoche',
						distrito: '23',
						codigo: '09109'
					},
					{
						nombre: 'Melipeuco',
						distrito: '22',
						codigo: '09110'
					},
					{
						nombre: 'Nueva Imperial',
						distrito: '23',
						codigo: '09111'
					},
					{
						nombre: 'Padre las Casas',
						distrito: '23',
						codigo: '09112'
					},
					{
						nombre: 'Perquenco',
						distrito: '22',
						codigo: '09113'
					},
					{
						nombre: 'Pitrufquén',
						distrito: '23',
						codigo: '09114'
					},
					{
						nombre: 'Pucón',
						distrito: '23',
						codigo: '09115'
					},
					{
						nombre: 'Saavedra',
						distrito: '23',
						codigo: '09116'
					},
					{
						nombre: 'Teodoro Schmidt',
						distrito: '23',
						codigo: '09117'
					},
					{
						nombre: 'Toltén',
						distrito: '23',
						codigo: '09118'
					},
					{
						nombre: 'Vilcún',
						distrito: '22',
						codigo: '09119'
					},
					{
						nombre: 'Villarrica',
						distrito: '23',
						codigo: '09120'
					},
					{
						nombre: 'Cholchol',
						distrito: '23',
						codigo: '09121'
					}
				]
			},
			{
				nombre: 'Malleco',
				comunas: [
					{
						nombre: 'Angol',
						distrito: '22',
						codigo: '09201'
					},
					{
						nombre: 'Collipulli',
						distrito: '22',
						codigo: '09202'
					},
					{
						nombre: 'Curacautín',
						distrito: '22',
						codigo: '09203'
					},
					{
						nombre: 'Ercilla',
						distrito: '22',
						codigo: '09204'
					},
					{
						nombre: 'Lonquimay',
						distrito: '22',
						codigo: '09205'
					},
					{
						nombre: 'Los Sauces',
						distrito: '22',
						codigo: '09206'
					},
					{
						nombre: 'Lumaco',
						distrito: '22',
						codigo: '09207'
					},
					{
						nombre: 'Purén',
						distrito: '22',
						codigo: '09208'
					},
					{
						nombre: 'Renaico',
						distrito: '22',
						codigo: '09209'
					},
					{
						nombre: 'Traiguén',
						distrito: '22',
						codigo: '09210'
					},
					{
						nombre: 'Victoria',
						distrito: '22',
						codigo: '09211'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Los Ríos',
		prefijo: 'Región de',
		nombre: 'Los Ríos',
		regex: 'Los_Rios',
		romano: 'XIV',
		numero: '14',
		iso_3166_2: 'CL-LR',
		provincias: [
			{
				nombre: 'Valdivia',
				comunas: [
					{
						nombre: 'Valdivia',
						distrito: '24',
						codigo: '14101'
					},
					{
						nombre: 'Corral',
						distrito: '24',
						codigo: '14102'
					},
					{
						nombre: 'Lanco',
						distrito: '24',
						codigo: '14103'
					},
					{
						nombre: 'Los Lagos',
						distrito: '24',
						codigo: '14104'
					},
					{
						nombre: 'Máfil',
						distrito: '24',
						codigo: '14105'
					},
					{
						nombre: 'Mariquina',
						distrito: '24',
						codigo: '14106'
					},
					{
						nombre: 'Paillaco',
						distrito: '24',
						codigo: '14107'
					},
					{
						nombre: 'Panguipulli',
						distrito: '24',
						codigo: '14108'
					}
				]
			},
			{
				nombre: 'Ranco',
				comunas: [
					{
						nombre: 'La Unión',
						distrito: '24',
						codigo: '14201'
					},
					{
						nombre: 'Futrono',
						distrito: '24',
						codigo: '14202'
					},
					{
						nombre: 'Lago Ranco',
						distrito: '24',
						codigo: '14203'
					},
					{
						nombre: 'Río Bueno',
						distrito: '24',
						codigo: '14204'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Los Lagos',
		prefijo: 'Región de',
		nombre: 'Los Lagos',
		regex: 'Los_Lagos',
		romano: 'X',
		numero: '10',
		iso_3166_2: 'CL-LL',
		provincias: [
			{
				nombre: 'Llanquihue',
				comunas: [
					{
						nombre: 'Puerto Montt',
						distrito: '26',
						codigo: '10101'
					},
					{
						nombre: 'Calbuco',
						distrito: '26',
						codigo: '10102'
					},
					{
						nombre: 'Cochamó',
						distrito: '26',
						codigo: '10103'
					},
					{
						nombre: 'Fresia',
						distrito: '25',
						codigo: '10104'
					},
					{
						nombre: 'Frutillar',
						distrito: '25',
						codigo: '10105'
					},
					{
						nombre: 'Los Muermos',
						distrito: '25',
						codigo: '10106'
					},
					{
						nombre: 'Llanquihue',
						distrito: '25',
						codigo: '10107'
					},
					{
						nombre: 'Maullín',
						distrito: '26',
						codigo: '10108'
					},
					{
						nombre: 'Puerto Varas',
						distrito: '25',
						codigo: '10109'
					}
				]
			},
			{
				nombre: 'Chiloé',
				comunas: [
					{
						nombre: 'Castro',
						distrito: '26',
						codigo: '10201'
					},
					{
						nombre: 'Ancud',
						distrito: '26',
						codigo: '10202'
					},
					{
						nombre: 'Chonchi',
						distrito: '26',
						codigo: '10203'
					},
					{
						nombre: 'Curaco de Vélez',
						distrito: '26',
						codigo: '10204'
					},
					{
						nombre: 'Dalcahue',
						distrito: '26',
						codigo: '10205'
					},
					{
						nombre: 'Puqueldón',
						distrito: '26',
						codigo: '10206'
					},
					{
						nombre: 'Queilén',
						distrito: '26',
						codigo: '10207'
					},
					{
						nombre: 'Quellón',
						distrito: '26',
						codigo: '10208'
					},
					{
						nombre: 'Quemchi',
						distrito: '26',
						codigo: '10209'
					},
					{
						nombre: 'Quinchao',
						distrito: '26',
						codigo: '10210'
					}
				]
			},
			{
				nombre: 'Osorno',
				comunas: [
					{
						nombre: 'Osorno',
						distrito: '25',
						codigo: '10301'
					},
					{
						nombre: 'Puerto Octay',
						distrito: '25',
						codigo: '10302'
					},
					{
						nombre: 'Purranque',
						distrito: '25',
						codigo: '10303'
					},
					{
						nombre: 'Puyehue',
						distrito: '2',
						codigo: '10304'
					},
					{
						nombre: 'Río Negro',
						distrito: '2',
						codigo: '10305'
					},
					{
						nombre: 'San Juan de la Costa',
						distrito: '2',
						codigo: '10306'
					},
					{
						nombre: 'San Pablo',
						distrito: '2',
						codigo: '10307'
					}
				]
			},
			{
				nombre: 'Palena',
				comunas: [
					{
						nombre: 'Chaitén',
						distrito: '26',
						codigo: '10401'
					},
					{
						nombre: 'Futaleufú',
						distrito: '26',
						codigo: '10402'
					},
					{
						nombre: 'Hualaihué',
						distrito: '26',
						codigo: '10403'
					},
					{
						nombre: 'Palena',
						distrito: '26',
						codigo: '10404'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Aysén',
		prefijo: 'Región de',
		nombre: 'Aysén',
		regex: 'Aysen',
		romano: 'XI',
		numero: '11',
		iso_3166_2: 'CL-AI',
		provincias: [
			{
				nombre: 'Coyhaique',
				comunas: [
					{
						nombre: 'Coyhaique',
						distrito: '27',
						codigo: '11101'
					},
					{
						nombre: 'Lago Verde',
						distrito: '27',
						codigo: '11102'
					}
				]
			},
			{
				nombre: 'Aisén',
				comunas: [
					{
						nombre: 'Aisén',
						distrito: '27',
						codigo: '11201'
					},
					{
						nombre: 'Cisnes',
						distrito: '27',
						codigo: '11202'
					},
					{
						nombre: 'Guaitecas',
						distrito: '27',
						codigo: '11203'
					}
				]
			},
			{
				nombre: 'Capitán Pratt',
				comunas: [
					{
						nombre: 'Cochrane',
						distrito: '27',
						codigo: '11301'
					},
					{
						nombre: 'O’Higgins',
						distrito: '27',
						codigo: '11302'
					},
					{
						nombre: 'Tortel',
						distrito: '27',
						codigo: '11303'
					}
				]
			},
			{
				nombre: 'General Carrera',
				comunas: [
					{
						nombre: 'Chile Chico',
						distrito: '27',
						codigo: '11401'
					},
					{
						nombre: 'Río Ibáñez',
						distrito: '27',
						codigo: '11402'
					}
				]
			}
		]
	},
	{
		nombreCompleto: 'Región de Magallanes y Antártica',
		prefijo: 'Región de',
		nombre: 'Magallanes',
		regex: 'Magallanes',
		romano: 'XII',
		numero: '12',
		iso_3166_2: 'CL-MA',
		provincias: [
			{
				nombre: 'Magallanes',
				comunas: [
					{
						nombre: 'Punta Arenas',
						distrito: '28',
						codigo: '12101'
					},
					{
						nombre: 'Laguna Blanca',
						distrito: '28',
						codigo: '12102'
					},
					{
						nombre: 'Río Verde',
						distrito: '28',
						codigo: '12103'
					},
					{
						nombre: 'San Gregorio',
						distrito: '28',
						codigo: '12104'
					}
				]
			},
			{
				nombre: 'Antártica Chilena',
				comunas: [
					{
						nombre: 'Cabo de Hornos (Ex. Navarino)',
						distrito: '28',
						codigo: '12201'
					},
					{
						nombre: 'Antártica',
						distrito: '28',
						codigo: '12202'
					}
				]
			},
			{
				nombre: 'Tierra del Fuego',
				comunas: [
					{
						nombre: 'Porvenir',
						distrito: '28',
						codigo: '12301'
					},
					{
						nombre: 'Primavera',
						distrito: '28',
						codigo: '12302'
					},
					{
						nombre: 'Timaukel',
						distrito: '28',
						codigo: '12303'
					}
				]
			},
			{
				nombre: 'Última Esperanza',
				comunas: [
					{
						nombre: 'Natales',
						distrito: '28',
						codigo: '12401'
					},
					{
						nombre: 'Torres del Paine',
						distrito: '28',
						codigo: '12402'
					}
				]
			}
		]
	}
]

const regionesProvinciasComunas = _.map(chile, regionData => {
	return {
		value: regionData.romano,
		label: regionData.nombre,
		reg: regionData.regex,
		children: _.map(regionData.provincias, provincia => {
			return {
				value: provincia.nombre,
				label: provincia.nombre,
				children: _.map(provincia.comunas, comuna => {
					return {
						value: comuna.nombre,
						label: comuna.nombre,
						distrito: comuna.distrito
					}
				})
			}
		})
	}
})

const regionesComunas = _.map(chile, regionData => {
	const region = {
		value: regionData.nombre,
		label: regionData.nombre,
		reg: regionData.regex
	}
	const comunasEnprovincias = _.map(regionData.provincias, provincia => _.map(provincia.comunas, comuna => {
		return {
			value: comuna.nombre,
			label: comuna.nombre,
			distrito: comuna.distrito
		}
	}))
	region.children = _.flatten(comunasEnprovincias)
	return region
})

export default {
	chile,
	regionesProvinciasComunas,
	regionesComunas
}
