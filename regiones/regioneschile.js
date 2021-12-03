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
						codigo: '15101',
						locales: [
							'ARICA COLLEGE',
							'AZAPA VALLEY SCHOOL',
							'CARDENAL RAUL SILVA HENRIQUEZ',
							'COLEGIO ADOLFO BEYZAGA OVANDO',
							'COLEGIOCHILE NORTE',
							'COLEGIO D-91 CENTENARIO',
							'COLEGIO DEL ALBA',
							'COLEGIO INTEGRADO EDUARDO FREI MONTALVA',
							'COLEGIO JUAN PABLO SEGUNDO',
							'COLEGIO MIRAMAR',
							'COLEGIO SAN JUAN DE LA BLANCHERE',
							'COLEGIO SAN MARCOS DE ARICA',
							'COLEGIO SAUCACHE',
							'COLEGIO TECNOLOGICO DON BOSCO DE ARICA',
							'COMPLEJO DEPORTIVO SAUCACHE UNIVERSIDAD DE TARAPACA SEDE 1',
							'COMPLEJO DEPORTIVO SAUCACHE UNIVERSIDAD DE TARAPACA SEDE 2',
							'ESCUELA D-10 GENERAL JOSE MIGUEL CARRERA',
							'ESCUELA D-11 MANUEL RODRIGUEZ ERDOYZA',
							'ESCUELA D-12 ROMULO PEÑA MATURANA',
							'ESCUELA D-16 SUBTENIENTE LUIS CRUZ MARTINEZ',
							'ESCUELA D-17 COMANDANTE JUAN JOSE SAN MARTIN',
							'ESCUELA D-18 HUMBERTO VALENZUELA GARCIA',
							'ESCUELA D-24 GABRIELA MISTRAL',
							'ESCUELA D-4 REPUBLICA DE ISRAEL',
							'ESCUELA D-6 REPUBLICA DE FRANCIA',
							'ESCUELA D-7 GENERAL PEDRO LAGOS MARCHANT',
							'ESCUELA E-15 RICARDO SILVA ARRIAGADA',
							'ESCUELA E-1 REPUBLICA DE ARGENTINA',
							'ESCUELA E-5 ESMERALDA',
							'ESCUELA EJERCITO DE SALVACION',
							'ESCUELA F-22 DOCTOR RICARDO OLEA GUERRA',
							'ESCUELA JORGE ALESSANDRI RODRIGUEZ',
							'FORD COLLEGE',
							'GIMNASIO AUGUSTO ZUBIRI (EX EPICENTRO I)',
							'GIMNASIO MUNICIPAL EPICENTRO II',
							'GIMNASIO MUNICIPAL FORTIN SOTOMAYOR',
							'JUNIOR COLLEGE',
							'LICEO A-1 OCTAVIO PALMA PEREZ',
							'LICEO A-2 POLITECNICO ARICA',
							'LICEO AGRICOLA JOSE ABELARDO NUÑEZ',
							'LICEO ARTISTICO D-13 JUAN NOE CREVANI',
							'LICEO POLITECNICO B-4 ANTONIO VARAS DE LA BARRA',
							'NORTH AMERICAN COLLEGE SEDE 21 DE MAYO',
							'NORTH AMERICAN COLLEGE SEDE SOTOMAYOR'
						]
					},
					{
						nombre: 'Camarones',
						distrito: '1',
						codigo: '15102',
						locales: [
							'ESCUELA VALLE DE CUYA',
							'LICEOVALLE DE CODPA'
						]
					}
				]
			},
			{
				nombre: 'Parinacota',
				comunas: [
					{
						nombre: 'Putre',
						distrito: '1',
						codigo: '15201',
						locales: [
							'ESCUELA SAN SANTIAGO DE BELEN',
							'LICEO GRANADEROS DE PUTRE'
						]
					},
					{
						nombre: 'General Lagos',
						distrito: '1',
						codigo: '15202',
						locales: [
							'ESCUELA INTERNADO VISVIRI'
						]
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
						codigo: '01101',
						locales: [
							'COLEGIO ACADEMIA TARAPACA',
							'COLEGIO ADVENTISTA',
							'COLEGIO ANTAMARA',
							'COLEGIO BAJO MOLLE',
							'COLEGIO DIOCESANO OBISPO LABBE',
							'COLEGIO ESPANA',
							'COLEGIO INGLES',
							'COLEGIO MAHATMA GANDHI',
							'COLEGIO REPUBLICA DE CROACIA',
							'COLEGIO REPUBLICA DE ITALIA',
							'COLEGIO SALESIANO DON BOSCO IQUIQUE',
							'ESCUELA ALMIRANTE PATRICIO LYNCH',
							'ESCUELA ARTISTICA VIOLETA PARRA',
							'ESCUELA BASICA DE CHANAVAYITA',
							'ESCUELA BASICA FRANCISCO FORGIONE',
							'ESCUELA CENTENARIO',
							'ESCUELA CHIPANA',
							'ESCUELA EDUARDO LLANOS',
							'ESCUELA ESPECIAL FLOR DEL INCA',
							'ESCUELA GABRIELA MISTRAL',
							'ESCUELA PAULA JARAQUEMADA ALQUIZAR',
							'ESCUELA PLACIDO VILLARROEL',
							'ESCUELA PROFESOR MANUEL CASTRO RAMOS',
							'LICEO BICENTENARIO SANTA MARIA',
							'LICEO DEPORTIVO ELENA DUVAUCHELLE CABEZON',
							'LICEO LIBERTADOR GENERAL BERNARDO O´HIGGINS',
							'LICEO LUIS CRUZ MARTINEZ',
							'LICEO MARIA AUXILIADORA',
							'LICEO POLITECNICO JOSE GUTIERREZ DE LA FUENTE',
							'LICEO PRESIDENTE ANIBAL PINTO GARMENDIA.',
							'LICEO SAMCA ARUMANTI',
							'UNIVERSIDAD ARTURO PRAT'
						]
					},
					{
						nombre: 'Alto Hospicio',
						distrito: '2',
						codigo: '01102',
						locales: [
							'ANEXO DE COLEGIO SAN ANTONIO DE MATILLA',
							'COLEGIO CATOLICO NAZARET',
							'COLEGIO MARISTA HERMANO FERNANDO',
							'COLEGIO NIRVANA',
							'COLEGIO SAGRADO CORAZON DE JESUS',
							'COLEGIO SALESIANO SANTO DOMINGO SAVIO',
							'COLEGIO SAN ANTONIO DE MATILLA',
							'COLEGIO SIMON BOLIVAR',
							'LICEO LOS CONDORES'
						]
					}
				]
			},
			{
				nombre: 'Tamarugal',
				comunas: [
					{
						nombre: 'Pozo Almonte',
						distrito: '2',
						codigo: '01201',
						locales: [
							'ESCUELA BASICA ESTRELLA DEL SUR',
							'ESCUELA BASICA LA TIRANA',
							'ESCUELA BASICA MAMINA',
							'ESCUELA BASICA POZO ALMONTE',
							'LICEO ALCALDE SERGIO GONZALEZ GUTIERREZ'
						]
					},
					{
						nombre: 'Camiña',
						distrito: '2',
						codigo: '01402',
						locales: [
							'ESCUELA CAMIÑA'
						]
					},
					{
						nombre: 'Colchane',
						distrito: '2',
						codigo: '01403',
						locales: [
							'LICEO TECNICO PROFESIONAL COLCHANE'
						]
					},
					{
						nombre: 'Huara',
						distrito: '2',
						codigo: '01404',
						locales: [
							'ESCUELA BASICA FRONTERIZA',
							'ESCUELA CHIAPA',
							'ESCUELA PISAGUA',
							'GIMNASIO MUNICIPAL TECHADO DE HUARA',
							'LICEO DE HUARA'
						]
					},
					{
						nombre: 'Pica',
						distrito: '2',
						codigo: '01405',
						locales: [
							'ESCUELA SAN ANDRES DE PICA',
							'LICEO BICENTENARIO PADRE ALBERTO HURTADO CRUCHAGA'
						]
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
						codigo: '02101',
						locales: [
							'CENTRO DE EDUCACION INTEGRADA DE ADULTOS DR. ANTONIO RENDIC IVANOVIC',
							'COLEGIO ANTOFAGASTA',
							'COLEGIO INGLES SAN JOSE',
							'COLEGIO INSTITUTO SANTA MARIA',
							'COLEGIO SAN AGUSTIN',
							'COLEGIO SAN LUIS',
							'COLEGIO TECNICO INDUSTRIAL DON BOSCO',
							'ESCUELA ALCALDE MAXIMILIANO POBLETE CORTES',
							'ESCUELA CLAUDIO MATTE PEREZ',
							'ESCUELA DARIO SALAS DIAZ',
							'ESCUELA ECOLOGICA HUMBERTO GONZALEZ ECHEGOYEN',
							'ESCUELA ECOLOGICA PADRE ALBERTO HURTADO',
							'ESCUELA ESPAÑA',
							'ESCUELA GENERAL MANUEL BAQUEDANO',
							'ESCUELA GUSTAVO LE PAIGE WALQUE',
							'ESCUELA HEROES DE LA CONCEPCION',
							'ESCUELA JAPON',
							'ESCUELA JOSE PAPIC RADNIC',
							'ESCUELA LA BANDERA',
							'ESCUELA LAS AMERICAS PROFESOR JUSTO VALLADARES ORELLANA',
							'ESCUELA LAS ROCAS',
							'ESCUELA PROFESORA LJUBICA DOMIC WUTH',
							'ESCUELA REPUBLICA DE ESTADOS UNIDOS DE NORTEAMERICA',
							'ESCUELA REPUBLICA DE ITALIA',
							'ESCUELA REPUBLICA DEL ECUADOR',
							'ESCUELA REVERENDO PADRE PATRICIO CARIOLA',
							'HRVATSKA SKOLA SAN ESTEBAN',
							'INSTITUTO CIENTIFICO EDUCACIONAL JOSE MAZA SANCHO',
							'INSTITUTO SUPERIOR DE COMERCIO JERARDO MUÑOZ CAMPOS',
							'LICEO ARTISTICO ARMANDO CARRERA GONZALEZ',
							'LICEO BICENTENARIO ANDRES SABELLA',
							'LICEO BICENTENARIO MARTA NAREA DIAZ',
							'LICEO CIENTIFICO HUMANISTA LA CHIMBA',
							'LICEO DE HOMBRES DE ANTOFAGASTA MARIO BAHAMONDE SILVA',
							'LICEO DOMINGO HERRERA RIVERA',
							'LICEO EXPERIMENTAL ARTISTICO Y DE APLICACION',
							'LICEO INDUSTRIAL EULOGIO GORDO MONEO',
							'LICEO LA PORTADA',
							'LICEO MAYOR GENERAL (E) OSCAR BONILLA',
							'LICEO TECNICO ANTOFAGASTA',
							'NETLAND SCHOOL',
							'UNIVERSIDAD CATOLICA DEL NORTE'
						]
					},
					{
						nombre: 'Mejillones',
						distrito: '3',
						codigo: '02102',
						locales: [
							'COMPLEJO EDUCATIVO JUAN JOSE LATORRE BENAVENTE',
							'ESCUELA JULIA HERRERA VARAS'
						]
					},
					{
						nombre: 'Sierra Gorda',
						distrito: '3',
						codigo: '02103',
						locales: [
							'ESCUELA BASICA ESTACION BAQUEDANO',
							'ESCUELA CARACOLES'
						]
					},
					{
						nombre: 'Taltal',
						distrito: '3',
						codigo: '02104',
						locales: [
							'ESCUELA HOGAR VICTORIANO QUINTEROS SOTO',
							'ESCUELA HUMANISTA VICTOR HUGO CARVAJAL MEZA'
						]
					}
				]
			},
			{
				nombre: 'El Loa',
				comunas: [
					{
						nombre: 'Calama',
						distrito: '3',
						codigo: '02201',
						locales: [
							'COLEGIO CALAMA',
							'COLEGIO CHUQUICAMATA',
							'ESCUELA BASICA 21 DE MAYO',
							'ESCUELA BASICA CLAUDIO ARRAU',
							'ESCUELA BASICA EMILIO SOTOMAYOR',
							'ESCUELA BASICA JOHN FITZGERALD KENNEDY',
							'ESCUELA BASICA PEDRO VERGARA KELLER',
							'ESCUELA BASICA REPUBLICA DE GRECIA',
							'ESCUELA PRESIDENTE BALMACEDA',
							'ESCUELA REPUBLICA DE BOLIVIA',
							'ESCUELA REPUBLICA DE FRANCIA',
							'ESCUELA SAN FRANCISCO DE CHIU CHIU',
							'ESCUELA VADO DE TOPATER',
							'INSTITUTO OBISPO SILVA LEZAETA',
							'LICEO BICENTENARIO DIEGO PORTALES PALAZUELOS',
							'LICEO BICENTENARIO LUIS CRUZ MARTINEZ',
							'LICEO BICENTENARIO POLITECNICO CESAREO AGUIRRE',
							'LICEO ELEUTERIO RAMIREZ MOLINA',
							'LICEO FRANCISCO DE AGUIRRE',
							'LICEO JORGE ALESSANDRI RODRIGUEZ',
							'LICEO MINERO AMERICA'
						]
					},
					{
						nombre: 'Ollagüe',
						distrito: '3',
						codigo: '02202',
						locales: [
							'ESCUELA SAN ANTONIO DE PADUA'
						]
					},
					{
						nombre: 'San Pedro de Atacama',
						distrito: '3',
						codigo: '02203',
						locales: [
							'ESCUELA BASICA SAN PEDRO DE ATACAMA',
							'LICEO BICENTENARIO AGROPECUARIO LIKAN ANTAI'
						]
					}
				]
			},
			{
				nombre: 'Tocopilla',
				comunas: [
					{
						nombre: 'Tocopilla',
						distrito: '3',
						codigo: '02301',
						locales: [
							'ESCUELA CARLOS CONDELL DE LA HAZA',
							'LICEO DOMINGO LATRILLE',
							'LICEO POLITECNICO DIEGO PORTALES PALAZUELOS'
						]
					},
					{
						nombre: 'María Elena',
						distrito: '3',
						codigo: '02302',
						locales: [
							'ESCUELA ARTURO PEREZ CANTO',
							'ESCUELA IGNACIO CARRERA PINTO',
							'LICEO TECNICO PROFESIONAL CIENTIFICO HUMANISTA MARIA ELENA'
						]
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
						codigo: '03101',
						locales: [
							'CENTRO CULTURAL',
							'CENTRO DE EDUCACION INTEGRADA DE ADULTOS',
							'COLEGIO ADVENTISTA DE COPIAPO',
							'COLEGIO BUEN PASTOR',
							'COLEGIO SAN AGUSTIN DE ATACAMA',
							'ESCUELA ABRAHAM SEPULVEDA PIZARRO',
							'ESCUELA BERNARDO O HIGGINS',
							'ESCUELA DIFERENCIAL MARIA LUZ LANZA PIZARRO',
							'ESCUELA JESUS FERNANDEZ HIDALGO',
							'ESCUELA SAN FRANCISCO DE LA SELVA',
							'ESCUELA SAN VICENTE DE PAUL',
							'ESCUELA TECNICO PROFESIONAL',
							'LICEO CATOLICO ATACAMA',
							'LICEO DE MUSICA',
							'LICEO FERNANDO ARIZTIA RUIZ',
							'LICEO SAGRADO CORAZON',
							'LICEO TECNICO PROFESIONAL HEROES DE ATACAMA'
						]
					},
					{
						nombre: 'Caldera',
						distrito: '4',
						codigo: '03102',
						locales: [
							'ESCUELA DE DESARROLLO ARTISTICO',
							'ESCUELA MANUEL ORELLA ECHANEZ'
						]
					},
					{
						nombre: 'Tierra Amarilla',
						distrito: '4',
						codigo: '03103',
						locales: [
							'ESC. BASICA MARTA EMILIANA AGUILAR ZERON',
							'ESCUELA D-43, LOS LOROS'
						]
					}
				]
			},
			{
				nombre: 'Chañaral',
				comunas: [
					{
						nombre: 'Chañaral',
						distrito: '4',
						codigo: '03201',
						locales: [
							'ESCUELA BASICA ANGELINA SALAS OLIVARES',
							'LICEO FEDERICO VARELA'
						]
					},
					{
						nombre: 'Diego de Almagro',
						distrito: '4',
						codigo: '03202',
						locales: [
							'ESCUELA COEDUCACIONAL PARTICULAR',
							'LICEO MANUEL MAGALHAES MEDLING'
						]
					}
				]
			},
			{
				nombre: 'Huasco',
				comunas: [
					{
						nombre: 'Vallenar',
						distrito: '4',
						codigo: '03301',
						locales: [
							'ESCUELA BASICA ESPANA',
							'ESCUELA BASICA GUALBERTO KONG FERNANDEZ',
							'ESCUELA BASICA ROBERTO CUADRA ALQUINTA',
							'ESCUELA REPUBLICA DE LOS E.E.U.U.',
							'LICEO BICENTENARIO DE VALLENAR',
							'LICEO JOSE SANTOS OSSA'
						]
					},
					{
						nombre: 'Alto del Carmen',
						distrito: '4',
						codigo: '03302',
						locales: [
							'EDUCADOR ARTURO ALVEAR RAMOS',
							'ESCUELA FRONTERIZA',
							'ESCUELA RICARDO CAMPILLAY CONTRERAS'
						]
					},
					{
						nombre: 'Freirina',
						distrito: '4',
						codigo: '03303',
						locales: [
							'ESCUELA BASICA ALEJANDRO NOEMI HUERTA'
						]
					},
					{
						nombre: 'Huasco',
						distrito: '4',
						codigo: '03304',
						locales: [
							'ESCUELA MIREYA ZULETA ASTUDILLO'
						]
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
						codigo: '04101',
						locales: [
							'COLEGIO ARTURO PRAT CHACON',
							'COLEGIO CARLOS CONDELL DE LA HAZA',
							'COLEGIO GABRIEL GONZALEZ VIDELA',
							'COLEGIO GERONIMO RENDIC',
							'COLEGIO HEROES DE LA CONCEPCION',
							'COLEGIO JAPON',
							'COLEGIO JAVIERA CARRERA',
							'COLEGIO JOSE MIGUEL CARRERA',
							'COLEGIO PARTICULAR SAN JOSE',
							'COLEGIO PEDRO AGUIRRE CERDA',
							'COLEGIO VICTOR DOMINGO SILVA',
							'ESCUELA ALONSO DE ERCILLA',
							'ESCUELA GERMAN RIESCO',
							'ESTADIO LA PORTADA',
							'ESTADIO LA PORTADA LOCAL: 2',
							'LICEO GABRIELA MISTRAL DE LA SERENA',
							'LICEO GREGORIO CORDOVEZ',
							'LICEO IGNACIO CARRERA PINTO',
							'LICEO TECNICO FEMENINO LAS COMPANIAS',
							'LICEO TECNICO MARTA BRUNET'
						]
					},
					{
						nombre: 'Coquimbo',
						distrito: '5',
						codigo: '04102',
						locales: [
							'COLEGIO BERNARDO O´HIGGINS',
							'COLEGIO DE ARTES CLAUDIO ARRAU',
							'COLEGIO DISCOVERY SCHOOL',
							'COLEGIO PARTICULAR GABRIELA MISTRAL',
							'ESCUELA BASICA MARIO MUNOZ SILVA',
							'ESCUELA BASICA REPUBLICA DE ITALIA',
							'ESCUELA CARDENAL JOSE MARIA CARO',
							'ESCUELA COQUIMBO',
							'ESCUELA DE PEÑUELAS',
							'ESCUELA JOSE ALFARO ALFARO',
							'ESCUELA JUAN PABLO II',
							'ESCUELA METODISTA COQUIMBO',
							'ESCUELA PRESIDENTE ANIBAL PINTO',
							'ESCUELA REPUBLICA DE GRECIA',
							'GIMNASIO TECHADO MUNICIPAL',
							'INSTITUTO DE ADMINISTRACION Y COMERCIO ESTADO DE ISRAEL',
							'INSTITUTO SUPERIOR DE COMERCIO DE COQUIMBO',
							'LIC.DE CIENC.Y HUM.SAN JOSEMARIA ESCRIVA',
							'LICEO CARMEN AURORA RODRIGUEZ HENRIQUEZ',
							'LICEO FERNANDO BINVIGNAT MARIN'
						]
					},
					{
						nombre: 'Andacollo',
						distrito: '5',
						codigo: '04103',
						locales: [
							'ESCUELA LUIS CRUZ MARTINEZ',
							'LICEO PEDRO REGALADO VIDELA ORDENES'
						]
					},
					{
						nombre: 'La Higuera',
						codigo: '04104',
						locales: [
							'ESCUELA BASICA PEDRO PABLO MUNOZ'
						]
					},
					{
						nombre: 'Paiguano',
						distrito: '5',
						codigo: '04105',
						locales: [
							'LICEO MISTRALIANO'
						]
					},
					{
						nombre: 'Vicuña',
						distrito: '5',
						codigo: '04106',
						locales: [
							'COLEGIO ANTONIO VARAS',
							'ESCUELA BASICA LUCILA GODOY ALCAYAGA',
							'LICEO CARLOS ROBERTO MONDACA CORTES'
						]
					}
				]
			},
			{
				nombre: 'Choapa',
				comunas: [
					{
						nombre: 'Illapel',
						distrito: '5',
						codigo: '04201',
						locales: [
							'COLEGIO SANTA TERESA',
							'ESCUELA BASICA VALLE DEL CHOAPA',
							'ESCUELA JUAN CARRASCO RISCO',
							'LICEO DOMINGO ORTIZ DE ROZAS',
							'LICEO POLITECNICO PABLO RODRIGUEZ CAVIEDES'
						]
					},
					{
						nombre: 'Canela',
						distrito: '5',
						codigo: '04202',
						locales: [
							'ESCUELA BASICA HECTOR JORQUERA VALENCIA',
							'ESCUELA BASICA MINCHA NORTE'
						]
					},
					{
						nombre: 'Los Vilos',
						distrito: '5',
						codigo: '04203',
						locales: [
							'COLEGIO DIEGO DE ALMAGRO',
							'ESCUELA BASICA TERESA CANNON DE BARRIOLHET.',
							'ESCUELA CLARA VIAL ORREGO',
							'LICEO NICOLAS FEDERICO LOHSE VARGAS'
						]
					},
					{
						nombre: 'Salamanca',
						distrito: '5',
						codigo: '04204',
						locales: [
							'COLEGIO PART. SUB. CUMBRES DEL CHOAPA',
							'ESCUELA BASICACHILLEPIN',
							'ESCUELA MATILDE SALAMANCA',
							'LICEO DE SALAMANCA'
						]
					}
				]
			},
			{
				nombre: 'Limarí',
				comunas: [
					{
						nombre: 'Ovalle',
						distrito: '5',
						codigo: '04301',
						locales: [
							'COLEGIO DE ADMINISTRACION Y COMERCIO EL INGENIO',
							'COLEGIO FRAY JORGE',
							'COLEGIO RAUL SILVA HENRIQUEZ',
							'ESCUELA ANTONIO TIRADO LANAS',
							'ESCUELA ARTURO VILLALON SIEULANNE',
							'ESCUELA BARRAZA BAJO',
							'ESCUELA BASICA ARTURO ALESSANDRI PALMA',
							'ESCUELA BASICA OSCAR ARAYA MOLINA',
							'ESCUELA DE ARTES Y MUSICA',
							'ESTADIO DIAGUITA',
							'ESTADIO DIAGUITA LOCAL: 2',
							'LICEO ALEJANDRO ALVAREZ JOFRE',
							'LICEO ESTELA AVILA DE PERRY',
							'LICEO POLITECNICO DE OVALLE'
						]
					},
					{
						nombre: 'Combarbalá',
						distrito: '5',
						codigo: '04302',
						locales: [
							'ESCUELA BASICA AMERICA',
							'LICEO SAMUEL ROMAN ROJAS'
						]
					},
					{
						nombre: 'Monte Patria',
						distrito: '5',
						codigo: '04303',
						locales: [
							'COLEGIO CERRO GUAYAQUIL',
							'COLEGIO REPUBLICA DE CHILE',
							'COLEGIO RIO GRANDE',
							'ESCUELA ALEJANDRO CHELEN ROJAS',
							'ESCUELA BASICA WENCESLAO VARGAS',
							'ESCUELA EL PALQUI',
							'LICEO PRESIDENTE EDUARDO FREI MONTALVA'
						]
					},
					{
						nombre: 'Punitaqui',
						distrito: '5',
						codigo: '04304',
						locales: [
							'ESCUELA BELGICA',
							'HOGAR MASCULINO DE PUNITAQUI'
						]
					},
					{
						nombre: 'Río Hurtado',
						distrito: '5',
						codigo: '04305',
						locales: [
							'ESCUELA BASICA AMANECER',
							'SALON DE EVENTOS MUNICIPAL'
						]
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
						codigo: '05101',
						locales: [
							'CENTRO EDUCATIVO REINO DE SUECIA',
							'COLEGIO AGUSTIN EDWARDS',
							'COLEGIO ALBERTO HURTADO SEGUNDO',
							'COLEGIO ARTURO EDWARDS (SEDE CARRERA)',
							'COLEGIO ARTURO EDWARDS (SEDE COLON)',
							'COLEGIO CARLOS COUSIÑO VALPARAISO',
							'COLEGIO E-268 REPUBLICA DE MEXICO',
							'COLEGIO GUARDIAMARINA RIQUELME',
							'COLEGIO INMACULADA CONCEPCION DE NUESTRA SEÑORA DE LOURDES',
							'COLEGIO LEONARDO MURIALDO',
							'COLEGIO MARIA AUXILIADORA',
							'COLEGIO NUEVA ERA SIGLO XXI',
							'COLEGIO PATRICIO LYNCH',
							'COLEGIO PEDRO MONTT C-100',
							'COLEGIO PUMAHUE',
							'COLEGIO SALESIANOS VALPARAISO',
							'COLEGIO SAN DAMIAN DE MOLOKAI',
							'COLEGIO SAN IGNACIO DE LOYOLA',
							'COLEGIO SAN PEDRO NOLASCO DE VALPARAISO',
							'COLEGIO SEMINARIO SAN RAFAEL',
							'COLEGIO UMBRAL DE CURAUMA',
							'ESCUELA A-19 HERNAN OLGUIN',
							'ESCUELA BASICA N°150 LAGUNA VERDE G-289',
							'ESCUELA BLAS CUEVAS RAMON ALLENDE D-307',
							'ESCUELA D-250 GASPAR CABRALES',
							'ESCUELA D-255 ALEMANIA',
							'ESCUELA D-256 REPUBLICA DEL URUGUAY',
							'ESCUELA D-314 JOAQUIN EDWARDS BELLO',
							'ESCUELA DE INGENIERIA QUIMICA PUCV',
							'ESCUELA DE TRIPULANTES Y PORTUARIA DE VALPARAISO',
							'ESCUELA DIEGO PORTALES PALAZUELOS',
							'ESCUELA ESTADO DE ISRAEL',
							'ESCUELA GRECIA (D-251)',
							'ESCUELA JUAN DE SAAVEDRA',
							'ESCUELA REPUBLICA ARABE SIRIA D-246',
							'ESCUELA REPUBLICA DEL PARAGUAY',
							'FACULTAD DE ARQUITECTURA UNIVERSIDAD DE VALPARAISO',
							'FACULTAD DE INGENIERIA PUCV',
							'INSTITUTO DE MATEMATICAS PUCV MALAQUIAS MORALES MUÑOZ',
							'INSTITUTO PROFESIONAL DUOC UC, SEDE VALPARAISO',
							'INSTITUTO SUPERIOR DE COMERCIO FRANCISCO ARAYA BENNET',
							'INSTITUTO TECNICO PROFESIONAL MARITIMO DE VALPARAISO',
							'LICEO BICENTENARIO VALPARAISO (B-29)',
							'LICEO COEDUCACIONAL LA IGUALDAD',
							'LICEO DE NIÑAS MARIA FRANCK DE MAC DOUGALL',
							'LICEO EDUARDO DE LA BARRA',
							'LICEO JUANA ROSS DE EDWARDS',
							'LICEO MARIA LUISA BOMBAL',
							'LICEO MIXTO POLIVALENTE, MATILDE BRANDAU DE ROSS',
							'LICEO TECNICO DE VALPARAISO',
							'LICEO TECNICO PROFESIONAL BARON',
							'LICEO TECNOLOGICO ALFREDO NAZAR FERES',
							'SCUOLA ITALIANA ARTURO DELL´ORO',
							'SCUOLA ITALIANA ARTURO DELL´ORO LOCAL: 2',
							'UNIVERSIDAD DE PLAYA ANCHA, FACULTAD DE CIENCIAS DE LA SALUD',
							'UNIVERSIDAD FEDERICO SANTA MARIA CASA CENTRAL Y EDIFICIO P'
						]
					},
					{
						nombre: 'Casablanca',
						distrito: '7',
						codigo: '05102',
						locales: [
							'ESCUELA ARTURO ECHAZARRETA LARRAIN',
							'ESCUELA ESPECIAL HUMBERTO MOATH',
							'ESCUELA MANUEL BRAVO REYES',
							'LICEO BICENTENARIO MANUEL DE SALAS'
						]
					},
					{
						nombre: 'Concón',
						distrito: '7',
						codigo: '05103',
						locales: [
							'COLEGIO ALBORADA DEL MAR',
							'COLEGIO ALTAZOR',
							'COLEGIO RAYEN CAVEN',
							'ESCUELA BASICA IRMA SALAS SILVA',
							'ESCUELA BASICA ORO NEGRO D-367',
							'FUNDACION EDUCACIONAL COLEGIO PARROQUIAL SANTA MARIA GORETTI',
							'LICEO POLITECNICO DE CONCON'
						]
					},
					{
						nombre: 'Juan Fernández',
						distrito: '7',
						codigo: '05104',
						locales: [
							'JARDIN INFANTIL SANDALITO'
						]
					},
					{
						nombre: 'Puchuncaví',
						distrito: '6',
						codigo: '05105',
						locales: [
							'COLEGIO GENERAL JOSE VELASQUEZ BORQUEZ (1)',
							'COLEGIO GENERAL JOSE VELASQUEZ BORQUEZ (2)',
							'COLEGIO SAN HERNALDO',
							'COMPLEJO EDUCACIONAL SARGENTO ALDEA',
							'ESCUELA LA GREDA'
						]
					},
					{
						nombre: 'Quintero',
						distrito: '6',
						codigo: '05107',
						locales: [
							'COLEGIO ARTISTICO COSTA MAUCO',
							'COLEGIO DON ORIONE',
							'LICEO POLITECNICO QUINTERO'
						]
					},
					{
						nombre: 'Viña del Mar',
						distrito: '7',
						codigo: '05109',
						locales: [
							'ALIANZA FRANCESA',
							'C.E.I.A. LOS CASTAÑOS',
							'COLEGIO ANA MARIA JANER',
							'COLEGIO ARABE',
							'COLEGIO CASTELIANO',
							'COLEGIO FRIENDLY HIGH SCHOOL',
							'COLEGIO INMACULADA DE LOURDES',
							'COLEGIO JUANITA FERNANDEZ',
							'COLEGIO MIRAFLORES D-329',
							'COLEGIO REPUBLICA DE COLOMBIA',
							'COLEGIO RUBEN CASTRO',
							'COLEGIO SAGRADOS CORAZONES MONJAS FRANCESAS',
							'COLEGIO SAN IGNACIO (SEDE LUSITANIA)',
							'COLEGIO WINTERHILL VIÑA DEL MAR',
							'CORPORACION DOCENTE SAINT DOMINIC',
							'DUOC UC, SEDE VIÑA DEL MAR',
							'ESCUELA ARTURO PRAT CHACON',
							'ESCUELA BASICA CHORRILLOS E-323',
							'ESCUELA BASICA D-316 REPUBLICA DEL ECUADOR',
							'ESCUELA BASICA D-318 UNESCO',
							'ESCUELA BASICA HUMBERTO VILCHES ALZAMORA',
							'ESCUELA D-346, TEODORO LOWEY',
							'ESCUELA ESPECIAL JUANITA AGUIRRE CERDA',
							"ESCUELA LIBERTADORBERNARDO O'HIGGINS",
							'ESCUELA LORD COCHRANE',
							'ESCUELA PRESIDENTE JOSE MANUEL BALMACEDA',
							'ESCUELA PRESIDENTE PEDRO AGUIRRE CERDA',
							'ESCUELA VILLA INDEPENDENCIA',
							'FACULTAD DE FILOSOFIA Y EDUCACION PUCV, CAMPUS SAUSALITO',
							'LICEO A-33 GUILLERMO RIVERA COTAPOS',
							'LICEO A-36 BICENTENARIO DE VIÑA DEL MAR',
							'LICEO BENJAMIN VICUÑA MACKENNA',
							'LICEO INDUSTRIAL DE VINA DEL MAR',
							'LICEO SANTA TERESA DE LOS ANDES',
							'PAN AMERICAN COLLEGE',
							"SAINT PETER'S SCHOOL",
							'SCUOLA ITALIANA ARTURO DELL´ ORO VIÑA DEL MAR',
							'THE MACKAY SCHOOL',
							'UNIVERSIDAD ANDRES BELLO, CAMPUS VIÑA DEL MAR',
							'UNIVERSIDAD DE LAS AMERICAS',
							'UNIVERSIDAD DE VIÑA DEL MAR, SEDE MIRAFLORES',
							'UNIVERSIDAD DE VIÑA DEL MAR, SEDE MIRAFLORES 2',
							'UNIVERSIDAD SANTO TOMAS, SEDE VIÑA DEL MAR',
							'VALPARAISO SPORTING'
						]
					}
				]
			},
			{
				nombre: 'Isla de Pascua',
				comunas: [
					{
						nombre: 'Isla de Pascua',
						distrito: '7',
						codigo: '05201',
						locales: [
							'LICEO LORENZO BAEZA VEGA'
						]
					}
				]
			},
			{
				nombre: 'Los Andes',
				comunas: [
					{
						nombre: 'Los Andes',
						distrito: '6',
						codigo: '05301',
						locales: [
							'ESCUELA BASICA RIO BLANCO',
							'INSTITUTO CHACABUCO',
							'LICEO BICENTENARIO TECNICO AMANCAY DE LOS ANDES',
							'LICEO COMERCIAL DE LOS ANDES',
							'LICEO MAXIMILIANO SALAS MARCHAN',
							'LICEO POLITECNICO AMERICA',
							'LICEO REPUBLICA ARGENTINA',
							'LICEO SANTA CLARA (SEDE BRASIL)'
						]
					},
					{
						nombre: 'Calle Larga',
						distrito: '6',
						codigo: '05302',
						locales: [
							'ESCUELA BASICA LA PAMPILLA',
							'POLIDEPORTIVO LICEO TECNICO PROFESIONAL PEDRO AGUIRRE CERDA'
						]
					},
					{
						nombre: 'Rinconada',
						distrito: '6',
						codigo: '05303',
						locales: [
							'CENTRO DE FORMACION ACADEMICA PERFECTO DE LA FUENTE DEL VILLAR',
							'GIMNASIO MUNICIPAL',
							'LICEO PARROQUIAL TERESITA DE LOS ANDES'
						]
					},
					{
						nombre: 'San Esteban',
						distrito: '6',
						codigo: '05304',
						locales: [
							'ESCUELA BASICA SILVIO ZENTENO VERGARA',
							'ESCUELA PABLO NERUDA',
							'ESCUELA RIO COLORADO',
							'LICEO SAN ESTEBAN'
						]
					}
				]
			},
			{
				nombre: 'Petorca',
				comunas: [
					{
						nombre: 'La Ligua',
						distrito: '6',
						codigo: '05401',
						locales: [
							'COLEGIO LUIS CRUZ MARTINEZ',
							'COLEGIO PARTICULAR SUBVENCIONADO SANTA MARIA',
							'ESCUELA BASICA LOS MOLLES',
							'ESCUELA BASICA PICHICUY',
							'LICEO PULMAHUE'
						]
					},
					{
						nombre: 'Cabildo',
						distrito: '6',
						codigo: '05402',
						locales: [
							'ESCUELA BASICA ARAUCARIA',
							'LICEO BICENTENARIO TECNICO PROFESIONAL DE MINERIA',
							'LICEO POLIVALENTE A-2 DE CABILDO'
						]
					},
					{
						nombre: 'Papudo',
						distrito: '6',
						codigo: '05403',
						locales: [
							'ESCUELA BASICA PAPUDO',
							'ESCUELA RURAL PULLALLY'
						]
					},
					{
						nombre: 'Petorca',
						distrito: '6',
						codigo: '05404',
						locales: [
							'LICEO CORDILLERA CHINCOLCO',
							'LICEO JOSE MANUEL BORGOÑO NUÑEZ'
						]
					},
					{
						nombre: 'Zapallar',
						distrito: '6',
						codigo: '05405',
						locales: [
							'COLEGIO MERCEDES MATURANA GALLARDO',
							'LICEO ZAPALLAR'
						]
					}
				]
			},
			{
				nombre: 'Quillota',
				comunas: [
					{
						nombre: 'Quillota',
						distrito: '6',
						codigo: '05501',
						locales: [
							'COLEGIO ARAUCO',
							'COLEGIO DEPORTIVO SANTIAGO ESCUTI ORREGO',
							'COLEGIO GOBERNADOR CONCHA Y SALVATIERRA',
							'COLEGIO NUEVA ERA SIGLO XXIQUILLOTA',
							'COLEGIO REPUBLICA DE MEXICO',
							'COLEGIO ROBERTO MATTA',
							'COLEGIO VALLE DE QUILLOTA',
							'ESCUELA BASICA DE NIÑAS CANADA',
							'ESCUELA BASICA E-163 ABEL GUERRERO AGUIRRE',
							'ESCUELA BASICA NUESTRO MUNDO',
							'ESCUELA SUPERIOR N°1',
							'INSTITUTO RAFAEL ARIZTIA',
							'LICEO COMERCIAL DE QUILLOTA C-27'
						]
					},
					{
						nombre: 'La Calera',
						distrito: '6',
						codigo: '05502',
						locales: [
							'COLEGIO BECARB II',
							'COLEGIO FUNDADORES DE LA CALERA',
							'COLEGIO TERESA BROWN DE ARIZTIA',
							'ESCUELA BASICA IRMA SAPIAIN',
							'ESCUELA BASICA PALESTINA',
							'ESCUELA JOSEFINA HUICI',
							'LICEO PARTICULAR SAN JOSE',
							'LICEO PEDRO DE VALDIVIA B-17'
						]
					},
					{
						nombre: 'Hijuelas',
						distrito: '6',
						codigo: '05503',
						locales: [
							'COLEGIO PARROQUIAL SAN NICOLAS',
							'LICEO MUNICIPAL LUIS LABORDA'
						]
					},
					{
						nombre: 'La Cruz',
						distrito: '6',
						codigo: '05504',
						locales: [
							'COLEGIO LEONARDO DA VINCI',
							'ESCUELA MARIA ALONSO CHACON',
							'LICEO SAN ISIDRO',
							'LICEO TECNICO AGRICOLA OBISPO RAFAEL LIRA INFANTE'
						]
					},
					{
						nombre: 'Nogales',
						distrito: '6',
						codigo: '05506',
						locales: [
							'COLEGIO EL MELON',
							'ESCUELA BASICA ULDA ARACENA GONZALEZ F-203',
							'LICEO MUNICIPAL JUAN RUSQUE PORTAL'
						]
					}
				]
			},
			{
				nombre: 'San Antonio',
				comunas: [
					{
						nombre: 'San Antonio',
						distrito: '7',
						codigo: '05601',
						locales: [
							'COLEGIO AGRICOLA CUNCUMEN GONZALO BARROS AMUNATEGUI',
							'COLEGIO ESPAÑA',
							'COLEGIO NUEVA PROVIDENCIA',
							'ESCUELA INDUSTRIAL SAN ANTONIO',
							'ESCUELA MOVILIZADORES PORTUARIOS',
							'ESCUELA VILLA LAS DUNAS',
							'GRUPO ESCOLAR PRESIDENTE PEDRO AGUIRRE CERDA',
							'INSTITUTO COMERCIAL MARITIMO PACIFICO SUR',
							'INSTITUTO DEL PUERTO DE SAN ANTONIO',
							'LICEO GABRIELA MISTRAL',
							'LICEO JUAN DANTE PARRAGUEZ ARELLANO',
							'LICEO NACIONAL DE LLO LLEO',
							'LICEO SANTA TERESITA DE LLOLLEO'
						]
					},
					{
						nombre: 'Algarrobo',
						distrito: '7',
						codigo: '05602',
						locales: [
							'COLEGIO TERESA DE LOS ANDES-ALGARROBO',
							'LICEO TECNICO CARLOS ALESSANDRI ALTAMIRANO',
							'LICEO TECNICO CARLOS ALESSANDRI ALTAMIRANO LOCAL: 2'
						]
					},
					{
						nombre: 'Cartagena',
						distrito: '7',
						codigo: '05603',
						locales: [
							'COLEGIO PRESIDENTE AGUIRRE CERDA G-496',
							'COLEGIO VILLA CARTAGO',
							'LICEO A-44 POETA VICENTE HUIDOBRO'
						]
					},
					{
						nombre: 'El Quisco',
						distrito: '7',
						codigo: '05604',
						locales: [
							'COLEGIO EL QUISCO',
							'COMPLEJO EDUCACIONAL CLARA SOLOVERA'
						]
					},
					{
						nombre: 'El Tabo',
						distrito: '7',
						codigo: '05605',
						locales: [
							'COLEGIO EL TABO',
							'ESCUELA BASICA LAS CRUCES'
						]
					},
					{
						nombre: 'Santo Domingo',
						distrito: '7',
						codigo: '05606',
						locales: [
							'COLEGIO PEOPLE HELP PEOPLE',
							'COLEGIO SANTO DOMINGO HELEN LEE LASSEN'
						]
					}
				]
			},
			{
				nombre: 'San Felipe de Aconcagua',
				comunas: [
					{
						nombre: 'San Felipe',
						distrito: '6',
						codigo: '05701',
						locales: [
							'COLEGIO PORTALIANO',
							'COLEGIO SANTA JUANA DE ARCO',
							"ESCUELA BASICA GENERAL BERNARDO O'HIGGINS RIQUELME (E-58)",
							'ESCUELA JOSE DE SAN MARTIN',
							'ESCUELA MANUEL RODRIGUEZ ERDOIZA',
							'LICEO BICENTENARIO CORDILLERA DE SAN FELIPE',
							'LICEO DE NIÑAS CORINA URBINA VILLANUEVA B-5',
							'LICEO PARTICULAR MIXTO SAN FELIPE',
							'LICEO ROBERTO HUMERES OYANEDER'
						]
					},
					{
						nombre: 'Catemu',
						distrito: '6',
						codigo: '05702',
						locales: [
							'ESCUELA MARIA TERESA DEL CANTO MOLINA',
							'LICEO POLIVALENTE FERNANDO SILVA CASTELLON'
						]
					},
					{
						nombre: 'Llaillay',
						distrito: '6',
						codigo: '05703',
						locales: [
							'ESCUELA BASICA AGUSTIN EDWARDS',
							'LICEO MENESIANO SAGRADO CORAZON',
							'LICEO POLITECNICO LLAY LLAY B-15'
						]
					},
					{
						nombre: 'Panquehue',
						distrito: '6',
						codigo: '05704',
						locales: [
							'LICEO BICENTENARIO COLEGIO PANQUEHUE'
						]
					},
					{
						nombre: 'Putaendo',
						distrito: '6',
						codigo: '05705',
						locales: [
							'ESCUELA MARIE POUSSEPIN',
							'LICEO MANUEL MARIN FRITIS'
						]
					},
					{
						nombre: 'Santa María',
						distrito: '6',
						codigo: '05706',
						locales: [
							'COLEGIO SANTA MARIA DE ACONCAGUA',
							'LICEO DARIO SALAS'
						]
					}
				]
			},
			{
				nombre: 'Marga Marga',
				comunas: [
					{
						nombre: 'Quilpué',
						distrito: '6',
						codigo: '05801',
						locales: [
							'COLEGIO ACONCAGUA',
							'COLEGIO CAPITAN IGNACIO CARRERA PINTO',
							'COLEGIO COEDUCACIONAL PARTICULAR QUILPUE',
							'COLEGIO D-417 GUARDIAMARINA GUILLERMO ZAÑARTU IRIGOYEN',
							'COLEGIO ESPERANZA',
							'COLEGIO FERNANDO DURAN VILLARREAL',
							'COLEGIO FUNDADORES DE QUILPUE',
							'COLEGIO JOSE MIGUEL INFANTE D-437',
							'COLEGIO LIAHONA',
							'COLEGIO LOS REYES',
							'COLEGIO PASIONISTAS DE QUILPUE',
							'COLEGIO SAINT-LAWRENCE',
							'ESCUELA BASICA DARIO SALAS E-423',
							'ESCUELA COMANDANTE ELEUTERIO RAMIREZ MOLINA',
							'ESCUELA G-419 LOS MOLLES',
							'LICEO A-39 GUILLERMO GRONEMEYER ZAMORANO',
							'LICEO COMERCIAL ALEJANDRO LUBET VERGARA',
							'LICEO GASTRONOMIA Y TURISMO',
							'LICEO JUAN XXIII SEDE EL BELLOTO'
						]
					},
					{
						nombre: 'Limache',
						distrito: '6',
						codigo: '05802',
						locales: [
							'COLEGIO NACIONAL',
							'ESCUELA BASICA BRASILIA',
							'ESCUELA BASICA SUPERIOR MIXTA Nº 88',
							'ESCUELATENIENTE HERNAN MERINO CORREA',
							'LICEO DE LIMACHE'
						]
					},
					{
						nombre: 'Olmué',
						distrito: '6',
						codigo: '05803',
						locales: [
							'COLEGIOIGNACIO CARRERA PINTO',
							'ESCUELA ATENAS',
							'LICEO DE OLMUE'
						]
					},
					{
						nombre: 'Villa Alemana',
						distrito: '6',
						codigo: '05804',
						locales: [
							'COLEGIO ALEXANDER FLEMING',
							'COLEGIO CHAMPAGNAT',
							'COLEGIO CHARLES DARWIN',
							'COLEGIO HISPANO',
							'COLEGIO MANUEL MONTT',
							'COLEGIO NUEVO MILENIO',
							'ESCUELA LATINA INES GALLARDO ORELLANA',
							'LICEO BICENTENARIO MARY GRAHAM (BASICA)',
							'LICEO BICENTENARIO TECNICO PROFESIONAL MARY GRAHAM (MEDIA)',
							'LICEO TECNOLOGICO VILLA ALEMANA',
							'SCUOLA ITALIANA GIROLAMO LONGHI VILLA ALEMANA'
						]
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
						codigo: '13101',
						locales: [
							'COLEGIO ALTO PALENA',
							'COLEGIO EXCELSIOR LOCAL: 1',
							'COLEGIO EXCELSIOR LOCAL: 2',
							'COLEGIO FILIPENSE',
							'COLEGIO NUESTRA SEÑORA DE ANDACOLLO LOCAL: 1',
							'COLEGIO NUESTRA SEÑORA DE ANDACOLLO LOCAL: 2',
							'COLEGIO PARTICULAR OZANAM LOCAL: 1',
							'COLEGIO PARTICULAR OZANAM LOCAL: 2',
							'COLEGIO SAN ANTONIO LOCAL: 1',
							'COLEGIO SAN ANTONIO LOCAL: 2',
							'ESCUELA BASICA BENJAMIN VICUÑA MACKENNA',
							'ESCUELA BASICA IRENE FREI DE CID',
							'ESCUELA BASICA LIBERTADORES DE CHILE LOCAL: 1',
							'ESCUELA BASICA LIBERTADORES DE CHILE LOCAL: 2',
							'ESCUELA BASICA PROVINCIA DE CHILOE',
							'ESCUELA BASICA REPUBLICA DE COLOMBIA',
							'ESCUELA BASICA REPUBLICA DEL ECUADOR',
							'ESCUELA BASICA REPUBLICA DE MEXICO',
							'ESCUELA BASICA REPUBLICA DE PANAMA',
							'ESCUELA BASICA REPUBLICA ORIENTAL DEL URUGUAY',
							'ESCUELA BASICA SALVADOR SANFUENTES LOCAL: 1',
							'ESCUELA BASICA SALVADOR SANFUENTES LOCAL: 2',
							'ESCUELA BASICA SALVADOR SANFUENTES LOCAL: 3',
							'ESCUELA CADETE ARTURO PRAT CHACON',
							'ESCUELA COLEGIO POLIVALENTE SANTA FAMILIA',
							'ESCUELA DIFERENCIAL JUAN SANDOVAL CARRASCO',
							'ESCUELA FERNANDO ALESSANDRI RODRIGUEZ',
							'ESCUELA REPUBLICA DE ALEMANIA',
							'F64 -ESCUELA PILOTO PARDO',
							'INACAP SANTIAGO CENTRO LOCAL: 1',
							'INACAP SANTIAGO CENTRO LOCAL: 2',
							'INSTITUTO HERMANOS MATTE LOCAL: 1',
							'INSTITUTO HERMANOS MATTE LOCAL: 2',
							'INSTITUTO SUPERIOR DE COMERCIO EDUARDO FREI MONTALVA LOCAL: 1',
							'INSTITUTO SUPERIOR DE COMERCIO EDUARDO FREI MONTALVA LOCAL: 2',
							'LICEO BICENTENARIO TERESA PRATS LOCAL: 1',
							'LICEO BICENTENARIO TERESA PRATS LOCAL: 2',
							'LICEO CONFEDERACION SUIZA',
							'LICEO DE APLICACION RECTOR JORGE E SCHNE 21',
							'LICEO DE APLICACION RECTOR JORGE E SCHNE 29 LOCAL: 1',
							'LICEO DE APLICACION RECTOR JORGE E SCHNE 29 LOCAL: 2',
							'LICEO INDUSTRIAL ELIODORO GARCIA ZEGERS LOCAL: 1',
							'LICEO INDUSTRIAL ELIODORO GARCIA ZEGERS LOCAL: 2',
							'LICEO JAVIERA CARRERA LOCAL: 1',
							'LICEO JAVIERA CARRERA LOCAL: 2',
							'LICEO JOSE DE SAN MARTIN',
							'LICEO MANUEL BARROS BORGOÑO LOCAL: 1',
							'LICEO MANUEL BARROS BORGOÑO LOCAL: 2',
							'LICEO MIGUEL DE CERVANTES Y SAAVEDRA',
							'LICEO MUNICIPAL METROPOLITANO DE ADULTOS LOCAL: 1',
							'LICEO MUNICIPAL METROPOLITANO DE ADULTOS LOCAL: 2',
							'LICEO NRO 2 MIGUEL LUIS AMUNATEGUI LOCAL: 1',
							'LICEO NRO 2 MIGUEL LUIS AMUNATEGUI LOCAL :2',
							'LICEO POLITECNICO PRESIDENTE GABRIEL GONZALEZ VIDELA',
							'LICEO POLITECNICO SARA BLINDER DARGOLTZ',
							'LICEO PROFESIONAL ABDON CIFUENTES LOCAL: 1',
							'LICEO PROFESIONAL ABDON CIFUENTES LOCAL: 2',
							'LICEO REPUBLICA DE BRASIL',
							'MIGUEL DE CERVANTES Y SAAVEDRA ANEXO A-8 LOCAL: 1',
							'MIGUEL DE CERVANTES Y SAAVEDRA ANEXO A-8 LOCAL: 2'
						]
					},
					{
						nombre: 'Cerrillos',
						distrito: '8',
						codigo: '13102',
						locales: [
							'COLEGIO PARTICULAR MATER DEI',
							'COLEGIO SAN JOSE DE CERRILLOS',
							'ESCUELA BASICA CAMPOS DE MAIPU - CERRILLOS',
							'ESCUELA BASICA CONDORES DE PLATA',
							'ESCUELA BASICA PARTICULAR SAINT MAURICES',
							'ESCUELA BASICA PEDRO AGUIRRE CERDA',
							'ESCUELA CERRILLOS',
							'ESCUELA EJERCITO LIBERTADOR DE CERRILLOS',
							'ESCUELA ESTRELLA REINA DE CHILE',
							'ESCUELA JOSE JOAQUIN PRIETO VIAL',
							'ESCUELA LOTHAR KOMMER BRUGER',
							'LICEO POLIVALENTE DOCTOR LUIS VARGAS SALCEDO'
						]
					},
					{
						nombre: 'Cerro Navia',
						distrito: '9',
						codigo: '13103',
						locales: [
							'ESCUELA ALIANZA LOCAL: 1',
							'ESCUELA ALIANZA LOCAL: 2',
							'ESCUELA BASICA PAULO FREIRE',
							'ESCUELA CIUDAD SANTO DOMINGO DE GUZMAN',
							'ESCUELA DOCTOR TREVISO GIRARDI TONELLI',
							'ESCUELA ESPECIAL SARGENTO CANDELARIA',
							'ESCUELA FEDERICO ACEVEDO SALAZAR',
							'ESCUELA GENERAL RENE ESCAURIAZA',
							'ESCUELA HERMINDA DE LA VICTORIA',
							'ESCUELA MARIA LUISA BOMBAL',
							'ESCUELA MILLAHUE',
							'ESCUELA PRESIDENTE ROOSEVELT',
							'ESCUELA PROFESOR MANUEL GUERRERO CEBALLOS',
							'ESCUELA PROVINCIA DE ARAUCO',
							'ESCUELA REPUBLICA DE CROACIA',
							'ESCUELA SARGENTO CANDELARIA',
							'LICEO BICENTENARIO DE EXCELENCIA NACIONAL DE CERRO NAVIA',
							'LICEO POLIVALENTE LOS HEROES DE LA CONCEPCION'
						]
					},
					{
						nombre: 'Conchalí',
						distrito: '9',
						codigo: '13104',
						locales: [
							'CENTRO EDUCACIONAL POETA EUSEBIO LILLO',
							'COLEGIO LIBERTADOR SAN MARTIN',
							'ESCUELA ALLIPEN',
							'ESCUELA ARAUCARIAS DE CHILE',
							'ESCUELA ATENEA',
							'ESCUELA AVIADOR DAGOBERTO GODOY F.',
							'ESCUELA BASICA PARTICULAR THE LITTLE SCHOOL',
							'ESCUELA CAMILO HENRIQUEZ',
							'ESCUELA D-114 GENERAL BERNALES',
							'ESCUELA DOCTORA ELOISA DIAZ INSUNZA LOCAL: 1',
							'ESCUELA DOCTORA ELOISA DIAZ INSUNZA LOCAL: 2',
							'ESCUELA HORACIO JOHNSON GANA',
							'ESCUELA PARTICULAR EL CARMEN',
							'ESCUELA SOL NACIENTE',
							'ESCUELA UNESCO',
							'ESCUELA VALLE DEL INCA',
							'LICEO ALBERTO BLEST GANA',
							'LICEO MUNICIPAL ALMIRANTE GALVARINO RIVEROS',
							'LICEO POETA FEDERICO GARCIA LORCA',
							'LICEO POLIVALENTE ABDON CIFUENTES'
						]
					},
					{
						nombre: 'El Bosque',
						distrito: '13',
						codigo: '13105',
						locales: [
							'CENTRO CIVICO CULTURAL EL BOSQUE',
							'COLEGIO BATALLA DE LA CONCEPCION',
							'COLEGIO JOSE ABELARDO NUÑEZ N°1',
							'COMPLEJO EDUCACIONAL FELIPE HERRERA LANE',
							'COMPLEJO EDUCACIONAL PARTICULAR DE LAS ACACIAS LOCAL: 1',
							'COMPLEJO EDUCACIONAL PARTICULAR DE LAS ACACIAS LOCAL: 2',
							'ESCUELA BASICA AVIADORES',
							'ESCUELA BASICA BASE EL BOSQUE',
							'ESCUELA BASICA JOSE MARTI',
							'ESCUELA BASICA MARIO ARCE GATICA',
							'ESCUELA BASICA NUESTRA SEÑORA MARIA INMACULADA',
							'ESCUELA BASICA PAUL HARRIS',
							'ESCUELA BASICA VILLA SANTA ELENA',
							'ESCUELA CIUDAD DE LYON',
							'ESCUELA CLAUDIO ARRAU LEON',
							'ESCUELA GENERAL ALBERTO A. BACHELET MARTINEZ',
							'ESCUELA MARCIAL MARTINEZ FERRARI',
							'ESCUELA NEMESIO ANTUNEZ LOCAL: 1',
							'ESCUELA NEMESIO ANTUNEZ LOCAL: 2',
							'ESCUELA ORLANDO LETELIER',
							'LICEO CHRISTA MC AULIFFE LOCAL: 1',
							'LICEO CHRISTA MC AULIFFE LOCAL: 2',
							'LICEO JUAN GOMEZ MILLAS LOCAL: 1',
							'LICEO JUAN GOMEZ MILLAS LOCAL: 2'
						]
					},
					{
						nombre: 'Estación Central',
						distrito: '8',
						codigo: '13106',
						locales: [
							'CENTRO EDUCACIONAL MUNICIPAL DOCTOR AMADOR NEGHME R.',
							'ESCUELA ARNALDO FALABELLA',
							'ESCUELA BASICA ARTURO ALESSANDRI PALMA LOCAL: 1',
							'ESCUELA BASICA ARTURO ALESSANDRI PALMA LOCAL: 2',
							'ESCUELA BASICA CAROLINA VERGARA AYARES D-276 LOCAL: 1',
							'ESCUELA BASICA CAROLINA VERGARA AYARES D-276 LOCAL: 2',
							'ESCUELA BASICA ESTADO DE PALESTINA LOCAL: 1',
							'ESCUELA BASICA ESTADO DE PALESTINA LOCAL: 2',
							'ESCUELA BASICA HUMBERTO VALENZUELA GARCIA',
							'ESCUELA BASICA PACTO ANDINO LOCAL: 1',
							'ESCUELA BASICA PACTO ANDINO LOCAL: 2',
							'ESCUELA BASICA PROFESOR RAMON DEL RIO LOCAL: 1',
							'ESCUELA BASICA PROFESOR RAMON DEL RIO LOCAL: 2',
							'ESCUELA BASICA UNION LATINOAMERICANA',
							'ESCUELA CARLOS CONDELL DE LA HAZA LOCAL: 1',
							'ESCUELA CARLOS CONDELL DE LA HAZA LOCAL: 2',
							'ESCUELA PARTICULAR JOSE ANTONIO LECAROS',
							'ESCUELA REPUBLICA DE AUSTRIA',
							'LICEO BICENTENARIO POLIVALENTE A-71 GUILLERMO FELIU CRUZ',
							'LICEO ESTACION CENTRAL LOCAL: 1',
							'LICEO ESTACION CENTRAL LOCAL: 2',
							'LICEO MADRE VICENCIA'
						]
					},
					{
						nombre: 'Huechuraba',
						distrito: '9',
						codigo: '13107',
						locales: [
							'CENTRO EDUCACIONAL DE HUECHURABA LOCAL: 1',
							'CENTRO EDUCACIONAL DE HUECHURABA LOCAL: 2',
							'CENTRO EDUCACIONAL DE HUECHURABA LOCAL: 3',
							'CENTRO EDUCACIONAL ERNESTO YAÑEZ RIVERA',
							'COLEGIO GRACE COLLEGE LOCAL: 1',
							'COLEGIO GRACE COLLEGE LOCAL: 2',
							'COLEGIO SAN FRANCISCO JAVIER DE HUECHURABA',
							'COLEGIO SANTA TERESA DE JESUS DE LOS ANDES',
							'ESCUELA ADELAIDA LA FETRA',
							'ESCUELA BASICA CARLOS PRATS GONZALEZ',
							'ESCUELA JOSE ABELARDO NUÑEZ N°3',
							'ESCUELA SANTA VICTORIA DE HUECHURABA',
							'ESCUELA SANTIAGO DE GUAYAQUIL'
						]
					},
					{
						nombre: 'Independencia',
						distrito: '9',
						codigo: '13108',
						locales: [
							'ESCUELA BASICA CAMILO MORI',
							'LICEO GABRIELA MISTRAL LOCAL: 1',
							'LICEO GABRIELA MISTRAL LOCAL: 2',
							'LICEO MIGUEL RAFAEL PRADO LOCAL: 1',
							'LICEO MIGUEL RAFAEL PRADO LOCAL: 2',
							'LICEO MULTIGENERO DOCTORA ELOISA DIAZ INZUNZA LOCAL: 1',
							'LICEO MULTIGENERO DOCTORA ELOISA DIAZ INZUNZA LOCAL: 2',
							'LICEO POLIVALENTE A-80 PRESIDENTE JOSE MANUEL BALMACEDA LOCAL: 1',
							'LICEO POLIVALENTE A-80 PRESIDENTE JOSE MANUEL BALMACEDA LOCAL: 2',
							'LICEO SAN FRANCISCO DE QUITO LOCAL: 1',
							'LICEO SAN FRANCISCO DE QUITO LOCAL: 2',
							'LICEO SANTA TERESITA'
						]
					},
					{
						nombre: 'La Cisterna',
						distrito: '9',
						codigo: '13109',
						locales: [
							'CENTRO COMUNITARIO SERGIO SILVA ACUÑA',
							'CENTRO DE EMPRENDIMIENTO',
							'CENTRO EDUCACIONAL SANTA CLARA',
							'COLEGIO ANTU',
							'COLEGIO NACIONES UNIDAS',
							'COLEGIO PALESTINO',
							'ESCUELA BASICA OSCAR ENCALADA YOVANOVICH',
							'ESCUELA ESPERANZA JOVEN LOCAL: 1',
							'ESCUELA ESPERANZA JOVEN LOCAL: 2',
							'LICEO POLITECNICO CIENCIA Y TECNOLOGIA LOCAL: 1',
							'LICEO POLITECNICO CIENCIA Y TECNOLOGIA LOCAL: 2',
							'LICEO POLIVALENTE OLOF PALME',
							'LICEO PORTAL DE LA CISTERNA'
						]
					},
					{
						nombre: 'La Florida',
						distrito: '12',
						codigo: '13110',
						locales: [
							'BALNEARIO MUNICIPAL',
							'CENTRO EDUCACIONAL LA FLORIDA',
							'COLEGIO ALICANTE DE LA FLORIDA',
							'COLEGIO ATENAS',
							'COLEGIO CAPITAN PASTENE LOCAL: 1',
							'COLEGIO CAPITAN PASTENE LOCAL: 2',
							'COLEGIO DIVINA PASTORA LOCAL: 1',
							'COLEGIO DIVINA PASTORA LOCAL: 2',
							'COLEGIO LICARAYEN',
							'COLEGIO MARIA ELENA',
							'COLEGIO NOVA TERRA',
							'COLEGIO PARTICULAR ALCANTARA DE LA CORDILLERA LOCAL: 1',
							'COLEGIO PARTICULAR ALCANTARA DE LA CORDILLERA LOCAL: 2',
							'COLEGIO PARTICULAR FAMILIA DE NAZARETH',
							'COLEGIO PARTICULAR NEW LITTLE COLLEGE',
							'COLEGIO PARTICULAR PATRONA SEÑORA DE LOURDES',
							'COLEGIO PARTICULAR SAN FRANCISCO DE ASIS',
							'COLEGIO POLIVALENTE VICENTE VALDES',
							'COLEGIO PORTALES',
							'COLEGIO SAN DAMIAN LOCAL: 1',
							'COLEGIO SAN DAMIAN LOCAL: 2',
							'COLEGIO SANTA MARIA LOCAL: 1',
							'COLEGIO SANTA MARIA LOCAL: 2',
							'COMPLEJO EDUCACIONAL MUNICIPAL CARDENAL ANTONIO SAMORE',
							'ESCUELA BELLAVISTA',
							'ESCUELA LAS ARAUCARIAS',
							'ESCUELA LAS LILAS LOCAL: 1',
							'ESCUELA LAS LILAS LOCAL: 2',
							'ESCUELA MARCELA PAZ LOCAL: 1',
							'ESCUELA MARCELA PAZ LOCAL: 2',
							'ESCUELA OSCAR CASTRO',
							'ESCUELA PARTICULAR ROSARIO CONCHA',
							'ESCUELA SANTA IRENE',
							'ESCUELA SOTERO DEL RIO LOCAL: 1',
							'ESCUELA SOTERO DEL RIO LOCAL: 2',
							'GIMNASIO MUNICIPAL LOCAL: 1',
							'GIMNASIO MUNICIPAL LOCAL: 2',
							'LICEO ALTO CORDILLERA DE LA FLORIDA LOCAL: 1',
							'LICEO ALTO CORDILLERA DE LA FLORIDA LOCAL: 2',
							'LICEO BICENTENARIO DE EXCELENCIA BENJAMIN VICUÑA MACKENNA LOCAL: 1',
							'LICEO BICENTENARIO DE EXCELENCIA BENJAMIN VICUÑA MACKENNA LOCAL: 2',
							'LICEO BICENTENARIO DE EXCELENCIA BENJAMIN VICUÑA MACKENNA LOCAL: 3',
							'LICEO INDIRA GANDHI',
							'LICEO NUEVO AMANECER',
							'LICEO POLIVALENTE LOS ALMENDROS LOCAL: 1',
							'LICEO POLIVALENTE LOS ALMENDROS LOCAL: 2',
							'LICEO POLIVALENTE MUNICIPAL DE LA FLORIDA',
							'PIERRE TEILHARD DE CHARDIN'
						]
					},
					{
						nombre: 'La Granja',
						distrito: '10',
						codigo: '13111',
						locales: [
							'COLEGIO CHRISTIAN GARDEN SCHOOL',
							'COLEGIO MUNICIPAL PROCERES DE CHILE',
							'ESCUELA BASICA BENJAMIN SUBERCASEAUX',
							'ESCUELA BASICA ISLAS DE CHILE',
							'ESCUELA BASICA LA ARAUCANIA',
							'ESCUELA BASICA PADRE ESTEBAN GUMUCIO VIVES',
							'ESCUELA BASICA POETA OSCAR CASTRO ZUÑIGA',
							'ESCUELA BASICA SANITAS',
							'ESCUELA BASICA TECNO SUR',
							'ESCUELA PARTICULAR CLAUDIO MATTE',
							'LICEO DOCTOR ALEJANDRO DEL RIO',
							'LICEO MALAQUIAS CONCHA LOCAL: 1',
							'LICEO MALAQUIAS CONCHA LOCAL: 2',
							'LICEO MUNICIPAL LA GRANJA POETA NERUDA',
							'LICEO POLIVALENTE FRANCISCO FRIAS VALENZUELA',
							'LICEO TECNICO PROFESIONAL PATRICIO AYLWIN AZOCAR LOCAL: 1',
							'LICEO TECNICO PROFESIONAL PATRICIO AYLWIN AZOCAR LOCAL: 2'
						]
					},
					{
						nombre: 'La Pintana',
						distrito: '12',
						codigo: '13112',
						locales: [
							'CENTRO EDUCACIONAL MUNICIPAL MARIANO LATORRE',
							'COLEGIO IBEROAMERICANO',
							'COLEGIO JORGE HUNEEUS ZEGERS',
							'COLEGIO NERUDA',
							'COLEGIO TECNICO PROFESIONAL APRENDER',
							'COLEGIO TECNICO PROFESIONAL NOCEDAL',
							'ESCUELA BASICA JUAN DE DIOS ALDEA',
							'ESCUELA BASICA PROFESORA AURELIA ROJAS BURGOS',
							'ESCUELA CAPITAN AVALOS LOCAL: 1',
							'ESCUELA CAPITAN AVALOS LOCAL: 2',
							'ESCUELA MUNICIPAL VIOLETA PARRA',
							'ESCUELA PABLO DE ROKHA LOCAL: 1',
							'ESCUELA PABLO DE ROKHA LOCAL: 2',
							'ESCUELA PARTICULAR PRESIDENTE JOSE JOAQUIN PRIETO LOCAL: 1',
							'ESCUELA PARTICULAR PRESIDENTE JOSE JOAQUIN PRIETO LOCAL: 2',
							'LICEO MUNICIPAL EL ROBLE',
							'LICEO MUNICIPALIZADO CENTRO EDUCACIONAL LA PINTANA LOCAL: 1',
							'LICEO MUNICIPALIZADO CENTRO EDUCACIONAL LA PINTANA LOCAL: 2',
							'LICEO N°523 PARQUE DE LAS AMERICAS',
							'LICEO SERGIO SILVA BASCUÑAN'
						]
					},
					{
						nombre: 'La Reina',
						distrito: '11',
						codigo: '13113',
						locales: [
							'COLEGIO MUNICIPALIZADO CONFEDERACION SUIZA LOCAL: 1',
							'COLEGIO MUNICIPALIZADO CONFEDERACION SUIZA LOCAL: 2',
							'COLEGIO PARTICULAR SAGRADO CORAZON DE JESUS DE LA REINA',
							'COLEGIO SAN CONSTANTINO',
							'COLEGIO SANTA CATALINA LABOURE',
							'COLEGIO SANTA MARIA REINA',
							'COLEGIO TERESIANO ENRIQUE DE OSSO LOCAL: 1',
							'COLEGIO TERESIANO ENRIQUE DE OSSO LOCAL: 2',
							'COMPLEJO EDUCACIONAL LA REINA SECCION BASICA',
							'COMPLEJO EDUCACIONAL LA REINA SECCION MEDIA LOCAL: 1',
							'COMPLEJO EDUCACIONAL LA REINA SECCION MEDIA LOCAL: 2',
							'ESCUELA BASICA YANGTSE EX E-229',
							'ESCUELA PALESTINA LOCAL: 1',
							'ESCUELA PALESTINA LOCAL: 2',
							'LICEO EUGENIO MARIA DE HOSTOS'
						]
					},
					{
						nombre: 'Las Condes',
						distrito: '11',
						codigo: '13114',
						locales: [
							'CENTRO DEPORTIVO ROLF NATHAN',
							'COLEGIO ACHIGA COMEDUC',
							'COLEGIO ALCAZAR DE LAS CONDES LOCAL: 1',
							'COLEGIO ALCAZAR DE LAS CONDES LOCAL: 2',
							'COLEGIO ALEMAN DE SANTIAGO LOCAL: 1',
							'COLEGIO ALEMAN DE SANTIAGO LOCAL: 2',
							'COLEGIO COMPAÑIA DE MARIA APOQUINDO LOCAL: 1',
							'COLEGIO COMPAÑIA DE MARIA APOQUINDO LOCAL: 2',
							'COLEGIO DEL SAGRADO CORAZON APOQUINDO LOCAL: 1',
							'COLEGIO DEL SAGRADO CORAZON APOQUINDO LOCAL: 2',
							'COLEGIO DEL VERBO DIVINO LOCAL: 1',
							'COLEGIO DEL VERBO DIVINO LOCAL: 2',
							'COLEGIO DIFERENCIAL PAUL HARRIS',
							'COLEGIO INSTITUCION TERESIANA LOCAL: 1',
							'COLEGIO INSTITUCION TERESIANA LOCAL: 2',
							'COLEGIO LA GIROUETTE',
							'COLEGIO LEONARDO DA VINCI DE LAS CONDES',
							'COLEGIO MUNICIPAL DE LAS CONDES',
							'COLEGIO NUESTRA SEÑORA DEL ROSARIO LAS CONDES',
							'COLEGIO REDLAND SCHOOL',
							'COLEGIO SAN FRANCISCO DEL ALBA LOCAL: 1',
							'COLEGIO SAN FRANCISCO DEL ALBA LOCAL: 2',
							'COLEGIO SAN FRANCISCO LOS DOMINICOS',
							'COLEGIO SAN JUAN EVANGELISTA LOCAL: 1',
							'COLEGIO SAN JUAN EVANGELISTA LOCAL: 2',
							'COLEGIO SEMINARIO PONTIFICIO MENOR LOCAL: 1',
							'COLEGIO SEMINARIO PONTIFICIO MENOR LOCAL: 2',
							'COLEGIO VILLA MARIA ACADEMY LOCAL: 1',
							'COLEGIO VILLA MARIA ACADEMY LOCAL: 2',
							'ESTADIO MUNICIPAL PAUL HARRIS',
							'INSTITUTO PRESIDENTE ERRAZURIZ',
							'LICEO ALEXANDER FLEMING DE LAS CONDES LOCAL: 1',
							'LICEO ALEXANDER FLEMING DE LAS CONDES LOCAL: 2',
							'LICEO BICENTENARIO SANTA MARIA DE LAS CONDES LOCAL: 1',
							'LICEO BICENTENARIO SANTA MARIA DE LAS CONDES LOCAL: 2',
							'LICEO BICENTENARIO SIMON BOLIVAR LOCAL: 1',
							'LICEO BICENTENARIO SIMON BOLIVAR LOCAL: 2',
							'LICEO JUAN PABLO II DE LAS CONDES LOCAL: 1',
							'LICEO JUAN PABLO II DE LAS CONDES LOCAL: 2',
							'LICEO RAFAEL SOTOMAYOR LOCAL: 1',
							'LICEO RAFAEL SOTOMAYOR LOCAL: 2'
						]
					},
					{
						nombre: 'Lo Barnechea',
						distrito: '11',
						codigo: '13115',
						locales: [
							'CENTRO CULTURAL EL TRANQUE',
							'COLEGIO DIFERENCIAL MADRE TIERRA',
							'COLEGIO EVEREST LOCAL: 1',
							'COLEGIO EVEREST LOCAL: 2',
							'COLEGIO LOS ALERCES LOCAL: 1',
							'COLEGIO LOS ALERCES LOCAL: 2',
							'COLEGIO MONTE TABOR Y NAZARET LOCAL: 1',
							'COLEGIO MONTE TABOR Y NAZARET LOCAL: 2',
							'THE MAYFLOWER SCHOOL LOCAL: 1',
							'THE MAYFLOWER SCHOOL LOCAL: 2',
							'THE NEWLAND SCHOOL LOCAL: 1',
							'THE NEWLAND SCHOOL LOCAL: 2',
							'THE SOUTHLAND SCHOOL'
						]
					},
					{
						nombre: 'Lo Espejo',
						distrito: '13',
						codigo: '13116',
						locales: [
							'CENTRO EDUCACIONAL CARDENAL JOSE MARIA CARO',
							'COLEGIO LO ESPEJO',
							'COLEGIO SAN LUCAS DE LO ESPEJO',
							'ESCUELA ALICIA ARIZTIA DE SILVA',
							'ESCUELA BASICA ACAPULCO',
							'ESCUELA BASICA BERNARDO O´HIGGINS',
							'ESCUELA BASICA CLARA ESTRELLA',
							'ESCUELA BASICA REPUBLICA DE LAS FILIPINAS',
							'ESCUELA BASICA SANTA ADRIANA',
							'ESCUELA BLUE STAR COLLEGE',
							'ESCUELA D 570 RAUL SAEZ SAEZ',
							'ESCUELA ESPECIAL TAMARUGAL',
							'ESCUELA REPUBLICA DE INDONESIA',
							'LICEO POLITECNICO PARTICULAR SAGRADO CORAZON',
							'LICEO TENIENTE FRANCISCO MERY AGUIRRE'
						]
					},
					{
						nombre: 'Lo Prado',
						distrito: '9',
						codigo: '13117',
						locales: [
							'ANEXO INSTITUTO PEDRO PRADO',
							'COLEGIO MUSTAFA KEMAL ATATURK',
							'COMPLEJO EDUCACIONAL PEDRO PRADO',
							'ESCUELA BAU',
							'ESCUELA GOLDA MEIR',
							'ESCUELA JAIME GOMEZ GARCIA LOCAL: 1',
							'ESCUELA JAIME GOMEZ GARCIA LOCAL: 2',
							'ESCUELA MARISCAL DE AYACUCHO',
							'ESCUELA PARTICULAR BABILONIA',
							'ESCUELA POETA VICENTE HUIDOBRO',
							'ESCUELA PROFESORA GLADYS VALENZUELA',
							'ESCUELA SOR TERESA DE LOS ANDES',
							'LICEO BICENTENARIO POETA PABLO NERUDA',
							'LICEO TENIENTE DAGOBERTO GODOY N°3'
						]
					},
					{
						nombre: 'Macul',
						distrito: '10',
						codigo: '13118',
						locales: [
							'COLEGIO EL ALBA DE MACUL',
							'COLEGIO SAN MARCOS',
							'COLEGIO SAN VIATOR LOCAL: 1',
							'COLEGIO SAN VIATOR LOCAL: 2',
							'COMPLEJO EDUCACIONAL ESPERANZA',
							'COMPLEJO EDUCACIONAL JOAQUIN EDWARDS BELLO',
							'ESCUELA BASICA CENTRO EDUCACIONAL MILLANTU',
							'ESCUELA JOSE BERNARDO SUAREZ',
							'ESCUELA JULIO MONTT SALAMANCA E-194 LOCAL: 1',
							'ESCUELA JULIO MONTT SALAMANCA E-194 LOCAL: 2',
							'ESCUELA VILLA MACUL D-200',
							'ESTADIO MONUMENTAL LOCAL: 1',
							'ESTADIO MONUMENTAL LOCAL: 2',
							'ESTADIO MONUMENTAL LOCAL: 3',
							'LICEO MUNICIPALIZADO MANUEL ROJAS',
							'LICEO POLIVALENTE MERCEDES MARIN DEL SOLAR LOCAL: 1',
							'LICEO POLIVALENTE MERCEDES MARIN DEL SOLAR LOCAL: 2',
							'LICEO SALESIANO CAMILO ORTUZAR MONTT LOCAL: 1',
							'LICEO SALESIANO CAMILO ORTUZAR MONTT LOCAL: 2',
							'LICEO VILLA MACUL ACADEMIA LOCAL: 1',
							'LICEO VILLA MACUL ACADEMIA LOCAL: 2'
						]
					},
					{
						nombre: 'Maipú',
						distrito: '8',
						codigo: '13119',
						locales: [
							'CENTRO DE EDUCACION TECNICO PROFESIONAL CODEDUC LOCAL: 1',
							'CENTRO DE EDUCACION TECNICO PROFESIONAL CODEDUC LOCAL: 2',
							'CENTRO EDUCACIONAL PIAMARTINO CAROLINA LLONA DE CUEVAS',
							'CENTRO EDUCACIONAL ROUSSEAU',
							'COLEGIO ALBERTO PEREZ',
							'COLEGIO ALCAZAR',
							'COLEGIO DE LA PROVIDENCIA CARMELA LARRAIN DE INFANTE',
							'COLEGIO JACQUES COUSTEAU LOCAL: 1',
							'COLEGIO JACQUES COUSTEAU LOCAL: 2',
							'COLEGIO LOS ALPES MAIPU',
							'COLEGIO MUNICIPAL SAN SEBASTIAN DE RINCONADA',
							'COLEGIO NUESTRA SEÑORA DEL CARMEN DE MAIPU',
							'COLEGIO PARTICULAR ALICANTE DEL ROSAL LOCAL: 1',
							'COLEGIO PARTICULAR ALICANTE DEL ROSAL LOCAL: 2',
							'COLEGIO PARTICULAR CARDENAL CARLOS OVIEDO CAVADA',
							'COLEGIO POLIVALENTE CAMILO HENRIQUEZ',
							'COLEGIO POLIVALENTE DIEGO PORTALES DE MAIPU',
							'COLEGIO REPUBLICA DE GUATEMALA',
							'COLEGIO SAN JUAN DIEGO DE GUADALUPE',
							'COLEGIO SANTA MARIA DE MAIPU LOCAL: 1',
							'COLEGIO SANTA MARIA DE MAIPU LOCAL: 2',
							'COLEGIO TERRAUSTRAL DEL SOL',
							'COMPLEJO EDUCACIONAL ALBERTO WIDMER',
							'COMPLEJO EDUCACIONAL MAIPU',
							'COMPLEJO EDUCACIONAL MAIPU ANEXO RINCONADA',
							'ESCUELA BASICA 1287 SAN MARCOS APOSTOL',
							'ESCUELA BASICA 1737 LOS ALERCES DE MAIPU LOCAL: 1',
							'ESCUELA BASICA 1737 LOS ALERCES DE MAIPU LOCAL: 2',
							'ESCUELA BASICA 263 RAMON FREIRE',
							'ESCUELA BASICA BOSTON COLLEGE MAIPU',
							'ESCUELA BASICA ECHAURREN N°2',
							'ESCUELA BASICA LOS BOSQUINOS',
							'ESCUELA BASICA MUNICIPAL SAN LUIS',
							'ESCUELA BASICA PARTICULAR BOSTON COLLEGE LA FARFANA',
							'ESCUELA BASICA REINA DE SUECIA LOCAL: 1',
							'ESCUELA BASICA REINA DE SUECIA LOCAL: 2',
							'ESCUELA EL LLANO DE MAIPU',
							'ESCUELA GENERAL OHIGGINS LOCAL: 1',
							'ESCUELA GENERAL OHIGGINS LOCAL: 2',
							'ESCUELA GENERAL SAN MARTIN',
							'ESCUELA LEON HUMBERTO VALENZUELA',
							'ESCUELA PARTICULAR RUBEN DARIO',
							'ESCUELA PRESIDENTE RIESCO ERRAZURIZ LOCAL: 1',
							'ESCUELA PRESIDENTE RIESCO ERRAZURIZ LOCAL: 2',
							'ESCUELA TOMAS VARGAS LOCAL: 1',
							'ESCUELA TOMAS VARGAS LOCAL: 2',
							'ESCUELA VICENTE REYES PALAZUELOS',
							'GIMNASIO POLIDEPORTIVO MARTIN VARGAS',
							"INSTITUTO O'HIGGINS DE MAIPU",
							'LICEO BICENTENARIO DE NIÑAS DE MAIPU LOCAL: 1',
							'LICEO BICENTENARIO DE NIÑAS DE MAIPU LOCAL: 2',
							'LICEO INDUSTRIAL DOMINGO MATTE PEREZ',
							'LICEO JOSE IGNACIO ZENTENO LOCAL: 1',
							'LICEO JOSE IGNACIO ZENTENO LOCAL: 2',
							'LICEO NACIONAL DE MAIPU LOCAL: 1',
							'LICEO NACIONAL DE MAIPU LOCAL: 2',
							'LICEO NACIONAL DE MAIPU LOCAL: 3',
							'LICEO SANTIAGO BUERAS Y AVARIA',
							'LICEO TECNOLOGICO BICENTENARIO ENRIQUE KIRBERG BALTIANSKY LOCAL: 1',
							'LICEO TECNOLOGICO BICENTENARIO ENRIQUE KIRBERG BALTIANSKY LOCAL: 2',
							'LICEO TECNOLOGICO BICENTENARIO ENRIQUE KIRBERG BALTIANSKY LOCAL: 3',
							'POLIDEPORTIVO OLIMPICO',
							'SALON AUDITORIUM MUNICIPAL',
							'TEATRO MUNICIPAL'
						]
					},
					{
						nombre: 'Ñuñoa',
						distrito: '10',
						codigo: '13120',
						locales: [
							'CENTRO POLITECNICO PARTICULAR DE ÑUÑOA',
							'COLEGIO DIVINA PASTORA ÑUÑOA',
							'COLEGIO HELLEN KELLER',
							'COLEGIO N°2 DE ÑUÑOA',
							'COLEGIO PRECIOSA SANGRE',
							'COLEGIO SANTA MARTA',
							'COLEGIO UNIVERSITARIO EL SALVADOR LOCAL: 1',
							'COLEGIO UNIVERSITARIO EL SALVADOR LOCAL: 2',
							'COMPLEJO EDUCACIONAL MUNICIPAL BRIGIDA WALKER',
							'ESCUELA AURORA DE CHILE',
							'ESCUELA BASICA JOSE TORIBIO MEDINA',
							'ESCUELA BENJAMIN CLARO VELASCO',
							'ESCUELA DIFERENCIAL MUNICIPAL AMAPOLAS',
							'ESCUELA GUILLERMO ZAÑARTU IRIGOYEN',
							'ESCUELA JUAN MOYA MORALES',
							'ESCUELA PARTICULAR SAN JUAN BAUTISTA',
							'ESCUELA REPUBLICA DE COSTA RICA',
							'ESCUELA REPUBLICA DE SIRIA',
							'LICEO AUGUSTO D HALMAR',
							'LICEO CARMELA SILVA DONOSO LOCAL: 1',
							'LICEO CARMELA SILVA DONOSO LOCAL: 2',
							'LICEO CARMELA SILVA DONOSO LOCAL: 3',
							'LICEO CARMELA SILVA DONOSO LOCAL: 4',
							'LICEO COMERCIAL GABRIEL GONZALEZ VIDELA',
							'LICEO EXPERIMENTAL MANUEL DE SALAS LOCAL: 1',
							'LICEO EXPERIMENTAL MANUEL DE SALAS LOCAL: 2',
							'LICEO INDUSTRIAL BICENTENARIO CHILENO-ALEMAN LOCAL: 1',
							'LICEO INDUSTRIAL BICENTENARIO CHILENO-ALEMAN LOCAL: 2',
							'LICEO LENKA FRANULIC',
							'LICEO REPUBLICA DE SIRIA',
							'SAINT GASPAR COLLEGE LOCAL: 1',
							'SAINT GASPAR COLLEGE LOCAL: 2'
						]
					},
					{
						nombre: 'Pedro Aguirre Cerda',
						distrito: '13',
						codigo: '13121',
						locales: [
							'CENTRO EDUCATIVO REPUBLICA MEXICANA LOCAL: 1',
							'CENTRO EDUCATIVO REPUBLICA MEXICANA LOCAL: 2',
							'COLEGIO ANTONIO ACEVEDO HERNANDEZ',
							'COLEGIO GRACE SCHOOL',
							'COLEGIO PARQUE LAS AMERICAS LOCAL: 1',
							'COLEGIO PARQUE LAS AMERICAS LOCAL: 2',
							'ESCUELA BASICA RICARDO EDUARDO LATCHAM',
							'ESCUELA BOROA',
							'ESCUELA CIUDAD DE BARCELONA',
							'ESCUELA CONSOLIDADA DAVILA',
							'ESCUELA LA VICTORIA',
							'ESCUELA LO VALLEDOR',
							'ESCUELA PARTICULAR KAROL CARDENAL DE CRACOVIA',
							'ESCUELA PARTICULAR ROCIO DE LOS ANGELES',
							'ESCUELA POETAS DE CHILE',
							'ESCUELA VILLA SUR',
							'ESTABLECIMIENTO EDUCATIVO PARTICULAR ARCANGEL GABRIEL N°2',
							'ESUELA BASICA MUNICIPAL RISOPATRON',
							'LICEO MUNICIPAL ENRIQUE BACKAUSSE',
							'LICEO POLIVALENTE EUGENIO PEREIRA SALAS'
						]
					},
					{
						nombre: 'Peñalolén',
						distrito: '11',
						codigo: '13122',
						locales: [
							'CENTRO EDUCACIONAL AMERICO VESPUCIO',
							'CENTRO EDUCACIONAL DIEGO DE ALMAGRO',
							'CENTRO EDUCACIONAL EDUARDO DE LA BARRA LOCAL: 1',
							'CENTRO EDUCACIONAL EDUARDO DE LA BARRA LOCAL: 2',
							'CENTRO EDUCACIONAL MARIANO EGAÑA LOCAL: 1',
							'CENTRO EDUCACIONAL MARIANO EGAÑA LOCAL: 2',
							'CENTRO EDUCACIONAL VALLE HERMOSO',
							'COLEGIO ALCANTARA DE LOS ALTOS DE PEÑALOLEN',
							'COLEGIO BICENTENARIO MATILDE HUICI NAVAS',
							'COLEGIO JESUS SERVIDOR',
							'COLEGIO MONTEVERDE',
							'COLEGIO PARTICULAR JORGE PRIETO LETELIER',
							'COLEGIO PARTICULAR SAN FERNANDO',
							'COLEGIO SANTA SOFIA',
							'ESCUELA BASICA COLEGIO SANTA MARTA DE PEÑALOLEN',
							'ESCUELA BASICA PARTICULAR 1650 MIRAVALLE LOCAL: 1',
							'ESCUELA BASICA PARTICULAR 1650 MIRAVALLE LOCAL: 2',
							'ESCUELA CARLOS FERNANDEZ PEÑA',
							'ESCUELA JUAN BAUTISTA PASTENE',
							'ESCUELA LUIS ARRIETA CAÑAS',
							'ESCUELA PARTICULAR SANTA VICTORIA',
							'ESCUELA PARTICULAR WELCOME SCHOOL',
							'ESCUELA SAN JOSE OBRERO',
							'ESCUELA SANTA MARIA DE PEÑALOLEN',
							'ESCUELA TOBALABA',
							'ESCUELA UNION NACIONAL ARABE',
							'LICEO ANTONIO HERMIDA FABRES LOCAL: 1',
							'LICEO ANTONIO HERMIDA FABRES LOCAL: 2',
							'LICEO ANTONIO HERMIDA FABRES LOCAL: 3',
							'LICEO ERASMO ESCALA ARRIAGADA'
						]
					},
					{
						nombre: 'Providencia',
						distrito: '10',
						codigo: '13123',
						locales: [
							'CAMPUS ORIENTE UNIVERSIDAD CATOLICA LOCAL: 1',
							'CAMPUS ORIENTE UNIVERSIDAD CATOLICA LOCAL: 2',
							'CAMPUS ORIENTE UNIVERSIDAD CATOLICA LOCAL: 3',
							'CAMPUS ORIENTE UNIVERSIDAD CATOLICA LOCAL: 4',
							'COLEGIO DE LOS SAGRADOS CORAZONES PROVIDENCIA LOCAL: 1',
							'COLEGIO DE LOS SAGRADOS CORAZONES PROVIDENCIA LOCAL: 2',
							'COLEGIO PARTICULAR JOSEFINO SANTISIMA TRINIDAD',
							'COLEGIO PARTICULAR REGINA PACIS',
							'COLEGIO PEDRO DE VALDIVIA',
							'COLEGIO SAN IGNACIO EL BOSQUE LOCAL: 1',
							'COLEGIO SAN IGNACIO EL BOSQUE LOCAL: 2',
							'COLEGIO THE KENT SCHOOL',
							'ESCUELA BASICA JUAN PABLO DUARTE LOCAL: 1',
							'ESCUELA BASICA JUAN PABLO DUARTE LOCAL: 2',
							'ESCUELA PROVIDENCIA',
							'INSTITUTO DE HUMANIDADES LUIS CAMPINO LOCAL: 1',
							'INSTITUTO DE HUMANIDADES LUIS CAMPINO LOCAL: 2',
							'INSTITUTO PROFESIONAL DUOC',
							'LICEO B 42 TAJAMAR',
							'LICEO CARMELA CARVAJAL DE PRAT LOCAL: 1',
							'LICEO CARMELA CARVAJAL DE PRAT LOCAL: 2',
							'LICEO JOSE VICTORINO LASTARRIA LOCAL: 1',
							'LICEO JOSE VICTORINO LASTARRIA LOCAL: 2',
							'LICEO N°7 DE PROVIDENCIA LUISA SAAVEDRA LOCAL: 1',
							'LICEO N°7 DE PROVIDENCIA LUISA SAAVEDRA LOCAL: 2'
						]
					},
					{
						nombre: 'Pudahuel',
						distrito: '8',
						codigo: '13124',
						locales: [
							'CENTRO EDUCACIONAL PUDAHUEL',
							'COLEGIO FINLANDIA',
							'COLEGIO JUANITA FERNANDEZ SOLAR',
							'COLEGIO MANQUECURA CIUDAD DE LOS VALLES',
							'COLEGIO MINISTRO DIEGO PORTALES LOCAL: 1',
							'COLEGIO MINISTRO DIEGO PORTALES LOCAL: 2',
							'COLEGIO POLIVALENTE GERONIMO DE ALDERETE',
							'COLEGIO SAN ALBERTO HURTADO DE PUDAHUEL',
							'ESCUELA ALBERT EINSTEIN LOCAL: 1',
							'ESCUELA ALBERT EINSTEIN LOCAL: 2',
							'ESCUELA ALEXANDER GRAHAM BELL',
							'ESCUELA ANTILHUE DE PUDAHUEL',
							'ESCUELA BASICA MELVIN JONES LOCAL: 1',
							'ESCUELA BASICA MELVIN JONES LOCAL: 2',
							'ESCUELA EL SALITRE',
							'ESCUELA ELVIRA SANTA CRUZ OSSA',
							'ESCUELA ESTADO DE FLORIDA',
							'ESCUELA ESTRELLA DE CHILE LOCAL: 1',
							'ESCUELA ESTRELLA DE CHILE LOCAL: 2',
							'ESCUELA MONSEÑOR CARLOS OVIEDO',
							'ESCUELA PUERTO FUTURO',
							'ESCUELA SAN DANIEL',
							'LICEO CIUDAD DE BRASILIA',
							'LICEO MONSENOR ENRIQUE ALVEAR MEDIA LOCAL: 1',
							'LICEO MONSEÑOR ENRIQUE ALVEAR BASICA',
							'LICEO MONSEÑOR ENRIQUE ALVEAR MEDIA LOCAL: 2',
							'LINCOLN COLLEGE PUDAHUEL'
						]
					},
					{
						nombre: 'Quilicura',
						distrito: '8',
						codigo: '13125',
						locales: [
							'COLEGIO PALMARES',
							'COLEGIO PARTICULAR MELFORD COLLEGE',
							'COLEGIO PARTICULAR NOVO MUNDO',
							'COLEGIO POLIVALENTE SANTA MARIA',
							'COLEGIO SAN ADRIAN DE QUILICURA',
							'COLEGIO SAN CARLOS DE QUILICURA',
							'COLEGIO SAN ISAAC JOGUES',
							'COLEGIO SAN SEBASTIAN DE QUILICURA LOCAL: 1',
							'COLEGIO SAN SEBASTIAN DE QUILICURA LOCAL: 2',
							'COLEGIO SANTA BARBARA H.S.',
							'COLEGIO SANTIAGO - QUILICURA',
							'COMPLEJO EDUCACIONAL JOSE MIGUEL CARRERA',
							'ESCUELA BASICA ANA FRANK',
							'ESCUELA BASICA EL MAÑIO',
							'ESCUELA BASICA MUNICIPAL MERCEDES FONTECILLA',
							'ESCUELA ESTADO DE MICHIGAN',
							'ESCUELA LUIS CRUZ MARTINEZ LOCAL: 1',
							'ESCUELA LUIS CRUZ MARTINEZ LOCAL: 2',
							'ESCUELA LUIS CRUZ MARTINEZ LOCAL: 3',
							'ESCUELA PROFESORA MARIA LUISA SEPULVEDA LOCAL: 1',
							'ESCUELA PROFESORA MARIA LUISA SEPULVEDA LOCAL: 2',
							'LICEO BICENTENARIO DE EXCELENCIA FRANCISCO BILBAO BARQUIN DE QUILICURA',
							'LICEO JOSE DOMINGO CAÑAS'
						]
					},
					{
						nombre: 'Quinta Normal',
						distrito: '9',
						codigo: '13126',
						locales: [
							'COLEGIO BICENTENARIO ELVIRA HURTADO DE MATTE DE SANTIAGO',
							'ESCUELA ANTUMALAL LOCAL: 1',
							'ESCUELA ANTUMALAL LOCAL: 2',
							'ESCUELA BASICA MUNICIPAL GRENOBLE LOCAL: 1',
							'ESCUELA BASICA MUNICIPAL GRENOBLE LOCAL: 2',
							'ESCUELA DIEGO PORTALES LOCAL: 1',
							'ESCUELA DIEGO PORTALES LOCAL: 2',
							'ESCUELA INGLATERRA LOCAL: 1',
							'ESCUELA INGLATERRA LOCAL: 2',
							'ESCUELA INSIGNE GABRIELA LOCAL: 1',
							'ESCUELA INSIGNE GABRIELA LOCAL: 2',
							'ESCUELA LO FRANCO',
							'LICEO GUILLERMO LABARCA HUBERTSON LOCAL: 1',
							'LICEO GUILLERMO LABARCA HUBERTSON LOCAL: 2',
							'LICEO INDUSTRIAL BENJAMIN FRANKLIN LOCAL: 1',
							'LICEO INDUSTRIAL BENJAMIN FRANKLIN LOCAL: 2',
							'LICEO POLITECNICO',
							'LICEO POLIVALENTE JUAN ANTONIO RIOS LOCAL: 1',
							'LICEO POLIVALENTE JUAN ANTONIO RIOS LOCAL: 2'
						]
					},
					{
						nombre: 'Recoleta',
						distrito: '9',
						codigo: '13127',
						locales: [
							'CENTRO EDUCACIONAL ESCRITORES DE CHILE',
							'CENTRO EDUCACIONAL JOSE MIGUEL CARRERA',
							'COLEGIO MARIA TERESA CANCINO AGUILAR',
							'COLEGIO SAN JUAN DIEGO',
							'COMPLEJO EDUCACIONAL JUANITA FERNANDEZ SOLAR',
							'ESCUELA BASICA BILINGÜE REPUBLICA DEL PARAGUAY LOCAL: 1',
							'ESCUELA BASICA BILINGÜE REPUBLICA DEL PARAGUAY LOCAL: 2',
							'ESCUELA BASICA N° 953 JOSE ARTIGAS',
							'ESCUELA DE ADULTOS JORGE ALESSANDRI RODRIGUEZ',
							'ESCUELA EDUCACION DIFERENCIAL SANTA TERESA DE AVILA LOCAL: 1',
							'ESCUELA EDUCACION DIFERENCIAL SANTA TERESA DE AVILA LOCAL: 2',
							'ESCUELA MUNICIPAL HERMANA MARIA GORETTI',
							'ESCUELA PUERTO RICO',
							'ESCUELA RAFAEL VALDIVIESO',
							'ESCUELA SARGENTO 2 DANIEL REBOLLEDO',
							'ESCUELA VICTOR CUCCUINI',
							'ESTADIO RECOLETA',
							'LICEO A-1 VALENTIN LETELIER LOCAL: 1',
							'LICEO A-1 VALENTIN LETELIER LOCAL: 2',
							'LICEO A-1 VALENTIN LETELIER LOCAL: 3',
							'LICEO ARTURO PEREZ CANTO',
							'LICEO AVENIDA RECOLETA LOCAL: 1',
							'LICEO AVENIDA RECOLETA LOCAL: 2',
							'LICEO DOCTOR JUAN VERDAGUER PLANAS',
							'LICEO INSTITUTO TECNOLOGICO Y COMERCIAL RECOLETA-INTECO',
							'LICEO PAULA JARAQUEMADA'
						]
					},
					{
						nombre: 'Renca',
						distrito: '9',
						codigo: '13128',
						locales: [
							'CENTRO EDUCACIONAL GOYENECHEA',
							'CENTRO EDUCACIONAL LAURA VICUÑA',
							'COLEGIO POLIVALENTE SAN JOSE DE RENCA LOCAL: 1',
							'COLEGIO POLIVALENTE SAN JOSE DE RENCA LOCAL: 2',
							'COLEGIO POLIVALENTE SANTA MARIA DE LA PROVIDENCIA',
							'ESCUELA BASICA ISABEL LE BRUN',
							'ESCUELA BASICA LO VELASQUEZ',
							'ESCUELA BASICA MONSERRAT ROBERT DE GARCIA',
							'ESCUELA CAPITAN JOSE LUIS ARANEDA',
							'ESCUELA DOMINGO SANTA MARIA GONZALEZ LOCAL: 1',
							'ESCUELA DOMINGO SANTA MARIA GONZALEZ LOCAL: 2',
							'ESCUELA GENERAL ALEJANDRO GOROSTIAGA ORREGO',
							'ESCUELA N° 1365 PADRE GUSTAVO LE PAIGE LOCAL: 1',
							'ESCUELA N° 1365 PADRE GUSTAVO LE PAIGE LOCAL: 2',
							'ESCUELA REBECA MATTE BELLO',
							'INSTITUTO CUMBRE DE CONDORES PONIENTE LOCAL: 1',
							'INSTITUTO CUMBRE DE CONDORES PONIENTE LOCAL: 2',
							'LICEO INSTITUTO CUMBRE DE CONDORES LOCAL: 1',
							'LICEO INSTITUTO CUMBRE DE CONDORES LOCAL: 2',
							'LICEO THOMAS ALVA EDISON'
						]
					},
					{
						nombre: 'San Joaquín',
						distrito: '10',
						codigo: '13129',
						locales: [
							'CENTRO EDUCACIONAL HORACIO ARAVENA ANDAUR',
							'CENTRO EDUCACIONAL PROVINCIA DE ÑUBLE',
							'COLEGIO CIUDAD DE FRANKFORT',
							'COLEGIO HAYDN DE SAN JOAQUIN',
							'COLEGIO INFOCAP',
							'COLEGIO NUESTRA SEÑORA DEL HUERTO',
							'COLEGIO POLIVALENTE ADVENTISTA SANTIAGO SUR',
							'ESCUELA BASICA FRAY CAMILO HENRIQUEZ',
							'ESCUELA BASICA POETA NERUDA',
							'ESCUELA POETA VICTOR DOMINGO SILVA',
							'ESCUELA SU SANTIDAD JUAN XXIII',
							'INSTITUTO SANTO TOMAS',
							'LICEO INDUSTRIAL DE SAN MIGUEL AGUSTIN EDWARDS',
							'LICEO MUNICIPAL SAN JOAQUIN',
							'LICEO PARTICULAR ESPIRITU SANTO DEL VERBO DIVINO'
						]
					},
					{
						nombre: 'San Miguel',
						distrito: '13',
						codigo: '13130',
						locales: [
							'COLEGIO BICENTENARIO SANTO CURA DE ARS',
							'COLEGIO CHILE',
							'COLEGIO PARROQUIAL SAN MIGUEL LOCAL: 1',
							'COLEGIO PARROQUIAL SAN MIGUEL LOCAL: 2',
							'COLEGIO TOMAS MORO',
							'ESCUELA BASICA MUNICIPAL',
							'ESCUELA DE LA INDUSTRIA GRAFICA HECTOR GOMEZ',
							'ESCUELA GENERAL BASICA SANTA FE',
							'ESCUELA LLANO SUBERCASEAUX LOCAL: 1',
							'ESCUELA LLANO SUBERCASEAUX LOCAL: 2',
							'ESCUELA TERRITORIO ANTARTICO',
							'INSTITUTO MIGUEL LEON PRADO',
							'INSTITUTO SUPERIOR DE COMERCIO DE CHILE (EX A99) LOCAL: 1',
							'INSTITUTO SUPERIOR DE COMERCIO DE CHILE (EX A99) LOCAL: 2',
							'LICEO ANDRES BELLO LOCAL: 1',
							'LICEO ANDRES BELLO LOCAL: 2',
							'LICEO BETSABE HORMAZABAL DE ALARCON LOCAL: 1',
							'LICEO BETSABE HORMAZABAL DE ALARCON LOCAL: 2'
						]
					},
					{
						nombre: 'San Ramón',
						distrito: '13',
						codigo: '13131',
						locales: [
							'CENTRO DE EDUCACION PAULA JARAQUEMADA',
							'CENTRO EDUCACIONAL MIRADOR',
							'CENTRO EDUCACIONAL SAN RAMON',
							'ESCUELA BASICA ALIVEN',
							'ESCUELA BASICA EDUCADORES DE CHILE',
							'ESCUELA BASICA KARELMAPU',
							'ESCUELA BASICA SENDERO DEL SABER',
							'ESCUELA BASICA TUPAHUE',
							'ESCUELA BASICA VILLA LA CULTURA',
							'ESCUELA COLEGIO ALBERTO BLEST GANA',
							'ESCUELA NANIHUE',
							'ESCUELA PARTICULAR ARTURO MATTE LARRAIN',
							'LICEO COMERCIAL VATE VICENTE HUIDOBRO',
							'LICEO MUNICIPALIZADO ARAUCANIA',
							'LICEO MUNICIPAL PURKUYEN'
						]
					},
					{
						nombre: 'Vitacura',
						distrito: '11',
						codigo: '13132',
						locales: [
							'COLEGIO ANTARTICA CHILENA',
							'COLEGIO DE LOS SAGRADOS CORAZONES DE MANQUEHUE LOCAL: 1',
							'COLEGIO DE LOS SAGRADOS CORAZONES DE MANQUEHUE LOCAL: 2',
							'COLEGIO HUELEN',
							'COLEGIO INMACULADA CONCEPCION DE VITACURA',
							'COLEGIO LOS ANDES DE VITACURA',
							"COLEGIO SAINT GEORGE'S LOCAL: 1",
							"COLEGIO SAINT GEORGE'S LOCAL: 2",
							'COLEGIO SAN PEDRO NOLASCO',
							'COLEGIO SANTA URSULA VITACURA',
							'LICEO MUNICIPALIZADO AMANDA LABARCA'
						]
					}
				]
			},
			{
				nombre: 'Cordillera',
				comunas: [
					{
						nombre: 'Puente Alto',
						distrito: '12',
						codigo: '13201',
						locales: [
							'CENTRO EDUCACIONAL FERNANDO DE ARAGON LOCAL: 1',
							'CENTRO EDUCACIONAL FERNANDO DE ARAGON LOCAL: 2',
							'CENTRO EDUCACIONAL LARUN RAYUN',
							'CENTRO EDUCACIONAL NUEVA CREACION LOCAL: 1',
							'CENTRO EDUCACIONAL NUEVA CREACION LOCAL: 2',
							'CENTRO EDUCACIONAL PRINCIPADO DE ASTURIAS',
							'CENTRO EDUCACIONAL SAN CARLOS DE ARAGON LOCAL: 1',
							'CENTRO EDUCACIONAL SAN CARLOS DE ARAGON LOCAL: 2',
							'COLEGIO ACROPOLIS',
							'COLEGIO ALICANTE DEL SOL LOCAL: 1',
							'COLEGIO ALICANTE DEL SOL LOCAL: 2',
							'COLEGIO ALICANTE DEL SOL LOCAL: 3',
							'COLEGIO ARTURO PRAT LOCAL: 1',
							'COLEGIO ARTURO PRAT LOCAL: 2',
							'COLEGIO COMPAÑIA DE MARIA PUENTE ALTO LOCAL: 1',
							'COLEGIO COMPAÑIA DE MARIA PUENTE ALTO LOCAL: 2',
							'COLEGIO EL SEMBRADOR LOCAL: 1',
							'COLEGIO EL SEMBRADOR LOCAL: 2',
							'COLEGIO EMPRENDER OBISPO ALVEAR',
							'COLEGIO MAIPO LOCAL: 1',
							'COLEGIO MAIPO LOCAL: 2',
							'COLEGIO NAVARRA',
							'COLEGIO NUEVA ERA SIGLO XXI SEDE PUENTE ALTO',
							'COLEGIO PARTICULAR ALTAZOR LOCAL: 1',
							'COLEGIO PARTICULAR ALTAZOR LOCAL: 2',
							'COLEGIO PARTICULAR PADRE JOSE KENTENICH',
							'COLEGIO PARTICULAR POLITECNICO EYZAGUIRRE BASICA',
							'COLEGIO PARTICULAR POLITECNICO EYZAGUIRRE MEDIA',
							'COLEGIO PARTICULAR SAN JOSE DE PUENTE ALTO LOCAL: 1',
							'COLEGIO PARTICULAR SAN JOSE DE PUENTE ALTO LOCAL: 2',
							'COLEGIO PEDRO APOSTOL',
							'COLEGIO POLIVALENTE CARDENAL RAUL SILVA HENRIQUEZ LOCAL: 1',
							'COLEGIO POLIVALENTE CARDENAL RAUL SILVA HENRIQUEZ LOCAL: 2',
							'COLEGIO POLIVALENTE DOMINGO MATTE MESIAS LOCAL: 1',
							'COLEGIO POLIVALENTE DOMINGO MATTE MESIAS LOCAL: 2',
							'COLEGIO POLIVALENTE PROFESOR ILDEFONSO CALDERON',
							'COLEGIO SANTA MARIA DE LA CORDILLERA',
							'ESCUELA ANDES DEL SUR',
							'ESCUELA BASICA PADRE ALBERTO HURTADO',
							'ESCUELA CASAS VIEJAS',
							'ESCUELA CONSOLIDADA LOCAL: 1',
							'ESCUELA CONSOLIDADA LOCAL: 2',
							'ESCUELA EJERCITO LIBERTADOR',
							'ESCUELA GABRIELA',
							'ESCUELA LAS PALMAS',
							'ESCUELA LOS ANDES LOCAL: 1',
							'ESCUELA LOS ANDES LOCAL: 2',
							'ESCUELA LUIS MATTE LARRAIN',
							'ESCUELA NONATO COO LOCAL: 1',
							'ESCUELA NONATO COO LOCAL: 2',
							'ESCUELA OSCAR BONILLA LOCAL: 1',
							'ESCUELA OSCAR BONILLA LOCAL: 2',
							'ESCUELA REPUBLICA DE GRECIA LOCAL: 1',
							'ESCUELA REPUBLICA DE GRECIA LOCAL: 2',
							'ESCUELA SANTA JOAQUINA DE VEDRUNA LOCAL: 1',
							'ESCUELA SANTA JOAQUINA DE VEDRUNA LOCAL: 2',
							'ESCUELA VILLA INDEPENDENCIA LOCAL: 1',
							'ESCUELA VILLA INDEPENDENCIA LOCAL: 2',
							'ESCUELA VILLA PEDRO AGUIRRE CERDA',
							'EXTREMADURA DE PUENTE ALTO LOCAL: 1',
							'EXTREMADURA DE PUENTE ALTO LOCAL: 2',
							'LICEO BICENTENARIO SAN PEDRO DE PUENTE ALTO',
							'LICEO COMERCIAL DE PUENTE ALTO LOCAL: 1',
							'LICEO COMERCIAL DE PUENTE ALTO LOCAL: 2',
							'LICEO INDUSTRIAL MUNICIPALIZADO A 116 LOCAL: 1',
							'LICEO INDUSTRIAL MUNICIPALIZADO A 116 LOCAL: 2',
							"LICEO INGENIERO MILITAR JUAN MACKENNA O'REILLY",
							'LICEO MUNICIPAL CHILOE LOCAL: 1',
							'LICEO MUNICIPAL CHILOE LOCAL: 2',
							'LICEO NUESTRA SEÑORA DE LAS MERCEDES LOCAL: 1',
							'LICEO NUESTRA SEÑORA DE LAS MERCEDES LOCAL: 2',
							'LICEO POLIVALENTE MARIA REINA LOCAL: 1',
							'LICEO POLIVALENTE MARIA REINA LOCAL: 2',
							'LICEO PUENTE ALTO LOCAL: 1',
							'LICEO PUENTE ALTO LOCAL: 2',
							'LICEO SAN GERONIMO LOCAL: 1',
							'LICEO SAN GERONIMO LOCAL: 2'
						]
					},
					{
						nombre: 'Pirque',
						distrito: '12',
						codigo: '13202',
						locales: [
							'COLEGIO COLONIAL DE PIRQUE',
							'LICEO EL PRINCIPAL',
							'LICEO MUNICIPAL TECNICO PROFESIONAL EL LLANO LOCAL: 1',
							'LICEO MUNICIPAL TECNICO PROFESIONAL EL LLANO LOCAL: 2'
						]
					},
					{
						nombre: 'San José de Maipo',
						distrito: '12',
						codigo: '13203',
						locales: [
							'ESCUELA BASICA INTEGRADORA EL MANZANO',
							'ESCUELA JULIETA BECERRA ALVAREZ',
							'LICEO POLIVALENTE SAN JOSE DE MAIPO'
						]
					}
				]
			},
			{
				nombre: 'Chacabuco',
				comunas: [
					{
						nombre: 'Colina',
						distrito: '8',
						codigo: '13301',
						locales: [
							'ANDALIEN DE COLINA',
							'COLEGIO MUNICIPAL INSTITUTO CHACABUCO LOCAL: 1',
							'COLEGIO MUNICIPAL INSTITUTO CHACABUCO LOCAL: 2',
							'COLEGIO SAN JOSE DE CHICUREO',
							'ESCUELA BASICA ALGARROBAL',
							'ESCUELA BASICA MARCOS GOYCOOLEA CORTES',
							'ESCUELA BASICA SANTA MARTA DE LIRAY',
							'ESCUELA BASICA SANTA TERESA DEL CARMELO',
							'ESCUELA BASICA SAN VICENTE DE LO ARCAYA',
							'ESCUELA DE LENGUAJE CAMINA ALTO',
							'ESCUELA ESPECIAL ERNESTO SOTO NEGRETE',
							'ESCUELA FRANCISCO PETRINOVIC',
							'ESCUELA PREMIO NOBEL PABLO NERUDA',
							'ESCUELA SAN FRANCISCO DE ASIS',
							'LICEO BICENTENARIO PROVINCIAL SANTA TERESA DE LOS ANDES',
							'LICEO ESMERALDA',
							'LICEO PELDEHUE',
							'LICEO POLIVALENTE RIGOBERTO FONTT'
						]
					},
					{
						nombre: 'Lampa',
						distrito: '8',
						codigo: '13302',
						locales: [
							'COLEGIO SOL DEL VALLE LOCAL: 1',
							'COLEGIO SOL DEL VALLE LOCAL: 2',
							'COMPLEJO EDUCACIONAL MANUEL PLAZA REYES LOCAL: 1',
							'COMPLEJO EDUCACIONAL MANUEL PLAZA REYES LOCAL: 2',
							'ESCUELA BASICA CACIQUE COLIN',
							'ESCUELA BASICA PARTICULAR JERUSALEN',
							'ESCUELA MANUEL SEGOVIA MONTENEGRO LOCAL: 1',
							'ESCUELA MANUEL SEGOVIA MONTENEGRO LOCAL: 2',
							'ESCUELA POLONIA GUTIERREZ LOCAL: 1',
							'ESCUELA POLONIA GUTIERREZ LOCAL: 2',
							'ESCUELA REPUBLICA DE POLONIA',
							'LICEO MUNICIPAL DE BATUCO',
							'NORMA GONZALEZ GUERRA'
						]
					},
					{
						nombre: 'Tiltil',
						distrito: '8',
						codigo: '13303',
						locales: [
							'ESCUELA PARTICULAR LA MERCED',
							'LICEO HUERTOS FAMILIARES',
							'LICEO POLIVALENTE MANUEL RODRIGUEZ LOCAL: 1',
							'LICEO POLIVALENTE MANUEL RODRIGUEZ LOCAL: 2'
						]
					}
				]
			},
			{
				nombre: 'Maipo',
				comunas: [
					{
						nombre: 'San Bernardo',
						distrito: '14',
						codigo: '13401',
						locales: [
							'CENTRO EDUCACIONAL BALDOMERO LILLO LOCAL: 1',
							'CENTRO EDUCACIONAL BALDOMERO LILLO LOCAL: 2',
							'COLEGIO DOCTOR LUIS SEPULVEDA SALVATIERRA',
							'COLEGIO DOMINGO EYZAGUIRRE',
							'COLEGIO HARAS LOS CONDORES',
							'COLEGIO SANTA TERESA DE LOS MORROS',
							'COLEGIO SEBASTIAN ELCANO SAN BERNARDO LOCAL: 1',
							'COLEGIO SEBASTIAN ELCANO SAN BERNARDO LOCAL: 2',
							'ESCUELA ALEMANIA',
							'ESCUELA BASICA ANTUPILLAN',
							'ESCUELA ELIODORO YAÑEZ PONCE DE LEON',
							'ESCUELA ESCRITORA MARCELA PAZ',
							'ESCUELA ISABEL RIQUELME',
							'ESCUELA JAVIERA CARRERA VERDUGO',
							'ESCUELA JOSE NUEZ MARTIN',
							"ESCUELA LIBERTADOR GENERAL BERNARDO O'HIGGINS",
							'ESCUELA MAHUIDA',
							'ESCUELA MANUEL MAGALLANES MOURE',
							'ESCUELA PILAR MOLINER DE NUEZ',
							'ESCUELA REPUBLICA DEL BRASIL',
							'ESCUELA REPUBLICA DE LOS EE.UU. DE AMERICA',
							'HERNAN MERINO CORREA',
							'LICEO COMERCIAL DE SAN BERNARDO LOCAL: 1',
							'LICEO COMERCIAL DE SAN BERNARDO LOCAL: 2',
							'LICEO ELVIRA BRADY MALDONADO LOCAL: 1',
							'LICEO ELVIRA BRADY MALDONADO LOCAL: 2',
							'LICEO HARDWARE',
							'LICEO INDUSTRIAL MIGUEL AYLWIN GAJARDO LOCAL: 1',
							'LICEO INDUSTRIAL MIGUEL AYLWIN GAJARDO LOCAL: 2',
							'LICEO NACIONAL BICENTENARIO DE EXCELENCIA',
							'LICEO NUEVO PORVENIR',
							'LICEO POLIVALENTE A-127 FIDEL PINOCHET LE-BRUN LOCAL: 1',
							'LICEO POLIVALENTE A-127 FIDEL PINOCHET LE-BRUN LOCAL: 2',
							'LICEO POLIVALENTE LUCILA GODOY ALCAYAGA',
							'LINCOLN COLLEGE SAN BERNARDO'
						]
					},
					{
						nombre: 'Buin',
						distrito: '14',
						codigo: '13402',
						locales: [
							'ESCUELA LOS ROSALES DEL BAJO',
							'ESCUELA VALDIVIA DE PAINE',
							'ESCUELA VILLASECA',
							'LICEO A-131 BASICA "HAYDEE AZOCAR MANSILLA" LOCAL: 1',
							'LICEO A-131 BASICA "HAYDEE AZOCAR MANSILLA" LOCAL: 2',
							'LICEO A-131 BASICA "HAYDEE AZOCAR MANSILLA" LOCAL: 3',
							'LICEO A-131 BASICA "HAYDEE AZOCAR MANSILLA" LOCAL: 4',
							'LICEO A-131 MEDIA "HAYDEE AZOCAR MANSILLA" LOCAL: 1',
							'LICEO A-131 MEDIA "HAYDEE AZOCAR MANSILLA" LOCAL: 2',
							'LICEO ALTO JAHUEL LOCAL: 1',
							'LICEO ALTO JAHUEL LOCAL: 2',
							'LICEO FRANCISCO JAVIER KRUGGER ALVARADO',
							'LICEO POLIVALENTE MODERNO CARDENAL CARO BASICA',
							'LICEO POLIVALENTE MODERNO CARDENAL CARO MEDIA LOCAL: 1',
							'LICEO POLIVALENTE MODERNOCARDENAL CARO MEDIA LOCAL: 2'
						]
					},
					{
						nombre: 'Calera de Tango',
						distrito: '14',
						codigo: '13403',
						locales: [
							'LICEO MUNICIPAL POETISA GABRIELA MISTRAL',
							'LICEO MUNICIPAL POETISA GABRIELA MISTRAL ENSEÑANZA BASICA LOCAL: 1',
							'LICEO MUNICIPAL POETISA GABRIELA MISTRAL ENSEÑANZA BASICA LOCAL: 2'
						]
					},
					{
						nombre: 'Paine',
						distrito: '14',
						codigo: '13404',
						locales: [
							'CENTRO EDUCACIONAL ENRIQUE BERNSTEIN CARABANTE LOCAL: 1',
							'CENTRO EDUCACIONAL ENRIQUE BERNSTEIN CARABANTE LOCAL: 2',
							'COLEGIO BICENTENARIO SANTA MARIA DE PAINE',
							'COLEGIO PARTICULAR MARIA ANA MOGAS',
							'ESCUELA BASICA PAULA JARAQUEMADA ALQUIZAR LOCAL: 1',
							'ESCUELA BASICA PAULA JARAQUEMADA ALQUIZAR LOCAL: 2',
							'ESCUELA CARMEN REVECO NUÑEZ',
							'LICEO MARIA CARVAJAL FUENZALIDA',
							'LICEO POLIVALENTE GREGORIO MORALES MIRANDA'
						]
					}
				]
			},
			{
				nombre: 'Mellipilla',
				comunas: [
					{
						nombre: 'Melipilla',
						distrito: '14',
						codigo: '13501',
						locales: [
							'COLEGIO PARTICULAR ALONSO DE ERCILLA',
							'COLEGIO PARTICULAR MELIPILLA',
							'COLEGIO POLITECNICO NUESTRA SEÑORA DE LA PRESENTACION LOCAL: 1',
							'COLEGIO POLITECNICO NUESTRA SEÑORA DE LA PRESENTACION LOCAL: 2',
							'COLEGIO POLIVALENTE SAN AGUSTIN LOCAL: 1',
							'COLEGIO POLIVALENTE SAN AGUSTIN LOCAL: 2',
							'LICEO GABRIELA MISTRAL DE MELIPILLA',
							'LICEO POLITECNICO MUNICIPAL MELIPILLA LOCAL: 1',
							'LICEO POLITECNICO MUNICIPAL MELIPILLA LOCAL: 2',
							'LICEO POLITECNICO MUNICIPAL MELIPILLA LOCAL: 3',
							'LICEO POLITECNICO MUNICIPAL MELIPILLA LOCAL: 4',
							'LICEO POLIVALENTE HERMANOS SOTOMAYOR BAEZA LOCAL: 1',
							'LICEO POLIVALENTE HERMANOS SOTOMAYOR BAEZA LOCAL: 2'
						]
					},
					{
						nombre: 'Alhué',
						distrito: '14',
						codigo: '13502',
						locales: [
							'LICEO MUNICIPAL SARA TRONCOSO TRONCOSO'
						]
					},
					{
						nombre: 'Curacaví',
						distrito: '14',
						codigo: '13503',
						locales: [
							'ESCUELA BASICA MUNICIPAL CUYUNCAVI',
							'ESCUELA BASICA VALLE DE PUANGUE',
							'ESCUELA SAN JOSE OBRERO DE CURACAVI',
							'LICEO PRESIDENTE BALMACEDA'
						]
					},
					{
						nombre: 'María Pinto',
						distrito: '14',
						codigo: '13504',
						locales: [
							'LICEO MUNICIPAL F-860 LOCAL: 1',
							'LICEO MUNICIPAL F-860 LOCAL: 2'
						]
					},
					{
						nombre: 'San Pedro',
						distrito: '14',
						codigo: '13505',
						locales: [
							'LICEO MUNICIPAL DE SAN PEDRO LOCAL: 1',
							'LICEO MUNICIPAL DE SAN PEDRO LOCAL: 2'
						]
					}
				]
			},
			{
				nombre: 'Talagante',
				comunas: [
					{
						nombre: 'Talagante',
						distrito: '14',
						codigo: '13601',
						locales: [
							'ESCUELA ALBORADA DE TALAGANTE',
							'ESCUELA BASICA TEGUALDA',
							'LICEO POLITECNICO C-120 LOCAL: 1',
							'LICEO POLITECNICO C-120 LOCAL: 2',
							'LICEO REPUBLICA DE GRECIA LOCAL: 1',
							'LICEO REPUBLICA DE GRECIA LOCAL: 2',
							'LICEO TALAGANTE BASICA',
							'LICEO TALAGANTE MEDIA LOCAL: 1',
							'LICEO TALAGANTE MEDIA LOCAL: 2'
						]
					},
					{
						nombre: 'El Monte',
						distrito: '14',
						codigo: '13602',
						locales: [
							'ESCUELA E 741 JAVIERA CARRERA',
							'ESCUELA REPUBLICA DE HONDURAS',
							'ESCUELA REPUBLICA DEL ECUADOR LOCAL: 1',
							'ESCUELA REPUBLICA DEL ECUADOR LOCAL: 2',
							'LICEO POLIVALENTE LUIS HUMBERTO ACOSTA GAY LOCAL: 1',
							'LICEO POLIVALENTE LUIS HUMBERTO ACOSTA GAY LOCAL: 2'
						]
					},
					{
						nombre: 'Isla de Maipo',
						distrito: '14',
						codigo: '13603',
						locales: [
							'CENTRO EDUCACIONAL ISLA DE MAIPO',
							'ESCUELA BASICA EFRAIN MALDONADO TORRES LOCAL: 1',
							'ESCUELA BASICA EFRAIN MALDONADO TORRES LOCAL: 2',
							'LICEO BICENTENARIO MARIO BERTERO CEVASCO LOCAL: 1',
							'LICEO BICENTENARIO MARIO BERTERO CEVASCO LOCAL: 2'
						]
					},
					{
						nombre: 'Padre Hurtado',
						distrito: '14',
						codigo: '13604',
						locales: [
							'COLEGIO ALBERTO HURTADO CRUCHAGA',
							'COLEGIO ALBERTO HURTADO CRUCHAGA BASICA',
							'COLEGIO SAN CRISTOBAL APOSTOL',
							'ESCUELA BASICA PARTICULAR FRANCISCO DE AGUIRRE',
							'ESCUELA BASICA SANTA ROSA DE CHENA',
							'ESCUELA PARTICULAR BRASILIA',
							'LICEO BICENTENARIO DE EXCELENCIA PATRICIO MEKIS DE PADRE HURTADO',
							'LICEO BICENTENARIO DE EXCELENCIA PAUL HARRIS LOCAL: 1',
							'LICEO BICENTENARIO DE EXCELENCIA PAUL HARRIS LOCAL: 2'
						]
					},
					{
						nombre: 'Peñaflor',
						distrito: '14',
						codigo: '13605',
						locales: [
							'COLEGIO INMACULADA CONCEPCIÓN NUESTRA SEÑORA DE LOURDES',
							'ESCUELA EMILIA LASCAR LOCAL: 1',
							'ESCUELA EMILIA LASCAR LOCAL: 2',
							'ESCUELA MALLOCO',
							'ESCUELA MANDATARIO EDUARDO FREI MONTALVA',
							'ESCUELA REPUBLICA CHECA',
							'ESCUELA ROSALINA PESCIO VARGAS',
							'ESCUELA SONIA PLAZA CASTRO',
							'ESCUELA TERESA DE CALCUTA',
							'LICEO COMERCIAL REPUBLICA DE BRASIL',
							'LICEO MUNICIPALIZADO PEÑAFLOR'
						]
					}
				]
			}
		]
	},
	{
		nombreCompleto: "Región Libertador Bernardo O'Higgins",
		prefijo: 'Región de',
		nombre: "O'Higgins",
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
						codigo: '06101',
						locales: [
							'CENTRO DE EDUCACION DE ADULTOS FRANCISCO TELLO',
							'COLEGIO AURORA DE CHILE',
							'COLEGIO ESPECIAL DOCTOR RICARDO OLEA',
							'COLEGIO JOSE ANTONIO MANSO DE VELASCO',
							'COLEGIO LIBERTADOR SIMON BOLIVAR',
							'COLEGIO MANUEL RODRIGUEZ',
							'COLEGIO MINERAL EL TENIENTE',
							'COLEGIO MUNICIPAL EDUARDO DE GEYTER',
							'COLEGIO SANTA FILOMENA',
							'COLEGIO SANTO TOMAS',
							"ESCUELA BERNARDO O'HIGGINS",
							'ESCUELA MUNICIPAL EL COBRE',
							'ESCUELA MUNICIPAL ISABEL RIQUELME',
							'ESCUELA MUNICIPAL JEAN PIAGET',
							'ESCUELA MUNICIPAL MARCELA PAZ',
							'ESCUELA MUNICIPAL MOISES MUSSA',
							'ESCUELA MUNICIPAL PATRICIO MEKIS',
							'ESCUELA MUNICIPAL RENE SCHNEIDER CHEREAU',
							'ESCUELA REPUBLICA ARGENTINA',
							"GIMNASIO ANEXO ESCUELA BERNARDO O'HIGGINS",
							'GIMNASIO ANEXO LICEO COMERCIAL DIEGO PORTALES',
							'GIMNASIO ANEXO LICEO OSCAR CASTRO',
							'LICEO COMERCIAL DIEGO PORTALES',
							'LICEO COMERCIAL JORGE ALESSANDRI RODRIGUEZ',
							'LICEO DE NIÑAS',
							'LICEO INDUSTRIAL ERNESTO PINTO LAGARRIGUE',
							'LICEO INDUSTRIAL PRESIDENTE PEDRO AGUIRRE CERDA',
							'LICEO MUNICIPAL JOSE VICTORINO LASTARRIA',
							'LICEO OSCAR CASTRO ZUNIGA',
							'LICEO TECNICO DE RANCAGUA'
						]
					},
					{
						nombre: 'Codegua',
						distrito: '15',
						codigo: '06102',
						locales: [
							'COLEGIO JESUS ANDINO',
							'LICEO MUNICIPAL DE CODEGUA'
						]
					},
					{
						nombre: 'Coinco',
						distrito: '15',
						codigo: '06103',
						locales: [
							'COLEGIO MUNICIPAL HUALLILEN',
							'LICEO MUNICIPAL LUIS GREGORIO VALENZUELA LAVIN'
						]
					},
					{
						nombre: 'Coltauco',
						distrito: '15',
						codigo: '06104',
						locales: [
							'CASINO PARQUE LOS TACOS',
							'ESCUELA MUNICIPAL OSVALDO RUIZ GARCIA',
							'LICEO BERTA ZAMORANO'
						]
					},
					{
						nombre: 'Doñihue',
						distrito: '15',
						codigo: '06105',
						locales: [
							'ESCUELA LAURA MATUS MELENDEZ',
							'ESCUELA LO MIRANDA',
							'LICEO CLAUDIO ARRAU'
						]
					},
					{
						nombre: 'Graneros',
						distrito: '15',
						codigo: '06106',
						locales: [
							'ESCUELA ANTONIO TREDAN ARKO',
							'ESCUELA HERNAN OLGUIN MAYBE',
							'ESCUELA SIXTO MENDEZ PARADA',
							'LICEO MUNICIPAL MISAEL LOBOS MONROY'
						]
					},
					{
						nombre: 'Las Cabras',
						distrito: '16',
						codigo: '06107',
						locales: [
							'ESCUELA CONTRAMAESTRE CONSTANTINO MICALVI',
							'ESCUELA ROMILIO ARELLANO TRONCOSO',
							'LICEO FRANCISCO ANTONIO ENCINA'
						]
					},
					{
						nombre: 'Machalí',
						distrito: '15',
						codigo: '06108',
						locales: [
							'COLEGIO BELLAVISTA',
							'COLEGIO GABRIELA MISTRAL',
							'COLEGIO JUAN TACHOIRE MOENA',
							'COLEGIO LOS LLANOS',
							'COLEGIO SANTA TERESA DE LOS ANDES',
							'LICEO MACHALI',
							'POLIDEPORTIVO'
						]
					},
					{
						nombre: 'Malloa',
						distrito: '15',
						codigo: '06109',
						locales: [
							'ESCUELA ALCIDES REYES FRIAS',
							'ESCUELA ALCIDES REYES FRIAS ANEXO',
							'ESCUELA MUNICIPAL DE PELEQUEN'
						]
					},
					{
						nombre: 'Mostazal',
						distrito: '15',
						codigo: '06110',
						locales: [
							'COLEGIO ANDRES BELLO',
							'LICEO ELVIRA SANCHEZ DE GARCES'
						]
					},
					{
						nombre: 'Olivar',
						distrito: '15',
						codigo: '06111',
						locales: [
							'COLEGIO MARIA VILLALOBOS ARTEAGA',
							'ESCUELA MUNICIPAL DE GULTRO',
							'LICEO TECNICO MUNICIPAL'
						]
					},
					{
						nombre: 'Peumo',
						distrito: '16',
						codigo: '06112',
						locales: [
							'ESCUELA ANTONIO DE ZUNIGA',
							'ESCUELA ANTONIO DE ZUNIGA ANEXO'
						]
					},
					{
						nombre: 'Pichidegua',
						distrito: '16',
						codigo: '06113',
						locales: [
							'CENTRO EDUCATIVO SIGLO XXI',
							'ESCUELA ENRIQUE SERRANO',
							'LICEO LATINOAMERICANO'
						]
					},
					{
						nombre: 'Quinta de Tilcoco',
						distrito: '15',
						codigo: '06114',
						locales: [
							'LICEO REPUBLICA DE ITALIA'
						]
					},
					{
						nombre: 'Rengo',
						distrito: '15',
						codigo: '06115',
						locales: [
							'COLEGIO EL NARANJAL',
							'COLEGIO LA PAZ',
							'COLEGIO LUIS GALDAMES',
							'COLEGIO MANUEL FRANCISCO CORREA',
							'ESCUELA COLONIA ESMERALDA',
							'ESCUELA FERNANDA AEDO FAUNDEZ',
							'ESCUELA VICENTE HUIDOBRO',
							'LICEO INDUSTRIAL DE RENGO',
							'LICEO LUIS URBINA FLORES',
							'LICEO ORIENTE'
						]
					},
					{
						nombre: 'Requínoa',
						distrito: '15',
						codigo: '06116',
						locales: [
							'ESCUELA BERTA SAAVEDRA SEGURA',
							'GIMNASIO REQUINOA',
							'LICEO DE REQUINOA ANEXO',
							'LICEO REQUINOA'
						]
					},
					{
						nombre: 'San Vicente',
						distrito: '16',
						codigo: '06117',
						locales: [
							'ESCUELA CARMEN GALLEGOS DE ROBLES',
							'ESCUELA ESPECIAL PAULA JARAQUEMADA',
							'ESCUELA MUNICIPAL ZUNIGA',
							'INSTITUTO SAN VICENTE DE TAGUA TAGUA',
							'LICEO TECNICO PROFESIONAL EL TAMBO'
						]
					}
				]
			},
			{
				nombre: 'Cardenal Caro',
				comunas: [
					{
						nombre: 'Pichilemu',
						distrito: '16',
						codigo: '06201',
						locales: [
							'ESCUELA DIGNA CAMILO AGUILAR',
							'ESCUELA DIVINO MAESTRO',
							'LICEO AGUSTIN ROSS EDWARDS'
						]
					},
					{
						nombre: 'La Estrella',
						distrito: '16',
						codigo: '06202',
						locales: [
							'ESCUELA PROFESORA MONICA SILVA GOMEZ',
							'ESCUELA PROFESORA MONICA SILVA GOMEZ INTERNADO'
						]
					},
					{
						nombre: 'Litueche',
						distrito: '16',
						codigo: '06203',
						locales: [
							'LICEO EL ROSARIO DE LITUECHE',
							'LICEO EL ROSARIO DE LITUECHE ANEXO'
						]
					},
					{
						nombre: 'Marichihue',
						distrito: '16',
						codigo: '06204',
						locales: [
							'ESCUELA MUNICIPAL AMERICA',
							'LICEO MUNICIPAL INSTITUTO CARDENAL CARO'
						]
					},
					{
						nombre: 'Navidad',
						distrito: '16',
						codigo: '06205',
						locales: [
							'COLEGIO MUNICIPAL DIVINA GABRIELA',
							'LICEO MUNICIPAL PABLO NERUDA'
						]
					},
					{
						nombre: 'Paredones',
						distrito: '16',
						codigo: '06206',
						locales: [
							'ESCUELA BASICA MERCEDES URZUA DIAZ',
							'ESCUELA BASICA UNION DE MUJERES AMERICANAS',
							'ESCUELA MUNICIPAL SAN PEDRO DE ALCANTARA',
							'LICEO MIREYA CATALAN URZUA'
						]
					}
				]
			},
			{
				nombre: 'Colchagua',
				comunas: [
					{
						nombre: 'San Fernando',
						distrito: '16',
						codigo: '06301',
						locales: [
							'COLEGIO GIUSEPPE BERTOLUZZI DE FELIP',
							'COLEGIO HERMANO FERNANDO DE LA FUENTE',
							'ESCUELA BASICA ISABEL LA CATOLICA',
							'ESCUELA CONCENTRACION RURAL SERGIO VERDUGO HERRERA',
							'ESCUELA HOGAR MARIA LUISA BOUCHON',
							'ESCUELA JORGE MUNOZ SILVA',
							'ESCUELA OLEGARIO LAZO BAEZA',
							'ESCUELA WASHINGTON OMAR VENEGAS',
							'INSTITUTO COMERCIAL ALBERTO VALENZUELA LLANOS',
							'LICEO DE HOMBRES NEANDRO SCHILLING',
							'LICEO DE NINAS EDUARDO CHARME',
							'LICEO HERIBERTO SOTO SOTO'
						]
					},
					{
						nombre: 'Chépica',
						distrito: '16',
						codigo: '06302',
						locales: [
							'COLEGIO BASICO DE CHEPICA',
							'LICEO FERMIN DEL REAL CASTILLO'
						]
					},
					{
						nombre: 'Chimbarongo',
						distrito: '16',
						codigo: '06303',
						locales: [
							'COMPLEJO EDUCACIONAL CHIMBARONGO',
							'ESCUELA FERNANDO ARENASALMARZA',
							'ESCUELA MUNICIPAL E-456',
							'INTERNADO FEMENINO'
						]
					},
					{
						nombre: 'Lolol',
						distrito: '16',
						codigo: '06304',
						locales: [
							'ESCUELA GALVARINO VALENZUELA MORAGA',
							'LICEO MUNICIPAL DE LOLOL'
						]
					},
					{
						nombre: 'Nancagua',
						distrito: '16',
						codigo: '06305',
						locales: [
							'COLEGIO BASICO CONSOLIDADO',
							'COLEGIO PARTICULAR EL PRINCIPITO'
						]
					},
					{
						nombre: 'Palmilla',
						distrito: '16',
						codigo: '06306',
						locales: [
							'ESCUELA MUNICIPAL DE PALMILLA',
							'RECINTO INTERIOR ESTADIO MUNICIPAL'
						]
					},
					{
						nombre: 'Peralillo',
						distrito: '16',
						codigo: '06307',
						locales: [
							'COLEGIO BASICO VIOLETA PARRA',
							'LICEO VICTOR JARA'
						]
					},
					{
						nombre: 'Placilla',
						distrito: '16',
						codigo: '06308',
						locales: [
							'LICEO SAN FRANCISCO DE PLACILLA'
						]
					},
					{
						nombre: 'Pumanque',
						distrito: '16',
						codigo: '06309',
						locales: [
							'ESCUELA MUNICIPAL DE PUMANQUE'
						]
					},
					{
						nombre: 'Santa Cruz',
						distrito: '16',
						codigo: '06310',
						locales: [
							'ESCUELA ESPECIAL DE SANTA CRUZ',
							'ESCUELA MARIAARAYA VALDES',
							'ESCUELA MUNICIPAL DE PANIAHUE',
							'ESCUELA MUNICIPAL DE SANTA CRUZ',
							'INSTITUTO POLITECNICO',
							'LICEO MUNICIPAL DE SANTA CRUZ'
						]
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
						codigo: '07101',
						locales: [
							'ESCUELA BASICA',
							'ESCUELA CARLOS SALINAS LAGOS',
							'ESCUELA CARLOS SPANO',
							'ESCUELA EL EDEN',
							'ESCUELA ESPERANZA',
							'ESCUELA JOSE M. BALMACEDA Y FERNANDEZ',
							'ESCUELA JUAN LUIS SANFUENTES',
							'ESCUELA PROSPERIDAD',
							'ESCUELA UNO SAN AGUSTIN',
							'ESCUELA VILLA CULENAR',
							'ESTADIO FISCAL',
							'INSTITUTO SUPERIOR DE COMERCIO ENRIQUE MALDONADO',
							'LICEO ABATE MOLINA',
							'LICEO CARLOS CONDELL',
							'LICEO COMPLEJO EDUCACIONAL JAVIERA CARRERA',
							'LICEO DE CULTURA Y DIFUSION ARTISTICA',
							'LICEO DIEGO PORTALES',
							'LICEO HECTOR PEREZ BIOTT',
							'LICEO INDUSTRIAL SUPERIOR',
							'LICEO MARTA DONOSO ESPEJO',
							'LICEO TECNICO AMELIA COURBIS',
							'UNIVERSIDAD AUTONOMA DE CHILE'
						]
					},
					{
						nombre: 'Constitución',
						distrito: '17',
						codigo: '07102',
						locales: [
							'COLEGIO SAN ALBERTO HURTADO',
							'COLEGIO SANTIAGO ONEDERRA',
							'ESCUELA COSTA BLANCA',
							'ESCUELA ENRIQUE DONN MULLER',
							'INSTITUTO POLITECNICO SUPERIOR EGIDIO ROZ',
							'LICEO CONSTITUCION',
							'LICEO POLIVALENTE ENRIQUE MAC IVER',
							'LICEO RURAL PUTU'
						]
					},
					{
						nombre: 'Curepto',
						distrito: '17',
						codigo: '07103',
						locales: [
							'ESCUELA ELENA ARMIJO MORALES',
							'ESCUELA FRAY PEDRO ARMENGOL VALENZUELA',
							'ESCUELA PEDRO ANTONIO GONZALEZ'
						]
					},
					{
						nombre: 'Empedrado',
						distrito: '17',
						codigo: '07104',
						locales: [
							'LICEO SAN IGNACIO'
						]
					},
					{
						nombre: 'Maule',
						distrito: '17',
						codigo: '07105',
						locales: [
							'COLEGIO SUYAI',
							'ESCUELA COLIN',
							'ESCUELA MAULE',
							'ESCUELA RURAL DUAO',
							'ESCUELA RURAL NUMPAY'
						]
					},
					{
						nombre: 'Pelarco',
						distrito: '17',
						codigo: '07106',
						locales: [
							'LICEO DE PELARCO'
						]
					},
					{
						nombre: 'Pencahue',
						distrito: '17',
						codigo: '07107',
						locales: [
							'COMPLEJO EDUCACIONAL PENCAHUE',
							'ESCUELA CORINTO',
							'ESCUELA PADRE LUIS OLIVA NAVARRETE',
							'ESCUELA RIVERA DEL MAULE'
						]
					},
					{
						nombre: 'Río Claro',
						distrito: '17',
						codigo: '07108',
						locales: [
							'LICEO AGROINDUSTRIAL RIO CLARO'
						]
					},
					{
						nombre: 'San Clemente',
						distrito: '17',
						codigo: '07109',
						locales: [
							'COLEGIO CLEMENTINOS',
							'ESCUELA LOS MONTES',
							'ESCUELA PASO INTERNACIONAL PEHUENCHE',
							'ESCUELA SAN CLEMENTE',
							'LICEO SAN CLEMENTE ENTRE RIOS',
							'POLIDERPORTIVO'
						]
					},
					{
						nombre: 'San Rafael',
						distrito: '17',
						codigo: '07110',
						locales: [
							'ESCUELA SAN RAFAEL'
						]
					}
				]
			},
			{
				nombre: 'Cauquenes',
				comunas: [
					{
						nombre: 'Cauquenes',
						distrito: '18',
						codigo: '07201',
						locales: [
							'COLEGIO BLANCO ENCALADA',
							'ESCUELA INDEPENDENCIA',
							'ESCUELA OCTAVIO PALMA PEREZ',
							'ESCUELA PURISIMA CONCEPCION DE POCILLAS',
							'LICEO ANTONIO VARAS',
							'LICEO BICENTENARIO DE CAUQUENES',
							'LICEO CLAUDINA URRUTIA DE LAVIN',
							'LICEO INMACULADA CONCEPCION'
						]
					},
					{
						nombre: 'Chanco',
						distrito: '18',
						codigo: '07202',
						locales: [
							'ESCUELA LOS HEROES',
							'LICEO FEDERICO ALBERT FAUPP'
						]
					},
					{
						nombre: 'Pelluhue',
						distrito: '18',
						codigo: '07203',
						locales: [
							'ESCUELAGLADYS CANALES PAREDES'
						]
					}
				]
			},
			{
				nombre: 'Curicó',
				comunas: [
					{
						nombre: 'Curicó',
						distrito: '17',
						codigo: '07301',
						locales: [
							'COLEGIO POLITECNICO SAN JOSE',
							'COLEGIO VICHUQUEN',
							'ESCUELA ALESSANDRI',
							'ESCUELA ARGENTINA',
							'ESCUELA CATALUNA',
							'ESCUELA DIEGO PORTALES P.',
							'ESCUELA ERNESTO CASTRO ARELLANO',
							'ESCUELA ESPANA',
							'ESCUELA GRECIA',
							'ESCUELA MARIA OLGA FIGUEROA LEYTON',
							'ESCUELA REPUBLICA DE BRASIL',
							'ESCUELA REPUBLICA ESTADOS UNIDOS',
							'ESCUELA REPUBLICA ORIENTAL DEL URUGUAY',
							'INSTITUTO INGLES',
							'INSTITUTO POLITECNICO SUPERIOR JUAN TERRI',
							'LICEO FERNANDO LAZCANO',
							'LICEO LUIS CRUZ MARTINEZ DE CURICO',
							'UNIVERSIDAD CATOLICA SEDE CURICO'
						]
					},
					{
						nombre: 'Hualañé',
						distrito: '17',
						codigo: '07302',
						locales: [
							'ESCUELA LA HUERTA DE MATAQUITO',
							'ESCUELA MONSENOR MANUEL LARRAIN ERRAZURIZ',
							'LICEO HUALANE'
						]
					},
					{
						nombre: 'Licantén',
						distrito: '17',
						codigo: '07303',
						locales: [
							'COLEGIO DOCTOR MANUEL AVILES INOSTROZA',
							'LICEO AUGUSTO SANTELICES VALENZUELA'
						]
					},
					{
						nombre: 'Molina',
						distrito: '17',
						codigo: '07304',
						locales: [
							'ESCUELA INTERNADO LAS PALMAS TRES ESQUINAS',
							'ESCUELA PRESIDENTE EDUARDO FREI MONTALVA',
							'ESCUELA REINO DE DINAMARCA',
							'ESCUELA SUPERIOR DE NINAS DE MOLINA',
							'LICEO BICENTENARIO DE MOLINA MARIA DEL TRANSITO DE LA CRUZ',
							'LICEO JUAN AGUSTIN MORALES GONZALEZ',
							'LICEO POLIVALENTE DE MOLINA'
						]
					},
					{
						nombre: 'Rauco',
						distrito: '17',
						codigo: '07305',
						locales: [
							'ESCUELA RAUCO',
							'GIMNASIO MUNICIPAL DE RAUCO'
						]
					},
					{
						nombre: 'Romeral',
						distrito: '17',
						codigo: '07306',
						locales: [
							'ESCUELA ARTURO ALESSANDRI PALMA',
							'LICEO ARTURO ALESSANDRI PALMA'
						]
					},
					{
						nombre: 'Sagrada Familia',
						distrito: '17',
						codigo: '07307',
						locales: [
							'ESCUELA DE EDUCACION GENERAL BASICA MONSENOR ENRIQUE CORNEJO',
							'ESCUELA VILLA PRAT',
							'LICEO POLIVALENTE SAGRADA FAMILIA'
						]
					},
					{
						nombre: 'Teno',
						distrito: '17',
						codigo: '07308',
						locales: [
							'ESCUELA TENO',
							'ESCUELA TENO ANEXO',
							'LICEO TENO'
						]
					},
					{
						nombre: 'Vichuquén',
						distrito: '17',
						codigo: '07309',
						locales: [
							'ESCUELA ENTRE AGUAS DE LLICO',
							'LICEO NUEVO HORIZONTE'
						]
					}
				]
			},
			{
				nombre: 'Linares',
				comunas: [
					{
						nombre: 'Linares',
						distrito: '18',
						codigo: '07401',
						locales: [
							'COLEGIO MARGOT LOYOLA PALACIOS',
							'ESCUELA ALEJANDRO GIDI',
							'ESCUELA PRESIDENTE CARLOS IBANEZ DEL C.',
							'ESCUELA RAMON BELMAR SALDIAS',
							'ESCUELA UNO ISABEL RIQUELME',
							'INSTITUTO COMERCIAL',
							'INSTITUTO LINARES',
							'LICEO POLITECNICO DE LINARES',
							'LICEO TECNICO PROFESIONAL DIEGO PORTALES',
							'LICEO VALENTIN LETELIER'
						]
					},
					{
						nombre: 'Colbún',
						distrito: '18',
						codigo: '07402',
						locales: [
							'ESCUELA BASICA DE COLBUN',
							'LICEO CAPITAN IGNACIO CARRERA PINTO'
						]
					},
					{
						nombre: 'Longaví',
						distrito: '18',
						codigo: '07403',
						locales: [
							'COLEGIO ABATE MOLINA',
							'ESCUELA JUAN DE LA CRUZ DOMINGUEZ GONZALEZ'
						]
					},
					{
						nombre: 'Parral',
						distrito: '18',
						codigo: '07404',
						locales: [
							'CENTRO EDUCACIONAL INTEGRADO DE ADULTOS',
							'COLEGIO ALBERTO MOLINA CASTILLO',
							'COLEGIO PABLO NERUDA',
							'COLEGIO PROVIDENCIA',
							'ESCUELA ARRAU MENDEZ',
							'ESCUELA JOSE MATTA CALLEJON',
							'ESCUELA LUIS ARMANDO GOMEZ MUNOZ',
							'ESCUELA NIDER ORREGO QUEVEDO',
							'LICEO FEDERICO HEISE MARTI'
						]
					},
					{
						nombre: 'Retiro',
						distrito: '18',
						codigo: '07405',
						locales: [
							'ESCUELA MANUEL MONTT',
							'LICEO GUILLERMO MARIN LARRAIN'
						]
					},
					{
						nombre: 'San Javier',
						distrito: '18',
						codigo: '07406',
						locales: [
							'ESCUELA GERONIMO LAGOS LISBOA',
							'ESCUELA JORGE GONZALEZ BASTIAS',
							'ESCUELA JOSE MANUEL BALMACEDA',
							'ESCUELA JULIO MONTT SALAMANCA',
							'ESCUELA MANUEL DE SALAS',
							'ESCUELA MARIANO LATORRE',
							'LICEO MANUEL MONTT'
						]
					},
					{
						nombre: 'Villa Alegre',
						distrito: '18',
						codigo: '07407',
						locales: [
							'ESCUELA TIMOTEO ARAYA ALEGRIA',
							'LICEO FRANCISCO ANTONIO ENCINA ARMANET'
						]
					},
					{
						nombre: 'Yerbas Buenas',
						distrito: '18',
						codigo: '07408',
						locales: [
							'ANEXO LICEO JUAN DE DIOS PUGA',
							'ESCUELA AGRICOLA MARTA MARTINEZ CRUZ',
							'LICEO JUAN DE DIOS PUGA',
							'LICEO JUAN GOMEZ MILLAS'
						]
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
						codigo: '08403',
						locales: [
							'ESCUELA BASICA BUCHUPUREO',
							'LICEO POLIVALENTE DIEGO MISSENE BURGOS'
						]
					},
					{
						nombre: 'Coelemu',
						distrito: '19',
						codigo: '08404',
						locales: [
							'ESCUELA CLEMENTINA MAUREIRA ALMANZA',
							'ESCUELA GUARILIHUE ALTO',
							'ESCUELA VEGAS DE ITATA',
							'ESCUELA VILLA JESUS DE COELEMU'
						]
					},
					{
						nombre: 'Ninhue',
						distrito: '19',
						codigo: '08408',
						locales: [
							'ESCUELA GLORIAS NAVALES'
						]
					},
					{
						nombre: 'Portezuelo',
						distrito: '19',
						codigo: '08412',
						locales: [
							'COLEGIO NUESTRA SEÑORA DEL CARMEN',
							'LICEO NIBALDO SEPULVEDA FERNANDEZ'
						]
					},
					{
						nombre: 'Quirihue',
						distrito: '19',
						codigo: '08414',
						locales: [
							'ESCUELA NUEVA AMERICA',
							'LICEO BICENTENARIO POLIVALENTE CARLOS MONTANE CASTRO'
						]
					},
					{
						nombre: 'Ránquil',
						distrito: '19',
						codigo: '08415',
						locales: [
							'ESCUELA BASICA ÑIPAS'
						]
					},
					{
						nombre: 'Treguaco',
						distrito: '19',
						codigo: '08420',
						locales: [
							'ESCUELA BASICA VALLE LONQUEN',
							'LICEO BICENTENARIO DE TREHUACO'
						]
					}
				]
			},
			{
				nombre: 'Diguillín',
				comunas: [
					{
						nombre: 'Bulnes',
						distrito: '19',
						codigo: '08402',
						locales: [
							'COLEGIO SAN ESTEBAN DE BULNES - ANEXO BASICA',
							'ESCUELA EL PALPAL DE SANTA CLARA',
							'LICEO MANUEL BULNES',
							'LICEO SANTA CRUZ DE LARQUI'
						]
					},
					{
						nombre: 'Chillán Viejo',
						distrito: '19',
						codigo: '08406',
						locales: [
							'ESCUELA BASICA RUCAPEQUEN',
							'LICEO POLIVALENTE JUAN ARTURO PACHECO ALTAMIRANO',
							'LICEO TOMAS LAGO'
						]
					},
					{
						nombre: 'Chillán',
						distrito: '19',
						codigo: '08401',
						locales: [
							'COLEGIO CONCEPCION DE CHILLAN',
							'COLEGIO CONCEPCION DE CHILLAN LOCAL: 2',
							'COLEGIO CREACION CHILLAN',
							'COLEGIO DE LA PURISIMA CONCEPCION',
							'COLEGIO POLIVALENTE PADRE ALBERTO HURTADO',
							'COLEGIO POLIVALENTE PROFESOR ENRIQUE SALINAS BUSCOVICH',
							'COLEGIO SAN BUENAVENTURA',
							'COLEGIO SAN VICENTE DE PAUL',
							'COLEGIO SEMINARIO PADRE ALBERTO HURTADO',
							'COLEGIO SEMINARIO PADRE ALBERTO HURTADO LOCAL: 2',
							'DEUTSCHE SCHULE CHILLAN',
							'ESCUELA BASICA CARDENAL JOSE MARIA CARO RODRIGUEZ',
							'ESCUELA BASICA JUAN MADRID AZOLAS',
							'ESCUELA BASICA QUINCHAMALI',
							'ESCUELA BASICA REYES DE ESPAÑA',
							"ESCUELA BASICA ROSITA O'HIGGINS RIQUELME",
							'ESCUELA PARTICULAR ADVENTISTA',
							'ESCUELA REPUBLICA DE MEXICO',
							'INSTITUTO INDUSTRIAL SUPERIOR DE CHILLAN',
							'INSTITUTO SANTA MARIA',
							'INSTITUTO SUPERIOR DE COMERCIO PROFESOR FERNANDO PEREZ BECERRA',
							'LICEO BICENTENARIO MARTA BRUNET CARAVES',
							'LICEO MARTIN RUIZ DE GAMBOA',
							'LICEO NARCISO TONDREAU - SECTOR MEDIA'
						]
					},
					{
						nombre: 'El Carmen',
						distrito: '19',
						codigo: '08407',
						locales: [
							'ESCUELA VIRGEN DEL CARMEN',
							'LICEO POLIVALENTE JUVENAL HERNANDEZ JAQUE'
						]
					},
					{
						nombre: 'Pemuco',
						distrito: '19',
						codigo: '08410',
						locales: [
							'ESCUELA BASICA GENERAL CRUZ',
							'ESCUELA DAFNE ELVIRA ZAPATA ROZAS',
							'LICEO POLIVALENTE TOMAS ARNALDO HERRERA VEGA'
						]
					},
					{
						nombre: 'Pinto',
						distrito: '19',
						codigo: '08411',
						locales: [
							'COLEGIO FRANCISCO DE ASIS',
							'ESCUELA JOSE TOHA SOLDEVILA',
							'LICEO POLITECNICO BICENTENARIO JOSE MANUEL PINTO ARIAS'
						]
					},
					{
						nombre: 'Quillón',
						distrito: '19',
						codigo: '08413',
						locales: [
							'ESCUELA BASICA AMANDA CHAVEZ NAVARRETE',
							'ESCUELA BASICA EL CASINO',
							'ESCUELA BASICA HEROES DEL ITATA'
						]
					},
					{
						nombre: 'San Ignacio',
						distrito: '19',
						codigo: '08418',
						locales: [
							'ESCUELA BASICA PUEBLO SECO',
							'LICEO MANUEL JESUS ORTIZ',
							'LICEO POLIVALENTE MARIA WARD'
						]
					},
					{
						nombre: 'Yungay',
						distrito: '19',
						codigo: '08421',
						locales: [
							'ESCUELA FERNANDO BAQUEDANO',
							'LICEO CAMPANARIO',
							'LICEO DE YUNGAY'
						]
					}
				]
			},
			{
				nombre: 'Punilla',
				comunas: [
					{
						nombre: 'Coihueco',
						distrito: '19',
						codigo: '08405',
						locales: [
							'COLEGIO LORENZO MONDANELLI',
							'ESCUELA BRITANICA GUILLERMINA DRAKE WOOD',
							'ESCUELA MANUEL MATUS HERMOSILLA',
							'LICEO BICENTENARIO CLAUDIO ARRAU LEON'
						]
					},
					{
						nombre: 'Ñiquén',
						distrito: '19',
						codigo: '08409',
						locales: [
							'LICEO POLIVALENTE SAN GREGORIO'
						]
					},
					{
						nombre: 'San Carlos',
						distrito: '19',
						codigo: '08416',
						locales: [
							'ESCUELA CACHAPOAL',
							'ESCUELA GENERAL JOSE MIGUEL CARRERA VERDUGO',
							'ESCUELA GENERAL SOFANOR PARRA HERMOSILLA',
							'ESCUELA JOAQUIN DEL PINO ROZAS Y NEGRETE',
							'INSTITUTO SANTA MARIA DE SAN CARLOS',
							'LICEO DIEGO PORTALES PALAZUELOS',
							'LICEO POLITECNICO CAPITAN IGNACIO CARRERA PINTO',
							'LICEO POLIVALENTE NUESTRA SEÑORA DE LA MERCED'
						]
					},
					{
						nombre: 'San Fabián',
						distrito: '19',
						codigo: '08417',
						locales: [
							'LICEO BICENTENARIO POLIVALENTE JORGE ALESSANDRI RODRIGUEZ'
						]
					},
					{
						nombre: 'San Nicolás',
						distrito: '19',
						codigo: '08419',
						locales: [
							'LICEO BICENTENARIO DE EXCELENCIA POLIVALENTE SAN NICOLAS, CAMPUS SERGIO MARTIN ALAMOS',
							'LICEO TECNICO PUENTE ÑUBLE'
						]
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
						codigo: '08101',
						locales: [
							'CENTRO INTEGRADO DE EDUCACION ESPECIAL',
							'COLEGIO BICENTENARIO ESPAÑA',
							'COLEGIO BICENTENARIO REPUBLICA DEL BRASIL',
							'COLEGIO BIOBIO',
							'COLEGIO CAMILO HENRIQUEZ',
							'COLEGIO CREACION CONCEPCION',
							'COLEGIO DEL SAGRADO CORAZON',
							'COLEGIO LA PROVIDENCIA',
							'COLEGIO MARINA DE CHILE',
							'COLEGIO SALESIANO',
							'COLEGIO SANTA EUFRASIA',
							'COLEGIO SANTA LUISA DE CONCEPCION',
							'COLEGIO TECNICO PROFESIONAL LOS ACACIOS',
							'ESCUELA BASICA RENE LOUVEL BERT',
							'ESCUELA ESTHER HUNNEUS DE CLARO',
							'FUNDACION EDUCACIONAL COLEGIO SAN PEDRO NOLASCO CONCEPCION',
							'INSTITUTO DE HUMANIDADES ALFREDO SILVA SANTIAGO',
							'LICEO COMERCIAL ENRIQUE OYARZUN MONDACA',
							'LICEO COMERCIAL FEMENINO DE CONCEPCION',
							'LICEO DE ADULTOS JOSE MANUEL BALMACEDA FERNANDEZ',
							'LICEO DOMINGO SANTA MARIA',
							'LICEO EXPERIMENTAL LUCILA GODOY ALCAYAGA',
							'LICEO INDUSTRIAL DE CONCEPCION',
							'LICEO JUAN GREGORIO LAS HERAS',
							'LICEO JUAN MARTINEZ DE ROZAS',
							'LICEO LORENZO ARENAS OLIVO',
							'LICEO REBECA MATTE BELLO',
							'LICEO REPUBLICA DE ISRAEL',
							'LICEO REPUBLICA DEL ECUADOR',
							'LICEO SAN AGUSTIN DE CONCEPCION',
							'LICEO TECNICO FEMENINO A-29 DE CONCEPCION',
							'LICEO TECNICO PROFESIONAL JORGE SANCHEZ UGARTE',
							'LOCAL COLEGIO MADRES DOMINICAS CONCEPCION'
						]
					},
					{
						nombre: 'Coronel',
						distrito: '20',
						codigo: '08102',
						locales: [
							'AMERICAN JUNIOR COLLEGE',
							'COLEGIO AMANECER CORONEL',
							'COLEGIO ANIBAL ESQUIVEL TAPIA',
							'ESCUELA ARTURO HUGHES CERNA',
							'ESCUELA BASICA JAVIERA CARRERA',
							'ESCUELA BASICA PLAYAS NEGRAS',
							'ESCUELA FRANCISCO COLOANE',
							'ESCUELA JORGE ROJAS MIRANDA',
							'ESCUELA OCTAVIO SALINAS CARIAGA',
							'ESCUELA RAFAEL SOTOMAYOR BAEZA',
							'ESCUELA REMIGIO CASTRO ABURTO',
							'ESCUELA ROSA MEDEL AGUILERA',
							'ESCUELA VICTOR DOMINGO SILVA',
							'INSTITUTO DE HUMANIDADES ANTONIO MORENO CASAMITJANA',
							'LICEO ANTONIO SALAMANCA MORALES',
							'LICEO BICENTENARIO DE CORONEL',
							'LICEO COMERCIAL ANDRES BELLO LOPEZ',
							'LICEO TECNICO PROFESIONAL DE LA MADERA',
							'LICEO YOBILO DE CORONEL',
							'LOCAL GIMNASIO MUNICIPAL CORONEL'
						]
					},
					{
						nombre: 'Chiguayante',
						distrito: '20',
						codigo: '08103',
						locales: [
							'COLEGIO AURORA DE CHILE CHIGUAYANTE',
							'COLEGIO AURORA DE CHILE SUR',
							'COLEGIO PARTICULAR ANDRES BELLO',
							'ESCUELA BALMACEDA SAAVEDRA LAULHERE',
							'ESCUELA BASICA MANQUIMAVIDA',
							'ESCUELA JOSE HIPOLITO SALAS Y TORO',
							'INSTITUTO HUMANIDADES MONSEÑOR JOSE MANUEL SANTO ASCARZA',
							'LICEO CHIGUAYANTE'
						]
					},
					{
						nombre: 'Florida',
						distrito: '20',
						codigo: '08104',
						locales: [
							'ESCUELA BASICA FLORIDA',
							'LICEO COPIULEMU',
							'LICEO LUIS DE ALAVA'
						]
					},
					{
						nombre: 'Hualqui',
						distrito: '20',
						codigo: '08105',
						locales: [
							'ESCUELA BASICA LOS LIBERTADORES',
							'ESCUELA CARLOS ALBERTO FERNANDEZ CASTILLO',
							'ESCUELA MANUEL AMAT Y JUNIET',
							'ESCUELA NUEVA REPUBLICA',
							'LICEO SAN JUAN BAUTISTA DE HUALQUI'
						]
					},
					{
						nombre: 'Lota',
						distrito: '21',
						codigo: '08106',
						locales: [
							'COLEGIO ANGEL DE PEREDO',
							'ESCUELA BASICA BELLO HORIZONTE',
							'ESCUELA BASICA KONRAD ADENAUER',
							'ESCUELA BASICA SANTA MARIA DE GUADALUPE',
							'ESCUELA BASICA THOMPSON MATTHEWS',
							'ESCUELA ISIDORA GOYENECHEA',
							'INSTITUTO HUMANIDADES SAN FRANCISCO DE ASIS',
							'LICEO BALDOMERO LILLO FIGUEROA',
							'LICEO CARLOS COUSIÑO GOYENECHEA',
							'LICEO COMERCIAL PRESIDENTE FREI MONTALVA'
						]
					},
					{
						nombre: 'Penco',
						distrito: '20',
						codigo: '08107',
						locales: [
							'COLEGIO EL REFUGIO',
							'COMPLEJO EDUCACIONAL GLORIA MENDEZ BRIONES',
							'ESCUELA BASICA LOS CONQUISTADORES',
							'ESCUELA ISLA DE PASCUA',
							'ESCUELA PENCO',
							'LICEO PENCOPOLITANO'
						]
					},
					{
						nombre: 'San Pedro de la Paz',
						distrito: '20',
						codigo: '08108',
						locales: [
							'COLEGIO CONCEPCION LOS HUERTOS',
							'COLEGIO CONCEPCION SAN PEDRO',
							'COLEGIO FRATERNIDAD',
							'COLEGIO GALVARINO',
							'COLEGIO INSTITUTO SAN PEDRO',
							'COLEGIO NUEVOS HORIZONTES',
							'COLEGIO SAN IGNACIO',
							'ESCUELA DARIO SALAS MARCHANT',
							'ESCUELA ENRIQUE SORO BARRIGA',
							'ESCUELA MIGUEL JOSE ZAÑARTU SANTA MARIA',
							'ESCUELA SARGENTO CANDELARIA PEREZ',
							'LICEO EL ARRAYAN',
							'LICEO MAURICIO HOCHSCHILD',
							'LICEO SAN PEDRO'
						]
					},
					{
						nombre: 'Santa Juana',
						distrito: '20',
						codigo: '08109',
						locales: [
							'ESCUELA DIEGO PORTALES',
							'ESCUELA RECAREDO VIGUERAS ARANEDA',
							'LICEO NUEVA ZELANDIA'
						]
					},
					{
						nombre: 'Talcahuano',
						distrito: '20',
						codigo: '08110',
						locales: [
							'COLEGIO AMANECER TALCAHUANO',
							'COLEGIO BASICO NUEVA LOS LOBOS',
							'COLEGIO BASICO SAN VICENTE',
							'COLEGIO ESPIRITU SANTO',
							'COLEGIO ETCHEGOYEN TALCAHUANO',
							'COLEGIO HUACHIPATO',
							'COLEGIO LOS CONDORES',
							'COLEGIO MIXTO INMACULADA CONCEPCION',
							'COLEGIO REMODELACION SIMONS',
							'ESCUELA ADULTOS LAS AMERICAS',
							'ESCUELA BASICA CERRO SAN FRANCISCO',
							'ESCUELA BASICA CRUZ DEL SUR',
							'ESCUELA BASICA LA DAMA BLANCA',
							'ESCUELA DIEGO PORTALES D 475',
							'ESCUELA MEXICO ESTADO DE GUERRERO',
							'ESCUELA SANTA LEONOR',
							'ESCUELA VILLA CENTINELA SUR',
							'LICEO ALMIRANTE PEDRO ESPINA RITCHIE',
							'LICEO ANITA SERRANO SEPULVEDA',
							'LICEO COMERCIAL PROFESOR SERGIO MORAGA ARCIL',
							'LICEO INDUSTRIAL JUAN ANTONIO RIOS',
							'LICEO LA ASUNCION',
							'LICEO POLIVALENTE LAS SALINAS',
							'LICEO TECNICO'
						]
					},
					{
						nombre: 'Tomé',
						distrito: '20',
						codigo: '08111',
						locales: [
							'CENTRO EDUCACIONAL BICENTENARIO ALTOS DE TOME',
							'ESCUELA BASICA ARTURO PRAT',
							'ESCUELA BASICA BELLAVISTA',
							'ESCUELA BASICA DICHATO',
							'ESCUELA BASICA RAFAEL',
							'ESCUELA PARTICULAR MARGARITA NASEAU',
							'LICEO COMERCIAL DE TOME',
							'LICEO INDUSTRIAL DE TOME',
							'LICEO VICENTE ALBERTO PALACIOS VALDES'
						]
					},
					{
						nombre: 'Hualpén',
						distrito: '20',
						codigo: '08112',
						locales: [
							'COLEGIO ALONKURA',
							'COLEGIO BASICO VILLA ACERO',
							'COLEGIO DE LOS SAGRADOS CORAZONES',
							'COLEGIO MONTANER DE HUALPEN',
							'COLEGIO RUCALHUE',
							'ESCUELA BASICA CRISTOBAL COLON',
							'ESCUELA BLANCA ESTELA PRAT CARVAJAL',
							'ESCUELA HELEN KELLER ADAMS',
							'ESCUELA REPUBLICA DEL PERU',
							'ESCUELA THOMAS JEFFERSON D 465',
							'LICEO INDUSTRIAL DE LA CONSTRUCCION HERNAN VALENZUELA',
							'LICEO SIMON BOLIVAR',
							'LICEO TECNICO PROFESIONAL LUCILA GODOY ALCAYAGA',
							'LICEO TECNICO PROFESIONAL PEDRO DEL RIO ZAÑARTU'
						]
					}
				]
			},
			{
				nombre: 'Arauco',
				comunas: [
					{
						nombre: 'Lebu',
						distrito: '21',
						codigo: '08201',
						locales: [
							'ESCUELA ARMANDO ARANCIBIA OLIVOS',
							'ESCUELA FRESIA GRACIELA MULLER RUIZ',
							'ESCUELA GUILLERMO RODRIGUEZ RIOBIO',
							'ESCUELA PEHUEN',
							'LICEO BICENTENARIO ISIDORA RAMOS DE GAJARDO',
							'LICEO POLIVALENTE DOCTOR RIGOBERTO IGLESIAS BASTIAS DE LEBU'
						]
					},
					{
						nombre: 'Arauco',
						distrito: '21',
						codigo: '08202',
						locales: [
							'COLEGIO EL BOSQUE',
							'ESCUELA BASICA BRISAS DEL MAR',
							'ESCUELA BASICA MARE NOSTRUM',
							'ESCUELA BASICA SAN PEDRO DE LARAQUETE',
							'ESCUELA BASICA VICENTE MILLAN IRIARTE',
							'ESCUELA EDELMIRA VERGARA QUIÑONES',
							'ESCUELA JORGE IVAN VALENZUELA ZUNIGA',
							'ESCUELA VALLE RAMADILLAS',
							'LICEO BICENTENARIO SAN FELIPE DE ARAUCO',
							'LICEO POLITECNICO CARAMPANGUE',
							'LICEO SAN FRANCISCO DE ASIS',
							'LICEO TECNICO FILIDOR GAETE MONSALVEZ'
						]
					},
					{
						nombre: 'Cañete',
						distrito: '21',
						codigo: '08203',
						locales: [
							'ESCUELA BASICA RENE ANDRADES TOLEDO',
							'ESCUELA LEONCIO ARANEDA FIGUEROA',
							'LICEO HUMANISTA CIENTIFICO JOSE DE LA CRUZ MIRANDA CORREA'
						]
					},
					{
						nombre: 'Contulmo',
						distrito: '21',
						codigo: '08204',
						locales: [
							'ESCUELA SAN LUIS DE CONTULMO',
							'LICEO POLIVALENTE NAHUELBUTA'
						]
					},
					{
						nombre: 'Curanilahue',
						distrito: '21',
						codigo: '08205',
						locales: [
							'ESCUELA COLICO SUR',
							'ESCUELA RAMIRO ROA GONZALEZ',
							'ESCUELA SAN JOSE DE COLICO',
							'LICEO POLIVALENTE MARIANO LATORRE'
						]
					},
					{
						nombre: 'Los Álamos',
						distrito: '21',
						codigo: '08206',
						locales: [
							'ESCUELA FELIX EYHERAMENDY',
							'ESCUELA ORLANDO DELGADO ZUNIGA',
							'LICEO CRISTO REDENTOR',
							'LICEO POLITECNICO CAUPOLICAN'
						]
					},
					{
						nombre: 'Tirúa',
						distrito: '21',
						codigo: '08207',
						locales: [
							'ESCUELA ELOISA GONZALEZ',
							'LICEO TRAPAQUEANTE'
						]
					}
				]
			},
			{
				nombre: 'Biobío',
				comunas: [
					{
						nombre: 'Los Ángeles',
						distrito: '21',
						codigo: '08301',
						locales: [
							'COLEGIO HISPANOAMERICANO',
							'COLEGIO INGLES WOODLAND',
							'COLEGIO MARIA INMACULADA DE LOS ANGELES',
							'COLEGIO PARTICULAR MARTA BRUNET',
							'COLEGIO SAN GABRIEL ARCANGEL',
							'COLEGIO SAN GABRIEL ARCANGEL, LOCAL 2',
							'ESCUELA BASICA 11 DE SEPTIEMBRE',
							'ESCUELA BASICA CHACAYAL SUR',
							'ESCUELA BASICA ITILHUE',
							'ESCUELA BASICA LA RINCONADA DEL SALTO',
							'ESCUELA BASICA MILLANTU',
							'ESCUELA BASICA REPUBLICA DE ISRAEL',
							'ESCUELA COLONIA ARABE',
							'ESCUELA GENERAL JOSE DE SAN MARTIN',
							'ESCUELA HOGAR NIEVES VASQUEZ PALACIOS',
							'ESCUELA ISLA DE LAJA',
							'ESCUELA JOSE MANSO DE VELASCO',
							'ESCUELA PEDRO RUIZ ALDEA',
							'ESCUELA THOMAS JEFFERSON',
							'LICEO ALEMAN DEL VERBO DIVINO',
							'LICEO ALEMAN DEL VERBO DIVINO LOCAL 2',
							'LICEO COEDUCACIONAL SANTA MARIA DE LOS ANGELES',
							'LICEO COMERCIAL CAMILO HENRIQUEZ',
							'LICEO COMERCIAL DIEGO PORTALES PALAZUELO',
							'LICEO INDUSTRIAL SAMUEL VIVANCO PARADA',
							'LICEO LOS ANGELES A-59',
							'LICEO LOS ANGELES A-59, LOCAL 2',
							'LICEO PARTICULAR CARLOS CONDELL',
							'LICEO SANTA FE'
						]
					},
					{
						nombre: 'Antuco',
						distrito: '21',
						codigo: '08302',
						locales: [
							'LICEODOCTOR VICTOR RIOS RUIZ'
						]
					},
					{
						nombre: 'Cabrero',
						distrito: '21',
						codigo: '08303',
						locales: [
							'ANEXO ENRIQUE ZAÑARTU PRIETO',
							'ESCUELA ALTO CABRERO',
							'ESCUELA BASICA ENRIQUE ZAÑARTU PRIETO',
							'LICEO POLITECNICO GENERAL OSCAR BONILLA BRADANOV',
							'LICEO POLIVALENTE MANUEL ARISTIDES ZAÑARTU ZAÑARTU'
						]
					},
					{
						nombre: 'Laja',
						distrito: '21',
						codigo: '08304',
						locales: [
							'ESCUELA ANDRES ALCAZAR',
							'ESCUELA JOSE ABELARDO NUNEZ',
							'ESCUELA NIVEQUETEN',
							'LICEO POLITECNICO HEROES DE LA CONCEPCION'
						]
					},
					{
						nombre: 'Mulchén',
						distrito: '21',
						codigo: '08305',
						locales: [
							'ESCUELA BASICA MULCHEN',
							'ESCUELA VILLA LA GRANJA',
							'LICEO BICENTENARIO DE EXCELENCIA NUEVO MUNDO',
							'LICEO MIGUEL ANGEL CERDA LEIVA'
						]
					},
					{
						nombre: 'Nacimiento',
						distrito: '21',
						codigo: '08306',
						locales: [
							'ESCUELA EL SABER',
							'ESCUELA NACIMIENTO DE NUESTRO SEÑOR',
							'ESCUELA OSCAR GUERRERO QUINSAC',
							'LICEO MUNICIPAL DE NACIMIENTO'
						]
					},
					{
						nombre: 'Negrete',
						distrito: '21',
						codigo: '08307',
						locales: [
							'ESCUELA BASICA VILLA COIGUE',
							'LICEO POLIVALENTE LA FRONTERA'
						]
					},
					{
						nombre: 'Quilaco',
						distrito: '21',
						codigo: '08308',
						locales: [
							'INSTITUTO VALLE DEL SOL QUILACO'
						]
					},
					{
						nombre: 'Quilleco',
						distrito: '21',
						codigo: '08309',
						locales: [
							'LICEO FRANCISCO BASCUNAN GUERRERO',
							'LICEO ISABEL RIQUELME'
						]
					},
					{
						nombre: 'San Rosendo',
						distrito: '21',
						codigo: '08310',
						locales: [
							'LICEO ISIDORA AGUIRRE TUPPER'
						]
					},
					{
						nombre: 'Santa Bárbara',
						distrito: '21',
						codigo: '08311',
						locales: [
							'ESCUELA BASICA CACIQUE LEVIAN',
							'ESCUELA BASICA ENRIQUE BERNSTEIN CARABANTES',
							'LICEO CARDENAL ANTONIO SAMORE'
						]
					},
					{
						nombre: 'Tucapel',
						distrito: '21',
						codigo: '08312',
						locales: [
							'ESCUELA ALEJANDRO PEREZ URBANO',
							'ESCUELA LOS AVELLANOS',
							'ESCUELA LUIS MARTINEZ GONZALEZ',
							'LICEO ANDRES ALCAZAR DE TUCAPEL',
							'LICEO DE HUEPIL'
						]
					},
					{
						nombre: 'Yumbel',
						distrito: '21',
						codigo: '08313',
						locales: [
							'ESCUELA HEROES DE CHILE',
							'ESCUELA MUNICIPAL RERE',
							'ESCUELA PADRE PEDRO CAMPOS MENCHACA',
							'INSTITUTO SAN SEBASTIAN BASICO.',
							'LICEO MUNICIPAL RIO CLARO',
							'LICEO PADRE LUIS ALBERTO SALDES IRARRAZABAL',
							'LICEO TECNICO PROFESIONAL GONZALO GUGLIELMI MONTIEL'
						]
					},
					{
						nombre: 'Alto Biobío',
						distrito: '21',
						codigo: '08314',
						locales: [
							'ESCUELA DE CONCENTRACION FRONTERIZA RALCO ALTO BIOBIO',
							'ESCUELA PARTICULAR CAUÑICU',
							'ESCUELA RALCO LEPOY'
						]
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
						codigo: '09101',
						locales: [
							'COLEGIO ADVENTISTA DE TEMUCO SEDE LOS CREADORES',
							'COLEGIO ALEMAN DE TEMUCO',
							'COLEGIO AUGUSTO WINTER',
							'COLEGIO BAUTISTA',
							'COLEGIO CENTENARIO',
							'COLEGIO DE LA SALLE',
							'COLEGIO EMPRENDER ENSEÑANZA MEDIA',
							'COLEGIO INNOV-ARTE',
							'COLEGIO MADRE ADMIRABLE DE SCHOENSTATT',
							'COLEGIO METODISTA',
							'COLEGIO MONTESSORI',
							'COLEGIO MUNDO MAGICO',
							'COLEGIO PROVIDENCIA DEL SAGRADO CORAZON',
							'COLEGIO SAINT PATRICK SCHOOL',
							'COLEGIO SAN FRANCISCO',
							'COLEGIO SCOLE CREARE',
							'COMPLEJO EDUCACIONAL UNION AMANECER',
							'ESCUELA ANDRES BELLO',
							'ESCUELA ARTISTICA ARMANDO DUFEY BLANC',
							'ESCUELA ARTURO PRAT',
							'ESCUELA CAMPOS DEPORTIVOS',
							'ESCUELA LABRANZA',
							'ESCUELA LLAIMA',
							'ESCUELA LOS TRIGALES',
							'ESCUELA MANUEL RECABARREN',
							'ESCUELA MILLARAY',
							'ESCUELA PARTICULAR FRANCIA',
							'ESCUELA PARTICULAR MONO PAINE',
							'ESCUELA VILLA ALEGRE',
							'ESCUELA VILLA CAROLINA',
							'GIMNASIO INSTITUTO CLARET',
							'GIMNASIO OLIMPICO UFRO',
							'INSTITUTO CLARET',
							'ISETT - EX LICEO TECNICO TEMUCO',
							'LICEO BICENTENARIO DE TEMUCO',
							'LICEO CAMILO HENRIQUEZ DE TEMUCO',
							'LICEO CIENTIFICO HUMANISTA BRAINSTORM',
							'LICEO COMERCIAL DEL DESARROLLO',
							'LICEO COMERCIAL TEMUCO BICENTENARIO DE EXCELENCIAEX LOCAL COLEGIO SANTA CRUZ',
							'LICEO COMERCIAL TIBURCIO SAAVEDRA',
							'LICEO GABRIELA MISTRAL Y EX LOCAL MARCELA PAZ',
							'LICEO INDUSTRIAL A-27',
							'LICEO PABLO NERUDA',
							'LICEO PABLO NERUDA LOCAL : 2',
							'LICEO POLITECNICO PUEBLO NUEVO',
							'SUN FLOWER SCHOOL'
						]
					},
					{
						nombre: 'Carahue',
						distrito: '23',
						codigo: '09102',
						locales: [
							'COMPLEJO EDUCACIONAL DARIO SALAS DIAZ',
							'ESCUELA BASICA KIM RUKA PABELLON A',
							'ESCUELA BASICA KIM RUKA PABELLON B',
							'ESCUELA BASICA NEHUENTUE',
							'LICEO MUNICIPAL TROVOLHUE',
							'LICEO PUBLICO BICENTENARIO CLAUDIO ARRAU LEON'
						]
					},
					{
						nombre: 'Cunco',
						distrito: '23',
						codigo: '09103',
						locales: [
							'COMPLEJO EDUCACIONAL JUAN BOSCO',
							'ESCUELA LEOVIGILDO KLEY',
							'LICEO ARTURO VALENZUELA',
							'LICEO MUNICIPAL ATENEA'
						]
					},
					{
						nombre: 'Curarrehue',
						distrito: '23',
						codigo: '09104',
						locales: [
							'COMPLEJO EDUCACIONAL MONSEÑOR FRANCISCO VALDES SUBERCASEAUX',
							'COMPLEJO EDUCACIONAL RUKA NGEN'
						]
					},
					{
						nombre: 'Freire',
						distrito: '23',
						codigo: '09105',
						locales: [
							'COLEGIO SANTA CRUZ DE FREIRE',
							'COMPLEJO EDUCACIONAL JUAN SCHLEYER',
							'ESCUELA JUAN SEGUEL',
							'ESCUELA JUAN SEGUEL ANEXO',
							'ESCUELA LA ESPERANZA',
							'ESCUELA RAIMAPU'
						]
					},
					{
						nombre: 'Galvarino',
						distrito: '22',
						codigo: '09106',
						locales: [
							'ESCUELA MUNICIPAL GABRIELA MISTRAL',
							'ESCUELA MUNICIPAL RIO QUILLEM'
						]
					},
					{
						nombre: 'Gorbea',
						distrito: '23',
						codigo: '09107',
						locales: [
							'ESCUELA BASICA CINCO',
							'ESCUELA BASICA LICARAYEN',
							'ESCUELA PRESBITERO JOSE AGUSTIN GOMEZ',
							'LICEO BICENTENARIO COMPLEJO EDUCACIONAL ANDRES ANTONIO GORBEA',
							'LICEO JOSE VICTORINO LASTARRIA'
						]
					},
					{
						nombre: 'Lautaro',
						distrito: '22',
						codigo: '09108',
						locales: [
							'ESCUELA BASICA NUMERO 1 LOS CACHORROS',
							'ESCUELA BASICA NUMERO SEIS',
							'ESCUELA IRENE FREI',
							'ESCUELA LOS CARRERA',
							'ESCUELA PARTICULAR CORAZON DE JESUS',
							'LICEO BICENTENARIO POLITECNICO EMA ESPINOZA CORREA',
							'LICEO JORGE TEILLIER SANDOVAL',
							'LICEO LOS CASTAÑOS'
						]
					},
					{
						nombre: 'Loncoche',
						distrito: '23',
						codigo: '09109',
						locales: [
							'COLEGIO SANTA CRUZ',
							'COMPLEJO EDUCACIONAL JUAN XXIII',
							'ESCUELA ALBORADA PABELLON A',
							'ESCUELA ALBORADA PABELLON B',
							'ESCUELA DOMITILA PINNA PARRA'
						]
					},
					{
						nombre: 'Melipeuco',
						distrito: '22',
						codigo: '09110',
						locales: [
							'ESCUELA BASICA VOLCAN LLAIMA',
							'LICEO LOS ANDES'
						]
					},
					{
						nombre: 'Nueva Imperial',
						distrito: '23',
						codigo: '09111',
						locales: [
							'ESCUELA ALEJANDRO GOROSTIAGA',
							'ESCUELA ESPECIAL AVANCEMOS JUNTOS',
							'HOGAR FEMENINO LUIS GONZALEZ',
							'HOGAR MASCULINO LUIS GONZALEZ',
							'LICEO BICENTENARIO LUIS GONZALEZ VASQUEZ',
							'LICEO INDUSTRIAL DE NUEVA IMPERIAL'
						]
					},
					{
						nombre: 'Padre las Casas',
						distrito: '23',
						codigo: '09112',
						locales: [
							'COLEGIO BICENTENARIO ARAUCANIA',
							'COMPLEJO EDUCACIONAL PADRE LAS CASAS',
							'COMPLEJO EDUCACIONAL PADRE OSCAR MOSER',
							'ESCUELA BASICA SAN SEBASTIAN DE MAQUEHUE',
							'ESCUELA DARIO SALAS',
							'ESCUELA MONSEÑOR GUIDO DE RAMBERGA',
							'ESCUELA PADRE BARTOLOME DE LAS CASAS',
							'ESCUELA PADRE VENANCIO',
							'ESCUELA PARTICULAR HABIT-ART',
							'ESCUELA PARTICULAR MISS CLARA BRINCEFIELD',
							'ESCUELA PARTICULAR NUESTRA SEÑORA DEL CARMEN',
							'ESCUELA PARTICULAR SAN BERNARDO',
							'ESCUELA PARTICULAR SAN RAFAEL ARCANGEL'
						]
					},
					{
						nombre: 'Perquenco',
						distrito: '22',
						codigo: '09113',
						locales: [
							'ESCUELA EDUARDO FREI MONTALVA',
							'LICEO ISABEL POBLETE VARGAS'
						]
					},
					{
						nombre: 'Pitrufquén',
						distrito: '23',
						codigo: '09114',
						locales: [
							'ESCUELA JUAN BAUTISTA CHESTA',
							'ESCUELA LAS AMERICAS',
							'ESCUELA UNION LATINOAMERICANA',
							'LICEO DE CIENCIAS Y HUMANIDADES',
							'LICEO MUNICIPAL LA FRONTERA'
						]
					},
					{
						nombre: 'Pucón',
						distrito: '23',
						codigo: '09115',
						locales: [
							'COMPLEJO EDUCACIONAL CARLOS HOLZAPFEL',
							'ESCUELA EL CLARO',
							'ESCUELA NUESTRA SEÑORA DE FATIMA',
							'ESCUELA PARTICULAR 167 RAMON GUIÑEZ',
							'LICEO BICENTENARIO DE HOTELERIA Y TURISMO'
						]
					},
					{
						nombre: 'Saavedra',
						distrito: '23',
						codigo: '09116',
						locales: [
							'ESCUELA PARTICULAR PADRE JUAN WEVERING',
							'ESCUELA PARTICULAR SAN SEBASTIAN',
							'LICEO REINO DE SUECIA'
						]
					},
					{
						nombre: 'Teodoro Schmidt',
						distrito: '23',
						codigo: '09117',
						locales: [
							'COMPLEJO EDUCACIONAL NUEVA ALBORADA',
							'ESCUELA HORIZONTES',
							'ESCUELA PARTICULAR PADRE ALEJANDRO ORTEGA',
							'LICEO MUNICIPAL BARROS ARANA'
						]
					},
					{
						nombre: 'Toltén',
						distrito: '23',
						codigo: '09118',
						locales: [
							'COMPLEJO EDUCACIONAL MARTIN KLEINKNECHT',
							'ESCUELA AGUAS Y GAVIOTAS',
							'ESCUELA PARTICULAR SUBVENCIONADA PADRE ISIDORO'
						]
					},
					{
						nombre: 'Vilcún',
						distrito: '22',
						codigo: '09119',
						locales: [
							'COLEGIO AMERICA',
							'COMPLEJO EDUCACIONAL LA GRANJA',
							'COMPLEJO EDUCACIONAL PADRE NICOLAS',
							'ESCUELA PARTICULAR NUMERO 8 VILCUN'
						]
					},
					{
						nombre: 'Villarrica',
						distrito: '23',
						codigo: '09120',
						locales: [
							'COLEGIO DE HUMANIDADES DE VILLARRICA',
							'COLEGIO SANTA CRUZ DE VILLARRICA',
							'ESCUELA EPU KLEI',
							'ESCUELA INDUSTRIAL SAN JOSE',
							'ESCUELA JOSE ABELARDO NUÑEZ',
							'ESCUELA PARTICULAR SAGRADA FAMILIA',
							'ESCUELA VALENTIN LETELIER',
							'ESCUELA VOIPIR DE ÑANCUL',
							'LICEO BICENTENARIO ARAUCANIA',
							'LICEO BICENTENARIO ARTISTICO ALEXANDER GRAHAM BELL',
							'LICEO POLITECNICO VILLARRICA'
						]
					},
					{
						nombre: 'Cholchol',
						distrito: '23',
						codigo: '09121',
						locales: [
							'COLEGIO SAN FRANCISCO DE ASIS',
							'LICEO JAMES MUNDELL'
						]
					}
				]
			},
			{
				nombre: 'Malleco',
				comunas: [
					{
						nombre: 'Angol',
						distrito: '22',
						codigo: '09201',
						locales: [
							'COLEGIO BASICO ARAGON',
							'ESCUELA BASICA NAHUELBUTA',
							'ESCUELA DIEGO DUBLE URRUTIA',
							'ESCUELA HERMANOS CARRERA',
							'ESCUELA JOSE ELIAS BOLIVAR HERRERA',
							'ESCUELA VILLA HUEQUEN',
							'LICEO BICENTENARIO ENRIQUE BALLACEY COTTEREAU',
							'LICEO BICENTENARIO POLITECNICO JUANITA FERNANDEZ SOLAR',
							'LICEO COMERCIAL ARMANDO BRAVO BRAVO',
							'SEDE UFRO ANGOL'
						]
					},
					{
						nombre: 'Collipulli',
						distrito: '22',
						codigo: '09202',
						locales: [
							'COMPLEJO EDUCACIONAL COLLIPULLI',
							'ESCUELA BASICA VICTOR DURAN PEREZ',
							'ESCUELA BENJAMIN FRANKLIN',
							'ESCUELA F-90 RAUL CASTRO MARQUEZ',
							'ESCUELA THOMAS ALVA EDISON'
						]
					},
					{
						nombre: 'Curacautín',
						distrito: '22',
						codigo: '09203',
						locales: [
							'ESCUELA OSVALDO FUENTES BARRERA',
							'ESCUELA PATRICIO CHAVEZ SOTO',
							'ESCUELA RAMON EDUARDO RAMIREZ HENRIQUEZ',
							'LICEO LAS ARAUCARIAS BASICA',
							'LICEO LAS ARAUCARIAS MEDIA'
						]
					},
					{
						nombre: 'Ercilla',
						distrito: '22',
						codigo: '09204',
						locales: [
							'ESCUELA BASICA SALVADOR ALLENDE',
							'ESCUELA SAN FRANCISCO DE ASIS DE ERCILLA',
							'LICEO ALONSO DE ERCILLA Y ZUÑIGA'
						]
					},
					{
						nombre: 'Lonquimay',
						distrito: '22',
						codigo: '09205',
						locales: [
							'ESCUELA BASICA LAFQUEN ICALMA',
							'ESCUELA DE LIUCURA',
							'ESCUELA MUNICIPAL FRONTERIZA',
							'ESCUELA PARTICULAR NUMERO 2',
							'LICEO LONQUIMAY EX - LICEO BRIGADIER CARLOS SCHALCHLI VILLALOBOS'
						]
					},
					{
						nombre: 'Los Sauces',
						distrito: '22',
						codigo: '09206',
						locales: [
							'ESCUELA GUSTAVO VASQUEZ DIAZ',
							'ESCUELA LOS SAUCES'
						]
					},
					{
						nombre: 'Lumaco',
						distrito: '22',
						codigo: '09207',
						locales: [
							'ESCUELA F-174 VALLE DE LUMACO',
							'ESCUELA MUNICIPAL PICHIPELLAHUEN',
							'LICEO MUNICIPAL DE LUMACO'
						]
					},
					{
						nombre: 'Purén',
						distrito: '22',
						codigo: '09208',
						locales: [
							'ESCUELA PEDRO DE OÑA',
							'LICEO BICENTENARIO INDOMITO DE PUREN',
							'LICEO MARIA AURORA GUIÑEZ RAMIREZ'
						]
					},
					{
						nombre: 'Renaico',
						distrito: '22',
						codigo: '09209',
						locales: [
							'ESCUELA BASICA LOS NOGALES',
							'ESCUELA LA NOBEL GABRIELA',
							'LICEO POLITECNICO DOMINGO SANTA MARIA'
						]
					},
					{
						nombre: 'Traiguén',
						distrito: '22',
						codigo: '09210',
						locales: [
							'COLEGIO BICENTENARIO LOUIS PASTEUR',
							'COMPLEJO EDUCACIONAL LUIS DURAND DURAND',
							'ESCUELA BASICA EMILIA ROMAGNA',
							'ESCUELA REPUBLICA DE ISRAEL',
							'LICEO LUCILA GODOY ALCAYAGA'
						]
					},
					{
						nombre: 'Victoria',
						distrito: '22',
						codigo: '09211',
						locales: [
							'COLEGIO INSTITUTO VICTORIA',
							'COLEGIO SANTA CRUZ DE VICTORIA',
							'ESCUELA BASICA PATRICIO LYNCH',
							'ESCUELA HEROES DE IQUIQUE',
							'ESCUELA MUNICIPAL MONICA GEBERT MEIER',
							'ESCUELA SELVA OSCURA',
							'LICEO BICENTENARIO POLITECNICO MANUEL MONTT'
						]
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
						codigo: '14101',
						locales: [
							'CENTRO EDUC.ADULTOS LUIS MOLL BRIONES',
							'COLEGIO DE MUSICA JUAN SEBASTIAN BACH',
							'COLEGIO DEPORTIVO MUNICIPAL DE VALDIVIA',
							'COLEGIO TENIENTE HERNAN MERINO CORREA',
							'COLISEO MUNICIPAL ANTONIO AZURMENDY',
							'ESCUELA ANGACHILLA',
							'ESCUELA BASICA LAS ANIMAS',
							'ESCUELA DE NIEBLA JUAN BOSCH',
							'ESCUELA EL BOSQUE',
							'ESCUELA EL LAUREL',
							'ESCUELA ESPANA LOCAL: 2',
							'ESCUELA FEDOR M.DOSTOIEVSKI',
							'ESCUELA FERNANDO SANTIVAN',
							'ESCUELA FRANCIA',
							'ESCUELA LEONARDO DA VINCI',
							'ESCUELA MEXICO',
							'EX - COLEGIO DE MUSICA JUAN SEBASTIAN BACH',
							'GIMNASIO LAS ANIMAS',
							'INST. SUPERIOR DE ADMINISTRACION Y TURISMO',
							'INSTITUTO COMERCIAL DE VALDIVIA',
							'INSTITUTO ITALIA DE VALDIVIA',
							'INSTITUTO ITALIA DE VALDIVIA LOCAL: 2',
							'LICEO BICENTENARIO CIUDAD DE LOS RIOS VALDIVI',
							'LICEO INDUSTRIAL VALDIVIA',
							'LICEO INDUSTRIAL VALDIVIA LOCAL: 2',
							'LICEO INDUSTRIAL VALDIVIA LOCAL: 3',
							'LICEO POLIVANENTE BENJAMIN VICUÑA MACKENNA',
							'LICEO SANTA MARIA LA BLANCA',
							'LICEO SANTA MARIA LA BLANCA LOCAL: 2',
							'LICEO TECNICO VALDIVIA'
						]
					},
					{
						nombre: 'Corral',
						distrito: '24',
						codigo: '14102',
						locales: [
							'ESCUELA BASICA DE CORRAL',
							'ESCUELA RURAL CARBONEROS'
						]
					},
					{
						nombre: 'Lanco',
						distrito: '24',
						codigo: '14103',
						locales: [
							'ESCUELA FELIPE BARTHOU',
							'ESCUELA PARTICULAR SAN FRANCISCO',
							'LICEO POLIVALENTE CAMILO HENRIQUEZ G.',
							'LICEOREPUBLICA DEL BRASIL'
						]
					},
					{
						nombre: 'Los Lagos',
						distrito: '24',
						codigo: '14104',
						locales: [
							'ESCUELA NEVADA',
							'ESCUELA NUEVA COLLILELFU',
							'ESCUELA NUEVA ESPANA',
							'ESCUELA RURAL ANTILHUE',
							'ESCUELA RURAL ENRIQUE HEVIA LABBE',
							'ESCUELA RURAL FOLILCO'
						]
					},
					{
						nombre: 'Máfil',
						distrito: '24',
						codigo: '14105',
						locales: [
							'LICEO SANTO CURA DE ARS'
						]
					},
					{
						nombre: 'Mariquina',
						distrito: '24',
						codigo: '14106',
						locales: [
							'COLEGIO PELCHUQUIN',
							'COLEGIO SAN JOSE',
							'ESCUELA FRAY BERNABE DE LUCERNA',
							'ESCUELA VALLE DE MARIQUINA',
							'LICEO POLITECNICO PESQUERO',
							'LICEO SAN LUIS DE ALBA'
						]
					},
					{
						nombre: 'Paillaco',
						distrito: '24',
						codigo: '14107',
						locales: [
							'COLEGIO CARDENAL RAUL SILVA HENRIQUEZ',
							'ESCUELA NUEVA AURORA',
							'ESCUELA OLEGARIO MORALES OLIVA',
							'ESCUELA PROYECTO DE FUTURO',
							'ESCUELA ROBERTO OJEDA TORRES',
							'LICEO RODULFO AMANDO PHILIPPI'
						]
					},
					{
						nombre: 'Panguipulli',
						distrito: '24',
						codigo: '14108',
						locales: [
							'CENTRO EDUCACIONAL SAN SEBASTIAN',
							'CENTRO EDUCATIVO FERNANDO SANTIVAN',
							'COL. DE ARTES, CIENCIA Y TEC. DA VINCI',
							'COLEGIO MOUNTAIN GREEN SCHOOL',
							'COMPLEJO EDUCACIONAL TIERRA DE ESPERANZA',
							'ESCUELA BASICA REPUBLICA DE CHILE',
							'ESCUELA MANUEL ANABALON SAEZ',
							'ESCUELA MARIA ALVARADO GARAY',
							'ESCUELA PARTICULAR NUEVA LIQUINE',
							'ESCUELA RURAL LA RINCONADA',
							'LICEO PADRE SIGISFREDO'
						]
					}
				]
			},
			{
				nombre: 'Ranco',
				comunas: [
					{
						nombre: 'La Unión',
						distrito: '24',
						codigo: '14201',
						locales: [
							'COLEGIO DE CULTURA Y DIFUSION ARTISTICA',
							'COLEGIO TECNICO PROFESIONAL HONORIO OJEDA VALDERAS',
							'COLEGIO VIMAGIO',
							'ESC.DIFERENC.VILLA SAN JOSE DE LA UNION',
							'ESCUELA EL MAITEN',
							'ESCUELALA UNION',
							'ESCUELA PRESIDENTE JORGE ALESSANDRI R.',
							'ESCUELA RADIMADI',
							'ESCUELA RURAL PUERTO NUEVO',
							'LICEO RECTOR ABDON ANDRADE COLOMA'
						]
					},
					{
						nombre: 'Futrono',
						distrito: '24',
						codigo: '14202',
						locales: [
							'ESCUELA BASICA JOSE M. BALMACEDA F.',
							'ESCUELA FRONTERIZA DE LLIFEN',
							'ESCUELA RURAL CURRINE',
							'ESCUELA RURAL NONTUELA',
							'LICEO SAN CONRADO DE FUTRONO'
						]
					},
					{
						nombre: 'Lago Ranco',
						distrito: '24',
						codigo: '14203',
						locales: [
							'COMPLEJO EDUCACIONAL IGNAO',
							'ESCUELA RURAL RININAHUE',
							'LICEO ANTONIO VARAS LOCAL: 2'
						]
					},
					{
						nombre: 'Río Bueno',
						distrito: '24',
						codigo: '14204',
						locales: [
							'ESCUELA BASICA RIO BUENO',
							'ESCUELA PAMPA RIOS',
							'ESCUELA RURAL COLONIA DIUMEN',
							'ESCUELA RURAL CRUCERO',
							'ESCUELA RURAL VALLE MANTILHUE BAJO',
							'LICEO TCO. PROF. DE RIO BUENO',
							'LICEO VICENTE PEREZ ROSALES'
						]
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
						codigo: '10101',
						locales: [
							'COLEGIO DARIO SALAS',
							'ESCUELA 10 ANGELMO',
							'ESCUELA 7 ARABE-SIRIA',
							'ESCUELA ALERCE HISTORICO',
							'ESCUELA BASICA KIMUN LAWAL',
							'ESCUELA BASICA LAS CAMELIAS',
							'ESCUELA CAPITAN ARTURO PRAT CHACON',
							'ESCUELA CHILOE',
							'ESCUELA DE CULTURA Y DIFUSION ARTISTICA',
							'ESCUELA DIFERENCIAL `LOS EUCALIPTOS`',
							'ESCUELA LIBERTAD',
							'ESCUELA MELIPULLI',
							'ESCUELA MIRASOL',
							'ESCUELA NUMERO 5, MIRAMAR',
							'ESCUELA PADRE ALBERTO HURTADO',
							'ESCUELA RURAL CORRENTOSO',
							'ESCUELA RURAL HUELMO',
							'ESCUELA RURAL LA CHAMIZA',
							'ESCUELA RURAL LA VARA',
							'ESCUELA RURAL LENCA',
							'ESCUELA RURAL MAILLEN ESTERO',
							'INSTITUTO TECNICO FORJADORES DE ALERCE',
							'LICEO ANDRES BELLO',
							'LICEO COMERCIAL',
							'LICEO COMERCIAL MIRAMAR',
							'LICEO DE HOMBRES MANUEL MONTT',
							'LICEO INDUSTRIAL',
							'LICEO POLITECNICO MIRASOL',
							'LICEO RURAL LAS QUEMAS'
						]
					},
					{
						nombre: 'Calbuco',
						distrito: '26',
						codigo: '10102',
						locales: [
							'COLEGIO SAN MIGUEL',
							'ESCUELA EULOGIO GOYCOLEA GARAY Y GIMNASIO',
							'ESCUELA RURAL CARMEN MIRANDA NAVARRO',
							'ESCUELA RURAL CHAUQUEAR',
							'ESCUELA RURAL PARGUA',
							'ESCUELA UNIFICADA ISLA GUAR',
							'GIMNASIO FISCAL CALBUCO'
						]
					},
					{
						nombre: 'Cochamó',
						distrito: '26',
						codigo: '10103',
						locales: [
							'ESCUELA BASICA FRONTERIZA JUAN SOLER MANFREDINI',
							'ESCUELA RURAL CAPITAN DE BANDADA CARLOS RODRIGUEZ',
							'ESCUELA RURAL RIO PUELO'
						]
					},
					{
						nombre: 'Fresia',
						distrito: '25',
						codigo: '10104',
						locales: [
							'GIMNASIO ESCUELA RURAL SAN ANDRES Y JARDIN INFANTIL ANEXO',
							'GIMNASIO EXTERIOR CARLOS IBAÑEZ DEL CAMPO',
							'LICEO CARLOS IBAÑEZ DEL CAMPO'
						]
					},
					{
						nombre: 'Frutillar',
						distrito: '25',
						codigo: '10105',
						locales: [
							'ESCUELA RURAL LOS LINARES DE CASMA',
							'LICEO INDUSTRIAL CHILENO ALEMAN'
						]
					},
					{
						nombre: 'Los Muermos',
						distrito: '25',
						codigo: '10106',
						locales: [
							'COLEGIO DE DIFUSION ARTISTICA LOS ULMOS',
							'COLEGIO INGLES MABEL CONDEMARIN',
							'ESCUELA RURAL CAÑITAS',
							'LICEO PUNTA DE RIELES'
						]
					},
					{
						nombre: 'Llanquihue',
						distrito: '25',
						codigo: '10107',
						locales: [
							'ESCUELA INES GALLARDO ALVARADO',
							'ESCUELA PARTICULAR LOS VOLCANES',
							'SAINT PAUL COLLEGE'
						]
					},
					{
						nombre: 'Maullín',
						distrito: '26',
						codigo: '10108',
						locales: [
							'ESCUELA ENCARNACION OLIVARES',
							'ESCUELA FRANCISCO CORTES OJEDA',
							'ESCUELA RURAL DORILA AGUILA AGUILAR',
							'ESCUELA RURAL HILDA HUNQUEN',
							'ESCUELA RURAL LOS ARCES'
						]
					},
					{
						nombre: 'Puerto Varas',
						distrito: '25',
						codigo: '10109',
						locales: [
							'COLEGIO FELMER NIKLITSCHEK',
							'COLEGIO GERMANIA DEL VERBO DIVINO',
							'COLEGIO MIRADOR DEL LAGO',
							'COLEGIO NUEVA BRAUNAU',
							'COLEGIO ROSITA NOVARO',
							'ESCUELA RURAL CRISTO REY',
							'ESCUELA RURAL ELLA MINTE DE ROTH',
							'ESCUELA RURAL EPSON',
							'LICEO PEDRO AGUIRRE CERDA'
						]
					}
				]
			},
			{
				nombre: 'Chiloé',
				comunas: [
					{
						nombre: 'Castro',
						distrito: '26',
						codigo: '10201',
						locales: [
							'ESCUELA AYTUE',
							'ESCUELA LUIS URIBE DIAZ Y GIMNASIO',
							'ESCUELA RURAL LOS ANGELES',
							'ESCUELA RURAL MIRTA OYARZO VERA',
							'LICEO FRANCISCO COLOANE',
							'LICEO GALVARINO RIVEROS CARDENAS',
							'LICEO POLITECNICO DE CASTRO',
							'POLIDEPORTIVO DE CASTRO'
						]
					},
					{
						nombre: 'Ancud',
						distrito: '26',
						codigo: '10202',
						locales: [
							'COLEGIO EL PILAR EDUCACION BASICA',
							'ESCUELA ANEXA',
							'ESCUELA RURAL SOL DEL PACIFICO',
							'ESCUELA RURAL VILLA CHACAO',
							'GIMNASIO EXTERIOR LICEO DOMINGO ESPIÑEIRA RIESCO',
							'GIMNASIO FISCAL DE ANCUD',
							'LICEO AGRICOLA',
							'LICEO DOMINGO ESPIÑEIRA RIESCO Y GIMNASIO'
						]
					},
					{
						nombre: 'Chonchi',
						distrito: '26',
						codigo: '10203',
						locales: [
							'ESCUELA BASICA SAN CARLOS',
							'ESCUELA RURAL CUCAO',
							'LICEO MANUEL JESUS ANDRADE BORQUEZ'
						]
					},
					{
						nombre: 'Curaco de Vélez',
						distrito: '26',
						codigo: '10204',
						locales: [
							'LICEO ALFREDO BARRIA OYARZUN'
						]
					},
					{
						nombre: 'Dalcahue',
						distrito: '26',
						codigo: '10205',
						locales: [
							'ESCUELA BASICA DALCAHUE',
							'ESCUELA RURAL JUAN VICTORINO TANGOL',
							'LICEO POLIVALENTE DALCAHUE'
						]
					},
					{
						nombre: 'Puqueldón',
						distrito: '26',
						codigo: '10206',
						locales: [
							'ESCUELA PUQUELDON'
						]
					},
					{
						nombre: 'Queilén',
						distrito: '26',
						codigo: '10207',
						locales: [
							'ESCUELA CHILHUE'
						]
					},
					{
						nombre: 'Quellón',
						distrito: '26',
						codigo: '10208',
						locales: [
							'ESCUELA BASICA SECTOR ORIENTE',
							'ESCUELA EDUCADORA EULOGIA BORQUEZ PEREZ',
							'ESCUELA RURAL ARTISTICA ALUMNO MARCELO GUENTEO SOLIS',
							'LICEO RAYEN MAPU'
						]
					},
					{
						nombre: 'Quemchi',
						distrito: '26',
						codigo: '10209',
						locales: [
							'ESCUELA BASICA MIL PAISAJES Y GIMNASIO',
							'ESCUELA RURAL BORDEMAR',
							'ESCUELA RURAL LINDA VISTA',
							'ESCUELA RURAL LLIUCO',
							'ESCUELA RURAL MONTEMAR',
							'LICEO POLIVALENTE'
						]
					},
					{
						nombre: 'Quinchao',
						distrito: '26',
						codigo: '10210',
						locales: [
							'ESCUELA RURAL AMANECER 2000',
							'ESCUELA RURAL LA VILLA',
							'ESCUELA RURAL OSTRICULTURA',
							'ESCUELA RURAL SAN FRANCISCO',
							'LICEO INSULAR ENSEÑANZA BASICA Y GIMNASIO',
							'LICEO INSULAR ENSEÑANZA MEDIA'
						]
					}
				]
			},
			{
				nombre: 'Osorno',
				comunas: [
					{
						nombre: 'Osorno',
						distrito: '25',
						codigo: '10301',
						locales: [
							'COLEGIO SAN MATEO',
							'COLEGIO WILLIAM BOOTH',
							'ESCUELA 88 CANADA',
							'ESCUELA DE ARTES Y CULTURA OSORNO Y GIMNASIO',
							'ESCUELA EFRAIN CAMPANA SILVA',
							'ESCUELA ESPECIAL `ANA AICHELE CARRASCO`',
							'ESCUELA FUNDACION PAUL HARRIS',
							'ESCUELA GARCIA HURTADO DE MENDOZA',
							'ESCUELA JUAN RICARDO SANCHEZ ASCENCIO',
							'ESCUELA LAGO RUPANCO',
							'ESCUELA LEONILA FOLCH LOPEZ',
							'ESCUELA MEXICO DE MICHOACAN',
							'ESCUELA MONSEÑOR FRANCISCO VALDES SUBERCASEAUX',
							'ESCUELA N° 46 ITALIA',
							'ESCUELA RURAL LUZ Y SABER',
							'ESCUELASUIZA',
							'LICEO ELEUTERIO RAMIREZ',
							'LICEO INDUSTRIAL OSORNO',
							'LICEO OSORNO COLLEGE',
							'LICEO RAHUE'
						]
					},
					{
						nombre: 'Puerto Octay',
						distrito: '25',
						codigo: '10302',
						locales: [
							'ESCUELA ALBERTO HURTADO',
							'ESCUELA RURAL LAS CASCADAS',
							'LICEO BENJAMIN MUÑOZ GAMERO'
						]
					},
					{
						nombre: 'Purranque',
						distrito: '25',
						codigo: '10303',
						locales: [
							'COLEGIO CRECER',
							'ESCUELA BERTOLDO HOFMANN KAHLER',
							'ESCUELA RURAL LA PAZ',
							'ESCUELA RURAL NUEVA ISRAEL',
							'ESCUELA VILLA LO BURGOS',
							'INSTITUTO ALEMAN PURRANQUE',
							'LICEO TOMAS BURGOS'
						]
					},
					{
						nombre: 'Puyehue',
						distrito: '2',
						codigo: '10304',
						locales: [
							'ESCUELA ENTRE LAGOS',
							'LICEO LAS AMERICAS'
						]
					},
					{
						nombre: 'Río Negro',
						distrito: '2',
						codigo: '10305',
						locales: [
							'COLEGIO RIACHUELO',
							'ESCUELA ANDREW JACKSON',
							'ESCUELA RIO NEGRO',
							'LICEO JOSE TORIBIO MEDINA'
						]
					},
					{
						nombre: 'San Juan de la Costa',
						distrito: '2',
						codigo: '10306',
						locales: [
							'COLEGIO TECNICO PROFESIONAL MISION SAN JUAN DE LA COSTA',
							'ESCUELA RURAL BAHIA MANSA',
							'LICEO POLITECNICO ANTULAFKEN'
						]
					},
					{
						nombre: 'San Pablo',
						distrito: '2',
						codigo: '10307',
						locales: [
							'COLEGIO FORESTAL DE QUILACAHUIN',
							'ESCUELA DELICIO CARDENAS BUSTAMANTE',
							'LICEO FRAY PABLO DE ROYO'
						]
					}
				]
			},
			{
				nombre: 'Palena',
				comunas: [
					{
						nombre: 'Chaitén',
						distrito: '26',
						codigo: '10401',
						locales: [
							'GIMNASIO MUNICIPAL DE CHAITEN',
							'LICEO PENINSULAR AYACARA',
							'MUNICENTRO DE CHAITEN'
						]
					},
					{
						nombre: 'Futaleufú',
						distrito: '26',
						codigo: '10402',
						locales: [
							'ESCUELA FUTALEUFU'
						]
					},
					{
						nombre: 'Hualaihué',
						distrito: '26',
						codigo: '10403',
						locales: [
							'COLEGIO MAURICIO HITCHCOCK',
							'ESCUELA RURAL 745 SEMILLERO',
							'ESCUELA RURAL CATARATAS DEL ALERCE',
							'LICEO HORNOPIREN'
						]
					},
					{
						nombre: 'Palena',
						distrito: '26',
						codigo: '10404',
						locales: [
							'ESCUELA ROBERTO WHITE GESELL'
						]
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
						codigo: '11101',
						locales: [
							'COLEGIO ANTOINE DE SAINT EXUPERY',
							'ESCUELA BAQUEDANO',
							'ESCUELA JOSE ANTOLIN SILVA ORMENO',
							'ESCUELA PARTICULAR N°1 MATER DEI',
							'ESCUELA PARTICULAR SAN JOSE OBRERO',
							'ESCUELA PEDRO QUINTANA MANSILLA',
							'ESCUELA RURAL PABLO NERUDA',
							'ESCUELA RURAL VALLE DE LA LUNA',
							'ESCUELA RURAL VALLE SIMPSON',
							'LICEO JOSEFINA AGUIRRE MONTENEGRO',
							'LICEO SAN FELIPE BENICIO DE COYHAIQUE',
							'LICEO TECNICO PROFESIONAL JUAN PABLO II'
						]
					},
					{
						nombre: 'Lago Verde',
						distrito: '27',
						codigo: '11102',
						locales: [
							'ESCUELA CON INTERNADO JOSE MIGUEL CARRERA',
							'ESCUELA MUNICIPAL VILLA AMENGUAL',
							'ESCUELA RURAL CON INTERNADO LA TAPERA'
						]
					}
				]
			},
			{
				nombre: 'Aisén',
				comunas: [
					{
						nombre: 'Aisén',
						distrito: '27',
						codigo: '11201',
						locales: [
							'ESCUELA ALMIRANTE SIMPSON',
							'ESCUELA BASICA LITORAL AUSTRAL',
							'ESCUELA PEDRO AGUIRRE CERDA',
							'ESCUELA POETISA GABRIELA MISTRAL',
							'LICEO MAÑIHUALES',
							'LICEO RAUL BROUSSAIN CAMPINO',
							'POLIDEPORTIVO AYSEN'
						]
					},
					{
						nombre: 'Cisnes',
						distrito: '27',
						codigo: '11202',
						locales: [
							'ESCUELA AMANDA LABARCA HUBERSTONE',
							'ESCUELA EUSEBIO IBAR SCHEPELER',
							'ESCUELA GUIDO GOMEZ MUNOZ',
							'ESCUELA HAMBURGO'
						]
					},
					{
						nombre: 'Guaitecas',
						distrito: '27',
						codigo: '11203',
						locales: [
							'LICEO DE MELINKA'
						]
					}
				]
			},
			{
				nombre: 'Capitán Pratt',
				comunas: [
					{
						nombre: 'Cochrane',
						distrito: '27',
						codigo: '11301',
						locales: [
							'LICEO BICENTENARIO AUSTRAL LORD COCHRANE'
						]
					},
					{
						nombre: 'O’Higgins',
						distrito: '27',
						codigo: '11302',
						locales: [
							'ESCUELA PIONEROS DEL SUR'
						]
					},
					{
						nombre: 'Tortel',
						distrito: '27',
						codigo: '11303',
						locales: [
							'ESCUELA MUNICIPAL COMANDANTE LUIS BRAVO'
						]
					}
				]
			},
			{
				nombre: 'General Carrera',
				comunas: [
					{
						nombre: 'Chile Chico',
						distrito: '27',
						codigo: '11401',
						locales: [
							'ESCUELA BASICA DE CHILE CHICO',
							'ESCUELA LIBERTADOR BERNARDO O´HIGGINS RIQUELME'
						]
					},
					{
						nombre: 'Río Ibáñez',
						distrito: '27',
						codigo: '11402',
						locales: [
							'ESCUELA AONIKENK',
							'ESCUELA RURAL CARRETERA AUSTRAL',
							'ESCUELA RURAL CERRO CASTILLO'
						]
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
						codigo: '12101',
						locales: [
							'CENTRO ELIGE VIVIR SANO',
							'ESCUELA BERNARDO O´HIGGINS',
							'ESCUELA CROACIA',
							'ESCUELA DIECIOCHO DE SEPTIEMBRE',
							'ESCUELA GENERAL MANUEL BULNES',
							'ESCUELA HERNANDO DE MAGALLANES',
							'ESCUELA JUAN WILLIAMS',
							'ESCUELA PARTICULAR LA MILAGROSA',
							'ESCUELA PATAGONIA',
							'ESCUELA PEDRO PABLO LEMAITRE',
							'ESCUELA PORTUGAL',
							'ESCUELA VILLA LAS NIEVES',
							'GIMNASIO FISCAL',
							'INSTITUTO DON BOSCO',
							'INSTITUTO SAGRADA FAMILIA',
							'INSTITUTO SUPERIOR DE COMERCIO',
							'LICEO ADVENTISTA',
							'LICEO EXPERIMENTAL UMAG',
							'LICEO INDUSTRIAL ARMANDO QUEZADA ACHARAN',
							'LICEO JUAN BAUTISTA CONTARDI',
							'LICEO LUIS ALBERTO BARRERA',
							'LICEO POLIVALENTE MARIA BEHETY',
							'LICEO SAN JOSE',
							'LICEO SARA BRAUN',
							'UNIVERSIDAD DE MAGALLANES'
						]
					},
					{
						nombre: 'Laguna Blanca',
						distrito: '28',
						codigo: '12102'
					},
					{
						nombre: 'Río Verde',
						distrito: '28',
						codigo: '12103',
						locales: [
							'SALA DE USO MULTIPLE'
						]
					},
					{
						nombre: 'San Gregorio',
						distrito: '28',
						codigo: '12104',
						locales: [
							'ESCUELA PUNTA DELGADA'
						]
					}
				]
			},
			{
				nombre: 'Antártica Chilena',
				comunas: [
					{
						nombre: 'Cabo de Hornos (Ex. Navarino)',
						distrito: '28',
						codigo: '12201',
						locales: [
							'LICEO DONALD MC-INTYRE GRIFFITHS'
						]
					},
					{
						nombre: 'Antártica',
						distrito: '28',
						codigo: '12202',
						locales: [
							'ESCUELA BASICA VILLA LAS ESTRELLAS'
						]
					}
				]
			},
			{
				nombre: 'Tierra del Fuego',
				comunas: [
					{
						nombre: 'Porvenir',
						distrito: '28',
						codigo: '12301',
						locales: [
							'LICEO HERNANDO DE MAGALLANES'
						]
					},
					{
						nombre: 'Primavera',
						distrito: '28',
						codigo: '12302',
						locales: [
							'ESCUELA CERRO SOMBRERO'
						]
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
						codigo: '12401',
						locales: [
							'ESCUELA BAUDILIA AVENDANO DE YOUSSUF',
							'ESCUELA CAPITAN JUAN LADRILLERO',
							'ESCUELAMIGUEL MONTECINOS',
							'ESCUELA SANTIAGO BUERAS'
						]
					},
					{
						nombre: 'Torres del Paine',
						distrito: '28',
						codigo: '12402',
						locales: [
							'ESCUELA RAMON SERRANO'
						]
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

const regionesComunasLocales = _.map(chile, regionData => {
	const region = {
		value: regionData.nombre,
		label: regionData.nombre,
		reg: regionData.regex
	}
	const comunasEnprovincias = _.map(regionData.provincias, provincia => _.map(provincia.comunas, comuna => {
		return {
			value: comuna.nombre,
			label: comuna.nombre,
			locales: comuna.locales
		}
	}))
	region.children = _.flatten(comunasEnprovincias)
	return region
})

export default {
	chile,
	regionesProvinciasComunas,
	regionesComunas,
	regionesComunasLocales
}
