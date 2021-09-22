import _ from 'lodash'

const chile = [
	{
		nombreCompleto: 'Región de Arica y Parinacota',
		prefijo: 'Región de',
		nombre: 'Arica y Parinacota',
		romano: 'XV',
		numero: '15',
		iso_3166_2: 'CL-AP',
		provincias: [
			{
				nombre: 'Arica',
				comunas: [
					{
						nombre: 'Arica',
						codigo: '15101'
					},
					{
						nombre: 'Camarones',
						codigo: '15102'
					}
				]
			},
			{
				nombre: 'Parinacota',
				comunas: [
					{
						nombre: 'Putre',
						codigo: '15201'
					},
					{
						nombre: 'General Lagos',
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
		romano: 'I',
		numero: '1',
		iso_3166_2: 'CL-TA',
		provincias: [
			{
				nombre: 'Iquique',
				comunas: [
					{
						nombre: 'Iquique',
						codigo: '01101'
					},
					{
						nombre: 'Alto Hospicio',
						codigo: '01102'
					}
				]
			},
			{
				nombre: 'Tamarugal',
				comunas: [
					{
						nombre: 'Pozo Almonte',
						codigo: '01201'
					},
					{
						nombre: 'Camiña',
						codigo: '01402'
					},
					{
						nombre: 'Colchane',
						codigo: '01403'
					},
					{
						nombre: 'Huara',
						codigo: '01404'
					},
					{
						nombre: 'Pica',
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
		romano: 'II',
		numero: '2',
		iso_3166_2: 'CL-AN',
		provincias: [
			{
				nombre: 'Antofagasta',
				comunas: [
					{
						nombre: 'Antofagasta',
						codigo: '02101'
					},
					{
						nombre: 'Mejillones',
						codigo: '02102'
					},
					{
						nombre: 'Sierra Gorda',
						codigo: '02103'
					},
					{
						nombre: 'Taltal',
						codigo: '02104'
					}
				]
			},
			{
				nombre: 'El Loa',
				comunas: [
					{
						nombre: 'Calama',
						codigo: '02201'
					},
					{
						nombre: 'Ollagüe',
						codigo: '02202'
					},
					{
						nombre: 'San Pedro de Atacama',
						codigo: '02203'
					}
				]
			},
			{
				nombre: 'Tocopilla',
				comunas: [
					{
						nombre: 'Tocopilla',
						codigo: '02301'
					},
					{
						nombre: 'María Elena',
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
		romano: 'III',
		numero: '3',
		iso_3166_2: 'CL-AT',
		provincias: [
			{
				nombre: 'Copiapó',
				comunas: [
					{
						nombre: 'Copiapó',
						codigo: '03101'
					},
					{
						nombre: 'Caldera',
						codigo: '03102'
					},
					{
						nombre: 'Tierra Amarilla',
						codigo: '03103'
					}
				]
			},
			{
				nombre: 'Chañaral',
				comunas: [
					{
						nombre: 'Chañaral',
						codigo: '03201'
					},
					{
						nombre: 'Diego de Almagro',
						codigo: '03202'
					}
				]
			},
			{
				nombre: 'Huasco',
				comunas: [
					{
						nombre: 'Vallenar',
						codigo: '03301'
					},
					{
						nombre: 'Alto del Carmen',
						codigo: '03302'
					},
					{
						nombre: 'Freirina',
						codigo: '03303'
					},
					{
						nombre: 'Huasco',
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
		romano: 'IV',
		numero: '4',
		iso_3166_2: 'CL-CO',
		provincias: [
			{
				nombre: 'Elqui',
				comunas: [
					{
						nombre: 'La Serena',
						codigo: '04101'
					},
					{
						nombre: 'Coquimbo',
						codigo: '04102'
					},
					{
						nombre: 'Andacollo',
						codigo: '04103'
					},
					{
						nombre: 'La Higuera',
						codigo: '04104'
					},
					{
						nombre: 'Paiguano',
						codigo: '04105'
					},
					{
						nombre: 'Vicuña',
						codigo: '04106'
					}
				]
			},
			{
				nombre: 'Choapa',
				comunas: [
					{
						nombre: 'Illapel',
						codigo: '04201'
					},
					{
						nombre: 'Canela',
						codigo: '04202'
					},
					{
						nombre: 'Los Vilos',
						codigo: '04203'
					},
					{
						nombre: 'Salamanca',
						codigo: '04204'
					}
				]
			},
			{
				nombre: 'Limarí',
				comunas: [
					{
						nombre: 'Ovalle',
						codigo: '04301'
					},
					{
						nombre: 'Combarbalá',
						codigo: '04302'
					},
					{
						nombre: 'Monte Patria',
						codigo: '04303'
					},
					{
						nombre: 'Punitaqui',
						codigo: '04304'
					},
					{
						nombre: 'Río Hurtado',
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
		romano: 'V',
		numero: '5',
		iso_3166_2: 'CL-VS',
		provincias: [
			{
				nombre: 'Valparaíso',
				comunas: [
					{
						nombre: 'Valparaíso',
						codigo: '05101'
					},
					{
						nombre: 'Casablanca',
						codigo: '05102'
					},
					{
						nombre: 'Concón',
						codigo: '05103'
					},
					{
						nombre: 'Juan Fernández',
						codigo: '05104'
					},
					{
						nombre: 'Puchuncaví',
						codigo: '05105'
					},
					{
						nombre: 'Quintero',
						codigo: '05107'
					},
					{
						nombre: 'Viña del Mar',
						codigo: '05109'
					}
				]
			},
			{
				nombre: 'Isla de Pascua',
				comunas: [
					{
						nombre: 'Isla de Pascua',
						codigo: '05201'
					}
				]
			},
			{
				nombre: 'Los Andes',
				comunas: [
					{
						nombre: 'Los Andes',
						codigo: '05301'
					},
					{
						nombre: 'Calle Larga',
						codigo: '05302'
					},
					{
						nombre: 'Rinconada',
						codigo: '05303'
					},
					{
						nombre: 'San Esteban',
						codigo: '05304'
					}
				]
			},
			{
				nombre: 'Petorca',
				comunas: [
					{
						nombre: 'La Ligua',
						codigo: '05401'
					},
					{
						nombre: 'Cabildo',
						codigo: '05402'
					},
					{
						nombre: 'Papudo',
						codigo: '05403'
					},
					{
						nombre: 'Petorca',
						codigo: '05404'
					},
					{
						nombre: 'Zapallar',
						codigo: '05405'
					}
				]
			},
			{
				nombre: 'Quillota',
				comunas: [
					{
						nombre: 'Quillota',
						codigo: '05501'
					},
					{
						nombre: 'La Calera',
						codigo: '05502'
					},
					{
						nombre: 'Hijuelas',
						codigo: '05503'
					},
					{
						nombre: 'La Cruz',
						codigo: '05504'
					},
					{
						nombre: 'Nogales',
						codigo: '05506'
					}
				]
			},
			{
				nombre: 'San Antonio',
				comunas: [
					{
						nombre: 'San Antonio',
						codigo: '05601'
					},
					{
						nombre: 'Algarrobo',
						codigo: '05602'
					},
					{
						nombre: 'Cartagena',
						codigo: '05603'
					},
					{
						nombre: 'El Quisco',
						codigo: '05604'
					},
					{
						nombre: 'El Tabo',
						codigo: '05605'
					},
					{
						nombre: 'Santo Domingo',
						codigo: '05606'
					}
				]
			},
			{
				nombre: 'San Felipe de Aconcagua',
				comunas: [
					{
						nombre: 'San Felipe',
						codigo: '05701'
					},
					{
						nombre: 'Catemu',
						codigo: '05702'
					},
					{
						nombre: 'Llaillay',
						codigo: '05703'
					},
					{
						nombre: 'Panquehue',
						codigo: '05704'
					},
					{
						nombre: 'Putaendo',
						codigo: '05705'
					},
					{
						nombre: 'Santa María',
						codigo: '05706'
					}
				]
			},
			{
				nombre: 'Marga Marga',
				comunas: [
					{
						nombre: 'Quilpué',
						codigo: '05801'
					},
					{
						nombre: 'Limache',
						codigo: '05802'
					},
					{
						nombre: 'Olmué',
						codigo: '05803'
					},
					{
						nombre: 'Villa Alemana',
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
		romano: 'XIII',
		numero: '13',
		iso_3166_2: 'CL-RM',
		provincias: [
			{
				nombre: 'Santiago',
				comunas: [
					{
						nombre: 'Santiago',
						codigo: '13101'
					},
					{
						nombre: 'Cerrillos',
						codigo: '13102'
					},
					{
						nombre: 'Cerro Navia',
						codigo: '13103'
					},
					{
						nombre: 'Conchalí',
						codigo: '13104'
					},
					{
						nombre: 'El Bosque',
						codigo: '13105'
					},
					{
						nombre: 'Estación Central',
						codigo: '13106'
					},
					{
						nombre: 'Huechuraba',
						codigo: '13107'
					},
					{
						nombre: 'Independencia',
						codigo: '13108'
					},
					{
						nombre: 'La Cisterna',
						codigo: '13109'
					},
					{
						nombre: 'La Florida',
						codigo: '13110'
					},
					{
						nombre: 'La Granja',
						codigo: '13111'
					},
					{
						nombre: 'La Pintana',
						codigo: '13112'
					},
					{
						nombre: 'La Reina',
						codigo: '13113'
					},
					{
						nombre: 'Las Condes',
						codigo: '13114'
					},
					{
						nombre: 'Lo Barnechea',
						codigo: '13115'
					},
					{
						nombre: 'Lo Espejo',
						codigo: '13116'
					},
					{
						nombre: 'Lo Prado',
						codigo: '13117'
					},
					{
						nombre: 'Macul',
						codigo: '13118'
					},
					{
						nombre: 'Maipú',
						codigo: '13119'
					},
					{
						nombre: 'Ñuñoa',
						codigo: '13120'
					},
					{
						nombre: 'Pedro Aguirre Cerda',
						codigo: '13121'
					},
					{
						nombre: 'Peñalolén',
						codigo: '13122'
					},
					{
						nombre: 'Providencia',
						codigo: '13123'
					},
					{
						nombre: 'Pudahuel',
						codigo: '13124'
					},
					{
						nombre: 'Quilicura',
						codigo: '13125'
					},
					{
						nombre: 'Quinta Normal',
						codigo: '13126'
					},
					{
						nombre: 'Recoleta',
						codigo: '13127'
					},
					{
						nombre: 'Renca',
						codigo: '13128'
					},
					{
						nombre: 'San Joaquín',
						codigo: '13129'
					},
					{
						nombre: 'San Miguel',
						codigo: '13130'
					},
					{
						nombre: 'San Ramón',
						codigo: '13131'
					},
					{
						nombre: 'Vitacura',
						codigo: '13132'
					}
				]
			},
			{
				nombre: 'Cordillera',
				comunas: [
					{
						nombre: 'Puente Alto',
						codigo: '13201'
					},
					{
						nombre: 'Pirque',
						codigo: '13202'
					},
					{
						nombre: 'San José de Maipo',
						codigo: '13203'
					}
				]
			},
			{
				nombre: 'Chacabuco',
				comunas: [
					{
						nombre: 'Colina',
						codigo: '13301'
					},
					{
						nombre: 'Lampa',
						codigo: '13302'
					},
					{
						nombre: 'Tiltil',
						codigo: '13303'
					}
				]
			},
			{
				nombre: 'Maipo',
				comunas: [
					{
						nombre: 'San Bernardo',
						codigo: '13401'
					},
					{
						nombre: 'Buin',
						codigo: '13402'
					},
					{
						nombre: 'Calera de Tango',
						codigo: '13403'
					},
					{
						nombre: 'Paine',
						codigo: '13404'
					}
				]
			},
			{
				nombre: 'Mellipilla',
				comunas: [
					{
						nombre: 'Melipilla',
						codigo: '13501'
					},
					{
						nombre: 'Alhué',
						codigo: '13502'
					},
					{
						nombre: 'Curacaví',
						codigo: '13503'
					},
					{
						nombre: 'María Pinto',
						codigo: '13504'
					},
					{
						nombre: 'San Pedro',
						codigo: '13505'
					}
				]
			},
			{
				nombre: 'Talagante',
				comunas: [
					{
						nombre: 'Talagante',
						codigo: '13601'
					},
					{
						nombre: 'El Monte',
						codigo: '13602'
					},
					{
						nombre: 'Isla de Maipo',
						codigo: '13603'
					},
					{
						nombre: 'Padre Hurtado',
						codigo: '13604'
					},
					{
						nombre: 'Peñaflor',
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
		romano: 'VI',
		numero: '6',
		iso_3166_2: 'CL-LI',
		provincias: [
			{
				nombre: 'Cachapoal',
				comunas: [
					{
						nombre: 'Rancagua',
						codigo: '06101'
					},
					{
						nombre: 'Codegua',
						codigo: '06102'
					},
					{
						nombre: 'Coinco',
						codigo: '06103'
					},
					{
						nombre: 'Coltauco',
						codigo: '06104'
					},
					{
						nombre: 'Doñihue',
						codigo: '06105'
					},
					{
						nombre: 'Graneros',
						codigo: '06106'
					},
					{
						nombre: 'Las Cabras',
						codigo: '06107'
					},
					{
						nombre: 'Machalí',
						codigo: '06108'
					},
					{
						nombre: 'Malloa',
						codigo: '06109'
					},
					{
						nombre: 'Mostazal',
						codigo: '06110'
					},
					{
						nombre: 'Olivar',
						codigo: '06111'
					},
					{
						nombre: 'Peumo',
						codigo: '06112'
					},
					{
						nombre: 'Pichidegua',
						codigo: '06113'
					},
					{
						nombre: 'Quinta de Tilcoco',
						codigo: '06114'
					},
					{
						nombre: 'Rengo',
						codigo: '06115'
					},
					{
						nombre: 'Requínoa',
						codigo: '06116'
					},
					{
						nombre: 'San Vicente',
						codigo: '06117'
					}
				]
			},
			{
				nombre: 'Cardenal Caro',
				comunas: [
					{
						nombre: 'Pichilemu',
						codigo: '06201'
					},
					{
						nombre: 'La Estrella',
						codigo: '06202'
					},
					{
						nombre: 'Litueche',
						codigo: '06203'
					},
					{
						nombre: 'Marichihue',
						codigo: '06204'
					},
					{
						nombre: 'Navidad',
						codigo: '06205'
					},
					{
						nombre: 'Paredones',
						codigo: '06206'
					}
				]
			},
			{
				nombre: 'Colchagua',
				comunas: [
					{
						nombre: 'San Fernando',
						codigo: '06301'
					},
					{
						nombre: 'Chépica',
						codigo: '06302'
					},
					{
						nombre: 'Chimbarongo',
						codigo: '06303'
					},
					{
						nombre: 'Lolol',
						codigo: '06304'
					},
					{
						nombre: 'Nancagua',
						codigo: '06305'
					},
					{
						nombre: 'Palmilla',
						codigo: '06306'
					},
					{
						nombre: 'Peralillo',
						codigo: '06307'
					},
					{
						nombre: 'Placilla',
						codigo: '06308'
					},
					{
						nombre: 'Pumanque',
						codigo: '06309'
					},
					{
						nombre: 'Santa Cruz',
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
		romano: 'VII',
		numero: '7',
		iso_3166_2: 'CL-ML',
		provincias: [
			{
				nombre: 'Talca',
				comunas: [
					{
						nombre: 'Talca',
						codigo: '07101'
					},
					{
						nombre: 'Constitución',
						codigo: '07102'
					},
					{
						nombre: 'Curepto',
						codigo: '07103'
					},
					{
						nombre: 'Empedrado',
						codigo: '07104'
					},
					{
						nombre: 'Maule',
						codigo: '07105'
					},
					{
						nombre: 'Pelarco',
						codigo: '07106'
					},
					{
						nombre: 'Pencahue',
						codigo: '07107'
					},
					{
						nombre: 'Río Claro',
						codigo: '07108'
					},
					{
						nombre: 'San Clemente',
						codigo: '07109'
					},
					{
						nombre: 'San Rafael',
						codigo: '07110'
					}
				]
			},
			{
				nombre: 'Cauquenes',
				comunas: [
					{
						nombre: 'Cauquenes',
						codigo: '07201'
					},
					{
						nombre: 'Chanco',
						codigo: '07202'
					},
					{
						nombre: 'Pelluhue',
						codigo: '07203'
					}
				]
			},
			{
				nombre: 'Curicó',
				comunas: [
					{
						nombre: 'Curicó',
						codigo: '07301'
					},
					{
						nombre: 'Hualañé',
						codigo: '07302'
					},
					{
						nombre: 'Licantén',
						codigo: '07303'
					},
					{
						nombre: 'Molina',
						codigo: '07304'
					},
					{
						nombre: 'Rauco',
						codigo: '07305'
					},
					{
						nombre: 'Romeral',
						codigo: '07306'
					},
					{
						nombre: 'Sagrada Familia',
						codigo: '07307'
					},
					{
						nombre: 'Teno',
						codigo: '07308'
					},
					{
						nombre: 'Vichuquén',
						codigo: '07309'
					}
				]
			},
			{
				nombre: 'Linares',
				comunas: [
					{
						nombre: 'Linares',
						codigo: '07401'
					},
					{
						nombre: 'Colbún',
						codigo: '07402'
					},
					{
						nombre: 'Longaví',
						codigo: '07403'
					},
					{
						nombre: 'Parral',
						codigo: '07404'
					},
					{
						nombre: 'Retiro',
						codigo: '07405'
					},
					{
						nombre: 'San Javier',
						codigo: '07406'
					},
					{
						nombre: 'Villa Alegre',
						codigo: '07407'
					},
					{
						nombre: 'Yerbas Buenas',
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
		romano: 'XVI',
		numero: '16',
		iso_3166_2: 'CL-NU',
		provincias: [
			{
				nombre: 'Itata',
				comunas: [
					{
						nombre: 'Cobquecura',
						codigo: '08403'
					},
					{
						nombre: 'Coelemu',
						codigo: '08404'
					},
					{
						nombre: 'Ninhue',
						codigo: '08408'
					},
					{
						nombre: 'Portezuelo',
						codigo: '08412'
					},
					{
						nombre: 'Quirihue',
						codigo: '08414'
					},
					{
						nombre: 'Ránquil',
						codigo: '08415'
					},
					{
						nombre: 'Treguaco',
						codigo: '08420'
					}
				]
			},
			{
				nombre: 'Diguillín',
				comunas: [
					{
						nombre: 'Bulnes',
						codigo: '08402'
					},
					{
						nombre: 'Chillán Viejo',
						codigo: '08406'
					},
					{
						nombre: 'Chillán',
						codigo: '08401'
					},
					{
						nombre: 'El Carmen',
						codigo: '08407'
					},
					{
						nombre: 'Pemuco',
						codigo: '08410'
					},
					{
						nombre: 'Pinto',
						codigo: '08411'
					},
					{
						nombre: 'Quillón',
						codigo: '08413'
					},
					{
						nombre: 'San Ignacio',
						codigo: '08418'
					},
					{
						nombre: 'Yungay',
						codigo: '08421'
					}
				]
			},
			{
				nombre: 'Punilla',
				comunas: [
					{
						nombre: 'Coihueco',
						codigo: '08405'
					},
					{
						nombre: 'Ñiquén',
						codigo: '08409'
					},
					{
						nombre: 'San Carlos',
						codigo: '08416'
					},
					{
						nombre: 'San Fabián',
						codigo: '08417'
					},
					{
						nombre: 'San Nicolás',
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
		romano: 'VIII',
		numero: '8',
		iso_3166_2: 'CL-BI',
		provincias: [
			{
				nombre: 'Concepción',
				comunas: [
					{
						nombre: 'Concepción',
						codigo: '08101'
					},
					{
						nombre: 'Coronel',
						codigo: '08102'
					},
					{
						nombre: 'Chiguayante',
						codigo: '08103'
					},
					{
						nombre: 'Florida',
						codigo: '08104'
					},
					{
						nombre: 'Hualqui',
						codigo: '08105'
					},
					{
						nombre: 'Lota',
						codigo: '08106'
					},
					{
						nombre: 'Penco',
						codigo: '08107'
					},
					{
						nombre: 'San Pedro de la Paz',
						codigo: '08108'
					},
					{
						nombre: 'Santa Juana',
						codigo: '08109'
					},
					{
						nombre: 'Talcahuano',
						codigo: '08110'
					},
					{
						nombre: 'Tomé',
						codigo: '08111'
					},
					{
						nombre: 'Hualpén',
						codigo: '08112'
					}
				]
			},
			{
				nombre: 'Arauco',
				comunas: [
					{
						nombre: 'Lebu',
						codigo: '08201'
					},
					{
						nombre: 'Arauco',
						codigo: '08202'
					},
					{
						nombre: 'Cañete',
						codigo: '08203'
					},
					{
						nombre: 'Contulmo',
						codigo: '08204'
					},
					{
						nombre: 'Curanilahue',
						codigo: '08205'
					},
					{
						nombre: 'Los Álamos',
						codigo: '08206'
					},
					{
						nombre: 'Tirúa',
						codigo: '08207'
					}
				]
			},
			{
				nombre: 'Biobío',
				comunas: [
					{
						nombre: 'Los Ángeles',
						codigo: '08301'
					},
					{
						nombre: 'Antuco',
						codigo: '08302'
					},
					{
						nombre: 'Cabrero',
						codigo: '08303'
					},
					{
						nombre: 'Laja',
						codigo: '08304'
					},
					{
						nombre: 'Mulchén',
						codigo: '08305'
					},
					{
						nombre: 'Nacimiento',
						codigo: '08306'
					},
					{
						nombre: 'Negrete',
						codigo: '08307'
					},
					{
						nombre: 'Quilaco',
						codigo: '08308'
					},
					{
						nombre: 'Quilleco',
						codigo: '08309'
					},
					{
						nombre: 'San Rosendo',
						codigo: '08310'
					},
					{
						nombre: 'Santa Bárbara',
						codigo: '08311'
					},
					{
						nombre: 'Tucapel',
						codigo: '08312'
					},
					{
						nombre: 'Yumbel',
						codigo: '08313'
					},
					{
						nombre: 'Alto Biobío',
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
		romano: 'IX',
		numero: '9',
		iso_3166_2: 'CL-AR',
		provincias: [
			{
				nombre: 'Cautín',
				comunas: [
					{
						nombre: 'Temuco',
						codigo: '09101'
					},
					{
						nombre: 'Carahue',
						codigo: '09102'
					},
					{
						nombre: 'Cunco',
						codigo: '09103'
					},
					{
						nombre: 'Curarrehue',
						codigo: '09104'
					},
					{
						nombre: 'Freire',
						codigo: '09105'
					},
					{
						nombre: 'Galvarino',
						codigo: '09106'
					},
					{
						nombre: 'Gorbea',
						codigo: '09107'
					},
					{
						nombre: 'Lautaro',
						codigo: '09108'
					},
					{
						nombre: 'Loncoche',
						codigo: '09109'
					},
					{
						nombre: 'Melipeuco',
						codigo: '09110'
					},
					{
						nombre: 'Nueva Imperial',
						codigo: '09111'
					},
					{
						nombre: 'Padre las Casas',
						codigo: '09112'
					},
					{
						nombre: 'Perquenco',
						codigo: '09113'
					},
					{
						nombre: 'Pitrufquén',
						codigo: '09114'
					},
					{
						nombre: 'Pucón',
						codigo: '09115'
					},
					{
						nombre: 'Saavedra',
						codigo: '09116'
					},
					{
						nombre: 'Teodoro Schmidt',
						codigo: '09117'
					},
					{
						nombre: 'Toltén',
						codigo: '09118'
					},
					{
						nombre: 'Vilcún',
						codigo: '09119'
					},
					{
						nombre: 'Villarrica',
						codigo: '09120'
					},
					{
						nombre: 'Cholchol',
						codigo: '09121'
					}
				]
			},
			{
				nombre: 'Malleco',
				comunas: [
					{
						nombre: 'Angol',
						codigo: '09201'
					},
					{
						nombre: 'Collipulli',
						codigo: '09202'
					},
					{
						nombre: 'Curacautín',
						codigo: '09203'
					},
					{
						nombre: 'Ercilla',
						codigo: '09204'
					},
					{
						nombre: 'Lonquimay',
						codigo: '09205'
					},
					{
						nombre: 'Los Sauces',
						codigo: '09206'
					},
					{
						nombre: 'Lumaco',
						codigo: '09207'
					},
					{
						nombre: 'Purén',
						codigo: '09208'
					},
					{
						nombre: 'Renaico',
						codigo: '09209'
					},
					{
						nombre: 'Traiguén',
						codigo: '09210'
					},
					{
						nombre: 'Victoria',
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
		romano: 'XIV',
		numero: '14',
		iso_3166_2: 'CL-LR',
		provincias: [
			{
				nombre: 'Valdivia',
				comunas: [
					{
						nombre: 'Valdivia',
						codigo: '14101'
					},
					{
						nombre: 'Corral',
						codigo: '14102'
					},
					{
						nombre: 'Lanco',
						codigo: '14103'
					},
					{
						nombre: 'Los Lagos',
						codigo: '14104'
					},
					{
						nombre: 'Máfil',
						codigo: '14105'
					},
					{
						nombre: 'Mariquina',
						codigo: '14106'
					},
					{
						nombre: 'Paillaco',
						codigo: '14107'
					},
					{
						nombre: 'Panguipulli',
						codigo: '14108'
					}
				]
			},
			{
				nombre: 'Ranco',
				comunas: [
					{
						nombre: 'La Unión',
						codigo: '14201'
					},
					{
						nombre: 'Futrono',
						codigo: '14202'
					},
					{
						nombre: 'Lago Ranco',
						codigo: '14203'
					},
					{
						nombre: 'Río Bueno',
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
		romano: 'X',
		numero: '10',
		iso_3166_2: 'CL-LL',
		provincias: [
			{
				nombre: 'Llanquihue',
				comunas: [
					{
						nombre: 'Puerto Montt',
						codigo: '10101'
					},
					{
						nombre: 'Calbuco',
						codigo: '10102'
					},
					{
						nombre: 'Cochamó',
						codigo: '10103'
					},
					{
						nombre: 'Fresia',
						codigo: '10104'
					},
					{
						nombre: 'Frutillar',
						codigo: '10105'
					},
					{
						nombre: 'Los Muermos',
						codigo: '10106'
					},
					{
						nombre: 'Llanquihue',
						codigo: '10107'
					},
					{
						nombre: 'Maullín',
						codigo: '10108'
					},
					{
						nombre: 'Puerto Varas',
						codigo: '10109'
					}
				]
			},
			{
				nombre: 'Chiloé',
				comunas: [
					{
						nombre: 'Castro',
						codigo: '10201'
					},
					{
						nombre: 'Ancud',
						codigo: '10202'
					},
					{
						nombre: 'Chonchi',
						codigo: '10203'
					},
					{
						nombre: 'Curaco de Vélez',
						codigo: '10204'
					},
					{
						nombre: 'Dalcahue',
						codigo: '10205'
					},
					{
						nombre: 'Puqueldón',
						codigo: '10206'
					},
					{
						nombre: 'Queilén',
						codigo: '10207'
					},
					{
						nombre: 'Quellón',
						codigo: '10208'
					},
					{
						nombre: 'Quemchi',
						codigo: '10209'
					},
					{
						nombre: 'Quinchao',
						codigo: '10210'
					}
				]
			},
			{
				nombre: 'Osorno',
				comunas: [
					{
						nombre: 'Osorno',
						codigo: '10301'
					},
					{
						nombre: 'Puerto Octay',
						codigo: '10302'
					},
					{
						nombre: 'Purranque',
						codigo: '10303'
					},
					{
						nombre: 'Puyehue',
						codigo: '10304'
					},
					{
						nombre: 'Río Negro',
						codigo: '10305'
					},
					{
						nombre: 'San Juan de la Costa',
						codigo: '10306'
					},
					{
						nombre: 'San Pablo',
						codigo: '10307'
					}
				]
			},
			{
				nombre: 'Palena',
				comunas: [
					{
						nombre: 'Chaitén',
						codigo: '10401'
					},
					{
						nombre: 'Futaleufú',
						codigo: '10402'
					},
					{
						nombre: 'Hualaihué',
						codigo: '10403'
					},
					{
						nombre: 'Palena',
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
		romano: 'XI',
		numero: '11',
		iso_3166_2: 'CL-AI',
		provincias: [
			{
				nombre: 'Coyhaique',
				comunas: [
					{
						nombre: 'Coyhaique',
						codigo: '11101'
					},
					{
						nombre: 'Lago Verde',
						codigo: '11102'
					}
				]
			},
			{
				nombre: 'Aisén',
				comunas: [
					{
						nombre: 'Aisén',
						codigo: '11201'
					},
					{
						nombre: 'Cisnes',
						codigo: '11202'
					},
					{
						nombre: 'Guaitecas',
						codigo: '11203'
					}
				]
			},
			{
				nombre: 'Capitán Pratt',
				comunas: [
					{
						nombre: 'Cochrane',
						codigo: '11301'
					},
					{
						nombre: 'O’Higgins',
						codigo: '11302'
					},
					{
						nombre: 'Tortel',
						codigo: '11303'
					}
				]
			},
			{
				nombre: 'General Carrera',
				comunas: [
					{
						nombre: 'Chile Chico',
						codigo: '11401'
					},
					{
						nombre: 'Río Ibáñez',
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
		romano: 'XII',
		numero: '12',
		iso_3166_2: 'CL-MA',
		provincias: [
			{
				nombre: 'Magallanes',
				comunas: [
					{
						nombre: 'Punta Arenas',
						codigo: '12101'
					},
					{
						nombre: 'Laguna Blanca',
						codigo: '12102'
					},
					{
						nombre: 'Río Verde',
						codigo: '12103'
					},
					{
						nombre: 'San Gregorio',
						codigo: '12104'
					}
				]
			},
			{
				nombre: 'Antártica Chilena',
				comunas: [
					{
						nombre: 'Cabo de Hornos (Ex. Navarino)',
						codigo: '12201'
					},
					{
						nombre: 'Antártica',
						codigo: '12202'
					}
				]
			},
			{
				nombre: 'Tierra del Fuego',
				comunas: [
					{
						nombre: 'Porvenir',
						codigo: '12301'
					},
					{
						nombre: 'Primavera',
						codigo: '12302'
					},
					{
						nombre: 'Timaukel',
						codigo: '12303'
					}
				]
			},
			{
				nombre: 'Última Esperanza',
				comunas: [
					{
						nombre: 'Natales',
						codigo: '12401'
					},
					{
						nombre: 'Torres del Paine',
						codigo: '12402'
					}
				]
			}
		]
	}
]

const regionesProvinciasComunas = _.map(chile, regionData => {
	return {
		value: regionData.nombre,
		label: regionData.nombre,
		children: _.map(regionData.provincias, provincia => {
			return {
				value: provincia.nombre,
				label: provincia.nombre,
				children: _.map(provincia.comunas, comuna => {
					return {
						value: comuna.nombre,
						label: comuna.nombre
					}
				})
			}
		})
	}
})

const regionesComunas = _.map(chile, regionData => {
	const region = {
		value: regionData.nombre,
		label: regionData.nombre
	}
	const comunasEnprovincias = _.map(regionData.provincias, provincia => _.map(provincia.comunas, comuna => {
		return {
			value: comuna.nombre,
			label: comuna.nombre
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
