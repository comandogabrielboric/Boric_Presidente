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
						regex: 'Arica',
						distrito: '1',
						codigo: '15101'
					},
					{
						nombre: 'Camarones',
						regex: 'Camarones',
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
						regex: 'Putre',
						distrito: '1',
						codigo: '15201'
					},
					{
						nombre: 'General Lagos',
						regex: 'General_Lagos',
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
						regex: 'Iquique',
						distrito: '2',
						codigo: '01101'
					},
					{
						nombre: 'Alto Hospicio',
						regex: 'Alto_Hospicio',
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
						regex: 'Pozo_Almonte',
						distrito: '2',
						codigo: '01201'
					},
					{
						nombre: 'Camiña',
						regex: 'Camina',
						distrito: '2',
						codigo: '01402'
					},
					{
						nombre: 'Colchane',
						regex: 'Colchane',
						distrito: '2',
						codigo: '01403'
					},
					{
						nombre: 'Huara',
						regex: 'Huara',
						distrito: '2',
						codigo: '01404'
					},
					{
						nombre: 'Pica',
						regex: 'Pica',
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
						regex: 'Antofagasta',
						distrito: '3',
						codigo: '02101'
					},
					{
						nombre: 'Mejillones',
						regex: 'Mejillones',
						distrito: '3',
						codigo: '02102'
					},
					{
						nombre: 'Sierra Gorda',
						regex: 'Sierra_Gorda',
						distrito: '3',
						codigo: '02103'
					},
					{
						nombre: 'Taltal',
						regex: 'Taltal',
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
						regex: 'Calama',
						distrito: '3',
						codigo: '02201'
					},
					{
						nombre: 'Ollagüe',
						regex: 'Ollagüe',
						distrito: '3',
						codigo: '02202'
					},
					{
						nombre: 'San Pedro de Atacama',
						regex: 'San_Pedro_de_Atacama',
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
						regex: 'Tocopilla',
						distrito: '3',
						codigo: '02301'
					},
					{
						nombre: 'María Elena',
						regex: 'Maria_Elena',
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
						regex: 'Copiapo',
						distrito: '4',
						codigo: '03101'
					},
					{
						nombre: 'Caldera',
						regex: 'Caldera',
						distrito: '4',
						codigo: '03102'
					},
					{
						nombre: 'Tierra Amarilla',
						regex: 'Tierra_Amarilla',
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
						regex: 'Chanaral',
						distrito: '4',
						codigo: '03201'
					},
					{
						nombre: 'Diego de Almagro',
						regex: 'Diego_de_Almagro',
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
						regex: 'Vallenar',
						distrito: '4',
						codigo: '03301'
					},
					{
						nombre: 'Alto del Carmen',
						regex: 'Alto_del_Carmen',
						distrito: '4',
						codigo: '03302'
					},
					{
						nombre: 'Freirina',
						regex: 'Freirina',
						distrito: '4',
						codigo: '03303'
					},
					{
						nombre: 'Huasco',
						regex: 'Huasco',
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
						regex: 'La_Serena',
						distrito: '5',
						codigo: '04101'
					},
					{
						nombre: 'Coquimbo',
						regex: 'Coquimbo',
						distrito: '5',
						codigo: '04102'
					},
					{
						nombre: 'Andacollo',
						regex: 'Andacollo',
						distrito: '5',
						codigo: '04103'
					},
					{
						nombre: 'La Higuera',
						regex: 'La_Higuera',
						codigo: '04104'
					},
					{
						nombre: 'Paiguano',
						regex: 'Paiguano',
						distrito: '5',
						codigo: '04105'
					},
					{
						nombre: 'Vicuña',
						regex: 'Vicuna',
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
						regex: 'Illapel',
						distrito: '5',
						codigo: '04201'
					},
					{
						nombre: 'Canela',
						regex: 'Canela',
						distrito: '5',
						codigo: '04202'
					},
					{
						nombre: 'Los Vilos',
						regex: 'Los_Vilos',
						distrito: '5',
						codigo: '04203'
					},
					{
						nombre: 'Salamanca',
						regex: 'Salamanca',
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
						regex: 'Ovalle',
						distrito: '5',
						codigo: '04301'
					},
					{
						nombre: 'Combarbalá',
						regex: 'Combarbalá',
						distrito: '5',
						codigo: '04302'
					},
					{
						nombre: 'Monte Patria',
						regex: 'Monte_Patria',
						distrito: '5',
						codigo: '04303'
					},
					{
						nombre: 'Punitaqui',
						regex: 'Punitaqui',
						distrito: '5',
						codigo: '04304'
					},
					{
						nombre: 'Río Hurtado',
						regex: 'Rio_Hurtado',
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
						regex: 'Valparaiso',
						distrito: '7',
						codigo: '05101'
					},
					{
						nombre: 'Casablanca',
						regex: 'Casablanca',
						distrito: '7',
						codigo: '05102'
					},
					{
						nombre: 'Concón',
						regex: 'Concon',
						distrito: '7',
						codigo: '05103'
					},
					{
						nombre: 'Juan Fernández',
						regex: 'Juan_Fernandez',
						distrito: '7',
						codigo: '05104'
					},
					{
						nombre: 'Puchuncaví',
						regex: 'Puchuncaví',
						distrito: '6',
						codigo: '05105'
					},
					{
						nombre: 'Quintero',
						regex: 'Quintero',
						distrito: '6',
						codigo: '05107'
					},
					{
						nombre: 'Viña del Mar',
						regex: 'Vina_del_Mar',
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
						regex: 'Isla_de_Pascua',
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
						regex: 'Los_Andes',
						distrito: '6',
						codigo: '05301'
					},
					{
						nombre: 'Calle Larga',
						regex: 'Calle_Larga',
						distrito: '6',
						codigo: '05302'
					},
					{
						nombre: 'Rinconada',
						regex: 'Rinconada',
						distrito: '6',
						codigo: '05303'
					},
					{
						nombre: 'San Esteban',
						regex: 'San_Esteban',
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
						regex: 'La_Ligua',
						distrito: '6',
						codigo: '05401'
					},
					{
						nombre: 'Cabildo',
						regex: 'Cabildo',
						distrito: '6',
						codigo: '05402'
					},
					{
						nombre: 'Papudo',
						regex: 'Papudo',
						distrito: '6',
						codigo: '05403'
					},
					{
						nombre: 'Petorca',
						regex: 'Petorca',
						distrito: '6',
						codigo: '05404'
					},
					{
						nombre: 'Zapallar',
						regex: 'Zapallar',
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
						regex: 'Quillota',
						distrito: '6',
						codigo: '05501'
					},
					{
						nombre: 'La Calera',
						regex: 'La_Calera',
						distrito: '6',
						codigo: '05502'
					},
					{
						nombre: 'Hijuelas',
						regex: 'Hijuelas',
						distrito: '6',
						codigo: '05503'
					},
					{
						nombre: 'La Cruz',
						regex: 'La_Cruz',
						distrito: '6',
						codigo: '05504'
					},
					{
						nombre: 'Nogales',
						regex: 'Nogales',
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
						regex: 'San_Antonio',
						distrito: '7',
						codigo: '05601'
					},
					{
						nombre: 'Algarrobo',
						regex: 'Algarrobo',
						distrito: '7',
						codigo: '05602'
					},
					{
						nombre: 'Cartagena',
						regex: 'Cartagena',
						distrito: '7',
						codigo: '05603'
					},
					{
						nombre: 'El Quisco',
						regex: 'El_Quisco',
						distrito: '7',
						codigo: '05604'
					},
					{
						nombre: 'El Tabo',
						regex: 'El_Tabo',
						distrito: '7',
						codigo: '05605'
					},
					{
						nombre: 'Santo Domingo',
						regex: 'Santo_Domingo',
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
						regex: 'San_Felipe',
						distrito: '6',
						codigo: '05701'
					},
					{
						nombre: 'Catemu',
						regex: 'Catemu',
						distrito: '6',
						codigo: '05702'
					},
					{
						nombre: 'Llaillay',
						regex: 'Llaillay',
						distrito: '6',
						codigo: '05703'
					},
					{
						nombre: 'Panquehue',
						regex: 'Panquehue',
						distrito: '6',
						codigo: '05704'
					},
					{
						nombre: 'Putaendo',
						regex: 'Putaendo',
						distrito: '6',
						codigo: '05705'
					},
					{
						nombre: 'Santa María',
						regex: 'Santa_María',
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
						regex: 'Quilpue',
						distrito: '6',
						codigo: '05801'
					},
					{
						nombre: 'Limache',
						regex: 'Limache',
						distrito: '6',
						codigo: '05802'
					},
					{
						nombre: 'Olmué',
						regex: 'Olmue',
						distrito: '6',
						codigo: '05803'
					},
					{
						nombre: 'Villa Alemana',
						regex: 'Villa_Alemana',
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
						regex: 'Santiago',
						distrito: '10',
						codigo: '13101'
					},
					{
						nombre: 'Cerrillos',
						regex: 'Cerrillos',
						distrito: '8',
						codigo: '13102'
					},
					{
						nombre: 'Cerro Navia',
						regex: 'Cerro_Navia',
						distrito: '9',
						codigo: '13103'
					},
					{
						nombre: 'Conchalí',
						regex: 'Conchalí',
						distrito: '9',
						codigo: '13104'
					},
					{
						nombre: 'El Bosque',
						regex: 'El_Bosque',
						distrito: '13',
						codigo: '13105'
					},
					{
						nombre: 'Estación Central',
						regex: 'Estacion_Central',
						distrito: '8',
						codigo: '13106'
					},
					{
						nombre: 'Huechuraba',
						regex: 'Huechuraba',
						distrito: '9',
						codigo: '13107'
					},
					{
						nombre: 'Independencia',
						regex: 'Independencia',
						distrito: '9',
						codigo: '13108'
					},
					{
						nombre: 'La Cisterna',
						regex: 'La_Cisterna',
						distrito: '9',
						codigo: '13109'
					},
					{
						nombre: 'La Florida',
						regex: 'La_Florida',
						distrito: '12',
						codigo: '13110'
					},
					{
						nombre: 'La Granja',
						regex: 'La_Granja',
						distrito: '10',
						codigo: '13111'
					},
					{
						nombre: 'La Pintana',
						regex: 'La_Pintana',
						distrito: '12',
						codigo: '13112'
					},
					{
						nombre: 'La Reina',
						regex: 'La_Reina',
						distrito: '11',
						codigo: '13113'
					},
					{
						nombre: 'Las Condes',
						regex: 'La_Condes',
						distrito: '11',
						codigo: '13114'
					},
					{
						nombre: 'Lo Barnechea',
						regex: 'Lo_Barnechea',
						distrito: '11',
						codigo: '13115'
					},
					{
						nombre: 'Lo Espejo',
						regex: 'Lo_Espejo',
						distrito: '13',
						codigo: '13116'
					},
					{
						nombre: 'Lo Prado',
						regex: 'Lo_Prado',
						distrito: '9',
						codigo: '13117'
					},
					{
						nombre: 'Macul',
						regex: 'Macul',
						distrito: '10',
						codigo: '13118'
					},
					{
						nombre: 'Maipú',
						regex: 'Maipu',
						distrito: '8',
						codigo: '13119'
					},
					{
						nombre: 'Ñuñoa',
						regex: 'Nunoa',
						distrito: '10',
						codigo: '13120'
					},
					{
						nombre: 'Pedro Aguirre Cerda',
						regex: 'Pedro_Aguirre_Cerda',
						distrito: '13',
						codigo: '13121'
					},
					{
						nombre: 'Peñalolén',
						regex: 'Penalolen',
						distrito: '11',
						codigo: '13122'
					},
					{
						nombre: 'Providencia',
						regex: 'Providencia',
						distrito: '10',
						codigo: '13123'
					},
					{
						nombre: 'Pudahuel',
						regex: 'Pudahuel',
						distrito: '8',
						codigo: '13124'
					},
					{
						nombre: 'Quilicura',
						regex: 'Quilicura',
						distrito: '8',
						codigo: '13125'
					},
					{
						nombre: 'Quinta Normal',
						regex: 'Quinta_Normal',
						distrito: '9',
						codigo: '13126'
					},
					{
						nombre: 'Recoleta',
						regex: 'Recoleta',
						distrito: '9',
						codigo: '13127'
					},
					{
						nombre: 'Renca',
						regex: 'Renca',
						distrito: '9',
						codigo: '13128'
					},
					{
						nombre: 'San Joaquín',
						regex: 'San_Joaquin',
						distrito: '10',
						codigo: '13129'
					},
					{
						nombre: 'San Miguel',
						regex: 'San_Miguel',
						distrito: '13',
						codigo: '13130'
					},
					{
						nombre: 'San Ramón',
						regex: 'San_Ramon',
						distrito: '13',
						codigo: '13131'
					},
					{
						nombre: 'Vitacura',
						regex: 'Vitacura',
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
						regex: 'Puente_Alto',
						distrito: '12',
						codigo: '13201'
					},
					{
						nombre: 'Pirque',
						regex: 'Pirque',
						distrito: '12',
						codigo: '13202'
					},
					{
						nombre: 'San José de Maipo',
						regex: 'San_Jose_de_Maipo',
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
						regex: 'Colina',
						distrito: '8',
						codigo: '13301'
					},
					{
						nombre: 'Lampa',
						regex: 'Lampa',
						distrito: '8',
						codigo: '13302'
					},
					{
						nombre: 'Tiltil',
						regex: 'Tiltil',
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
						regex: 'San_Bernardo',
						distrito: '14',
						codigo: '13401'
					},
					{
						nombre: 'Buin',
						regex: 'Buin',
						distrito: '14',
						codigo: '13402'
					},
					{
						nombre: 'Calera de Tango',
						regex: 'Calera_de_Tango',
						distrito: '14',
						codigo: '13403'
					},
					{
						nombre: 'Paine',
						regex: 'Paine',
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
						regex: 'Melipilla',
						distrito: '14',
						codigo: '13501'
					},
					{
						nombre: 'Alhué',
						regex: 'Alhue',
						distrito: '14',
						codigo: '13502'
					},
					{
						nombre: 'Curacaví',
						regex: 'Curacavi',
						distrito: '14',
						codigo: '13503'
					},
					{
						nombre: 'María Pinto',
						regex: 'Maria_Pinto',
						distrito: '14',
						codigo: '13504'
					},
					{
						nombre: 'San Pedro',
						regex: 'San_Pedro',
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
						regex: 'Talagante',
						distrito: '14',
						codigo: '13601'
					},
					{
						nombre: 'El Monte',
						regex: 'El_Monte',
						distrito: '14',
						codigo: '13602'
					},
					{
						nombre: 'Isla de Maipo',
						regex: 'Isla_de_Maipo',
						distrito: '14',
						codigo: '13603'
					},
					{
						nombre: 'Padre Hurtado',
						regex: 'Padre_Hurtado',
						distrito: '14',
						codigo: '13604'
					},
					{
						nombre: 'Peñaflor',
						regex: 'Peñaflor',
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
						regex: 'Rancagua',
						distrito: '15',
						codigo: '06101'
					},
					{
						nombre: 'Codegua',
						regex: 'Codegua',
						distrito: '15',
						codigo: '06102'
					},
					{
						nombre: 'Coinco',
						regex: 'Coinco',
						distrito: '15',
						codigo: '06103'
					},
					{
						nombre: 'Coltauco',
						regex: 'Coltauco',
						distrito: '15',
						codigo: '06104'
					},
					{
						nombre: 'Doñihue',
						regex: 'Donihue',
						distrito: '15',
						codigo: '06105'
					},
					{
						nombre: 'Graneros',
						regex: 'Graneros',
						distrito: '15',
						codigo: '06106'
					},
					{
						nombre: 'Las Cabras',
						regex: 'Las_Cabras',
						distrito: '16',
						codigo: '06107'
					},
					{
						nombre: 'Machalí',
						regex: 'Machali',
						distrito: '15',
						codigo: '06108'
					},
					{
						nombre: 'Malloa',
						regex: 'Malloa',
						distrito: '15',
						codigo: '06109'
					},
					{
						nombre: 'Mostazal',
						regex: 'Mostazal',
						distrito: '15',
						codigo: '06110'
					},
					{
						nombre: 'Olivar',
						regex: 'Olivar',
						distrito: '15',
						codigo: '06111'
					},
					{
						nombre: 'Peumo',
						regex: 'Peumo',
						distrito: '16',
						codigo: '06112'
					},
					{
						nombre: 'Pichidegua',
						regex: 'Pichidegua',
						distrito: '16',
						codigo: '06113'
					},
					{
						nombre: 'Quinta de Tilcoco',
						regex: 'Quinta_de_Tilcoco',
						distrito: '15',
						codigo: '06114'
					},
					{
						nombre: 'Rengo',
						regex: 'Rengo',
						distrito: '15',
						codigo: '06115'
					},
					{
						nombre: 'Requínoa',
						regex: 'Requinoa',
						distrito: '15',
						codigo: '06116'
					},
					{
						nombre: 'San Vicente',
						regex: 'San_Vicente',
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
						regex: 'Pichilemu',
						distrito: '16',
						codigo: '06201'
					},
					{
						nombre: 'La Estrella',
						regex: 'La_Estrella',
						distrito: '16',
						codigo: '06202'
					},
					{
						nombre: 'Litueche',
						regex: 'Litueche',
						distrito: '16',
						codigo: '06203'
					},
					{
						nombre: 'Marichihue',
						regex: 'Marichihue',
						distrito: '16',
						codigo: '06204'
					},
					{
						nombre: 'Navidad',
						regex: 'Navidad',
						distrito: '16',
						codigo: '06205'
					},
					{
						nombre: 'Paredones',
						regex: 'Paredones',
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
						regex: 'San_Fernando',
						distrito: '16',
						codigo: '06301'
					},
					{
						nombre: 'Chépica',
						regex: 'Chepica',
						distrito: '16',
						codigo: '06302'
					},
					{
						nombre: 'Chimbarongo',
						regex: 'Chimbarongo',
						distrito: '16',
						codigo: '06303'
					},
					{
						nombre: 'Lolol',
						regex: 'Lolol',
						distrito: '16',
						codigo: '06304'
					},
					{
						nombre: 'Nancagua',
						regex: 'Nancagua',
						distrito: '16',
						codigo: '06305'
					},
					{
						nombre: 'Palmilla',
						regex: 'Palmilla',
						distrito: '16',
						codigo: '06306'
					},
					{
						nombre: 'Peralillo',
						regex: 'Peralillo',
						distrito: '16',
						codigo: '06307'
					},
					{
						nombre: 'Placilla',
						regex: 'Placilla',
						distrito: '16',
						codigo: '06308'
					},
					{
						nombre: 'Pumanque',
						regex: 'Pumanque',
						distrito: '16',
						codigo: '06309'
					},
					{
						nombre: 'Santa Cruz',
						regex: 'Santa_Cruz',
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
						regex: 'Talca',
						distrito: '17',
						codigo: '07101'
					},
					{
						nombre: 'Constitución',
						regex: 'Constitucion',
						distrito: '17',
						codigo: '07102'
					},
					{
						nombre: 'Curepto',
						regex: 'Curepto',
						distrito: '17',
						codigo: '07103'
					},
					{
						nombre: 'Empedrado',
						regex: 'Empedrado',
						distrito: '17',
						codigo: '07104'
					},
					{
						nombre: 'Maule',
						regex: 'Maule',
						distrito: '17',
						codigo: '07105'
					},
					{
						nombre: 'Pelarco',
						regex: 'Pelarco',
						distrito: '17',
						codigo: '07106'
					},
					{
						nombre: 'Pencahue',
						regex: 'Pencahue',
						distrito: '17',
						codigo: '07107'
					},
					{
						nombre: 'Río Claro',
						regex: 'Rio_Claro',
						distrito: '17',
						codigo: '07108'
					},
					{
						nombre: 'San Clemente',
						regex: 'San_Clemente',
						distrito: '17',
						codigo: '07109'
					},
					{
						nombre: 'San Rafael',
						regex: 'San_Rafael',
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
						regex: 'Cauquenes',
						distrito: '18',
						codigo: '07201'
					},
					{
						nombre: 'Chanco',
						regex: 'Chanco',
						distrito: '18',
						codigo: '07202'
					},
					{
						nombre: 'Pelluhue',
						regex: 'Pelluhue',
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
						regex: 'Curico',
						distrito: '17',
						codigo: '07301'
					},
					{
						nombre: 'Hualañé',
						regex: 'Hualane',
						distrito: '17',
						codigo: '07302'
					},
					{
						nombre: 'Licantén',
						regex: 'Licanten',
						distrito: '17',
						codigo: '07303'
					},
					{
						nombre: 'Molina',
						regex: 'Molina',
						distrito: '17',
						codigo: '07304'
					},
					{
						nombre: 'Rauco',
						regex: 'Rauco',
						distrito: '17',
						codigo: '07305'
					},
					{
						nombre: 'Romeral',
						regex: 'Romeral',
						distrito: '17',
						codigo: '07306'
					},
					{
						nombre: 'Sagrada Familia',
						regex: 'Sagrada_Familia',
						distrito: '17',
						codigo: '07307'
					},
					{
						nombre: 'Teno',
						regex: 'Teno',
						distrito: '17',
						codigo: '07308'
					},
					{
						nombre: 'Vichuquén',
						regex: 'Vichuquen',
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
						regex: 'Linares',
						distrito: '18',
						codigo: '07401'
					},
					{
						nombre: 'Colbún',
						regex: 'Colbun',
						distrito: '18',
						codigo: '07402'
					},
					{
						nombre: 'Longaví',
						regex: 'Longavi',
						distrito: '18',
						codigo: '07403'
					},
					{
						nombre: 'Parral',
						regex: 'Parral',
						distrito: '18',
						codigo: '07404'
					},
					{
						nombre: 'Retiro',
						regex: 'Retiro',
						distrito: '18',
						codigo: '07405'
					},
					{
						nombre: 'San Javier',
						regex: 'San_Javier',
						distrito: '18',
						codigo: '07406'
					},
					{
						nombre: 'Villa Alegre',
						regex: 'Villa_Alegre',
						distrito: '18',
						codigo: '07407'
					},
					{
						nombre: 'Yerbas Buenas',
						regex: 'Yerbas_Buenas',
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
						regex: 'Cobquecura',
						distrito: '19',
						codigo: '08403'
					},
					{
						nombre: 'Coelemu',
						regex: 'Coelemu',
						distrito: '19',
						codigo: '08404'
					},
					{
						nombre: 'Ninhue',
						regex: 'Ninhue',
						distrito: '19',
						codigo: '08408'
					},
					{
						nombre: 'Portezuelo',
						regex: 'Portezuelo',
						distrito: '19',
						codigo: '08412'
					},
					{
						nombre: 'Quirihue',
						regex: 'Quirihue',
						distrito: '19',
						codigo: '08414'
					},
					{
						nombre: 'Ránquil',
						regex: 'Quirihue',
						distrito: '19',
						codigo: '08415'
					},
					{
						nombre: 'Treguaco',
						regex: 'Treguaco',
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
						regex: 'Bulnes',
						distrito: '19',
						codigo: '08402'
					},
					{
						nombre: 'Chillán Viejo',
						regex: 'Chillan_Viejo',
						distrito: '19',
						codigo: '08406'
					},
					{
						nombre: 'Chillán',
						regex: 'Chillan',
						distrito: '19',
						codigo: '08401'
					},
					{
						nombre: 'El Carmen',
						regex: 'El_Carmen',
						distrito: '19',
						codigo: '08407'
					},
					{
						nombre: 'Pemuco',
						regex: 'Pemuco',
						distrito: '19',
						codigo: '08410'
					},
					{
						nombre: 'Pinto',
						regex: 'Pinto',
						distrito: '19',
						codigo: '08411'
					},
					{
						nombre: 'Quillón',
						regex: 'Quillon',
						distrito: '19',
						codigo: '08413'
					},
					{
						nombre: 'San Ignacio',
						regex: 'San_Ignacio',
						distrito: '19',
						codigo: '08418'
					},
					{
						nombre: 'Yungay',
						regex: 'Yungay',
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
						regex: 'Coihueco',
						distrito: '19',
						codigo: '08405'
					},
					{
						nombre: 'Ñiquén',
						regex: 'Ñiquen',
						distrito: '19',
						codigo: '08409'
					},
					{
						nombre: 'San Carlos',
						regex: 'San_Carlos',
						distrito: '19',
						codigo: '08416'
					},
					{
						nombre: 'San Fabián',
						regex: 'San_Fabian',
						distrito: '19',
						codigo: '08417'
					},
					{
						nombre: 'San Nicolás',
						regex: 'San_Nicolas',
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
						regex: 'Concepcion',
						distrito: '20',
						codigo: '08101'
					},
					{
						nombre: 'Coronel',
						regex: 'Coronel',
						distrito: '20',
						codigo: '08102'
					},
					{
						nombre: 'Chiguayante',
						regex: 'Chiguayante',
						distrito: '20',
						codigo: '08103'
					},
					{
						nombre: 'Florida',
						regex: 'Florida',
						distrito: '20',
						codigo: '08104'
					},
					{
						nombre: 'Hualqui',
						regex: 'Hualqui',
						distrito: '20',
						codigo: '08105'
					},
					{
						nombre: 'Lota',
						regex: 'Lota',
						distrito: '21',
						codigo: '08106'
					},
					{
						nombre: 'Penco',
						regex: 'Penco',
						distrito: '20',
						codigo: '08107'
					},
					{
						nombre: 'San Pedro de la Paz',
						regex: 'San_Pedro_de_la_Paz',
						distrito: '20',
						codigo: '08108'
					},
					{
						nombre: 'Santa Juana',
						regex: 'Santa_Juana',
						distrito: '20',
						codigo: '08109'
					},
					{
						nombre: 'Talcahuano',
						regex: 'Talcahuano',
						distrito: '20',
						codigo: '08110'
					},
					{
						nombre: 'Tomé',
						regex: 'Tome',
						distrito: '20',
						codigo: '08111'
					},
					{
						nombre: 'Hualpén',
						regex: 'Hualpen',
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
						regex: 'Lebu',
						distrito: '21',
						codigo: '08201'
					},
					{
						nombre: 'Arauco',
						regex: 'Arauco',
						distrito: '21',
						codigo: '08202'
					},
					{
						nombre: 'Cañete',
						regex: 'Canete',
						distrito: '21',
						codigo: '08203'
					},
					{
						nombre: 'Contulmo',
						regex: 'Contulmo',
						distrito: '21',
						codigo: '08204'
					},
					{
						nombre: 'Curanilahue',
						regex: 'Curanilahue',
						distrito: '21',
						codigo: '08205'
					},
					{
						nombre: 'Los Álamos',
						regex: 'Los_alamos',
						distrito: '21',
						codigo: '08206'
					},
					{
						nombre: 'Tirúa',
						regex: 'Tirua',
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
						regex: 'Los_Angeles',
						distrito: '21',
						codigo: '08301'
					},
					{
						nombre: 'Antuco',
						regex: 'Antuco',
						distrito: '21',
						codigo: '08302'
					},
					{
						nombre: 'Cabrero',
						regex: 'Cabrero',
						distrito: '21',
						codigo: '08303'
					},
					{
						nombre: 'Laja',
						regex: 'Laja',
						distrito: '21',
						codigo: '08304'
					},
					{
						nombre: 'Mulchén',
						regex: 'Mulchen',
						distrito: '21',
						codigo: '08305'
					},
					{
						nombre: 'Nacimiento',
						regex: 'Nacimiento',
						distrito: '21',
						codigo: '08306'
					},
					{
						nombre: 'Negrete',
						regex: 'Negrete',
						distrito: '21',
						codigo: '08307'
					},
					{
						nombre: 'Quilaco',
						regex: 'Quilaco',
						distrito: '21',
						codigo: '08308'
					},
					{
						nombre: 'Quilleco',
						regex: 'Quilleco',
						distrito: '21',
						codigo: '08309'
					},
					{
						nombre: 'San Rosendo',
						regex: 'San_Rosendo',
						distrito: '21',
						codigo: '08310'
					},
					{
						nombre: 'Santa Bárbara',
						regex: 'Santa_Barbara',
						distrito: '21',
						codigo: '08311'
					},
					{
						nombre: 'Tucapel',
						regex: 'Tucapel',
						distrito: '21',
						codigo: '08312'
					},
					{
						nombre: 'Yumbel',
						regex: 'Yumbel',
						distrito: '21',
						codigo: '08313'
					},
					{
						nombre: 'Alto Biobío',
						regex: 'Alto_Biobío',
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
						regex: 'Temuco',
						distrito: '23',
						codigo: '09101'
					},
					{
						nombre: 'Carahue',
						regex: 'Carahue',
						distrito: '23',
						codigo: '09102'
					},
					{
						nombre: 'Cunco',
						regex: 'Cunco',
						distrito: '23',
						codigo: '09103'
					},
					{
						nombre: 'Curarrehue',
						regex: 'Curarrehue',
						distrito: '23',
						codigo: '09104'
					},
					{
						nombre: 'Freire',
						regex: 'Freire',
						distrito: '23',
						codigo: '09105'
					},
					{
						nombre: 'Galvarino',
						regex: 'Galvarino',
						distrito: '22',
						codigo: '09106'
					},
					{
						nombre: 'Gorbea',
						regex: 'Gorbea',
						distrito: '23',
						codigo: '09107'
					},
					{
						nombre: 'Lautaro',
						regex: 'Lautaro',
						distrito: '22',
						codigo: '09108'
					},
					{
						nombre: 'Loncoche',
						regex: 'Loncoche',
						distrito: '23',
						codigo: '09109'
					},
					{
						nombre: 'Melipeuco',
						regex: 'Melipeuco',
						distrito: '22',
						codigo: '09110'
					},
					{
						nombre: 'Nueva Imperial',
						regex: 'Nueva_Imperial',
						distrito: '23',
						codigo: '09111'
					},
					{
						nombre: 'Padre las Casas',
						regex: 'Padre_las_Casas',
						distrito: '23',
						codigo: '09112'
					},
					{
						nombre: 'Perquenco',
						regex: 'Perquenco',
						distrito: '22',
						codigo: '09113'
					},
					{
						nombre: 'Pitrufquén',
						regex: 'Pitrufquen',
						distrito: '23',
						codigo: '09114'
					},
					{
						nombre: 'Pucón',
						regex: 'Pucon',
						distrito: '23',
						codigo: '09115'
					},
					{
						nombre: 'Saavedra',
						regex: 'Saavedra',
						distrito: '23',
						codigo: '09116'
					},
					{
						nombre: 'Teodoro Schmidt',
						regex: 'Teodoro_Schmidt',
						distrito: '23',
						codigo: '09117'
					},
					{
						nombre: 'Toltén',
						regex: 'Tolten',
						distrito: '23',
						codigo: '09118'
					},
					{
						nombre: 'Vilcún',
						regex: 'Vilcun',
						distrito: '22',
						codigo: '09119'
					},
					{
						nombre: 'Villarrica',
						regex: 'Villarrica',
						distrito: '23',
						codigo: '09120'
					},
					{
						nombre: 'Cholchol',
						regex: 'Cholchol',
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
						regex: 'Angol',
						distrito: '22',
						codigo: '09201'
					},
					{
						nombre: 'Collipulli',
						regex: 'Collipulli',
						distrito: '22',
						codigo: '09202'
					},
					{
						nombre: 'Curacautín',
						regex: 'Curacautin',
						distrito: '22',
						codigo: '09203'
					},
					{
						nombre: 'Ercilla',
						regex: 'Ercilla',
						distrito: '22',
						codigo: '09204'
					},
					{
						nombre: 'Lonquimay',
						regex: 'Lonquimay',
						distrito: '22',
						codigo: '09205'
					},
					{
						nombre: 'Los Sauces',
						regex: 'Los_Sauces',
						distrito: '22',
						codigo: '09206'
					},
					{
						nombre: 'Lumaco',
						regex: 'Lumaco',
						distrito: '22',
						codigo: '09207'
					},
					{
						nombre: 'Purén',
						regex: 'Puren',
						distrito: '22',
						codigo: '09208'
					},
					{
						nombre: 'Renaico',
						regex: 'Renaico',
						distrito: '22',
						codigo: '09209'
					},
					{
						nombre: 'Traiguén',
						regex: 'Traiguen',
						distrito: '22',
						codigo: '09210'
					},
					{
						nombre: 'Victoria',
						regex: 'Victoria',
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
						regex: 'Valdivia',
						distrito: '24',
						codigo: '14101'
					},
					{
						nombre: 'Corral',
						regex: 'Corral',
						distrito: '24',
						codigo: '14102'
					},
					{
						nombre: 'Lanco',
						regex: 'Lanco',
						distrito: '24',
						codigo: '14103'
					},
					{
						nombre: 'Los Lagos',
						regex: 'Los_Lagos',
						distrito: '24',
						codigo: '14104'
					},
					{
						nombre: 'Máfil',
						regex: 'Mafil',
						distrito: '24',
						codigo: '14105'
					},
					{
						nombre: 'Mariquina',
						regex: 'Mariquina',
						distrito: '24',
						codigo: '14106'
					},
					{
						nombre: 'Paillaco',
						regex: 'Paillaco',
						distrito: '24',
						codigo: '14107'
					},
					{
						nombre: 'Panguipulli',
						regex: 'Panguipulli',
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
						regex: 'La_Union',
						distrito: '24',
						codigo: '14201'
					},
					{
						nombre: 'Futrono',
						regex: 'Futrono',
						distrito: '24',
						codigo: '14202'
					},
					{
						nombre: 'Lago Ranco',
						regex: 'Lago_Ranco',
						distrito: '24',
						codigo: '14203'
					},
					{
						nombre: 'Río Bueno',
						regex: 'Rio_Bueno',
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
						regex: 'Puerto_Montt',
						distrito: '26',
						codigo: '10101'
					},
					{
						nombre: 'Calbuco',
						regex: 'Calbuco',
						distrito: '26',
						codigo: '10102'
					},
					{
						nombre: 'Cochamó',
						regex: 'Cochamo',
						distrito: '26',
						codigo: '10103'
					},
					{
						nombre: 'Fresia',
						regex: 'Fresia',
						distrito: '25',
						codigo: '10104'
					},
					{
						nombre: 'Frutillar',
						regex: 'Frutillar',
						distrito: '25',
						codigo: '10105'
					},
					{
						nombre: 'Los Muermos',
						regex: 'Los_Muermos',
						distrito: '25',
						codigo: '10106'
					},
					{
						nombre: 'Llanquihue',
						regex: 'Llanquihue',
						distrito: '25',
						codigo: '10107'
					},
					{
						nombre: 'Maullín',
						regex: 'Maullin',
						distrito: '26',
						codigo: '10108'
					},
					{
						nombre: 'Puerto_Varas',
						regex: 'Maullin',
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
						regex: 'Castro',
						distrito: '26',
						codigo: '10201'
					},
					{
						nombre: 'Ancud',
						regex: 'Ancud',
						distrito: '26',
						codigo: '10202'
					},
					{
						nombre: 'Chonchi',
						regex: 'Chonchi',
						distrito: '26',
						codigo: '10203'
					},
					{
						nombre: 'Curaco de Vélez',
						regex: 'Curaco_de_Velez',
						distrito: '26',
						codigo: '10204'
					},
					{
						nombre: 'Dalcahue',
						regex: 'Dalcahue',
						distrito: '26',
						codigo: '10205'
					},
					{
						nombre: 'Puqueldón',
						regex: 'Puqueldon',
						distrito: '26',
						codigo: '10206'
					},
					{
						nombre: 'Queilén',
						regex: 'Queilen',
						distrito: '26',
						codigo: '10207'
					},
					{
						nombre: 'Quellón',
						regex: 'Quellon',
						distrito: '26',
						codigo: '10208'
					},
					{
						nombre: 'Quemchi',
						regex: 'Quemchi',
						distrito: '26',
						codigo: '10209'
					},
					{
						nombre: 'Quinchao',
						regex: 'Quinchao',
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
						regex: 'Osorno',
						distrito: '25',
						codigo: '10301'
					},
					{
						nombre: 'Puerto Octay',
						regex: 'Puerto_Octay',
						distrito: '25',
						codigo: '10302'
					},
					{
						nombre: 'Purranque',
						regex: 'Purranque',
						distrito: '25',
						codigo: '10303'
					},
					{
						nombre: 'Puyehue',
						regex: 'Puyehue',
						distrito: '2',
						codigo: '10304'
					},
					{
						nombre: 'Río Negro',
						regex: 'Rio_Negro',
						distrito: '2',
						codigo: '10305'
					},
					{
						nombre: 'San Juan de la Costa',
						regex: 'San_Juan_de_la_Costa',
						distrito: '2',
						codigo: '10306'
					},
					{
						nombre: 'San Pablo',
						regex: 'San_Pablo',
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
						regex: 'Chaiten',
						distrito: '26',
						codigo: '10401'
					},
					{
						nombre: 'Futaleufú',
						regex: 'Futaleufú',
						distrito: '26',
						codigo: '10402'
					},
					{
						nombre: 'Hualaihué',
						regex: 'Hualaihue',
						distrito: '26',
						codigo: '10403'
					},
					{
						nombre: 'Palena',
						regex: 'Palena',
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
						regex: 'Coyhaique',
						distrito: '27',
						codigo: '11101'
					},
					{
						nombre: 'Lago Verde',
						regex: 'Lago_Verde',
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
						regex: 'Aisen',
						distrito: '27',
						codigo: '11201'
					},
					{
						nombre: 'Cisnes',
						regex: 'Cisnes',
						distrito: '27',
						codigo: '11202'
					},
					{
						nombre: 'Guaitecas',
						regex: 'Guaitecas',
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
						regex: 'Cochrane',
						distrito: '27',
						codigo: '11301'
					},
					{
						nombre: 'O’Higgins',
						regex: 'OHiggins',
						distrito: '27',
						codigo: '11302'
					},
					{
						nombre: 'Tortel',
						regex: 'Tortel',
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
						regex: 'Chile_Chico',
						distrito: '27',
						codigo: '11401'
					},
					{
						nombre: 'Río Ibáñez',
						regex: 'Rio_Ibanez',
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
						regex: 'Punta_Arenas',
						distrito: '28',
						codigo: '12101'
					},
					{
						nombre: 'Laguna Blanca',
						regex: 'Laguna_Blanca',
						distrito: '28',
						codigo: '12102'
					},
					{
						nombre: 'Río Verde',
						regex: 'Rio_Verde',
						distrito: '28',
						codigo: '12103'
					},
					{
						nombre: 'San Gregorio',
						regex: 'San_Gregorio',
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
						regex: 'Cabo_de_Hornos',
						distrito: '28',
						codigo: '12201'
					},
					{
						nombre: 'Antártica',
						regex: 'Antartica',
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
						regex: 'Porvenir',
						distrito: '28',
						codigo: '12301'
					},
					{
						nombre: 'Primavera',
						regex: 'Primavera',
						distrito: '28',
						codigo: '12302'
					},
					{
						nombre: 'Timaukel',
						regex: 'Timaukel',
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
						regex: 'Natales',
						distrito: '28',
						codigo: '12401'
					},
					{
						nombre: 'Torres del Paine',
						regex: 'Torres_del_Paine',
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
						distrito: comuna.distrito,
						reg: comuna.regex

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
			distrito: comuna.distrito,
			reg: comuna.regex

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
