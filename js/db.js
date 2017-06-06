var DB = {
  diccionarios : {},
  batchDiario  : {},
  who          : {},
  wikiKb       : {},
  avatar       : {},
  FAQ          : {},
  usr          : {},
  icon         : {},
  efan         : {},
  jksStrk      : {
    cts        : {
    	"1": {
    		"titulo": "test",
    		"codigo": "123_test",
    		"id": "1",
    		"nodos": {
    			"catStrk": {
    				"0": {
    					"Bne": {
    						"sig": "+",
    						"relId": "0.1",
    						"epiDesc": "Balance Neocon",
    						"li": "<li id='1'>(+) Bne Balance Neocon<ol id='rel_1'></ol></li>",
    						"epiN": "Bne"
    					},
    					"EFAN_Riesgos": {
    						"sig": "+",
    						"relId": "0.2",
    						"epiDesc": "",
    						"li": "<li id='2'>(+) EFAN_Riesgos </li>",
    						"epiN": "EFAN_Riesgos"
    					}
    				},
    				"1": {
    					"BmargenF": {
    						"sig": "+",
    						"relId": "1.5",
    						"epiDesc": "Margen Financiero Balance",
    						"li": "<li id='5'>(+) BmargenF Margen Financiero Balance<ol id='rel_155'></ol></li>",
    						"epiN": "BmargenF"
    					},
    					"Bac": {
    						"sig": "+",
    						"relId": "1.3",
    						"epiDesc": "Activo",
    						"li": "<li id='3'>(+) Bac Activo<ol id='rel_21'></ol></li>",
    						"epiN": "Bac"
    					},
    					"AsignarB": {
    						"sig": "+",
    						"relId": "1.9",
    						"epiDesc": "Cuentas por Asignar Balance",
    						"li": "<li id='9'>(+) AsignarB Cuentas por Asignar Balance</li>",
    						"epiN": "AsignarB"
    					},
    					"Borden": {
    						"sig": "+",
    						"relId": "1.6",
    						"epiDesc": "Cuentas de Orden.",
    						"li": "<li id='6'>(+) Borden Cuentas de Orden.<ol id='rel_3'></ol></li>",
    						"epiN": "Borden"
    					},
    					"Bpyp": {
    						"sig": "+",
    						"relId": "1.4",
    						"epiDesc": "Pasivo y Patrimonio Neto",
    						"li": "<li id='4'>(+) Bpyp Pasivo y Patrimonio Neto<ol id='rel_2'></ol></li>",
    						"epiN": "Bpyp"
    					},
    					"BordenFid": {
    						"sig": "+",
    						"relId": "1.7",
    						"epiDesc": "Cuentas de Orden Fideicomisos UDIS.",
    						"li": "<li id='7'>(+) BordenFid Cuentas de Orden Fideicomisos UDIS.<ol id='rel_17'></ol></li>",
    						"epiN": "BordenFid"
    					},
    					"BordenInv": {
    						"sig": "+",
    						"relId": "1.8",
    						"epiDesc": "Cuentas de Orden Fideicomisos INVEX.",
    						"li": "<li id='8'>(+) BordenInv Cuentas de Orden Fideicomisos INVEX.<ol id='rel_18'></ol></li>",
    						"epiN": "BordenInv"
    					}
    				},
    				"2": {
    					"Bpat": {
    						"sig": "+",
    						"relId": "2.11",
    						"epiDesc": "Patrimonio Neto",
    						"li": "<li id='11'>(+) Bpat Patrimonio Neto<ol id='rel_23'></ol></li>",
    						"epiN": "Bpat"
    					},
    					"Bpas": {
    						"sig": "+",
    						"relId": "2.10",
    						"epiDesc": "Pasivo",
    						"li": "<li id='10'>(+) Bpas Pasivo<ol id='rel_22'></ol></li>",
    						"epiN": "Bpas"
    					}
    				},
    				"3": {
    					"BordenG63": {
    						"sig": "+",
    						"relId": "3.15",
    						"epiDesc": "Grupo 63",
    						"li": "<li id='15'>(+) BordenG63 Grupo 63<ol id='rel_20'></ol></li>",
    						"epiN": "BordenG63"
    					},
    					"BordenG74": {
    						"sig": "+",
    						"relId": "3.22",
    						"epiDesc": "Grupo 74",
    						"li": "<li id='22'>(+) BordenG74 Grupo 74</li>",
    						"epiN": "BordenG74"
    					},
    					"BordenG64": {
    						"sig": "+",
    						"relId": "3.16",
    						"epiDesc": "Grupo 64",
    						"li": "<li id='16'>(+) BordenG64 Grupo 64</li>",
    						"epiN": "BordenG64"
    					},
    					"BordenG65": {
    						"sig": "+",
    						"relId": "3.17",
    						"epiDesc": "Grupo 65",
    						"li": "<li id='17'>(+) BordenG65 Grupo 65</li>",
    						"epiN": "BordenG65"
    					},
    					"BordenG98": {
    						"sig": "+",
    						"relId": "3.23",
    						"epiDesc": "Grupo 98",
    						"li": "<li id='23'>(+) BordenG98 Grupo 98</li>",
    						"epiN": "BordenG98"
    					},
    					"BordenG66": {
    						"sig": "+",
    						"relId": "3.18",
    						"epiDesc": "Grupo 66",
    						"li": "<li id='18'>(+) BordenG66 Grupo 66</li>",
    						"epiN": "BordenG66"
    					},
    					"BordenG60": {
    						"sig": "+",
    						"relId": "3.12",
    						"epiDesc": "Grupo 60",
    						"li": "<li id='12'>(+) BordenG60 Grupo 60</li>",
    						"epiN": "BordenG60"
    					},
    					"BordenG61": {
    						"sig": "+",
    						"relId": "3.13",
    						"epiDesc": "Grupo 61",
    						"li": "<li id='13'>(+) BordenG61 Grupo 61<ol id='rel_19'></ol></li>",
    						"epiN": "BordenG61"
    					},
    					"BordenG62": {
    						"sig": "+",
    						"relId": "3.14",
    						"epiDesc": "Grupo 62",
    						"li": "<li id='14'>(+) BordenG62 Grupo 62</li>",
    						"epiN": "BordenG62"
    					},
    					"BordenG67": {
    						"sig": "+",
    						"relId": "3.19",
    						"epiDesc": "Grupo 67",
    						"li": "<li id='19'>(+) BordenG67 Grupo 67</li>",
    						"epiN": "BordenG67"
    					},
    					"BordenG68": {
    						"sig": "+",
    						"relId": "3.20",
    						"epiDesc": "Grupo 68",
    						"li": "<li id='20'>(+) BordenG68 Grupo 68</li>",
    						"epiN": "BordenG68"
    					},
    					"BordenG69": {
    						"sig": "+",
    						"relId": "3.21",
    						"epiDesc": "Grupo 69",
    						"li": "<li id='21'>(+) BordenG69 Grupo 69</li>",
    						"epiN": "BordenG69"
    					},
    					"Cap_T": {
    						"sig": "+",
    						"relId": "3.24",
    						"epiDesc": "Captacion Total",
    						"li": "<li id='24'>(+) Cap_T Captacion Total<ol id='rel_4'></ol></li>",
    						"epiN": "Cap_T"
    					}
    				},
    				"4": {
    					"CAP_G": {
    						"sig": "+",
    						"relId": "4.25",
    						"epiDesc": "Captacion Global",
    						"li": "<li id='25'>(+) CAP_G Captacion Global<ol id='rel_5'></ol></li>",
    						"epiN": "CAP_G"
    					},
    					"CAP 2 0 0 0 0": {
    						"sig": "+",
    						"relId": "4.26",
    						"epiDesc": "MDC",
    						"li": "<li id='26'>(+) CAP 2 0 0 0 0 MDC</li>",
    						"epiN": "CAP 2 0 0 0 0"
    					}
    				},
    				"5": {
    					"CAP 6 0 0 0 0": {
    						"sig": "+",
    						"relId": "5.28",
    						"epiDesc": "Captacion Tesoreria",
    						"li": "<li id='28'>(+) CAP 6 0 0 0 0 Captacion Tesoreria<ol id='rel_6'></ol></li>",
    						"epiN": "CAP 6 0 0 0 0"
    					},
    					"CAP 1 0 0 0 0": {
    						"sig": "+",
    						"relId": "5.27",
    						"epiDesc": "Captacion Negocio",
    						"li": "<li id='27'>(+) CAP 1 0 0 0 0 Captacion Negocio<ol id='rel_7'></ol></li>",
    						"epiN": "CAP 1 0 0 0 0"
    					}
    				},
    				"6": {
    					"Cap Inter Rep": {
    						"sig": "+",
    						"relId": "6.31",
    						"epiDesc": "Intermediacion Reportos",
    						"li": "<li id='31'>(+) Cap Inter Rep Intermediacion Reportos</li>",
    						"epiN": "Cap Inter Rep"
    					},
    					"Cap Inter Mdd": {
    						"sig": "+",
    						"relId": "6.32",
    						"epiDesc": "Intermediacion MDD Directo",
    						"li": "<li id='32'>(+) Cap Inter Mdd Intermediacion MDD Directo</li>",
    						"epiN": "Cap Inter Mdd"
    					},
    					"Cap Inter Pzo": {
    						"sig": "+",
    						"relId": "6.30",
    						"epiDesc": "Intermediacion Plazo",
    						"li": "<li id='30'>(+) Cap Inter Pzo Intermediacion Plazo</li>",
    						"epiN": "Cap Inter Pzo"
    					},
    					"Cap Inter Vta": {
    						"sig": "+",
    						"relId": "6.29",
    						"epiDesc": "Intermediacion Vista",
    						"li": "<li id='29'>(+) Cap Inter Vta Intermediacion Vista</li>",
    						"epiN": "Cap Inter Vta"
    					}
    				},
    				"7": {
    					"CAP 1 R 0 0 0": {
    						"sig": "+",
    						"relId": "7.34",
    						"epiDesc": "Reportos y MDD Directo",
    						"li": "<li id='34'>(+) CAP 1 R 0 0 0 Reportos y MDD Directo<ol id='rel_16'></ol></li>",
    						"epiN": "CAP 1 R 0 0 0"
    					},
    					"CAP 1 1 0 0 0": {
    						"sig": "+",
    						"relId": "7.33",
    						"epiDesc": "Captacion Tradicional",
    						"li": "<li id='33'>(+) CAP 1 1 0 0 0 Captacion Tradicional<ol id='rel_8'></ol></li>",
    						"epiN": "CAP 1 1 0 0 0"
    					}
    				},
    				"8": {
    					"CAP 1 1 4 0 0": {
    						"sig": "+",
    						"relId": "8.35",
    						"epiDesc": "Cap. Sociedades",
    						"li": "<li id='35'>(+) CAP 1 1 4 0 0 Cap. Sociedades<ol id='rel_9'></ol></li>",
    						"epiN": "CAP 1 1 4 0 0"
    					}
    				},
    				"9": {
    					"CAP 1 1 4 3 0": {
    						"sig": "+",
    						"relId": "9.38",
    						"epiDesc": "Sociedad Cobertura",
    						"li": "<li id='38'>(+) CAP 1 1 4 3 0 Sociedad Cobertura<ol id='rel_15'></ol></li>",
    						"epiN": "CAP 1 1 4 3 0"
    					},
    					"CAP 1 1 4 2 0": {
    						"sig": "+",
    						"relId": "9.37",
    						"epiDesc": "Sociedad Comun",
    						"li": "<li id='37'>(+) CAP 1 1 4 2 0 Sociedad Comun<ol id='rel_13'></ol></li>",
    						"epiN": "CAP 1 1 4 2 0"
    					},
    					"CAP 1 1 4 1 0": {
    						"sig": "+",
    						"relId": "9.36",
    						"epiDesc": "Sociedad Deuda",
    						"li": "<li id='36'>(+) CAP 1 1 4 1 0 Sociedad Deuda<ol id='rel_10'></ol></li>",
    						"epiN": "CAP 1 1 4 1 0"
    					}
    				},
    				"10": {
    					"F+LIQ": {
    						"sig": "+",
    						"relId": "10.44",
    						"epiDesc": "",
    						"li": "<li id='44'>(+) F+LIQ </li>",
    						"epiN": "F+LIQ"
    					},
    					"CG_SocDFNOMINA": {
    						"sig": "+",
    						"relId": "10.60",
    						"epiDesc": "Soc FNOMINA G.",
    						"li": "<li id='60'>(+) CG_SocDFNOMINA Soc FNOMINA G.</li>",
    						"epiN": "CG_SocDFNOMINA"
    					},
    					"BBVADOL": {
    						"sig": "+",
    						"relId": "10.45",
    						"epiDesc": "",
    						"li": "<li id='45'>(+) BBVADOL </li>",
    						"epiN": "BBVADOL"
    					},
    					"CG_SocDLP": {
    						"sig": "+",
    						"relId": "10.39",
    						"epiDesc": "Soc BMERLP G.",
    						"li": "<li id='39'>(+) CG_SocDLP Soc BMERLP G.<ol id='rel_11'></ol></li>",
    						"epiN": "CG_SocDLP"
    					},
    					"B+UMS": {
    						"sig": "+",
    						"relId": "10.73",
    						"epiDesc": "B+UMS",
    						"li": "<li id='73'>(+) B+UMS B+UMS</li>",
    						"epiN": "B+UMS"
    					},
    					"CG_SBLP": {
    						"sig": "+",
    						"relId": "10.68",
    						"epiDesc": "Soc SBLP",
    						"li": "<li id='68'>(+) CG_SBLP Soc SBLP<ol id='rel_12'></ol></li>",
    						"epiN": "CG_SBLP"
    					},
    					"DIVER CP": {
    						"sig": "+",
    						"relId": "10.40",
    						"epiDesc": "",
    						"li": "<li id='40'>(+) DIVER CP </li>",
    						"epiN": "DIVER CP"
    					},
    					"CG_SocDGOB": {
    						"sig": "+",
    						"relId": "10.49",
    						"epiDesc": "Soc BMERGOB/GUBER-1 G.",
    						"li": "<li id='49'>(+) CG_SocDGOB Soc BMERGOB/GUBER-1 G.</li>",
    						"epiN": "CG_SocDGOB"
    					},
    					"CG_SocDUDI": {
    						"sig": "+",
    						"relId": "10.56",
    						"epiDesc": "Soc GFBF-UDI",
    						"li": "<li id='56'>(+) CG_SocDUDI Soc GFBF-UDI</li>",
    						"epiN": "CG_SocDUDI"
    					},
    					"DCP-1": {
    						"sig": "+",
    						"relId": "10.75",
    						"epiDesc": "DCP-1",
    						"li": "<li id='75'>(+) DCP-1 DCP-1</li>",
    						"epiN": "DCP-1"
    					},
    					"B+CORP": {
    						"sig": "+",
    						"relId": "10.41",
    						"epiDesc": "",
    						"li": "<li id='41'>(+) B+CORP </li>",
    						"epiN": "B+CORP"
    					},
    					"Bmer180": {
    						"sig": "+",
    						"relId": "10.76",
    						"epiDesc": "Bmer180",
    						"li": "<li id='76'>(+) Bmer180 Bmer180</li>",
    						"epiN": "Bmer180"
    					},
    					"SOC B4": {
    						"sig": "+",
    						"relId": "10.79",
    						"epiDesc": "SOC B4",
    						"li": "<li id='79'>(+) SOC B4 SOC B4</li>",
    						"epiN": "SOC B4"
    					},
    					"CG_SocDBAN": {
    						"sig": "+",
    						"relId": "10.54",
    						"epiDesc": "Soc BMERBAN G.",
    						"li": "<li id='54'>(+) CG_SocDBAN Soc BMERBAN G.</li>",
    						"epiN": "CG_SocDBAN"
    					},
    					"CG_SocDUSM": {
    						"sig": "+",
    						"relId": "10.57",
    						"epiDesc": "Soc SBTRADI G.",
    						"li": "<li id='57'>(+) CG_SocDUSM Soc SBTRADI G.</li>",
    						"epiN": "CG_SocDUSM"
    					},
    					"CG_SocDDin": {
    						"sig": "+",
    						"relId": "10.47",
    						"epiDesc": "Soc BMERDIN G.",
    						"li": "<li id='47'>(+) CG_SocDDin Soc BMERDIN G.</li>",
    						"epiN": "CG_SocDDin"
    					},
    					"CG_SocDHOR": {
    						"sig": "+",
    						"relId": "10.48",
    						"epiDesc": "Soc BMERHOR G.",
    						"li": "<li id='48'>(+) CG_SocDHOR Soc BMERHOR G.</li>",
    						"epiN": "CG_SocDHOR"
    					},
    					"SOC B+": {
    						"sig": "+",
    						"relId": "10.80",
    						"epiDesc": "SOC B+",
    						"li": "<li id='80'>(+) SOC B+ SOC B+</li>",
    						"epiN": "SOC B+"
    					},
    					"CG_SocDLIQ": {
    						"sig": "+",
    						"relId": "10.55",
    						"epiDesc": "Soc BMERLIQ-DMD1 G.",
    						"li": "<li id='55'>(+) CG_SocDLIQ Soc BMERLIQ-DMD1 G.</li>",
    						"epiN": "CG_SocDLIQ"
    					},
    					"B1+": {
    						"sig": "+",
    						"relId": "10.74",
    						"epiDesc": "B1+",
    						"li": "<li id='74'>(+) B1+ B1+</li>",
    						"epiN": "B1+"
    					},
    					"VIDA+ 50": {
    						"sig": "+",
    						"relId": "10.82",
    						"epiDesc": "",
    						"li": "<li id='82'>(+) VIDA+ 50 </li>",
    						"epiN": "VIDA+ 50"
    					},
    					"Soc. F-PFAE": {
    						"sig": "+",
    						"relId": "10.42",
    						"epiDesc": "",
    						"li": "<li id='42'>(+) Soc. F-PFAE </li>",
    						"epiN": "Soc. F-PFAE"
    					},
    					"CG_SocB+Real": {
    						"sig": "+",
    						"relId": "10.67",
    						"epiDesc": "Soc B+Real Bal G.",
    						"li": "<li id='67'>(+) CG_SocB+Real Soc B+Real Bal G.</li>",
    						"epiN": "CG_SocB+Real"
    					},
    					"CG_MEXLAR": {
    						"sig": "+",
    						"relId": "10.69",
    						"epiDesc": "Soc MEXLAR G.",
    						"li": "<li id='69'>(+) CG_MEXLAR Soc MEXLAR G.</li>",
    						"epiN": "CG_MEXLAR"
    					},
    					"Soc TRPLE+7": {
    						"sig": "+",
    						"relId": "10.72",
    						"epiDesc": "Soc TRPLE+7",
    						"li": "<li id='72'>(+) Soc TRPLE+7 Soc TRPLE+7</li>",
    						"epiN": "Soc TRPLE+7"
    					},
    					"Bmer90": {
    						"sig": "+",
    						"relId": "10.78",
    						"epiDesc": "Bmer90",
    						"li": "<li id='78'>(+) Bmer90 Bmer90</li>",
    						"epiN": "Bmer90"
    					},
    					"CG_SocDFLE": {
    						"sig": "+",
    						"relId": "10.52",
    						"epiDesc": "Soc BMERFLE G.",
    						"li": "<li id='52'>(+) CG_SocDFLE Soc BMERFLE G.</li>",
    						"epiN": "CG_SocDFLE"
    					},
    					"CG_SocDPZO": {
    						"sig": "+",
    						"relId": "10.51",
    						"epiDesc": "Soc BMERPZO G.",
    						"li": "<li id='51'>(+) CG_SocDPZO Soc BMERPZO G.</li>",
    						"epiN": "CG_SocDPZO"
    					},
    					"BBVA-EUR Bal Esp": {
    						"sig": "+",
    						"relId": "10.81",
    						"epiDesc": "BBVA-EUR Bal Esp ",
    						"li": "<li id='81'>(+) BBVA-EUR Bal Esp BBVA-EUR Bal Esp </li>",
    						"epiN": "BBVA-EUR Bal Esp"
    					},
    					"CG_SocDTRIPLE2": {
    						"sig": "+",
    						"relId": "10.64",
    						"epiDesc": "Soc TRIPLE-2 G.",
    						"li": "<li id='64'>(+) CG_SocDTRIPLE2 Soc TRIPLE-2 G.</li>",
    						"epiN": "CG_SocDTRIPLE2"
    					},
    					"CG_SocDTRIPLE3": {
    						"sig": "+",
    						"relId": "10.65",
    						"epiDesc": "Soc TRIPLE-3 G.",
    						"li": "<li id='65'>(+) CG_SocDTRIPLE3 Soc TRIPLE-3 G.</li>",
    						"epiN": "CG_SocDTRIPLE3"
    					},
    					"CG_SocDTRIPLE1": {
    						"sig": "+",
    						"relId": "10.63",
    						"epiDesc": "Soc TRIPLE1 G.",
    						"li": "<li id='63'>(+) CG_SocDTRIPLE1 Soc TRIPLE1 G.</li>",
    						"epiN": "CG_SocDTRIPLE1"
    					},
    					"CG_SocDPRE": {
    						"sig": "+",
    						"relId": "10.61",
    						"epiDesc": "Soc BMERPRE G.",
    						"li": "<li id='61'>(+) CG_SocDPRE Soc BMERPRE G.</li>",
    						"epiN": "CG_SocDPRE"
    					},
    					"CG_SocDTES": {
    						"sig": "+",
    						"relId": "10.50",
    						"epiDesc": "Soc BMERTES G.",
    						"li": "<li id='50'>(+) CG_SocDTES Soc BMERTES G.</li>",
    						"epiN": "CG_SocDTES"
    					},
    					"CG_SocDMDD": {
    						"sig": "+",
    						"relId": "10.58",
    						"epiDesc": "Soc BMERMDD G.",
    						"li": "<li id='58'>(+) CG_SocDMDD Soc BMERMDD G.</li>",
    						"epiN": "CG_SocDMDD"
    					},
    					"F-Pfae": {
    						"sig": "+",
    						"relId": "10.43",
    						"epiDesc": "",
    						"li": "<li id='43'>(+) F-Pfae </li>",
    						"epiN": "F-Pfae"
    					},
    					"CG_SocDDIVERT": {
    						"sig": "+",
    						"relId": "10.62",
    						"epiDesc": "Soc DIVER-T G.",
    						"li": "<li id='62'>(+) CG_SocDDIVERT Soc DIVER-T G.</li>",
    						"epiN": "CG_SocDDIVERT"
    					},
    					"CG_SocDTRIPLE": {
    						"sig": "+",
    						"relId": "10.53",
    						"epiDesc": "Soc TRIPLE G.",
    						"li": "<li id='53'>(+) CG_SocDTRIPLE Soc TRIPLE G.</li>",
    						"epiN": "CG_SocDTRIPLE"
    					},
    					"CG_SocDAHO": {
    						"sig": "+",
    						"relId": "10.46",
    						"epiDesc": "Soc BMERAHO G.",
    						"li": "<li id='46'>(+) CG_SocDAHO Soc BMERAHO G.</li>",
    						"epiN": "CG_SocDAHO"
    					},
    					"Bmer30": {
    						"sig": "+",
    						"relId": "10.77",
    						"epiDesc": "Bmer30",
    						"li": "<li id='77'>(+) Bmer30 Bmer30</li>",
    						"epiN": "Bmer30"
    					},
    					"CG_SocDFLED1": {
    						"sig": "+",
    						"relId": "10.66",
    						"epiDesc": "Soc FLE-D1 G.",
    						"li": "<li id='66'>(+) CG_SocDFLED1 Soc FLE-D1 G.</li>",
    						"epiN": "CG_SocDFLED1"
    					},
    					"CG_SocDFPYME": {
    						"sig": "+",
    						"relId": "10.59",
    						"epiDesc": "Soc F-PYME G.",
    						"li": "<li id='59'>(+) CG_SocDFPYME Soc F-PYME G.</li>",
    						"epiN": "CG_SocDFPYME"
    					},
    					"CG_SocDEYG": {
    						"sig": "+",
    						"relId": "10.70",
    						"epiDesc": "Soc BMEREYG G.",
    						"li": "<li id='70'>(+) CG_SocDEYG Soc BMEREYG G.</li>",
    						"epiN": "CG_SocDEYG"
    					},
    					"CG_SocTRIPLE4G": {
    						"sig": "+",
    						"relId": "10.71",
    						"epiDesc": "Soc TRIPLE-4 G.",
    						"li": "<li id='71'>(+) CG_SocTRIPLE4G Soc TRIPLE-4 G.</li>",
    						"epiN": "CG_SocTRIPLE4G"
    					}
    				},
    				"11": {
    					"Dlp-1 Uhn": {
    						"sig": "+",
    						"relId": "11.83",
    						"epiDesc": "Dlp-1 Uhn",
    						"li": "<li id='83'>(+) Dlp-1 Uhn Dlp-1 Uhn</li>",
    						"epiN": "Dlp-1 Uhn"
    					}
    				},
    				"12": {
    					"Sbreal If": {
    						"sig": "+",
    						"relId": "12.84",
    						"epiDesc": "Sbreal If",
    						"li": "<li id='84'>(+) Sbreal If Sbreal If</li>",
    						"epiN": "Sbreal If"
    					}
    				},
    				"13": {
    					"VIDA+ 80": {
    						"sig": "+",
    						"relId": "13.122",
    						"epiDesc": "",
    						"li": "<li id='122'>(+) VIDA+ 80 </li>",
    						"epiN": "VIDA+ 80"
    					},
    					"DIVER-C": {
    						"sig": "+",
    						"relId": "13.85",
    						"epiDesc": "DIVER-C",
    						"li": "<li id='85'>(+) DIVER-C DIVER-C</li>",
    						"epiN": "DIVER-C"
    					},
    					"BBVAEMG": {
    						"sig": "+",
    						"relId": "13.90",
    						"epiDesc": "BBVAEMG",
    						"li": "<li id='90'>(+) BBVAEMG BBVAEMG<ol id='rel_14'></ol></li>",
    						"epiN": "BBVAEMG"
    					},
    					"VIDA+ 60": {
    						"sig": "+",
    						"relId": "13.120",
    						"epiDesc": "",
    						"li": "<li id='120'>(+) VIDA+ 60 </li>",
    						"epiN": "VIDA+ 60"
    					},
    					"CG_SocBBVAXJPP": {
    						"sig": "+",
    						"relId": "13.118",
    						"epiDesc": "Soc BBVAXJP P.",
    						"li": "<li id='118'>(+) CG_SocBBVAXJPP Soc BBVAXJP P.</li>",
    						"epiN": "CG_SocBBVAXJPP"
    					},
    					"CG_SocRTOP": {
    						"sig": "+",
    						"relId": "13.102",
    						"epiDesc": "Soc BMERTOP G.",
    						"li": "<li id='102'>(+) CG_SocRTOP Soc BMERTOP G.</li>",
    						"epiN": "CG_SocRTOP"
    					},
    					"Bbvalat E": {
    						"sig": "+",
    						"relId": "13.87",
    						"epiDesc": "",
    						"li": "<li id='87'>(+) Bbvalat E </li>",
    						"epiN": "Bbvalat E"
    					},
    					"BBVAXJP E": {
    						"sig": "+",
    						"relId": "13.86",
    						"epiDesc": "",
    						"li": "<li id='86'>(+) BBVAXJP E </li>",
    						"epiN": "BBVAXJP E"
    					},
    					"CG_Soc BBVAXJP P": {
    						"sig": "+",
    						"relId": "13.94",
    						"epiDesc": "Soc BBVAXJP P",
    						"li": "<li id='94'>(+) CG_Soc BBVAXJP P Soc BBVAXJP P</li>",
    						"epiN": "CG_Soc BBVAXJP P"
    					},
    					"CG_SocRDIVERR": {
    						"sig": "+",
    						"relId": "13.107",
    						"epiDesc": "Soc DIVER-R G.",
    						"li": "<li id='107'>(+) CG_SocRDIVERR Soc DIVER-R G.</li>",
    						"epiN": "CG_SocRDIVERR"
    					},
    					"CG_SocBBVALATP": {
    						"sig": "+",
    						"relId": "13.117",
    						"epiDesc": "Soc BBVALAT P.",
    						"li": "<li id='117'>(+) CG_SocBBVALATP Soc BBVALAT P.</li>",
    						"epiN": "CG_SocBBVALATP"
    					},
    					"CG_SocBBVEMGP": {
    						"sig": "+",
    						"relId": "13.116",
    						"epiDesc": "Soc BBVEMG P",
    						"li": "<li id='116'>(+) CG_SocBBVEMGP Soc BBVEMG P</li>",
    						"epiN": "CG_SocBBVEMGP"
    					},
    					"CG_SocRIND": {
    						"sig": "+",
    						"relId": "13.103",
    						"epiDesc": "Soc BMERIND G.",
    						"li": "<li id='103'>(+) CG_SocRIND Soc BMERIND G.</li>",
    						"epiN": "CG_SocRIND"
    					},
    					"CG_SocRPAT": {
    						"sig": "+",
    						"relId": "13.97",
    						"epiDesc": "Soc BMERPAT G.",
    						"li": "<li id='97'>(+) CG_SocRPAT Soc BMERPAT G.</li>",
    						"epiN": "CG_SocRPAT"
    					},
    					"CG_Soc BP.": {
    						"sig": "+",
    						"relId": "13.92",
    						"epiDesc": "Soc BP.",
    						"li": "<li id='92'>(+) CG_Soc BP. Soc BP.</li>",
    						"epiN": "CG_Soc BP."
    					},
    					"CG_SocRBRI": {
    						"sig": "+",
    						"relId": "13.113",
    						"epiDesc": "Soc VBRI G.",
    						"li": "<li id='113'>(+) CG_SocRBRI Soc VBRI G.</li>",
    						"epiN": "CG_SocRBRI"
    					},
    					"CG_SocRDIVERB": {
    						"sig": "+",
    						"relId": "13.109",
    						"epiDesc": "Soc DIVER-B G.",
    						"li": "<li id='109'>(+) CG_SocRDIVERB Soc DIVER-B G.</li>",
    						"epiN": "CG_SocRDIVERB"
    					},
    					"CG_SocRFLERV-1": {
    						"sig": "+",
    						"relId": "13.111",
    						"epiDesc": "Soc BBVAsia G.",
    						"li": "<li id='111'>(+) CG_SocRFLERV-1 Soc BBVAsia G.</li>",
    						"epiN": "CG_SocRFLERV-1"
    					},
    					"CG_SocRCRE": {
    						"sig": "+",
    						"relId": "13.98",
    						"epiDesc": "Soc BMERCRE G.",
    						"li": "<li id='98'>(+) CG_SocRCRE Soc BMERCRE G.</li>",
    						"epiN": "CG_SocRCRE"
    					},
    					"CG_SocRMix": {
    						"sig": "+",
    						"relId": "13.96",
    						"epiDesc": "Soc SBMIX G.",
    						"li": "<li id='96'>(+) CG_SocRMix Soc SBMIX G.</li>",
    						"epiN": "CG_SocRMix"
    					},
    					"CG_SocRDIVERE": {
    						"sig": "+",
    						"relId": "13.110",
    						"epiDesc": "Soc DIVER-E G.",
    						"li": "<li id='110'>(+) CG_SocRDIVERE Soc DIVER-E G.</li>",
    						"epiN": "CG_SocRDIVERE"
    					},
    					"CG_SocRDIVERD": {
    						"sig": "+",
    						"relId": "13.108",
    						"epiDesc": "Soc DIVER-D G.",
    						"li": "<li id='108'>(+) CG_SocRDIVERD Soc DIVER-D G.</li>",
    						"epiN": "CG_SocRDIVERD"
    					},
    					"CG_SocRBmerInf": {
    						"sig": "+",
    						"relId": "13.114",
    						"epiDesc": "Soc Bmer Inf",
    						"li": "<li id='114'>(+) CG_SocRBmerInf Soc Bmer Inf</li>",
    						"epiN": "CG_SocRBmerInf"
    					},
    					"CG_SocRINT": {
    						"sig": "+",
    						"relId": "13.101",
    						"epiDesc": "Soc BBVAINT G.",
    						"li": "<li id='101'>(+) CG_SocRINT Soc BBVAINT G.</li>",
    						"epiN": "CG_SocRINT"
    					},
    					"VIDA+ 70": {
    						"sig": "+",
    						"relId": "13.121",
    						"epiDesc": "",
    						"li": "<li id='121'>(+) VIDA+ 70 </li>",
    						"epiN": "VIDA+ 70"
    					},
    					"CG_SocRTRIPRV2": {
    						"sig": "+",
    						"relId": "13.95",
    						"epiDesc": "Soc TRIPRV2 G.",
    						"li": "<li id='95'>(+) CG_SocRTRIPRV2 Soc TRIPRV2 G.</li>",
    						"epiN": "CG_SocRTRIPRV2"
    					},
    					"CG_SocRTRIPRV1": {
    						"sig": "+",
    						"relId": "13.100",
    						"epiDesc": "Soc TRIPRV1 G.",
    						"li": "<li id='100'>(+) CG_SocRTRIPRV1 Soc TRIPRV1 G.</li>",
    						"epiN": "CG_SocRTRIPRV1"
    					},
    					"CG_Soc BBVALAT P": {
    						"sig": "+",
    						"relId": "13.93",
    						"epiDesc": "Soc BBVALAT P",
    						"li": "<li id='93'>(+) CG_Soc BBVALAT P Soc BBVALAT P</li>",
    						"epiN": "CG_Soc BBVALAT P"
    					},
    					"CG_SocBBVANDQP": {
    						"sig": "+",
    						"relId": "13.115",
    						"epiDesc": "Soc BBVANDQ P.",
    						"li": "<li id='115'>(+) CG_SocBBVANDQP Soc BBVANDQ P.</li>",
    						"epiN": "CG_SocBBVANDQP"
    					},
    					"CG_SocRVMEM": {
    						"sig": "+",
    						"relId": "13.112",
    						"epiDesc": "Soc VMEM G.",
    						"li": "<li id='112'>(+) CG_SocRVMEM Soc VMEM G.</li>",
    						"epiN": "CG_SocRVMEM"
    					},
    					"B+EST": {
    						"sig": "+",
    						"relId": "13.88",
    						"epiDesc": "B+EST",
    						"li": "<li id='88'>(+) B+EST B+EST</li>",
    						"epiN": "B+EST"
    					},
    					"B+RVUSA": {
    						"sig": "+",
    						"relId": "13.89",
    						"epiDesc": "B+RVUSA",
    						"li": "<li id='89'>(+) B+RVUSA B+RVUSA<ol id='rel_160'></ol></li>",
    						"epiN": "B+RVUSA"
    					},
    					"CG_SocRE50": {
    						"sig": "+",
    						"relId": "13.106",
    						"epiDesc": "Soc BMERE50 G.",
    						"li": "<li id='106'>(+) CG_SocRE50 Soc BMERE50 G.</li>",
    						"epiN": "CG_SocRE50"
    					},
    					"CG_SocBP": {
    						"sig": "+",
    						"relId": "13.119",
    						"epiDesc": "Soc BP..",
    						"li": "<li id='119'>(+) CG_SocBP Soc BP..</li>",
    						"epiN": "CG_SocBP"
    					},
    					"CG_SocRUSA": {
    						"sig": "+",
    						"relId": "13.104",
    						"epiDesc": "Soc BMERUSA G.",
    						"li": "<li id='104'>(+) CG_SocRUSA Soc BMERUSA G.</li>",
    						"epiN": "CG_SocRUSA"
    					},
    					"CG_SocRVAMVA": {
    						"sig": "+",
    						"relId": "13.105",
    						"epiDesc": "Soc GFB-VAMVA G.",
    						"li": "<li id='105'>(+) CG_SocRVAMVA Soc GFB-VAMVA G.</li>",
    						"epiN": "CG_SocRVAMVA"
    					},
    					"CG_Soc BBVANDQ P": {
    						"sig": "+",
    						"relId": "13.91",
    						"epiDesc": "Soc BBVANDQ P",
    						"li": "<li id='91'>(+) CG_Soc BBVANDQ P Soc BBVANDQ P</li>",
    						"epiN": "CG_Soc BBVANDQ P"
    					},
    					"CG_SocRBCH4001": {
    						"sig": "+",
    						"relId": "13.99",
    						"epiDesc": "Soc BCH-4001 G.",
    						"li": "<li id='99'>(+) CG_SocRBCH4001 Soc BCH-4001 G.</li>",
    						"epiN": "CG_SocRBCH4001"
    					}
    				},
    				"14": {
    					"Bbvaemg B": {
    						"sig": "+",
    						"relId": "14.123",
    						"epiDesc": "Bbvaemg B",
    						"li": "<li id='123'>(+) Bbvaemg B Bbvaemg B</li>",
    						"epiN": "Bbvaemg B"
    					}
    				},
    				"15": {
    					"CG_SocZDOL": {
    						"sig": "+",
    						"relId": "15.124",
    						"epiDesc": "Soc BMERDOL G.",
    						"li": "<li id='124'>(+) CG_SocZDOL Soc BMERDOL G.</li>",
    						"epiN": "CG_SocZDOL"
    					},
    					"CG_SocDUSD": {
    						"sig": "+",
    						"relId": "15.125",
    						"epiDesc": "Soc BMEREUR G.",
    						"li": "<li id='125'>(+) CG_SocDUSD Soc BMEREUR G.</li>",
    						"epiN": "CG_SocDUSD"
    					}
    				},
    				"16": {
    					"CAP 3 0 0 0 0": {
    						"sig": "+",
    						"relId": "16.127",
    						"epiDesc": "MDD Directo",
    						"li": "<li id='127'>(+) CAP 3 0 0 0 0 MDD Directo</li>",
    						"epiN": "CAP 3 0 0 0 0"
    					},
    					"CAP 1 2 0 0 0": {
    						"sig": "+",
    						"relId": "16.126",
    						"epiDesc": "Reportos MDD",
    						"li": "<li id='126'>(+) CAP 1 2 0 0 0 Reportos MDD</li>",
    						"epiN": "CAP 1 2 0 0 0"
    					}
    				},
    				"17": {
    					"BordenFidG63": {
    						"sig": "+",
    						"relId": "17.130",
    						"epiDesc": "Grupo 63_Cuentas de Orden Fideicomisos UDIS",
    						"li": "<li id='130'>(+) BordenFidG63 Grupo 63_Cuentas de Orden Fideicomisos UDIS</li>",
    						"epiN": "BordenFidG63"
    					},
    					"BordenFidG74": {
    						"sig": "+",
    						"relId": "17.134",
    						"epiDesc": "Grupo 74_Cuentas de Orden Fideicomisos UDIS",
    						"li": "<li id='134'>(+) BordenFidG74 Grupo 74_Cuentas de Orden Fideicomisos UDIS</li>",
    						"epiN": "BordenFidG74"
    					},
    					"BordenFidG62": {
    						"sig": "+",
    						"relId": "17.129",
    						"epiDesc": "Grupo 62_Cuentas de Orden Fideicomisos UDIS",
    						"li": "<li id='129'>(+) BordenFidG62 Grupo 62_Cuentas de Orden Fideicomisos UDIS</li>",
    						"epiN": "BordenFidG62"
    					},
    					"BordenFidG61": {
    						"sig": "+",
    						"relId": "17.128",
    						"epiDesc": "Grupo 61_Cuentas de Orden Fideicomisos UDIS",
    						"li": "<li id='128'>(+) BordenFidG61 Grupo 61_Cuentas de Orden Fideicomisos UDIS</li>",
    						"epiN": "BordenFidG61"
    					},
    					"BordenFidG66": {
    						"sig": "+",
    						"relId": "17.133",
    						"epiDesc": "Grupo 66_Cuentas de Orden Fideicomisos UDIS",
    						"li": "<li id='133'>(+) BordenFidG66 Grupo 66_Cuentas de Orden Fideicomisos UDIS</li>",
    						"epiN": "BordenFidG66"
    					},
    					"BordenFidG65": {
    						"sig": "+",
    						"relId": "17.132",
    						"epiDesc": "Grupo 65_Cuentas de Orden Fideicomisos UDIS",
    						"li": "<li id='132'>(+) BordenFidG65 Grupo 65_Cuentas de Orden Fideicomisos UDIS</li>",
    						"epiN": "BordenFidG65"
    					},
    					"BordenFidG98": {
    						"sig": "+",
    						"relId": "17.135",
    						"epiDesc": "Grupo 98_Cuentas de Orden Fideicomisos UDIS",
    						"li": "<li id='135'>(+) BordenFidG98 Grupo 98_Cuentas de Orden Fideicomisos UDIS</li>",
    						"epiN": "BordenFidG98"
    					},
    					"BordenFidG64": {
    						"sig": "+",
    						"relId": "17.131",
    						"epiDesc": "Grupo 64_Cuentas de Orden Fideicomisos UDIS",
    						"li": "<li id='131'>(+) BordenFidG64 Grupo 64_Cuentas de Orden Fideicomisos UDIS</li>",
    						"epiN": "BordenFidG64"
    					}
    				},
    				"18": {
    					"BordenInvG61": {
    						"sig": "+",
    						"relId": "18.136",
    						"epiDesc": "Grupo 61_Cuentas de Orden Fideicomisos INVEX",
    						"li": "<li id='136'>(+) BordenInvG61 Grupo 61_Cuentas de Orden Fideicomisos INVEX</li>",
    						"epiN": "BordenInvG61"
    					},
    					"BordenInvG62": {
    						"sig": "+",
    						"relId": "18.137",
    						"epiDesc": "Grupo 62_Cuentas de Orden Fideicomisos INVEX",
    						"li": "<li id='137'>(+) BordenInvG62 Grupo 62_Cuentas de Orden Fideicomisos INVEX</li>",
    						"epiN": "BordenInvG62"
    					},
    					"BordenInvG95": {
    						"sig": "+",
    						"relId": "18.143",
    						"epiDesc": "Grupo 95_Cuentas de Orden Fideicomisos INVEX",
    						"li": "<li id='143'>(+) BordenInvG95 Grupo 95_Cuentas de Orden Fideicomisos INVEX</li>",
    						"epiN": "BordenInvG95"
    					},
    					"BordenInvG63": {
    						"sig": "+",
    						"relId": "18.138",
    						"epiDesc": "Grupo 63_Cuentas de Orden Fideicomisos INVEX",
    						"li": "<li id='138'>(+) BordenInvG63 Grupo 63_Cuentas de Orden Fideicomisos INVEX</li>",
    						"epiN": "BordenInvG63"
    					},
    					"BordenInvG74": {
    						"sig": "+",
    						"relId": "18.142",
    						"epiDesc": "Grupo 74_Cuentas de Orden Fideicomisos INVEX",
    						"li": "<li id='142'>(+) BordenInvG74 Grupo 74_Cuentas de Orden Fideicomisos INVEX</li>",
    						"epiN": "BordenInvG74"
    					},
    					"BordenInvG64": {
    						"sig": "+",
    						"relId": "18.139",
    						"epiDesc": "Grupo 64_Cuentas de Orden Fideicomisos INVEX",
    						"li": "<li id='139'>(+) BordenInvG64 Grupo 64_Cuentas de Orden Fideicomisos INVEX</li>",
    						"epiN": "BordenInvG64"
    					},
    					"BordenInvG65": {
    						"sig": "+",
    						"relId": "18.140",
    						"epiDesc": "Grupo 65_Cuentas de Orden Fideicomisos INVEX",
    						"li": "<li id='140'>(+) BordenInvG65 Grupo 65_Cuentas de Orden Fideicomisos INVEX</li>",
    						"epiN": "BordenInvG65"
    					},
    					"BordenInvG98": {
    						"sig": "+",
    						"relId": "18.144",
    						"epiDesc": "Grupo 98_Cuentas de Orden Fideicomisos INVEX",
    						"li": "<li id='144'>(+) BordenInvG98 Grupo 98_Cuentas de Orden Fideicomisos INVEX</li>",
    						"epiN": "BordenInvG98"
    					},
    					"BordenInvG66": {
    						"sig": "+",
    						"relId": "18.141",
    						"epiDesc": "Grupo 66_Cuentas de Orden Fideicomisos INVEX",
    						"li": "<li id='141'>(+) BordenInvG66 Grupo 66_Cuentas de Orden Fideicomisos INVEX</li>",
    						"epiN": "BordenInvG66"
    					}
    				},
    				"19": {
    					"BordenG6102": {
    						"sig": "+",
    						"relId": "19.146",
    						"epiDesc": "Resto Grupo 61",
    						"li": "<li id='146'>(+) BordenG6102 Resto Grupo 61</li>",
    						"epiN": "BordenG6102"
    					},
    					"BordenG6101": {
    						"sig": "+",
    						"relId": "19.145",
    						"epiDesc": "Avales y otras cauciones prestadas",
    						"li": "<li id='145'>(+) BordenG6101 Avales y otras cauciones prestadas</li>",
    						"epiN": "BordenG6101"
    					}
    				},
    				"20": {
    					"BordenG6301": {
    						"sig": "+",
    						"relId": "20.147",
    						"epiDesc": "Disponibles por terceros",
    						"li": "<li id='147'>(+) BordenG6301 Disponibles por terceros</li>",
    						"epiN": "BordenG6301"
    					},
    					"BordenG6302": {
    						"sig": "+",
    						"relId": "20.148",
    						"epiDesc": "Resto Grupo 63",
    						"li": "<li id='148'>(+) BordenG6302 Resto Grupo 63</li>",
    						"epiN": "BordenG6302"
    					}
    				},
    				"21": {
    					"Binv": {
    						"sig": "+",
    						"relId": "21.152",
    						"epiDesc": "Inversiones Crediticias",
    						"li": "<li id='152'>(+) Binv Inversiones Crediticias<ol id='rel_28'></ol></li>",
    						"epiN": "Binv"
    					},
    					"Bdep": {
    						"sig": "+",
    						"relId": "21.151",
    						"epiDesc": "Depositos En Entidades De Credito",
    						"li": "<li id='151'>(+) Bdep Depositos En Entidades De Credito<ol id='rel_26'></ol></li>",
    						"epiN": "Bdep"
    					},
    					"Banr": {
    						"sig": "+",
    						"relId": "21.153",
    						"epiDesc": "Activos No Rentables",
    						"li": "<li id='153'>(+) Banr Activos No Rentables<ol id='rel_29'></ol></li>",
    						"epiN": "Banr"
    					},
    					"Bcaja": {
    						"sig": "+",
    						"relId": "21.149",
    						"epiDesc": "Caja Y Depositos En Bancos Centrales",
    						"li": "<li id='149'>(+) Bcaja Caja Y Depositos En Bancos Centrales<ol id='rel_24'></ol></li>",
    						"epiN": "Bcaja"
    					},
    					"BCTit": {
    						"sig": "+",
    						"relId": "21.150",
    						"epiDesc": "Cartera De Titulos Y Derivados",
    						"li": "<li id='150'>(+) BCTit Cartera De Titulos Y Derivados<ol id='rel_25'></ol></li>",
    						"epiN": "BCTit"
    					}
    				},
    				"22": {
    					"Bcdioint": {
    						"sig": "+",
    						"relId": "22.159",
    						"epiDesc": "Operaciones Inter-areas Pasivas",
    						"li": "<li id='159'>(+) Bcdioint Operaciones Inter-areas Pasivas<ol id='rel_39'></ol></li>",
    						"epiN": "Bcdioint"
    					},
    					"Bfdos": {
    						"sig": "+",
    						"relId": "22.157",
    						"epiDesc": "Fondos De Provision No Ligados A Activos",
    						"li": "<li id='157'>(+) Bfdos Fondos De Provision No Ligados A Activos<ol id='rel_33'></ol></li>",
    						"epiN": "Bfdos"
    					},
    					"Bcdi": {
    						"sig": "+",
    						"relId": "22.158",
    						"epiDesc": "Cuentas Diversas",
    						"li": "<li id='158'>(+) Bcdi Cuentas Diversas<ol id='rel_35'></ol></li>",
    						"epiN": "Bcdi"
    					},
    					"Bpaf": {
    						"sig": "+",
    						"relId": "22.154",
    						"epiDesc": "Pasivos Financieros A Coste Amortizado",
    						"li": "<li id='154'>(+) Bpaf Pasivos Financieros A Coste Amortizado<ol id='rel_31'></ol></li>",
    						"epiN": "Bpaf"
    					},
    					"Bopaf": {
    						"sig": "+",
    						"relId": "22.155",
    						"epiDesc": "Otros Pasivos Financieros",
    						"li": "<li id='155'>(+) Bopaf Otros Pasivos Financieros<ol id='rel_32'></ol></li>",
    						"epiN": "Bopaf"
    					},
    					"Bdec": {
    						"sig": "+",
    						"relId": "22.156",
    						"epiDesc": "Derivados De Cobertura P",
    						"li": "<li id='156'>(+) Bdec Derivados De Cobertura P<ol id='rel_53'></ol></li>",
    						"epiN": "Bdec"
    					}
    				},
    				"23": {
    					"Bfop": {
    						"sig": "+",
    						"relId": "23.160",
    						"epiDesc": "Fondos Propios",
    						"li": "<li id='160'>(+) Bfop Fondos Propios<ol id='rel_48'></ol></li>",
    						"epiN": "Bfop"
    					}
    				},
    				"24": {
    					"BcajaB": {
    						"sig": "+",
    						"relId": "24.162",
    						"epiDesc": "Bancos",
    						"li": "<li id='162'>(+) BcajaB Bancos<ol id='rel_49'></ol></li>",
    						"epiN": "BcajaB"
    					},
    					"BcajaC": {
    						"sig": "+",
    						"relId": "24.161",
    						"epiDesc": "Caja",
    						"li": "<li id='161'>(+) BcajaC Caja</li>",
    						"epiN": "BcajaC"
    					},
    					"BcajaD": {
    						"sig": "+",
    						"relId": "24.163",
    						"epiDesc": "Intereses Devengados",
    						"li": "<li id='163'>(+) BcajaD Intereses Devengados</li>",
    						"epiN": "BcajaD"
    					},
    					"BRestoBcaja": {
    						"sig": "+",
    						"relId": "24.164",
    						"epiDesc": "CyD Resto",
    						"li": "<li id='164'>(+) BRestoBcaja CyD Resto</li>",
    						"epiN": "BRestoBcaja"
    					}
    				},
    				"25": {
    					"Bdern": {
    						"sig": "+",
    						"relId": "25.165",
    						"epiDesc": "CTD Derivados",
    						"li": "<li id='165'>(+) Bdern CTD Derivados<ol id='rel_125'></ol></li>",
    						"epiN": "Bdern"
    					},
    					"Brf": {
    						"sig": "+",
    						"relId": "25.166",
    						"epiDesc": "Renta Fija Local",
    						"li": "<li id='166'>(+) Brf Renta Fija Local<ol id='rel_161'></ol></li>",
    						"epiN": "Brf"
    					},
    					"Brv": {
    						"sig": "+",
    						"relId": "25.167",
    						"epiDesc": "Renta Variable Local",
    						"li": "<li id='167'>(+) Brv Renta Variable Local<ol id='rel_162'></ol></li>",
    						"epiN": "Brv"
    					}
    				},
    				"26": {
    					"BdepBocvda01": {
    						"sig": "+",
    						"relId": "26.170",
    						"epiDesc": "Compras en Reporto (ATA)",
    						"li": "<li id='170'>(+) BdepBocvda01 Compras en Reporto (ATA)<ol id='rel_50'></ol></li>",
    						"epiN": "BdepBocvda01"
    					},
    					"BdepSW": {
    						"sig": "+",
    						"relId": "26.172",
    						"epiDesc": "Swapito Bancos y Disponibilidades Restringidas ",
    						"li": "<li id='172'>(+) BdepSW Swapito Bancos y Disponibilidades Restringidas </li>",
    						"epiN": "BdepSW"
    					},
    					"BdepBRDR": {
    						"sig": "+",
    						"relId": "26.169",
    						"epiDesc": "Disponibilidades Restringidas",
    						"li": "<li id='169'>(+) BdepBRDR Disponibilidades Restringidas<ol id='rel_27'></ol></li>",
    						"epiN": "BdepBRDR"
    					},
    					"BdepLTN": {
    						"sig": "+",
    						"relId": "26.171",
    						"epiDesc": "Liquidadoras Titulos para Negociar",
    						"li": "<li id='171'>(+) BdepLTN Liquidadoras Titulos para Negociar</li>",
    						"epiN": "BdepLTN"
    					},
    					"BdepBa": {
    						"sig": "+",
    						"relId": "26.168",
    						"epiDesc": "DEC Bancos",
    						"li": "<li id='168'>(+) BdepBa DEC Bancos<ol id='rel_51'></ol></li>",
    						"epiN": "BdepBa"
    					},
    					"BRestoBdep": {
    						"sig": "+",
    						"relId": "26.173",
    						"epiDesc": "DEC Resto",
    						"li": "<li id='173'>(+) BRestoBdep DEC Resto</li>",
    						"epiN": "BRestoBdep"
    					}
    				},
    				"27": {
    					"BdepBRDR01": {
    						"sig": "+",
    						"relId": "27.174",
    						"epiDesc": "Intereses DRM",
    						"li": "<li id='174'>(+) BdepBRDR01 Intereses DRM</li>",
    						"epiN": "BdepBRDR01"
    					},
    					"BdepBRDR02": {
    						"sig": "+",
    						"relId": "27.175",
    						"epiDesc": "Resto de Disp. Restringidas",
    						"li": "<li id='175'>(+) BdepBRDR02 Resto de Disp. Restringidas</li>",
    						"epiN": "BdepBRDR02"
    					}
    				},
    				"28": {
    					"Bcred": {
    						"sig": "+",
    						"relId": "28.176",
    						"epiDesc": "Credito A La Clientela Neto",
    						"li": "<li id='176'>(+) Bcred Credito A La Clientela Neto<ol id='rel_67'></ol></li>",
    						"epiN": "Bcred"
    					},
    					"Boaf": {
    						"sig": "+",
    						"relId": "28.177",
    						"epiDesc": "Otros Activos Financieros",
    						"li": "<li id='177'>(+) Boaf Otros Activos Financieros<ol id='rel_104'></ol></li>",
    						"epiN": "Boaf"
    					}
    				},
    				"29": {
    					"Bain": {
    						"sig": "+",
    						"relId": "29.179",
    						"epiDesc": "Activo Intangible",
    						"li": "<li id='179'>(+) Bain Activo Intangible<ol id='rel_65'></ol></li>",
    						"epiN": "Bain"
    					},
    					"Bama": {
    						"sig": "+",
    						"relId": "29.178",
    						"epiDesc": "Activo Material",
    						"li": "<li id='178'>(+) Bama Activo Material<ol id='rel_64'></ol></li>",
    						"epiN": "Bama"
    					},
    					"Brac25": {
    						"sig": "+",
    						"relId": "29.181",
    						"epiDesc": "Posiciones Interareas Activas",
    						"li": "<li id='181'>(+) Brac25 Posiciones Interareas Activas<ol id='rel_108'></ol></li>",
    						"epiN": "Brac25"
    					},
    					"Banr01": {
    						"sig": "+",
    						"relId": "29.180",
    						"epiDesc": "Otros activos",
    						"li": "<li id='180'>(+) Banr01 Otros activos<ol id='rel_30'></ol></li>",
    						"epiN": "Banr01"
    					}
    				},
    				"30": {
    					"Bder": {
    						"sig": "+",
    						"relId": "30.183",
    						"epiDesc": "Derivados De Cobertura",
    						"li": "<li id='183'>(+) Bder Derivados De Cobertura<ol id='rel_66'></ol></li>",
    						"epiN": "Bder"
    					},
    					"Brac": {
    						"sig": "+",
    						"relId": "30.182",
    						"epiDesc": "Resto De Activos",
    						"li": "<li id='182'>(+) Brac Resto De Activos<ol id='rel_105'></ol></li>",
    						"epiN": "Brac"
    					}
    				},
    				"31": {
    					"Bopas": {
    						"sig": "+",
    						"relId": "31.186",
    						"epiDesc": "Otros Pasivos Financieros A Coste Amortizado",
    						"li": "<li id='186'>(+) Bopas Otros Pasivos Financieros A Coste Amortizado<ol id='rel_120'></ol></li>",
    						"epiN": "Bopas"
    					},
    					"Bdepb": {
    						"sig": "+",
    						"relId": "31.184",
    						"epiDesc": "Depositos De Bancos Centrales Y Entidades De Credito",
    						"li": "<li id='184'>(+) Bdepb Depositos De Bancos Centrales Y Entidades De Credito<ol id='rel_114'></ol></li>",
    						"epiN": "Bdepb"
    					},
    					"BpafSub": {
    						"sig": "+",
    						"relId": "31.187",
    						"epiDesc": "Pasivos Subordinados",
    						"li": "<li id='187'>(+) BpafSub Pasivos Subordinados<ol id='rel_121'></ol></li>",
    						"epiN": "BpafSub"
    					},
    					"Bpafdeb": {
    						"sig": "+",
    						"relId": "31.188",
    						"epiDesc": "Debitos Representados por Valores Negociables",
    						"li": "<li id='188'>(+) Bpafdeb Debitos Representados por Valores Negociables</li>",
    						"epiN": "Bpafdeb"
    					},
    					"Bdepc": {
    						"sig": "+",
    						"relId": "31.185",
    						"epiDesc": "Depositos De La Clientela",
    						"li": "<li id='185'>(+) Bdepc Depositos De La Clientela<ol id='rel_119'></ol></li>",
    						"epiN": "Bdepc"
    					}
    				},
    				"32": {
    					"Bcarn": {
    						"sig": "+",
    						"relId": "32.189",
    						"epiDesc": "Cartera De Negociacion",
    						"li": "<li id='189'>(+) Bcarn Cartera De Negociacion<ol id='rel_122'></ol></li>",
    						"epiN": "Bcarn"
    					},
    					"BopafResto": {
    						"sig": "+",
    						"relId": "32.190",
    						"epiDesc": "OPF Resto",
    						"li": "<li id='190'>(+) BopafResto OPF Resto</li>",
    						"epiN": "BopafResto"
    					}
    				},
    				"33": {
    					"Bfdos02": {
    						"sig": "+",
    						"relId": "33.192",
    						"epiDesc": "Pensiones al Personal",
    						"li": "<li id='192'>(+) Bfdos02 Pensiones al Personal</li>",
    						"epiN": "Bfdos02"
    					},
    					"Bfdos03": {
    						"sig": "+",
    						"relId": "33.193",
    						"epiDesc": "Provisiones Seguros",
    						"li": "<li id='193'>(+) Bfdos03 Provisiones Seguros<ol id='rel_34'></ol></li>",
    						"epiN": "Bfdos03"
    					},
    					"Bfdos01": {
    						"sig": "+",
    						"relId": "33.191",
    						"epiDesc": "Provisiones para impuestos",
    						"li": "<li id='191'>(+) Bfdos01 Provisiones para impuestos</li>",
    						"epiN": "Bfdos01"
    					},
    					"Bfdos04": {
    						"sig": "+",
    						"relId": "33.194",
    						"epiDesc": "Otras Provisiones",
    						"li": "<li id='194'>(+) Bfdos04 Otras Provisiones</li>",
    						"epiN": "Bfdos04"
    					}
    				},
    				"34": {
    					"Bfdos0309": {
    						"sig": "+",
    						"relId": "34.203",
    						"epiDesc": "Comisiones pendientes de pago",
    						"li": "<li id='203'>(+) Bfdos0309 Comisiones pendientes de pago</li>",
    						"epiN": "Bfdos0309"
    					},
    					"Bfdos0310": {
    						"sig": "+",
    						"relId": "34.204",
    						"epiDesc": "Provision General para Compromisos Contingentes",
    						"li": "<li id='204'>(+) Bfdos0310 Provision General para Compromisos Contingentes</li>",
    						"epiN": "Bfdos0310"
    					},
    					"Bfdos0301": {
    						"sig": "+",
    						"relId": "34.195",
    						"epiDesc": "Provision para riesgos en curso",
    						"li": "<li id='195'>(+) Bfdos0301 Provision para riesgos en curso</li>",
    						"epiN": "Bfdos0301"
    					},
    					"Bfdos0302": {
    						"sig": "+",
    						"relId": "34.196",
    						"epiDesc": "Provisiones matematicas",
    						"li": "<li id='196'>(+) Bfdos0302 Provisiones matematicas</li>",
    						"epiN": "Bfdos0302"
    					},
    					"Bfdos0303": {
    						"sig": "+",
    						"relId": "34.197",
    						"epiDesc": "Provision siniestros avisados pendientes de pago",
    						"li": "<li id='197'>(+) Bfdos0303 Provision siniestros avisados pendientes de pago</li>",
    						"epiN": "Bfdos0303"
    					},
    					"Bfdos0304": {
    						"sig": "+",
    						"relId": "34.198",
    						"epiDesc": "Provision para siniestros no avisados",
    						"li": "<li id='198'>(+) Bfdos0304 Provision para siniestros no avisados</li>",
    						"epiN": "Bfdos0304"
    					},
    					"Bfdos0305": {
    						"sig": "+",
    						"relId": "34.199",
    						"epiDesc": "Reservas catastroficas y de prevision",
    						"li": "<li id='199'>(+) Bfdos0305 Reservas catastroficas y de prevision</li>",
    						"epiN": "Bfdos0305"
    					},
    					"Bfdos0306": {
    						"sig": "+",
    						"relId": "34.200",
    						"epiDesc": "Otras Provisiones Tecnicas de Seguros",
    						"li": "<li id='200'>(+) Bfdos0306 Otras Provisiones Tecnicas de Seguros</li>",
    						"epiN": "Bfdos0306"
    					},
    					"Bfdos0307": {
    						"sig": "+",
    						"relId": "34.201",
    						"epiDesc": "Deudas por operaciones de seguro",
    						"li": "<li id='201'>(+) Bfdos0307 Deudas por operaciones de seguro</li>",
    						"epiN": "Bfdos0307"
    					},
    					"Bfdos0308": {
    						"sig": "+",
    						"relId": "34.202",
    						"epiDesc": "Deudas por operaciones de reaseguro",
    						"li": "<li id='202'>(+) Bfdos0308 Deudas por operaciones de reaseguro</li>",
    						"epiN": "Bfdos0308"
    					}
    				},
    				"35": {
    					"Bcdi10": {
    						"sig": "+",
    						"relId": "35.214",
    						"epiDesc": "CD Resto",
    						"li": "<li id='214'>(+) Bcdi10 CD Resto</li>",
    						"epiN": "Bcdi10"
    					},
    					"Bcdi01": {
    						"sig": "+",
    						"relId": "35.205",
    						"epiDesc": "Pasivos Fiscales",
    						"li": "<li id='205'>(+) Bcdi01 Pasivos Fiscales<ol id='rel_36'></ol></li>",
    						"epiN": "Bcdi01"
    					},
    					"Bcdi11": {
    						"sig": "+",
    						"relId": "35.215",
    						"epiDesc": "CD Sobregiros Vostro",
    						"li": "<li id='215'>(+) Bcdi11 CD Sobregiros Vostro</li>",
    						"epiN": "Bcdi11"
    					},
    					"Bcdi03": {
    						"sig": "+",
    						"relId": "35.207",
    						"epiDesc": "Provision Expedicion TDC",
    						"li": "<li id='207'>(+) Bcdi03 Provision Expedicion TDC</li>",
    						"epiN": "Bcdi03"
    					},
    					"Bcdi02": {
    						"sig": "+",
    						"relId": "35.206",
    						"epiDesc": "Provision para Bonos e Incentivos",
    						"li": "<li id='206'>(+) Bcdi02 Provision para Bonos e Incentivos</li>",
    						"epiN": "Bcdi02"
    					},
    					"Bcdi05": {
    						"sig": "+",
    						"relId": "35.209",
    						"epiDesc": "Impuestos Retenidos e IVA",
    						"li": "<li id='209'>(+) Bcdi05 Impuestos Retenidos e IVA<ol id='rel_37'></ol></li>",
    						"epiN": "Bcdi05"
    					},
    					"Bcdi04": {
    						"sig": "+",
    						"relId": "35.208",
    						"epiDesc": "CD Puntos Efectivos",
    						"li": "<li id='208'>(+) Bcdi04 CD Puntos Efectivos</li>",
    						"epiN": "Bcdi04"
    					},
    					"Bcdi07": {
    						"sig": "+",
    						"relId": "35.211",
    						"epiDesc": "Cuotas de Seguridad Social",
    						"li": "<li id='211'>(+) Bcdi07 Cuotas de Seguridad Social</li>",
    						"epiN": "Bcdi07"
    					},
    					"Bcdi06": {
    						"sig": "+",
    						"relId": "35.210",
    						"epiDesc": "Otras Periodificaciones",
    						"li": "<li id='210'>(+) Bcdi06 Otras Periodificaciones<ol id='rel_38'></ol></li>",
    						"epiN": "Bcdi06"
    					},
    					"Bcdi09": {
    						"sig": "+",
    						"relId": "35.213",
    						"epiDesc": "Acreedores Diversos",
    						"li": "<li id='213'>(+) Bcdi09 Acreedores Diversos</li>",
    						"epiN": "Bcdi09"
    					},
    					"Bcdi08": {
    						"sig": "+",
    						"relId": "35.212",
    						"epiDesc": "Resto de Provisiones",
    						"li": "<li id='212'>(+) Bcdi08 Resto de Provisiones</li>",
    						"epiN": "Bcdi08"
    					}
    				},
    				"36": {
    					"Bcdi0102": {
    						"sig": "+",
    						"relId": "36.217",
    						"epiDesc": "Diferidos",
    						"li": "<li id='217'>(+) Bcdi0102 Diferidos</li>",
    						"epiN": "Bcdi0102"
    					},
    					"Bcdi0101": {
    						"sig": "+",
    						"relId": "36.216",
    						"epiDesc": "Corrientes",
    						"li": "<li id='216'>(+) Bcdi0101 Corrientes</li>",
    						"epiN": "Bcdi0101"
    					}
    				},
    				"37": {
    					"Bcdi0502": {
    						"sig": "+",
    						"relId": "37.219",
    						"epiDesc": "Iva por enterar",
    						"li": "<li id='219'>(+) Bcdi0502 Iva por enterar</li>",
    						"epiN": "Bcdi0502"
    					},
    					"Bcdi0501": {
    						"sig": "+",
    						"relId": "37.218",
    						"epiDesc": "Impuestos retenidos",
    						"li": "<li id='218'>(+) Bcdi0501 Impuestos retenidos</li>",
    						"epiN": "Bcdi0501"
    					}
    				},
    				"38": {
    					"Bcdi0604": {
    						"sig": "+",
    						"relId": "38.223",
    						"epiDesc": "Otros productos cobrados por anticipado",
    						"li": "<li id='223'>(+) Bcdi0604 Otros productos cobrados por anticipado</li>",
    						"epiN": "Bcdi0604"
    					},
    					"Bcdi0601": {
    						"sig": "+",
    						"relId": "38.220",
    						"epiDesc": "Intereses cobrados por anticipado",
    						"li": "<li id='220'>(+) Bcdi0601 Intereses cobrados por anticipado</li>",
    						"epiN": "Bcdi0601"
    					},
    					"Bcdi0603": {
    						"sig": "+",
    						"relId": "38.222",
    						"epiDesc": "Rentas cobradas por anticipado",
    						"li": "<li id='222'>(+) Bcdi0603 Rentas cobradas por anticipado</li>",
    						"epiN": "Bcdi0603"
    					},
    					"Bcdi0602": {
    						"sig": "+",
    						"relId": "38.221",
    						"epiDesc": "Comisiones cobradas por anticipado.",
    						"li": "<li id='221'>(+) Bcdi0602 Comisiones cobradas por anticipado.</li>",
    						"epiN": "Bcdi0602"
    					}
    				},
    				"39": {
    					"Bcdioint01": {
    						"sig": "+",
    						"relId": "39.224",
    						"epiDesc": "Contratos Internos",
    						"li": "<li id='224'>(+) Bcdioint01 Contratos Internos</li>",
    						"epiN": "Bcdioint01"
    					},
    					"Bcdioint02": {
    						"sig": "+",
    						"relId": "39.225",
    						"epiDesc": "Depositos Internos Pasivos",
    						"li": "<li id='225'>(+) Bcdioint02 Depositos Internos Pasivos<ol id='rel_40'></ol></li>",
    						"epiN": "Bcdioint02"
    					}
    				},
    				"40": {
    					"Bcdioint0204": {
    						"sig": "+",
    						"relId": "40.229",
    						"epiDesc": "DI Tarjeta de Credito",
    						"li": "<li id='229'>(+) Bcdioint0204 DI Tarjeta de Credito<ol id='rel_47'></ol></li>",
    						"epiN": "Bcdioint0204"
    					},
    					"Bcdioint0205": {
    						"sig": "+",
    						"relId": "40.230",
    						"epiDesc": "DI Otros Creditos",
    						"li": "<li id='230'>(+) Bcdioint0205 DI Otros Creditos</li>",
    						"epiN": "Bcdioint0205"
    					},
    					"Bcdioint0202": {
    						"sig": "+",
    						"relId": "40.227",
    						"epiDesc": "DI Cartera Hipotecaria",
    						"li": "<li id='227'>(+) Bcdioint0202 DI Cartera Hipotecaria<ol id='rel_44'></ol></li>",
    						"epiN": "Bcdioint0202"
    					},
    					"Bcdioint0203": {
    						"sig": "+",
    						"relId": "40.228",
    						"epiDesc": "DI Credito al Consumo",
    						"li": "<li id='228'>(+) Bcdioint0203 DI Credito al Consumo<ol id='rel_46'></ol></li>",
    						"epiN": "Bcdioint0203"
    					},
    					"Bcdioint0201": {
    						"sig": "+",
    						"relId": "40.226",
    						"epiDesc": "DI Cartera Comercial",
    						"li": "<li id='226'>(+) Bcdioint0201 DI Cartera Comercial<ol id='rel_41'></ol></li>",
    						"epiN": "Bcdioint0201"
    					}
    				},
    				"41": {
    					"Bcdioint0201A": {
    						"sig": "+",
    						"relId": "41.231",
    						"epiDesc": "DI Empresarial",
    						"li": "<li id='231'>(+) Bcdioint0201A DI Empresarial<ol id='rel_42'></ol></li>",
    						"epiN": "Bcdioint0201A"
    					}
    				},
    				"42": {
    					"Bcdioint0206": {
    						"sig": "+",
    						"relId": "42.234",
    						"epiDesc": "DI Tarjeta Negocio",
    						"li": "<li id='234'>(+) Bcdioint0206 DI Tarjeta Negocio</li>",
    						"epiN": "Bcdioint0206"
    					},
    					"Bcdioint0201A1": {
    						"sig": "+",
    						"relId": "42.232",
    						"epiDesc": "DI Tradicional",
    						"li": "<li id='232'>(+) Bcdioint0201A1 DI Tradicional<ol id='rel_43'></ol></li>",
    						"epiN": "Bcdioint0201A1"
    					},
    					"Bcdioint0201A2": {
    						"sig": "+",
    						"relId": "42.233",
    						"epiDesc": "DI TDC Empresarial",
    						"li": "<li id='233'>(+) Bcdioint0201A2 DI TDC Empresarial</li>",
    						"epiN": "Bcdioint0201A2"
    					}
    				},
    				"43": {
    					"Bcdioint0201A1C": {
    						"sig": "+",
    						"relId": "43.237",
    						"epiDesc": "DI Arrendamiento Puro",
    						"li": "<li id='237'>(+) Bcdioint0201A1C DI Arrendamiento Puro</li>",
    						"epiN": "Bcdioint0201A1C"
    					},
    					"Bcdioint0201A1B": {
    						"sig": "+",
    						"relId": "43.236",
    						"epiDesc": "DI Arrendamiento Financiero",
    						"li": "<li id='236'>(+) Bcdioint0201A1B DI Arrendamiento Financiero</li>",
    						"epiN": "Bcdioint0201A1B"
    					},
    					"Bcdioint0201A1A": {
    						"sig": "+",
    						"relId": "43.235",
    						"epiDesc": "DI Tradicional Pura",
    						"li": "<li id='235'>(+) Bcdioint0201A1A DI Tradicional Pura</li>",
    						"epiN": "Bcdioint0201A1A"
    					}
    				},
    				"44": {
    					"Bcdioint0202B": {
    						"sig": "+",
    						"relId": "44.239",
    						"epiDesc": "DI Hipotecaria Tradicional",
    						"li": "<li id='239'>(+) Bcdioint0202B DI Hipotecaria Tradicional</li>",
    						"epiN": "Bcdioint0202B"
    					},
    					"Bcdioint0202C": {
    						"sig": "+",
    						"relId": "44.240",
    						"epiDesc": "DI Cartera Bursatilizada",
    						"li": "<li id='240'>(+) Bcdioint0202C DI Cartera Bursatilizada</li>",
    						"epiN": "Bcdioint0202C"
    					},
    					"Bcdioint0202A": {
    						"sig": "+",
    						"relId": "44.238",
    						"epiDesc": "DI Promotores",
    						"li": "<li id='238'>(+) Bcdioint0202A DI Promotores<ol id='rel_45'></ol></li>",
    						"epiN": "Bcdioint0202A"
    					}
    				},
    				"45": {
    					"Bcdioint0202A1": {
    						"sig": "+",
    						"relId": "45.241",
    						"epiDesc": "DI Prestamos Garantias Reales",
    						"li": "<li id='241'>(+) Bcdioint0202A1 DI Prestamos Garantias Reales</li>",
    						"epiN": "Bcdioint0202A1"
    					},
    					"Bcdioint0202A2": {
    						"sig": "+",
    						"relId": "45.242",
    						"epiDesc": "DI Factoraje Financiero",
    						"li": "<li id='242'>(+) Bcdioint0202A2 DI Factoraje Financiero</li>",
    						"epiN": "Bcdioint0202A2"
    					}
    				},
    				"46": {
    					"Bcdioint0203A": {
    						"sig": "+",
    						"relId": "46.243",
    						"epiDesc": "DI Consumo Finanzia",
    						"li": "<li id='243'>(+) Bcdioint0203A DI Consumo Finanzia</li>",
    						"epiN": "Bcdioint0203A"
    					},
    					"Bcdioint0203B": {
    						"sig": "+",
    						"relId": "46.244",
    						"epiDesc": "DI Consumo Red",
    						"li": "<li id='244'>(+) Bcdioint0203B DI Consumo Red</li>",
    						"epiN": "Bcdioint0203B"
    					}
    				},
    				"47": {
    					"Bcdioint0204B": {
    						"sig": "+",
    						"relId": "47.246",
    						"epiDesc": "DI TDC Red",
    						"li": "<li id='246'>(+) Bcdioint0204B DI TDC Red</li>",
    						"epiN": "Bcdioint0204B"
    					},
    					"Bcdioint0204A": {
    						"sig": "+",
    						"relId": "47.245",
    						"epiDesc": "DI TDC Finanzia",
    						"li": "<li id='245'>(+) Bcdioint0204A DI TDC Finanzia</li>",
    						"epiN": "Bcdioint0204A"
    					}
    				},
    				"48": {
    					"Bintm": {
    						"sig": "+",
    						"relId": "48.247",
    						"epiDesc": "Intereses Minoritarios",
    						"li": "<li id='247'>(+) Bintm Intereses Minoritarios<ol id='rel_123'></ol></li>",
    						"epiN": "Bintm"
    					},
    					"Best": {
    						"sig": "+",
    						"relId": "48.248",
    						"epiDesc": "Estrictos",
    						"li": "<li id='248'>(+) Best Estrictos<ol id='rel_124'></ol></li>",
    						"epiN": "Best"
    					}
    				},
    				"49": {
    					"BcajaB03": {
    						"sig": "+",
    						"relId": "49.250",
    						"epiDesc": "Depositos Regulatorios",
    						"li": "<li id='250'>(+) BcajaB03 Depositos Regulatorios</li>",
    						"epiN": "BcajaB03"
    					},
    					"BcajaB02": {
    						"sig": "+",
    						"relId": "49.249",
    						"epiDesc": "Coeficiente De Liquidez",
    						"li": "<li id='249'>(+) BcajaB02 Coeficiente De Liquidez</li>",
    						"epiN": "BcajaB02"
    					}
    				},
    				"50": {
    					"BdepBocvda01A": {
    						"sig": "+",
    						"relId": "50.251",
    						"epiDesc": "Capital Reportos (ATA)",
    						"li": "<li id='251'>(+) BdepBocvda01A Capital Reportos (ATA)</li>",
    						"epiN": "BdepBocvda01A"
    					},
    					"BdepBocvda01B": {
    						"sig": "+",
    						"relId": "50.252",
    						"epiDesc": "Intereses Reportos (ATA)",
    						"li": "<li id='252'>(+) BdepBocvda01B Intereses Reportos (ATA)</li>",
    						"epiN": "BdepBocvda01B"
    					}
    				},
    				"51": {
    					"BdepBa03": {
    						"sig": "+",
    						"relId": "51.254",
    						"epiDesc": "DEC Coeficiente De Liquidez",
    						"li": "<li id='254'>(+) BdepBa03 DEC Coeficiente De Liquidez<ol id='rel_52'></ol></li>",
    						"epiN": "BdepBa03"
    					},
    					"BdepBa02": {
    						"sig": "+",
    						"relId": "51.253",
    						"epiDesc": "Call Money",
    						"li": "<li id='253'>(+) BdepBa02 Call Money</li>",
    						"epiN": "BdepBa02"
    					},
    					"BdepBa06": {
    						"sig": "+",
    						"relId": "51.257",
    						"epiDesc": "Subastas de Deposito",
    						"li": "<li id='257'>(+) BdepBa06 Subastas de Deposito</li>",
    						"epiN": "BdepBa06"
    					},
    					"BdepBa05": {
    						"sig": "+",
    						"relId": "51.256",
    						"epiDesc": "Aportaciones Minimas Mexder",
    						"li": "<li id='256'>(+) BdepBa05 Aportaciones Minimas Mexder</li>",
    						"epiN": "BdepBa05"
    					},
    					"BdepBa04": {
    						"sig": "+",
    						"relId": "51.255",
    						"epiDesc": "Financiamiento Interbancario",
    						"li": "<li id='255'>(+) BdepBa04 Financiamiento Interbancario</li>",
    						"epiN": "BdepBa04"
    					}
    				},
    				"52": {
    					"BdepBa0301": {
    						"sig": "+",
    						"relId": "52.258",
    						"epiDesc": "Reservas Bancos Centrales (FED)",
    						"li": "<li id='258'>(+) BdepBa0301 Reservas Bancos Centrales (FED)</li>",
    						"epiN": "BdepBa0301"
    					},
    					"BdepBa0302": {
    						"sig": "+",
    						"relId": "52.259",
    						"epiDesc": "Resto de Coeficiente de Liquidez",
    						"li": "<li id='259'>(+) BdepBa0302 Resto de Coeficiente de Liquidez</li>",
    						"epiN": "BdepBa0302"
    					}
    				},
    				"53": {
    					"Bdec01": {
    						"sig": "+",
    						"relId": "53.260",
    						"epiDesc": "Derivados Pasivo",
    						"li": "<li id='260'>(+) Bdec01 Derivados Pasivo<ol id='rel_54'></ol></li>",
    						"epiN": "Bdec01"
    					}
    				},
    				"54": {
    					"Bdec0104": {
    						"sig": "+",
    						"relId": "54.264",
    						"epiDesc": "Coberturas de flujos de efectivo",
    						"li": "<li id='264'>(+) Bdec0104 Coberturas de flujos de efectivo</li>",
    						"epiN": "Bdec0104"
    					},
    					"Bdec0103": {
    						"sig": "+",
    						"relId": "54.263",
    						"epiDesc": "Coberturas de valor razonable",
    						"li": "<li id='263'>(+) Bdec0103 Coberturas de valor razonable</li>",
    						"epiN": "Bdec0103"
    					},
    					"Bdec0102": {
    						"sig": "+",
    						"relId": "54.262",
    						"epiDesc": "Swapito derivados",
    						"li": "<li id='262'>(+) Bdec0102 Swapito derivados</li>",
    						"epiN": "Bdec0102"
    					},
    					"Bdec0101": {
    						"sig": "+",
    						"relId": "54.261",
    						"epiDesc": "Derivados de Negociacion P",
    						"li": "<li id='261'>(+) Bdec0101 Derivados de Negociacion P<ol id='rel_55'></ol></li>",
    						"epiN": "Bdec0101"
    					}
    				},
    				"55": {
    					"Bdec0101A": {
    						"sig": "+",
    						"relId": "55.265",
    						"epiDesc": "DNP Otros",
    						"li": "<li id='265'>(+) Bdec0101A DNP Otros<ol id='rel_59'></ol></li>",
    						"epiN": "Bdec0101A"
    					},
    					"Bdec0101B": {
    						"sig": "+",
    						"relId": "55.266",
    						"epiDesc": "DNP Divisas",
    						"li": "<li id='266'>(+) Bdec0101B DNP Divisas<ol id='rel_56'></ol></li>",
    						"epiN": "Bdec0101B"
    					}
    				},
    				"56": {
    					"Bdec0101B02": {
    						"sig": "+",
    						"relId": "56.268",
    						"epiDesc": "DNP Futuros Divisas",
    						"li": "<li id='268'>(+) Bdec0101B02 DNP Futuros Divisas<ol id='rel_58'></ol></li>",
    						"epiN": "Bdec0101B02"
    					},
    					"Bdec0101B01": {
    						"sig": "+",
    						"relId": "56.267",
    						"epiDesc": "DNP Swaps Divisas",
    						"li": "<li id='267'>(+) Bdec0101B01 DNP Swaps Divisas<ol id='rel_57'></ol></li>",
    						"epiN": "Bdec0101B01"
    					}
    				},
    				"57": {
    					"Bdec0101B0102": {
    						"sig": "+",
    						"relId": "57.270",
    						"epiDesc": "DNP Swaps Pasivo Divisas",
    						"li": "<li id='270'>(+) Bdec0101B0102 DNP Swaps Pasivo Divisas</li>",
    						"epiN": "Bdec0101B0102"
    					},
    					"Bdec0101B0101": {
    						"sig": "+",
    						"relId": "57.269",
    						"epiDesc": "DNP Swaps Activo Divisas",
    						"li": "<li id='269'>(+) Bdec0101B0101 DNP Swaps Activo Divisas</li>",
    						"epiN": "Bdec0101B0101"
    					}
    				},
    				"58": {
    					"Bdec0101B0202": {
    						"sig": "+",
    						"relId": "58.272",
    						"epiDesc": "DNP Forwards Pasivo Divisas",
    						"li": "<li id='272'>(+) Bdec0101B0202 DNP Forwards Pasivo Divisas</li>",
    						"epiN": "Bdec0101B0202"
    					},
    					"Bdec0101B0201": {
    						"sig": "+",
    						"relId": "58.271",
    						"epiDesc": "DNP Futuros Activo Divisas",
    						"li": "<li id='271'>(+) Bdec0101B0201 DNP Futuros Activo Divisas</li>",
    						"epiN": "Bdec0101B0201"
    					}
    				},
    				"59": {
    					"Bdec010101": {
    						"sig": "+",
    						"relId": "59.273",
    						"epiDesc": "DNP Opciones",
    						"li": "<li id='273'>(+) Bdec010101 DNP Opciones<ol id='rel_60'></ol></li>",
    						"epiN": "Bdec010101"
    					},
    					"Bdec010105": {
    						"sig": "+",
    						"relId": "59.277",
    						"epiDesc": "DNP Resto",
    						"li": "<li id='277'>(+) Bdec010105 DNP Resto</li>",
    						"epiN": "Bdec010105"
    					},
    					"Bdec010104": {
    						"sig": "+",
    						"relId": "59.274",
    						"epiDesc": "DNP Swaps",
    						"li": "<li id='274'>(+) Bdec010104 DNP Swaps<ol id='rel_61'></ol></li>",
    						"epiN": "Bdec010104"
    					},
    					"Bdec010103": {
    						"sig": "+",
    						"relId": "59.276",
    						"epiDesc": "DNP Forwards",
    						"li": "<li id='276'>(+) Bdec010103 DNP Forwards<ol id='rel_63'></ol></li>",
    						"epiN": "Bdec010103"
    					},
    					"Bdec010102": {
    						"sig": "+",
    						"relId": "59.275",
    						"epiDesc": "DNP Futuros",
    						"li": "<li id='275'>(+) Bdec010102 DNP Futuros<ol id='rel_62'></ol></li>",
    						"epiN": "Bdec010102"
    					}
    				},
    				"60": {
    					"Bdec01010101": {
    						"sig": "+",
    						"relId": "60.278",
    						"epiDesc": "DNP Opciones activo",
    						"li": "<li id='278'>(+) Bdec01010101 DNP Opciones activo</li>",
    						"epiN": "Bdec01010101"
    					},
    					"Bdec01010102": {
    						"sig": "+",
    						"relId": "60.279",
    						"epiDesc": "DNP Opciones pasivo",
    						"li": "<li id='279'>(+) Bdec01010102 DNP Opciones pasivo</li>",
    						"epiN": "Bdec01010102"
    					}
    				},
    				"61": {
    					"Bdec01010401": {
    						"sig": "+",
    						"relId": "61.280",
    						"epiDesc": "DNP Swaps Activo",
    						"li": "<li id='280'>(+) Bdec01010401 DNP Swaps Activo</li>",
    						"epiN": "Bdec01010401"
    					},
    					"Bdec01010402": {
    						"sig": "+",
    						"relId": "61.281",
    						"epiDesc": "DNP Swaps Pasivo",
    						"li": "<li id='281'>(+) Bdec01010402 DNP Swaps Pasivo</li>",
    						"epiN": "Bdec01010402"
    					}
    				},
    				"62": {
    					"Bdec01010202": {
    						"sig": "+",
    						"relId": "62.283",
    						"epiDesc": "DNP Futuros pasivo",
    						"li": "<li id='283'>(+) Bdec01010202 DNP Futuros pasivo</li>",
    						"epiN": "Bdec01010202"
    					},
    					"Bdec01010201": {
    						"sig": "+",
    						"relId": "62.282",
    						"epiDesc": "DNP Futuros activo",
    						"li": "<li id='282'>(+) Bdec01010201 DNP Futuros activo</li>",
    						"epiN": "Bdec01010201"
    					}
    				},
    				"63": {
    					"Bdec01010301": {
    						"sig": "+",
    						"relId": "63.284",
    						"epiDesc": "DNP Forwards activo",
    						"li": "<li id='284'>(+) Bdec01010301 DNP Forwards activo</li>",
    						"epiN": "Bdec01010301"
    					},
    					"Bdec01010302": {
    						"sig": "+",
    						"relId": "63.285",
    						"epiDesc": "DNP Forwards pasivo",
    						"li": "<li id='285'>(+) Bdec01010302 DNP Forwards pasivo</li>",
    						"epiN": "Bdec01010302"
    					}
    				},
    				"64": {
    					"Bama02": {
    						"sig": "+",
    						"relId": "64.287",
    						"epiDesc": "Inversiones Inmobiliarias",
    						"li": "<li id='287'>(+) Bama02 Inversiones Inmobiliarias</li>",
    						"epiN": "Bama02"
    					},
    					"Bama01": {
    						"sig": "+",
    						"relId": "64.286",
    						"epiDesc": "De Uso Propio",
    						"li": "<li id='286'>(+) Bama01 De Uso Propio</li>",
    						"epiN": "Bama01"
    					},
    					"Bama03": {
    						"sig": "+",
    						"relId": "64.288",
    						"epiDesc": "Otros Activos Cedidos en Arrendamiento Operativo",
    						"li": "<li id='288'>(+) Bama03 Otros Activos Cedidos en Arrendamiento Operativo</li>",
    						"epiN": "Bama03"
    					}
    				},
    				"65": {
    					"Bain11": {
    						"sig": "+",
    						"relId": "65.290",
    						"epiDesc": "Otro Activo Intangible",
    						"li": "<li id='290'>(+) Bain11 Otro Activo Intangible</li>",
    						"epiN": "Bain11"
    					},
    					"Bain10": {
    						"sig": "+",
    						"relId": "65.289",
    						"epiDesc": "Fondo de Comercio",
    						"li": "<li id='289'>(+) Bain10 Fondo de Comercio</li>",
    						"epiN": "Bain10"
    					}
    				},
    				"66": {
    					"Bder01": {
    						"sig": "+",
    						"relId": "66.291",
    						"epiDesc": "Valuacion de swaps con fines de cobertura",
    						"li": "<li id='291'>(+) Bder01 Valuacion de swaps con fines de cobertura</li>",
    						"epiN": "Bder01"
    					},
    					"Bder02": {
    						"sig": "+",
    						"relId": "66.292",
    						"epiDesc": "Valuacion de swaps con fines de cobertura Resto",
    						"li": "<li id='292'>(+) Bder02 Valuacion de swaps con fines de cobertura Resto</li>",
    						"epiN": "Bder02"
    					},
    					"Bder03": {
    						"sig": "+",
    						"relId": "66.293",
    						"epiDesc": "Valuacion de swaps con fines de cobertura Divisas",
    						"li": "<li id='293'>(+) Bder03 Valuacion de swaps con fines de cobertura Divisas</li>",
    						"epiN": "Bder03"
    					}
    				},
    				"67": {
    					"Bfdo": {
    						"sig": "+",
    						"relId": "67.295",
    						"epiDesc": "Fondos De Insolvencia",
    						"li": "<li id='295'>(+) Bfdo Fondos De Insolvencia<ol id='rel_134'></ol></li>",
    						"epiN": "Bfdo"
    					},
    					"Bcred01": {
    						"sig": "+",
    						"relId": "67.294",
    						"epiDesc": "Credito A La Clientela Bruto",
    						"li": "<li id='294'>(+) Bcred01 Credito A La Clientela Bruto<ol id='rel_68'></ol></li>",
    						"epiN": "Bcred01"
    					}
    				},
    				"68": {
    					"BInvCre3": {
    						"sig": "+",
    						"relId": "68.297",
    						"epiDesc": "Credito a la clientela Dudosa",
    						"li": "<li id='297'>(+) BInvCre3 Credito a la clientela Dudosa<ol id='rel_101'></ol></li>",
    						"epiN": "BInvCre3"
    					},
    					"BInvCre2": {
    						"sig": "+",
    						"relId": "68.296",
    						"epiDesc": "Credito a la clientela No Dudosa",
    						"li": "<li id='296'>(+) BInvCre2 Credito a la clientela No Dudosa</li>",
    						"epiN": "BInvCre2"
    					}
    				},
    				"69": {
    					"BinvCre2A": {
    						"sig": "+",
    						"relId": "69.300",
    						"epiDesc": "Ajuste Publico Inversion",
    						"li": "<li id='300'>(+) BinvCre2A Ajuste Publico Inversion<ol id='rel_90'></ol></li>",
    						"epiN": "BinvCre2A"
    					},
    					"BinvCre2B": {
    						"sig": "+",
    						"relId": "69.299",
    						"epiDesc": "Credito a la Clientela no Dudoso en Gestion",
    						"li": "<li id='299'>(+) BinvCre2B Credito a la Clientela no Dudoso en Gestion<ol id='rel_70'></ol></li>",
    						"epiN": "BinvCre2B"
    					},
    					"BInvCre1": {
    						"sig": "+",
    						"relId": "69.298",
    						"epiDesc": "Inversion Crediticia Rentable En Gestion",
    						"li": "<li id='298'>(+) BInvCre1 Inversion Crediticia Rentable En Gestion<ol id='rel_74'></ol></li>",
    						"epiN": "BInvCre1"
    					}
    				},
    				"70": {
    					"BinvCre2B1": {
    						"sig": "+",
    						"relId": "70.301",
    						"epiDesc": "Otra Inversion No Dudosa",
    						"li": "<li id='301'>(+) BinvCre2B1 Otra Inversion No Dudosa<ol id='rel_71'></ol></li>",
    						"epiN": "BinvCre2B1"
    					}
    				},
    				"71": {
    					"BinvCre2B1A": {
    						"sig": "+",
    						"relId": "71.302",
    						"epiDesc": "Empleados ATAs y Otros",
    						"li": "<li id='302'>(+) BinvCre2B1A Empleados ATAs y Otros<ol id='rel_72'></ol></li>",
    						"epiN": "BinvCre2B1A"
    					}
    				},
    				"72": {
    					"BinvCre2B1A2": {
    						"sig": "+",
    						"relId": "72.303",
    						"epiDesc": "ATAs",
    						"li": "<li id='303'>(+) BinvCre2B1A2 ATAs<ol id='rel_73'></ol></li>",
    						"epiN": "BinvCre2B1A2"
    					},
    					"BinvCre2B1A1": {
    						"sig": "+",
    						"relId": "72.304",
    						"epiDesc": "Empleados Y Otros",
    						"li": "<li id='304'>(+) BinvCre2B1A1 Empleados Y Otros<ol id='rel_91'></ol></li>",
    						"epiN": "BinvCre2B1A1"
    					}
    				},
    				"73": {
    					"BinvCre2B1A2B": {
    						"sig": "+",
    						"relId": "73.306",
    						"epiDesc": "ATAs Nr",
    						"li": "<li id='306'>(+) BinvCre2B1A2B ATAs Nr</li>",
    						"epiN": "BinvCre2B1A2B"
    					},
    					"BinvCre2B1A2A": {
    						"sig": "+",
    						"relId": "73.305",
    						"epiDesc": "ATAs Sr",
    						"li": "<li id='305'>(+) BinvCre2B1A2A ATAs Sr<ol id='rel_92'></ol></li>",
    						"epiN": "BinvCre2B1A2A"
    					}
    				},
    				"74": {
    					"BInvCre13": {
    						"sig": "+",
    						"relId": "74.309",
    						"epiDesc": "Consumo",
    						"li": "<li id='309'>(+) BInvCre13 Consumo<ol id='rel_82'></ol></li>",
    						"epiN": "BInvCre13"
    					},
    					"BInvCre12": {
    						"sig": "+",
    						"relId": "74.308",
    						"epiDesc": "TDC",
    						"li": "<li id='308'>(+) BInvCre12 TDC<ol id='rel_81'></ol></li>",
    						"epiN": "BInvCre12"
    					},
    					"BInvCre14": {
    						"sig": "+",
    						"relId": "74.310",
    						"epiDesc": "Cartera Hipotecaria",
    						"li": "<li id='310'>(+) BInvCre14 Cartera Hipotecaria<ol id='rel_75'></ol></li>",
    						"epiN": "BInvCre14"
    					},
    					"BInvCre11": {
    						"sig": "+",
    						"relId": "74.307",
    						"epiDesc": "Comercial",
    						"li": "<li id='307'>(+) BInvCre11 Comercial<ol id='rel_76'></ol></li>",
    						"epiN": "BInvCre11"
    					}
    				},
    				"75": {
    					"BInvCre143": {
    						"sig": "+",
    						"relId": "75.312",
    						"epiDesc": "Promotores",
    						"li": "<li id='312'>(+) BInvCre143 Promotores</li>",
    						"epiN": "BInvCre143"
    					},
    					"BInvCre14A": {
    						"sig": "+",
    						"relId": "75.311",
    						"epiDesc": "Individual",
    						"li": "<li id='311'>(+) BInvCre14A Individual<ol id='rel_83'></ol></li>",
    						"epiN": "BInvCre14A"
    					}
    				},
    				"76": {
    					"BInvCre112": {
    						"sig": "+",
    						"relId": "76.314",
    						"epiDesc": "Gobierno",
    						"li": "<li id='314'>(+) BInvCre112 Gobierno</li>",
    						"epiN": "BInvCre112"
    					},
    					"BInvCre111": {
    						"sig": "+",
    						"relId": "76.313",
    						"epiDesc": "Empresarial",
    						"li": "<li id='313'>(+) BInvCre111 Empresarial<ol id='rel_77'></ol></li>",
    						"epiN": "BInvCre111"
    					}
    				},
    				"77": {
    					"BInvCre1113": {
    						"sig": "+",
    						"relId": "77.317",
    						"epiDesc": "TDC Empresarial",
    						"li": "<li id='317'>(+) BInvCre1113 TDC Empresarial</li>",
    						"epiN": "BInvCre1113"
    					},
    					"BInvCre1112": {
    						"sig": "+",
    						"relId": "77.316",
    						"epiDesc": "TDC Negocios",
    						"li": "<li id='316'>(+) BInvCre1112 TDC Negocios</li>",
    						"epiN": "BInvCre1112"
    					},
    					"BInvCre1111": {
    						"sig": "+",
    						"relId": "77.315",
    						"epiDesc": "Tradicional",
    						"li": "<li id='315'>(+) BInvCre1111 Tradicional<ol id='rel_78'></ol></li>",
    						"epiN": "BInvCre1111"
    					}
    				},
    				"78": {
    					"BInvCre11114": {
    						"sig": "+",
    						"relId": "78.321",
    						"epiDesc": "Fondos De Fomento",
    						"li": "<li id='321'>(+) BInvCre11114 Fondos De Fomento</li>",
    						"epiN": "BInvCre11114"
    					},
    					"BInvCre11113": {
    						"sig": "+",
    						"relId": "78.320",
    						"epiDesc": "Arrendamiento Financiero",
    						"li": "<li id='320'>(+) BInvCre11113 Arrendamiento Financiero</li>",
    						"epiN": "BInvCre11113"
    					},
    					"BInvCre11115": {
    						"sig": "+",
    						"relId": "78.322",
    						"epiDesc": "Arrendamiento Puro",
    						"li": "<li id='322'>(+) BInvCre11115 Arrendamiento Puro</li>",
    						"epiN": "BInvCre11115"
    					},
    					"BInvCre11112": {
    						"sig": "+",
    						"relId": "78.319",
    						"epiDesc": "Entidades de Credito",
    						"li": "<li id='319'>(+) BInvCre11112 Entidades de Credito<ol id='rel_79'></ol></li>",
    						"epiN": "BInvCre11112"
    					},
    					"BInvCre11111": {
    						"sig": "+",
    						"relId": "78.318",
    						"epiDesc": "Tradicional Pura",
    						"li": "<li id='318'>(+) BInvCre11111 Tradicional Pura</li>",
    						"epiN": "BInvCre11111"
    					}
    				},
    				"79": {
    					"BInvCre1111202": {
    						"sig": "+",
    						"relId": "79.324",
    						"epiDesc": "Resto de Entidades de Credito",
    						"li": "<li id='324'>(+) BInvCre1111202 Resto de Entidades de Credito<ol id='rel_80'></ol></li>",
    						"epiN": "BInvCre1111202"
    					},
    					"BInvCre1111201": {
    						"sig": "+",
    						"relId": "79.323",
    						"epiDesc": "Financiamiento Cuenta Vostro",
    						"li": "<li id='323'>(+) BInvCre1111201 Financiamiento Cuenta Vostro</li>",
    						"epiN": "BInvCre1111201"
    					}
    				},
    				"80": {
    					"BInvCre111120201": {
    						"sig": "+",
    						"relId": "80.325",
    						"epiDesc": "Bancos e IFI's",
    						"li": "<li id='325'>(+) BInvCre111120201 Bancos e IFI's</li>",
    						"epiN": "BInvCre111120201"
    					},
    					"BInvCre111120202": {
    						"sig": "+",
    						"relId": "80.326",
    						"epiDesc": "Otras Entidades Financieras",
    						"li": "<li id='326'>(+) BInvCre111120202 Otras Entidades Financieras</li>",
    						"epiN": "BInvCre111120202"
    					}
    				},
    				"81": {
    					"BInvCre1201": {
    						"sig": "+",
    						"relId": "81.327",
    						"epiDesc": "TDC Red",
    						"li": "<li id='327'>(+) BInvCre1201 TDC Red</li>",
    						"epiN": "BInvCre1201"
    					},
    					"BInvCre1202": {
    						"sig": "+",
    						"relId": "81.328",
    						"epiDesc": "TDC Finanzia",
    						"li": "<li id='328'>(+) BInvCre1202 TDC Finanzia</li>",
    						"epiN": "BInvCre1202"
    					}
    				},
    				"82": {
    					"BInvCre1301": {
    						"sig": "+",
    						"relId": "82.329",
    						"epiDesc": "Consumo Red",
    						"li": "<li id='329'>(+) BInvCre1301 Consumo Red</li>",
    						"epiN": "BInvCre1301"
    					},
    					"BInvCre1302": {
    						"sig": "+",
    						"relId": "82.330",
    						"epiDesc": "Consumo Finanzia",
    						"li": "<li id='330'>(+) BInvCre1302 Consumo Finanzia</li>",
    						"epiN": "BInvCre1302"
    					},
    					"BInvCre1303": {
    						"sig": "+",
    						"relId": "82.331",
    						"epiDesc": "Consumo Financiera Ayudemos",
    						"li": "<li id='331'>(+) BInvCre1303 Consumo Financiera Ayudemos</li>",
    						"epiN": "BInvCre1303"
    					}
    				},
    				"83": {
    					"BInvCre142": {
    						"sig": "+",
    						"relId": "83.333",
    						"epiDesc": "CH Antigua",
    						"li": "<li id='333'>(+) BInvCre142 CH Antigua<ol id='rel_88'></ol></li>",
    						"epiN": "BInvCre142"
    					},
    					"BInvCre141": {
    						"sig": "+",
    						"relId": "83.332",
    						"epiDesc": "CH Mercado Abierto",
    						"li": "<li id='332'>(+) BInvCre141 CH Mercado Abierto<ol id='rel_84'></ol></li>",
    						"epiN": "BInvCre141"
    					}
    				},
    				"84": {
    					"BInvCre1411": {
    						"sig": "+",
    						"relId": "84.334",
    						"epiDesc": "CHMA Pesos",
    						"li": "<li id='334'>(+) BInvCre1411 CHMA Pesos<ol id='rel_85'></ol></li>",
    						"epiN": "BInvCre1411"
    					},
    					"BInvCre1412": {
    						"sig": "+",
    						"relId": "84.335",
    						"epiDesc": "CHMA VSM",
    						"li": "<li id='335'>(+) BInvCre1412 CHMA VSM<ol id='rel_86'></ol></li>",
    						"epiN": "BInvCre1412"
    					},
    					"BInvCre1413": {
    						"sig": "+",
    						"relId": "84.336",
    						"epiDesc": "CHMA Udis",
    						"li": "<li id='336'>(+) BInvCre1413 CHMA Udis<ol id='rel_87'></ol></li>",
    						"epiN": "BInvCre1413"
    					}
    				},
    				"85": {
    					"BInvCre14111": {
    						"sig": "+",
    						"relId": "85.337",
    						"epiDesc": "CHMAP Banco",
    						"li": "<li id='337'>(+) BInvCre14111 CHMAP Banco</li>",
    						"epiN": "BInvCre14111"
    					},
    					"BInvCre14114": {
    						"sig": "+",
    						"relId": "85.339",
    						"epiDesc": "CHMAP Bursatilizada",
    						"li": "<li id='339'>(+) BInvCre14114 CHMAP Bursatilizada</li>",
    						"epiN": "BInvCre14114"
    					},
    					"BInvCre14112": {
    						"sig": "+",
    						"relId": "85.338",
    						"epiDesc": "CHMAP Pemex",
    						"li": "<li id='338'>(+) BInvCre14112 CHMAP Pemex</li>",
    						"epiN": "BInvCre14112"
    					}
    				},
    				"86": {
    					"BInvCre14121": {
    						"sig": "+",
    						"relId": "86.340",
    						"epiDesc": "CHMAV Banco",
    						"li": "<li id='340'>(+) BInvCre14121 CHMAV Banco</li>",
    						"epiN": "BInvCre14121"
    					},
    					"BInvCre14122": {
    						"sig": "+",
    						"relId": "86.341",
    						"epiDesc": "CHMAV Bursatilizada",
    						"li": "<li id='341'>(+) BInvCre14122 CHMAV Bursatilizada</li>",
    						"epiN": "BInvCre14122"
    					}
    				},
    				"87": {
    					"BInvCre14132": {
    						"sig": "+",
    						"relId": "87.343",
    						"epiDesc": "CHMAU Bursatilizada",
    						"li": "<li id='343'>(+) BInvCre14132 CHMAU Bursatilizada</li>",
    						"epiN": "BInvCre14132"
    					},
    					"BInvCre14131": {
    						"sig": "+",
    						"relId": "87.342",
    						"epiDesc": "CHMAU Banco",
    						"li": "<li id='342'>(+) BInvCre14131 CHMAU Banco</li>",
    						"epiN": "BInvCre14131"
    					}
    				},
    				"88": {
    					"BInvCre1422": {
    						"sig": "+",
    						"relId": "88.345",
    						"epiDesc": "CHA Fideicomisos Udis",
    						"li": "<li id='345'>(+) BInvCre1422 CHA Fideicomisos Udis<ol id='rel_89'></ol></li>",
    						"epiN": "BInvCre1422"
    					},
    					"BInvCre1421": {
    						"sig": "+",
    						"relId": "88.344",
    						"epiDesc": "CHA Pesos",
    						"li": "<li id='344'>(+) BInvCre1421 CHA Pesos</li>",
    						"epiN": "BInvCre1421"
    					}
    				},
    				"89": {
    					"BInvCre14221": {
    						"sig": "+",
    						"relId": "89.346",
    						"epiDesc": "Vivienda Esquema De Rentas",
    						"li": "<li id='346'>(+) BInvCre14221 Vivienda Esquema De Rentas</li>",
    						"epiN": "BInvCre14221"
    					},
    					"BInvCre14222": {
    						"sig": "+",
    						"relId": "89.347",
    						"epiDesc": "Vivienda Fideicomisos Udis",
    						"li": "<li id='347'>(+) BInvCre14222 Vivienda Fideicomisos Udis</li>",
    						"epiN": "BInvCre14222"
    					}
    				},
    				"90": {
    					"BInvCre24": {
    						"sig": "+",
    						"relId": "90.350",
    						"epiDesc": "Microcoberturas de Credito",
    						"li": "<li id='350'>(+) BInvCre24 Microcoberturas de Credito<ol id='rel_96'></ol></li>",
    						"epiN": "BInvCre24"
    					},
    					"BInvCre26": {
    						"sig": "+",
    						"relId": "90.352",
    						"epiDesc": "Comisiones Pendientes de Diferir",
    						"li": "<li id='352'>(+) BInvCre26 Comisiones Pendientes de Diferir<ol id='rel_100'></ol></li>",
    						"epiN": "BInvCre26"
    					},
    					"BInvCre25": {
    						"sig": "+",
    						"relId": "90.351",
    						"epiDesc": "Intereses Devengados.",
    						"li": "<li id='351'>(+) BInvCre25 Intereses Devengados.<ol id='rel_97'></ol></li>",
    						"epiN": "BInvCre25"
    					},
    					"BInvCre4": {
    						"sig": "+",
    						"relId": "90.353",
    						"epiDesc": "Cuentas de Cartera por Reasignar",
    						"li": "<li id='353'>(+) BInvCre4 Cuentas de Cartera por Reasignar</li>",
    						"epiN": "BInvCre4"
    					},
    					"BInvCre22": {
    						"sig": "+",
    						"relId": "90.349",
    						"epiDesc": "Apoyos al Gobierno Federal",
    						"li": "<li id='349'>(+) BInvCre22 Apoyos al Gobierno Federal<ol id='rel_94'></ol></li>",
    						"epiN": "BInvCre22"
    					},
    					"BInvCre21": {
    						"sig": "+",
    						"relId": "90.348",
    						"epiDesc": "Cetes Especiales",
    						"li": "<li id='348'>(+) BInvCre21 Cetes Especiales<ol id='rel_93'></ol></li>",
    						"epiN": "BInvCre21"
    					}
    				},
    				"91": {
    					"BInvCre23": {
    						"sig": "+",
    						"relId": "91.354",
    						"epiDesc": "Prestamos a Empleados",
    						"li": "<li id='354'>(+) BInvCre23 Prestamos a Empleados<ol id='rel_95'></ol></li>",
    						"epiN": "BInvCre23"
    					}
    				},
    				"92": {
    					"BInvCre27": {
    						"sig": "+",
    						"relId": "92.355",
    						"epiDesc": "No dudosos ATA's",
    						"li": "<li id='355'>(+) BInvCre27 No dudosos ATA's</li>",
    						"epiN": "BInvCre27"
    					}
    				},
    				"93": {
    					"BInvCre212": {
    						"sig": "+",
    						"relId": "93.357",
    						"epiDesc": "Cetes Especiales Vivienda",
    						"li": "<li id='357'>(+) BInvCre212 Cetes Especiales Vivienda</li>",
    						"epiN": "BInvCre212"
    					},
    					"BInvCre211": {
    						"sig": "+",
    						"relId": "93.356",
    						"epiDesc": "Cetes Especiales Tradicional",
    						"li": "<li id='356'>(+) BInvCre211 Cetes Especiales Tradicional</li>",
    						"epiN": "BInvCre211"
    					}
    				},
    				"94": {
    					"BInvCre222": {
    						"sig": "+",
    						"relId": "94.359",
    						"epiDesc": "Credito Al Gob. Punto Final Condicionado",
    						"li": "<li id='359'>(+) BInvCre222 Credito Al Gob. Punto Final Condicionado</li>",
    						"epiN": "BInvCre222"
    					},
    					"BInvCre221": {
    						"sig": "+",
    						"relId": "94.358",
    						"epiDesc": "Credito Al Gob. Punto Final",
    						"li": "<li id='358'>(+) BInvCre221 Credito Al Gob. Punto Final</li>",
    						"epiN": "BInvCre221"
    					}
    				},
    				"95": {
    					"BInvCre231": {
    						"sig": "+",
    						"relId": "95.360",
    						"epiDesc": "PE Hipotecario",
    						"li": "<li id='360'>(+) BInvCre231 PE Hipotecario</li>",
    						"epiN": "BInvCre231"
    					},
    					"BInvCre232": {
    						"sig": "+",
    						"relId": "95.361",
    						"epiDesc": "PE Consumo",
    						"li": "<li id='361'>(+) BInvCre232 PE Consumo</li>",
    						"epiN": "BInvCre232"
    					}
    				},
    				"96": {
    					"BInvCre242": {
    						"sig": "+",
    						"relId": "96.363",
    						"epiDesc": "Val. A. Swap Cob._No Dudosa",
    						"li": "<li id='363'>(+) BInvCre242 Val. A. Swap Cob._No Dudosa</li>",
    						"epiN": "BInvCre242"
    					},
    					"BInvCre241": {
    						"sig": "+",
    						"relId": "96.362",
    						"epiDesc": "Swaps de Covertura de Credito",
    						"li": "<li id='362'>(+) BInvCre241 Swaps de Covertura de Credito</li>",
    						"epiN": "BInvCre241"
    					}
    				},
    				"97": {
    					"BInvCre256": {
    						"sig": "+",
    						"relId": "97.369",
    						"epiDesc": "ID Burzatilizada",
    						"li": "<li id='369'>(+) BInvCre256 ID Burzatilizada</li>",
    						"epiN": "BInvCre256"
    					},
    					"BInvCre253": {
    						"sig": "+",
    						"relId": "97.366",
    						"epiDesc": "ID Consumo",
    						"li": "<li id='366'>(+) BInvCre253 ID Consumo<ol id='rel_99'></ol></li>",
    						"epiN": "BInvCre253"
    					},
    					"BInvCre252": {
    						"sig": "+",
    						"relId": "97.365",
    						"epiDesc": "ID TDC",
    						"li": "<li id='365'>(+) BInvCre252 ID TDC</li>",
    						"epiN": "BInvCre252"
    					},
    					"BInvCre255": {
    						"sig": "+",
    						"relId": "97.368",
    						"epiDesc": "ID Otros",
    						"li": "<li id='368'>(+) BInvCre255 ID Otros</li>",
    						"epiN": "BInvCre255"
    					},
    					"BInvCre254": {
    						"sig": "+",
    						"relId": "97.367",
    						"epiDesc": "ID Hipotecario Individual",
    						"li": "<li id='367'>(+) BInvCre254 ID Hipotecario Individual</li>",
    						"epiN": "BInvCre254"
    					},
    					"BInvCre251": {
    						"sig": "+",
    						"relId": "97.364",
    						"epiDesc": "ID Comercial",
    						"li": "<li id='364'>(+) BInvCre251 ID Comercial<ol id='rel_98'></ol></li>",
    						"epiN": "BInvCre251"
    					}
    				},
    				"98": {
    					"BInvCre2511": {
    						"sig": "+",
    						"relId": "98.370",
    						"epiDesc": "Intereses Dev Auto Morales",
    						"li": "<li id='370'>(+) BInvCre2511 Intereses Dev Auto Morales</li>",
    						"epiN": "BInvCre2511"
    					},
    					"BInvCre2512": {
    						"sig": "+",
    						"relId": "98.371",
    						"epiDesc": "Intereses Dev PYME",
    						"li": "<li id='371'>(+) BInvCre2512 Intereses Dev PYME</li>",
    						"epiN": "BInvCre2512"
    					},
    					"BInvCre2513": {
    						"sig": "+",
    						"relId": "98.372",
    						"epiDesc": "Intereses Dev Comercial",
    						"li": "<li id='372'>(+) BInvCre2513 Intereses Dev Comercial</li>",
    						"epiN": "BInvCre2513"
    					}
    				},
    				"99": {
    					"BInvCre2531": {
    						"sig": "+",
    						"relId": "99.373",
    						"epiDesc": "Intereses Dev Auto Fisicas",
    						"li": "<li id='373'>(+) BInvCre2531 Intereses Dev Auto Fisicas</li>",
    						"epiN": "BInvCre2531"
    					},
    					"BInvCre2532": {
    						"sig": "+",
    						"relId": "99.374",
    						"epiDesc": "Intereses Dev Red",
    						"li": "<li id='374'>(+) BInvCre2532 Intereses Dev Red</li>",
    						"epiN": "BInvCre2532"
    					}
    				},
    				"100": {
    					"BInvCre262": {
    						"sig": "+",
    						"relId": "100.376",
    						"epiDesc": "CPD TDC",
    						"li": "<li id='376'>(+) BInvCre262 CPD TDC</li>",
    						"epiN": "BInvCre262"
    					},
    					"BInvCre261": {
    						"sig": "+",
    						"relId": "100.375",
    						"epiDesc": "CPD Comercial",
    						"li": "<li id='375'>(+) BInvCre261 CPD Comercial</li>",
    						"epiN": "BInvCre261"
    					},
    					"BInvCre264": {
    						"sig": "+",
    						"relId": "100.378",
    						"epiDesc": "CPD Hipotecario Individual",
    						"li": "<li id='378'>(+) BInvCre264 CPD Hipotecario Individual</li>",
    						"epiN": "BInvCre264"
    					},
    					"BInvCre263": {
    						"sig": "+",
    						"relId": "100.377",
    						"epiDesc": "CPD Consumo",
    						"li": "<li id='377'>(+) BInvCre263 CPD Consumo</li>",
    						"epiN": "BInvCre263"
    					}
    				},
    				"101": {
    					"BInvCre35": {
    						"sig": "+",
    						"relId": "101.383",
    						"epiDesc": "CV Hipotecario Individual",
    						"li": "<li id='383'>(+) BInvCre35 CV Hipotecario Individual</li>",
    						"epiN": "BInvCre35"
    					},
    					"BInvCre34": {
    						"sig": "+",
    						"relId": "101.382",
    						"epiDesc": "CV Promotores",
    						"li": "<li id='382'>(+) BInvCre34 CV Promotores</li>",
    						"epiN": "BInvCre34"
    					},
    					"BInvCre36": {
    						"sig": "+",
    						"relId": "101.384",
    						"epiDesc": "CV Resto",
    						"li": "<li id='384'>(+) BInvCre36 CV Resto</li>",
    						"epiN": "BInvCre36"
    					},
    					"BInvCre31": {
    						"sig": "+",
    						"relId": "101.379",
    						"epiDesc": "CV Comercial",
    						"li": "<li id='379'>(+) BInvCre31 CV Comercial<ol id='rel_102'></ol></li>",
    						"epiN": "BInvCre31"
    					},
    					"BInvCre33": {
    						"sig": "+",
    						"relId": "101.381",
    						"epiDesc": "CV Consumo",
    						"li": "<li id='381'>(+) BInvCre33 CV Consumo</li>",
    						"epiN": "BInvCre33"
    					},
    					"BInvCre32": {
    						"sig": "+",
    						"relId": "101.380",
    						"epiDesc": "CV TDC",
    						"li": "<li id='380'>(+) BInvCre32 CV TDC</li>",
    						"epiN": "BInvCre32"
    					}
    				},
    				"102": {
    					"BInvCre312": {
    						"sig": "+",
    						"relId": "102.386",
    						"epiDesc": "CV Gobierno",
    						"li": "<li id='386'>(+) BInvCre312 CV Gobierno</li>",
    						"epiN": "BInvCre312"
    					},
    					"BInvCre311": {
    						"sig": "+",
    						"relId": "102.385",
    						"epiDesc": "CV Empresarial",
    						"li": "<li id='385'>(+) BInvCre311 CV Empresarial<ol id='rel_103'></ol></li>",
    						"epiN": "BInvCre311"
    					}
    				},
    				"103": {
    					"BInvCre3114": {
    						"sig": "+",
    						"relId": "103.390",
    						"epiDesc": "CV Arrendamiento Puro",
    						"li": "<li id='390'>(+) BInvCre3114 CV Arrendamiento Puro</li>",
    						"epiN": "BInvCre3114"
    					},
    					"BInvCre3112": {
    						"sig": "+",
    						"relId": "103.388",
    						"epiDesc": "CV Entidades de Credito",
    						"li": "<li id='388'>(+) BInvCre3112 CV Entidades de Credito</li>",
    						"epiN": "BInvCre3112"
    					},
    					"BInvCre3113": {
    						"sig": "+",
    						"relId": "103.389",
    						"epiDesc": "CV TDC Negocio",
    						"li": "<li id='389'>(+) BInvCre3113 CV TDC Negocio</li>",
    						"epiN": "BInvCre3113"
    					},
    					"BInvCre3111": {
    						"sig": "+",
    						"relId": "103.387",
    						"epiDesc": "CV Tradicional Pura",
    						"li": "<li id='387'>(+) BInvCre3111 CV Tradicional Pura</li>",
    						"epiN": "BInvCre3111"
    					}
    				},
    				"104": {
    					"Boaf07": {
    						"sig": "+",
    						"relId": "104.395",
    						"epiDesc": "OAF Resto",
    						"li": "<li id='395'>(+) Boaf07 OAF Resto</li>",
    						"epiN": "Boaf07"
    					},
    					"Boaf10": {
    						"sig": "+",
    						"relId": "104.393",
    						"epiDesc": "Operaciones financieras pendientes de liquidar",
    						"li": "<li id='393'>(+) Boaf10 Operaciones financieras pendientes de liquidar</li>",
    						"epiN": "Boaf10"
    					},
    					"Boaf09": {
    						"sig": "+",
    						"relId": "104.394",
    						"epiDesc": "Documentos Cobro Inmediato y Remesas",
    						"li": "<li id='394'>(+) Boaf09 Documentos Cobro Inmediato y Remesas</li>",
    						"epiN": "Boaf09"
    					},
    					"Boaf08": {
    						"sig": "+",
    						"relId": "104.391",
    						"epiDesc": "Deudores por Fideicomisos en Administracion (Neto)",
    						"li": "<li id='391'>(+) Boaf08 Deudores por Fideicomisos en Administracion (Neto)</li>",
    						"epiN": "Boaf08"
    					},
    					"Boaf11": {
    						"sig": "+",
    						"relId": "104.392",
    						"epiDesc": "Depositos en garantia",
    						"li": "<li id='392'>(+) Boaf11 Depositos en garantia</li>",
    						"epiN": "Boaf11"
    					}
    				},
    				"105": {
    					"Brac27": {
    						"sig": "+",
    						"relId": "105.397",
    						"epiDesc": "Activos Fiscales",
    						"li": "<li id='397'>(+) Brac27 Activos Fiscales<ol id='rel_111'></ol></li>",
    						"epiN": "Brac27"
    					},
    					"Brac26": {
    						"sig": "+",
    						"relId": "105.396",
    						"epiDesc": "Bienes adjudicados",
    						"li": "<li id='396'>(+) Brac26 Bienes adjudicados<ol id='rel_110'></ol></li>",
    						"epiN": "Brac26"
    					},
    					"Brac37": {
    						"sig": "+",
    						"relId": "105.402",
    						"epiDesc": "Swapito Interno",
    						"li": "<li id='402'>(+) Brac37 Swapito Interno</li>",
    						"epiN": "Brac37"
    					},
    					"Brac36": {
    						"sig": "+",
    						"relId": "105.401",
    						"epiDesc": "Swapito Posicion",
    						"li": "<li id='401'>(+) Brac36 Swapito Posicion</li>",
    						"epiN": "Brac36"
    					},
    					"Brac35": {
    						"sig": "+",
    						"relId": "105.400",
    						"epiDesc": "Posicion cambiaria",
    						"li": "<li id='400'>(+) Brac35 Posicion cambiaria<ol id='rel_107'></ol></li>",
    						"epiN": "Brac35"
    					},
    					"Brac28": {
    						"sig": "+",
    						"relId": "105.398",
    						"epiDesc": "Otras cuentas por cobrar",
    						"li": "<li id='398'>(+) Brac28 Otras cuentas por cobrar<ol id='rel_112'></ol></li>",
    						"epiN": "Brac28"
    					},
    					"Brac205": {
    						"sig": "+",
    						"relId": "105.399",
    						"epiDesc": "RA Otros",
    						"li": "<li id='399'>(+) Brac205 RA Otros<ol id='rel_106'></ol></li>",
    						"epiN": "Brac205"
    					}
    				},
    				"106": {
    					"Brac34": {
    						"sig": "+",
    						"relId": "106.403",
    						"epiDesc": "Activos Netos en Planes de Pensiones",
    						"li": "<li id='403'>(+) Brac34 Activos Netos en Planes de Pensiones</li>",
    						"epiN": "Brac34"
    					},
    					"Brac33": {
    						"sig": "+",
    						"relId": "106.407",
    						"epiDesc": "Depositos constituidos por reaseguro aceptado",
    						"li": "<li id='407'>(+) Brac33 Depositos constituidos por reaseguro aceptado</li>",
    						"epiN": "Brac33"
    					},
    					"Brac32": {
    						"sig": "+",
    						"relId": "106.406",
    						"epiDesc": "Creditos por operaciones de reaseguros",
    						"li": "<li id='406'>(+) Brac32 Creditos por operaciones de reaseguros</li>",
    						"epiN": "Brac32"
    					},
    					"Brac31": {
    						"sig": "+",
    						"relId": "106.405",
    						"epiDesc": "Creditos por operaciones de seguros",
    						"li": "<li id='405'>(+) Brac31 Creditos por operaciones de seguros</li>",
    						"epiN": "Brac31"
    					},
    					"Brac20501": {
    						"sig": "+",
    						"relId": "106.408",
    						"epiDesc": "RA Otros Extra",
    						"li": "<li id='408'>(+) Brac20501 RA Otros Extra</li>",
    						"epiN": "Brac20501"
    					},
    					"Brac30": {
    						"sig": "+",
    						"relId": "106.404",
    						"epiDesc": "Primas pendientes de cobro",
    						"li": "<li id='404'>(+) Brac30 Primas pendientes de cobro</li>",
    						"epiN": "Brac30"
    					}
    				},
    				"107": {
    					"Brac3501": {
    						"sig": "+",
    						"relId": "107.409",
    						"epiDesc": "De contado",
    						"li": "<li id='409'>(+) Brac3501 De contado</li>",
    						"epiN": "Brac3501"
    					},
    					"Brac3502": {
    						"sig": "+",
    						"relId": "107.410",
    						"epiDesc": "De plazo",
    						"li": "<li id='410'>(+) Brac3502 De plazo</li>",
    						"epiN": "Brac3502"
    					}
    				},
    				"108": {
    					"Brac2501": {
    						"sig": "+",
    						"relId": "108.411",
    						"epiDesc": "Cuenta de Central",
    						"li": "<li id='411'>(+) Brac2501 Cuenta de Central</li>",
    						"epiN": "Brac2501"
    					},
    					"Brac2502": {
    						"sig": "+",
    						"relId": "108.412",
    						"epiDesc": "Depositos Internos Activos",
    						"li": "<li id='412'>(+) Brac2502 Depositos Internos Activos<ol id='rel_109'></ol></li>",
    						"epiN": "Brac2502"
    					}
    				},
    				"109": {
    					"Brac250203": {
    						"sig": "+",
    						"relId": "109.415",
    						"epiDesc": "DI Depositos a Plazo",
    						"li": "<li id='415'>(+) Brac250203 DI Depositos a Plazo</li>",
    						"epiN": "Brac250203"
    					},
    					"Brac250202": {
    						"sig": "+",
    						"relId": "109.414",
    						"epiDesc": "DI Ahorro Libreton",
    						"li": "<li id='414'>(+) Brac250202 DI Ahorro Libreton</li>",
    						"epiN": "Brac250202"
    					},
    					"Brac250201": {
    						"sig": "+",
    						"relId": "109.413",
    						"epiDesc": "DI A la Vista",
    						"li": "<li id='413'>(+) Brac250201 DI A la Vista</li>",
    						"epiN": "Brac250201"
    					}
    				},
    				"110": {
    					"Brac2601": {
    						"sig": "+",
    						"relId": "110.416",
    						"epiDesc": "Activo material adjudicado",
    						"li": "<li id='416'>(+) Brac2601 Activo material adjudicado</li>",
    						"epiN": "Brac2601"
    					},
    					"Brac2602": {
    						"sig": "+",
    						"relId": "110.417",
    						"epiDesc": "Activo material de uso propio",
    						"li": "<li id='417'>(+) Brac2602 Activo material de uso propio</li>",
    						"epiN": "Brac2602"
    					},
    					"Brac2603": {
    						"sig": "+",
    						"relId": "110.418",
    						"epiDesc": "Correccion de valor por deterioro de activos",
    						"li": "<li id='418'>(+) Brac2603 Correccion de valor por deterioro de activos</li>",
    						"epiN": "Brac2603"
    					}
    				},
    				"111": {
    					"Brac2701": {
    						"sig": "+",
    						"relId": "111.419",
    						"epiDesc": "AF Corrientes",
    						"li": "<li id='419'>(+) Brac2701 AF Corrientes</li>",
    						"epiN": "Brac2701"
    					},
    					"Brac2702": {
    						"sig": "+",
    						"relId": "111.420",
    						"epiDesc": "AF Diferidos",
    						"li": "<li id='420'>(+) Brac2702 AF Diferidos</li>",
    						"epiN": "Brac2702"
    					}
    				},
    				"112": {
    					"Brac2801": {
    						"sig": "+",
    						"relId": "112.421",
    						"epiDesc": "OCxC Cuentas diversas",
    						"li": "<li id='421'>(+) Brac2801 OCxC Cuentas diversas<ol id='rel_113'></ol></li>",
    						"epiN": "Brac2801"
    					},
    					"Brac2802": {
    						"sig": "+",
    						"relId": "112.422",
    						"epiDesc": "Pagos anticipados",
    						"li": "<li id='422'>(+) Brac2802 Pagos anticipados</li>",
    						"epiN": "Brac2802"
    					},
    					"Brac2803": {
    						"sig": "+",
    						"relId": "112.423",
    						"epiDesc": "OCxC Deudores por comisiones",
    						"li": "<li id='423'>(+) Brac2803 OCxC Deudores por comisiones</li>",
    						"epiN": "Brac2803"
    					}
    				},
    				"113": {
    					"Brac280102": {
    						"sig": "+",
    						"relId": "113.425",
    						"epiDesc": "Cuentas por cobrar",
    						"li": "<li id='425'>(+) Brac280102 Cuentas por cobrar</li>",
    						"epiN": "Brac280102"
    					},
    					"Brac280101": {
    						"sig": "+",
    						"relId": "113.424",
    						"epiDesc": "Otros deudores",
    						"li": "<li id='424'>(+) Brac280101 Otros deudores</li>",
    						"epiN": "Brac280101"
    					},
    					"Brac280104": {
    						"sig": "+",
    						"relId": "113.427",
    						"epiDesc": "Adeudos del Personal",
    						"li": "<li id='427'>(+) Brac280104 Adeudos del Personal</li>",
    						"epiN": "Brac280104"
    					},
    					"Brac280103": {
    						"sig": "+",
    						"relId": "113.426",
    						"epiDesc": "Iva pagado por aplicar",
    						"li": "<li id='426'>(+) Brac280103 Iva pagado por aplicar</li>",
    						"epiN": "Brac280103"
    					},
    					"Brac280105": {
    						"sig": "+",
    						"relId": "113.428",
    						"epiDesc": "OCxC Resto",
    						"li": "<li id='428'>(+) Brac280105 OCxC Resto</li>",
    						"epiN": "Brac280105"
    					}
    				},
    				"114": {
    					"Bdepb06": {
    						"sig": "+",
    						"relId": "114.429",
    						"epiDesc": "Bancos Centrales",
    						"li": "<li id='429'>(+) Bdepb06 Bancos Centrales<ol id='rel_115'></ol></li>",
    						"epiN": "Bdepb06"
    					},
    					"Bdepb07": {
    						"sig": "+",
    						"relId": "114.430",
    						"epiDesc": "Depositos Entidades de Credito",
    						"li": "<li id='430'>(+) Bdepb07 Depositos Entidades de Credito<ol id='rel_117'></ol></li>",
    						"epiN": "Bdepb07"
    					}
    				},
    				"115": {
    					"BbceSub": {
    						"sig": "+",
    						"relId": "115.431",
    						"epiDesc": "Subasta Banxico",
    						"li": "<li id='431'>(+) BbceSub Subasta Banxico<ol id='rel_116'></ol></li>",
    						"epiN": "BbceSub"
    					},
    					"Bdepb0101": {
    						"sig": "+",
    						"relId": "115.432",
    						"epiDesc": "Depositos de Disposicion Inmediata",
    						"li": "<li id='432'>(+) Bdepb0101 Depositos de Disposicion Inmediata</li>",
    						"epiN": "Bdepb0101"
    					}
    				},
    				"116": {
    					"BbceSub02": {
    						"sig": "+",
    						"relId": "116.434",
    						"epiDesc": "Subasta de TIIE",
    						"li": "<li id='434'>(+) BbceSub02 Subasta de TIIE</li>",
    						"epiN": "BbceSub02"
    					},
    					"BbceSub03": {
    						"sig": "+",
    						"relId": "116.435",
    						"epiDesc": "Subasta Resto",
    						"li": "<li id='435'>(+) BbceSub03 Subasta Resto</li>",
    						"epiN": "BbceSub03"
    					},
    					"BbceSub01": {
    						"sig": "+",
    						"relId": "116.433",
    						"epiDesc": "Subasta de Credito",
    						"li": "<li id='433'>(+) BbceSub01 Subasta de Credito</li>",
    						"epiN": "BbceSub01"
    					}
    				},
    				"117": {
    					"BentcBcos": {
    						"sig": "+",
    						"relId": "117.440",
    						"epiDesc": "Prestamos De Bancos",
    						"li": "<li id='440'>(+) BentcBcos Prestamos De Bancos<ol id='rel_118'></ol></li>",
    						"epiN": "BentcBcos"
    					},
    					"Bdepb0501": {
    						"sig": "+",
    						"relId": "117.441",
    						"epiDesc": "EC Acreedores en Reporto",
    						"li": "<li id='441'>(+) Bdepb0501 EC Acreedores en Reporto</li>",
    						"epiN": "Bdepb0501"
    					},
    					"BentcFF": {
    						"sig": "+",
    						"relId": "117.437",
    						"epiDesc": "EC Fondos de Fomento",
    						"li": "<li id='437'>(+) BentcFF EC Fondos de Fomento</li>",
    						"epiN": "BentcFF"
    					},
    					"BentcFo": {
    						"sig": "+",
    						"relId": "117.438",
    						"epiDesc": "Fovi",
    						"li": "<li id='438'>(+) BentcFo Fovi</li>",
    						"epiN": "BentcFo"
    					},
    					"BentcCM": {
    						"sig": "+",
    						"relId": "117.436",
    						"epiDesc": "EC Call Money",
    						"li": "<li id='436'>(+) BentcCM EC Call Money</li>",
    						"epiN": "BentcCM"
    					},
    					"BentcBur": {
    						"sig": "+",
    						"relId": "117.439",
    						"epiDesc": "Prestamo Bcos. Bursatilizacion",
    						"li": "<li id='439'>(+) BentcBur Prestamo Bcos. Bursatilizacion</li>",
    						"epiN": "BentcBur"
    					}
    				},
    				"118": {
    					"BentcBcos04": {
    						"sig": "+",
    						"relId": "118.445",
    						"epiDesc": "Prestamos Intergrupo",
    						"li": "<li id='445'>(+) BentcBcos04 Prestamos Intergrupo</li>",
    						"epiN": "BentcBcos04"
    					},
    					"BentcBcos03": {
    						"sig": "+",
    						"relId": "118.444",
    						"epiDesc": "Ptmos de Nafin y Linea ICO",
    						"li": "<li id='444'>(+) BentcBcos03 Ptmos de Nafin y Linea ICO</li>",
    						"epiN": "BentcBcos03"
    					},
    					"BentcBcos02": {
    						"sig": "+",
    						"relId": "118.443",
    						"epiDesc": "Resto de Ptmos de Bancos",
    						"li": "<li id='443'>(+) BentcBcos02 Resto de Ptmos de Bancos</li>",
    						"epiN": "BentcBcos02"
    					},
    					"BentcBcos01": {
    						"sig": "+",
    						"relId": "118.442",
    						"epiDesc": "Pasivos Vostro",
    						"li": "<li id='442'>(+) BentcBcos01 Pasivos Vostro</li>",
    						"epiN": "BentcBcos01"
    					}
    				},
    				"119": {
    					"Bdepc02": {
    						"sig": "+",
    						"relId": "119.448",
    						"epiDesc": "DC Resto",
    						"li": "<li id='448'>(+) Bdepc02 DC Resto<ol id='rel_154'></ol></li>",
    						"epiN": "Bdepc02"
    					},
    					"Bdepc01": {
    						"sig": "+",
    						"relId": "119.446",
    						"epiDesc": "Depositos De Clientes En Gestion",
    						"li": "<li id='446'>(+) Bdepc01 Depositos De Clientes En Gestion<ol id='rel_136'></ol></li>",
    						"epiN": "Bdepc01"
    					},
    					"BdepoD03": {
    						"sig": "+",
    						"relId": "119.447",
    						"epiDesc": "DC Valuacion de swaps de cobertura",
    						"li": "<li id='447'>(+) BdepoD03 DC Valuacion de swaps de cobertura</li>",
    						"epiN": "BdepoD03"
    					}
    				},
    				"120": {
    					"Bopas08": {
    						"sig": "+",
    						"relId": "120.451",
    						"epiDesc": "Captacion en transito",
    						"li": "<li id='451'>(+) Bopas08 Captacion en transito</li>",
    						"epiN": "Bopas08"
    					},
    					"Bopas07": {
    						"sig": "+",
    						"relId": "120.450",
    						"epiDesc": "OP Otras empresas",
    						"li": "<li id='450'>(+) Bopas07 OP Otras empresas</li>",
    						"epiN": "Bopas07"
    					},
    					"Bopas09": {
    						"sig": "+",
    						"relId": "120.452",
    						"epiDesc": "Aceptaciones",
    						"li": "<li id='452'>(+) Bopas09 Aceptaciones</li>",
    						"epiN": "Bopas09"
    					},
    					"Bopas14": {
    						"sig": "+",
    						"relId": "120.457",
    						"epiDesc": "Sobregiros Vostro",
    						"li": "<li id='457'>(+) Bopas14 Sobregiros Vostro</li>",
    						"epiN": "Bopas14"
    					},
    					"Bopas06": {
    						"sig": "+",
    						"relId": "120.449",
    						"epiDesc": "OP Seguros",
    						"li": "<li id='449'>(+) Bopas06 OP Seguros</li>",
    						"epiN": "Bopas06"
    					},
    					"Bopas11": {
    						"sig": "+",
    						"relId": "120.454",
    						"epiDesc": "Inversiones vencidas no reclamadas",
    						"li": "<li id='454'>(+) Bopas11 Inversiones vencidas no reclamadas</li>",
    						"epiN": "Bopas11"
    					},
    					"Bopas10": {
    						"sig": "+",
    						"relId": "120.453",
    						"epiDesc": "OP Depositos en garantia",
    						"li": "<li id='453'>(+) Bopas10 OP Depositos en garantia</li>",
    						"epiN": "Bopas10"
    					},
    					"Bopas13": {
    						"sig": "+",
    						"relId": "120.456",
    						"epiDesc": "Cuenta de Margen Pasivo",
    						"li": "<li id='456'>(+) Bopas13 Cuenta de Margen Pasivo</li>",
    						"epiN": "Bopas13"
    					},
    					"Bopas12": {
    						"sig": "+",
    						"relId": "120.455",
    						"epiDesc": "Operativa fideicomisos",
    						"li": "<li id='455'>(+) Bopas12 Operativa fideicomisos</li>",
    						"epiN": "Bopas12"
    					},
    					"BopasBResto": {
    						"sig": "+",
    						"relId": "120.458",
    						"epiDesc": "OP Resto",
    						"li": "<li id='458'>(+) BopasBResto OP Resto</li>",
    						"epiN": "BopasBResto"
    					}
    				},
    				"121": {
    					"BpafSubresto": {
    						"sig": "+",
    						"relId": "121.462",
    						"epiDesc": "PS Resto",
    						"li": "<li id='462'>(+) BpafSubresto PS Resto</li>",
    						"epiN": "BpafSubresto"
    					},
    					"BpafSubObl": {
    						"sig": "+",
    						"relId": "121.460",
    						"epiDesc": "Obligaciones Subordinadas",
    						"li": "<li id='460'>(+) BpafSubObl Obligaciones Subordinadas</li>",
    						"epiN": "BpafSubObl"
    					},
    					"BpafSubBonGar": {
    						"sig": "+",
    						"relId": "121.464",
    						"epiDesc": "Bonos en Garantia",
    						"li": "<li id='464'>(+) BpafSubBonGar Bonos en Garantia</li>",
    						"epiN": "BpafSubBonGar"
    					},
    					"BpafSubNot": {
    						"sig": "+",
    						"relId": "121.459",
    						"epiDesc": "Notas De Capital",
    						"li": "<li id='459'>(+) BpafSubNot Notas De Capital</li>",
    						"epiN": "BpafSubNot"
    					},
    					"BpafSubval": {
    						"sig": "+",
    						"relId": "121.461",
    						"epiDesc": "PS Valuacion de swaps de cobertura",
    						"li": "<li id='461'>(+) BpafSubval PS Valuacion de swaps de cobertura</li>",
    						"epiN": "BpafSubval"
    					},
    					"BpafSubEmisSin": {
    						"sig": "+",
    						"relId": "121.463",
    						"epiDesc": "Emision Senior",
    						"li": "<li id='463'>(+) BpafSubEmisSin Emision Senior</li>",
    						"epiN": "BpafSubEmisSin"
    					}
    				},
    				"122": {
    					"Bcarn01": {
    						"sig": "+",
    						"relId": "122.465",
    						"epiDesc": "Valores y prestamo de valores",
    						"li": "<li id='465'>(+) Bcarn01 Valores y prestamo de valores</li>",
    						"epiN": "Bcarn01"
    					}
    				},
    				"123": {
    					"Bintm01": {
    						"sig": "+",
    						"relId": "123.466",
    						"epiDesc": "IM Capital Contribuido",
    						"li": "<li id='466'>(+) Bintm01 IM Capital Contribuido<ol id='rel_142'></ol></li>",
    						"epiN": "Bintm01"
    					},
    					"BintmBResto": {
    						"sig": "+",
    						"relId": "123.468",
    						"epiDesc": "IM Resto",
    						"li": "<li id='468'>(+) BintmBResto IM Resto</li>",
    						"epiN": "BintmBResto"
    					},
    					"Bintm02": {
    						"sig": "+",
    						"relId": "123.467",
    						"epiDesc": "Superavit O (Deficit) De Valuacion",
    						"li": "<li id='467'>(+) Bintm02 Superavit O (Deficit) De Valuacion</li>",
    						"epiN": "Bintm02"
    					}
    				},
    				"124": {
    					"Best01": {
    						"sig": "+",
    						"relId": "124.469",
    						"epiDesc": "Capital Contribuido",
    						"li": "<li id='469'>(+) Best01 Capital Contribuido<ol id='rel_143'></ol></li>",
    						"epiN": "Best01"
    					},
    					"Best03": {
    						"sig": "+",
    						"relId": "124.471",
    						"epiDesc": "Superavit O (Deficit) De Val.",
    						"li": "<li id='471'>(+) Best03 Superavit O (Deficit) De Val.</li>",
    						"epiN": "Best03"
    					},
    					"Best0205": {
    						"sig": "+",
    						"relId": "124.473",
    						"epiDesc": "Resultado Por Tenencia De Activos No Monetarios",
    						"li": "<li id='473'>(+) Best0205 Resultado Por Tenencia De Activos No Monetarios</li>",
    						"epiN": "Best0205"
    					},
    					"Best02": {
    						"sig": "+",
    						"relId": "124.470",
    						"epiDesc": "Capital Ganado",
    						"li": "<li id='470'>(+) Best02 Capital Ganado<ol id='rel_144'></ol></li>",
    						"epiN": "Best02"
    					},
    					"BestBResto": {
    						"sig": "+",
    						"relId": "124.472",
    						"epiDesc": "Resto Estrictos",
    						"li": "<li id='472'>(+) BestBResto Resto Estrictos</li>",
    						"epiN": "BestBResto"
    					}
    				},
    				"125": {
    					"Brfi010104": {
    						"sig": "+",
    						"relId": "125.474",
    						"epiDesc": "Derivados de Negociacion Activos",
    						"li": "<li id='474'>(+) Brfi010104 Derivados de Negociacion Activos<ol id='rel_126'></ol></li>",
    						"epiN": "Brfi010104"
    					}
    				},
    				"126": {
    					"Brfi010104A": {
    						"sig": "+",
    						"relId": "126.475",
    						"epiDesc": "DNA Resto",
    						"li": "<li id='475'>(+) Brfi010104A DNA Resto<ol id='rel_129'></ol></li>",
    						"epiN": "Brfi010104A"
    					},
    					"Brfi010104B": {
    						"sig": "+",
    						"relId": "126.476",
    						"epiDesc": "DNA Divisas",
    						"li": "<li id='476'>(+) Brfi010104B DNA Divisas<ol id='rel_127'></ol></li>",
    						"epiN": "Brfi010104B"
    					}
    				},
    				"127": {
    					"Brfi010104B01": {
    						"sig": "+",
    						"relId": "127.477",
    						"epiDesc": "DNA Swaps Divisas",
    						"li": "<li id='477'>(+) Brfi010104B01 DNA Swaps Divisas<ol id='rel_128'></ol></li>",
    						"epiN": "Brfi010104B01"
    					}
    				},
    				"128": {
    					"Brfi010104B0101": {
    						"sig": "+",
    						"relId": "128.478",
    						"epiDesc": "DNA Swaps Activo Divisas",
    						"li": "<li id='478'>(+) Brfi010104B0101 DNA Swaps Activo Divisas</li>",
    						"epiN": "Brfi010104B0101"
    					}
    				},
    				"129": {
    					"Brfi01010403": {
    						"sig": "+",
    						"relId": "129.481",
    						"epiDesc": "DN Futuros",
    						"li": "<li id='481'>(+) Brfi01010403 DN Futuros<ol id='rel_132'></ol></li>",
    						"epiN": "Brfi01010403"
    					},
    					"Brfi01010404": {
    						"sig": "+",
    						"relId": "129.482",
    						"epiDesc": "DN Forwards",
    						"li": "<li id='482'>(+) Brfi01010404 DN Forwards<ol id='rel_133'></ol></li>",
    						"epiN": "Brfi01010404"
    					},
    					"Brfi01010401": {
    						"sig": "+",
    						"relId": "129.479",
    						"epiDesc": "DN Opciones",
    						"li": "<li id='479'>(+) Brfi01010401 DN Opciones<ol id='rel_130'></ol></li>",
    						"epiN": "Brfi01010401"
    					},
    					"Brfi01010402": {
    						"sig": "+",
    						"relId": "129.480",
    						"epiDesc": "DN Swaps",
    						"li": "<li id='480'>(+) Brfi01010402 DN Swaps<ol id='rel_131'></ol></li>",
    						"epiN": "Brfi01010402"
    					}
    				},
    				"130": {
    					"Brfi0101040102": {
    						"sig": "+",
    						"relId": "130.484",
    						"epiDesc": "DN Opciones Pasivo",
    						"li": "<li id='484'>(+) Brfi0101040102 DN Opciones Pasivo</li>",
    						"epiN": "Brfi0101040102"
    					},
    					"Brfi0101040101": {
    						"sig": "+",
    						"relId": "130.483",
    						"epiDesc": "DN Opciones Activo",
    						"li": "<li id='483'>(+) Brfi0101040101 DN Opciones Activo</li>",
    						"epiN": "Brfi0101040101"
    					}
    				},
    				"131": {
    					"Brfi0101040201": {
    						"sig": "+",
    						"relId": "131.485",
    						"epiDesc": "DN Swaps Activo",
    						"li": "<li id='485'>(+) Brfi0101040201 DN Swaps Activo</li>",
    						"epiN": "Brfi0101040201"
    					},
    					"Brfi0101040202": {
    						"sig": "+",
    						"relId": "131.486",
    						"epiDesc": "DN Swaps Pasivo",
    						"li": "<li id='486'>(+) Brfi0101040202 DN Swaps Pasivo</li>",
    						"epiN": "Brfi0101040202"
    					}
    				},
    				"132": {
    					"Brfi0101040301": {
    						"sig": "+",
    						"relId": "132.487",
    						"epiDesc": "DN Futuros  Activo",
    						"li": "<li id='487'>(+) Brfi0101040301 DN Futuros  Activo</li>",
    						"epiN": "Brfi0101040301"
    					},
    					"Brfi0101040302": {
    						"sig": "+",
    						"relId": "132.488",
    						"epiDesc": "DN Futuros Pasivo",
    						"li": "<li id='488'>(+) Brfi0101040302 DN Futuros Pasivo</li>",
    						"epiN": "Brfi0101040302"
    					}
    				},
    				"133": {
    					"Brfi0101040401": {
    						"sig": "+",
    						"relId": "133.489",
    						"epiDesc": "DN Forwards Activo",
    						"li": "<li id='489'>(+) Brfi0101040401 DN Forwards Activo</li>",
    						"epiN": "Brfi0101040401"
    					},
    					"Brfi0101040402": {
    						"sig": "+",
    						"relId": "133.490",
    						"epiDesc": "DN Forwards Pasivo",
    						"li": "<li id='490'>(+) Brfi0101040402 DN Forwards Pasivo</li>",
    						"epiN": "Brfi0101040402"
    					}
    				},
    				"134": {
    					"Bfdo01": {
    						"sig": "+",
    						"relId": "134.491",
    						"epiDesc": "Estimacion Preventiva",
    						"li": "<li id='491'>(+) Bfdo01 Estimacion Preventiva<ol id='rel_135'></ol></li>",
    						"epiN": "Bfdo01"
    					},
    					"BfdoAsig": {
    						"sig": "+",
    						"relId": "134.492",
    						"epiDesc": "Fondos De Insolvencia Por Asignar",
    						"li": "<li id='492'>(+) BfdoAsig Fondos De Insolvencia Por Asignar</li>",
    						"epiN": "BfdoAsig"
    					}
    				},
    				"135": {
    					"Bfdo5000": {
    						"sig": "+",
    						"relId": "135.498",
    						"epiDesc": "Quitas",
    						"li": "<li id='498'>(+) Bfdo5000 Quitas<ol id='rel_146'></ol></li>",
    						"epiN": "Bfdo5000"
    					},
    					"Bfdo5100": {
    						"sig": "+",
    						"relId": "135.499",
    						"epiDesc": "Punto Final",
    						"li": "<li id='499'>(+) Bfdo5100 Punto Final<ol id='rel_145'></ol></li>",
    						"epiN": "Bfdo5100"
    					},
    					"Bfdo2000": {
    						"sig": "+",
    						"relId": "135.495",
    						"epiDesc": "Reservas Cartera Consumo",
    						"li": "<li id='495'>(+) Bfdo2000 Reservas Cartera Consumo</li>",
    						"epiN": "Bfdo2000"
    					},
    					"Bfdo5400": {
    						"sig": "+",
    						"relId": "135.502",
    						"epiDesc": "Recuperaciones.",
    						"li": "<li id='502'>(+) Bfdo5400 Recuperaciones.<ol id='rel_149'></ol></li>",
    						"epiN": "Bfdo5400"
    					},
    					"Bfdo5500": {
    						"sig": "+",
    						"relId": "135.503",
    						"epiDesc": "Reserva Cartera Bursatilizada",
    						"li": "<li id='503'>(+) Bfdo5500 Reserva Cartera Bursatilizada</li>",
    						"epiN": "Bfdo5500"
    					},
    					"Bfdo2200": {
    						"sig": "+",
    						"relId": "135.497",
    						"epiDesc": "Reservas Cartera Comercial",
    						"li": "<li id='497'>(+) Bfdo2200 Reservas Cartera Comercial</li>",
    						"epiN": "Bfdo2200"
    					},
    					"Bfdo5200": {
    						"sig": "+",
    						"relId": "135.500",
    						"epiDesc": "Castigos",
    						"li": "<li id='500'>(+) Bfdo5200 Castigos<ol id='rel_148'></ol></li>",
    						"epiN": "Bfdo5200"
    					},
    					"Bfdo2100": {
    						"sig": "+",
    						"relId": "135.496",
    						"epiDesc": "Reservas Cartera Hipotecaria",
    						"li": "<li id='496'>(+) Bfdo2100 Reservas Cartera Hipotecaria</li>",
    						"epiN": "Bfdo2100"
    					},
    					"Bfdo5300": {
    						"sig": "+",
    						"relId": "135.501",
    						"epiDesc": "Fallidos",
    						"li": "<li id='501'>(+) Bfdo5300 Fallidos<ol id='rel_150'></ol></li>",
    						"epiN": "Bfdo5300"
    					},
    					"Bfdo2600": {
    						"sig": "+",
    						"relId": "135.493",
    						"epiDesc": " Cargo a Resultados",
    						"li": "<li id='493'>(+) Bfdo2600  Cargo a Resultados</li>",
    						"epiN": "Bfdo2600"
    					},
    					"Bfdo1900": {
    						"sig": "+",
    						"relId": "135.494",
    						"epiDesc": "Reservas Cartera Tarjeta De Credito",
    						"li": "<li id='494'>(+) Bfdo1900 Reservas Cartera Tarjeta De Credito</li>",
    						"epiN": "Bfdo1900"
    					},
    					"Bfdo0800": {
    						"sig": "+",
    						"relId": "135.504",
    						"epiDesc": "Resto de Fondos de Insolvencia",
    						"li": "<li id='504'>(+) Bfdo0800 Resto de Fondos de Insolvencia<ol id='rel_147'></ol></li>",
    						"epiN": "Bfdo0800"
    					}
    				},
    				"136": {
    					"Bdepcapt": {
    						"sig": "+",
    						"relId": "136.506",
    						"epiDesc": "Captacion Tradicional Dep",
    						"li": "<li id='506'>(+) Bdepcapt Captacion Tradicional Dep<ol id='rel_141'></ol></li>",
    						"epiN": "Bdepcapt"
    					},
    					"BdepECoap": {
    						"sig": "+",
    						"relId": "136.508",
    						"epiDesc": "Emisiones COAP",
    						"li": "<li id='508'>(+) BdepECoap Emisiones COAP<ol id='rel_139'></ol></li>",
    						"epiN": "BdepECoap"
    					},
    					"BdepEM": {
    						"sig": "+",
    						"relId": "136.507",
    						"epiDesc": "Emisiones Mayoristas",
    						"li": "<li id='507'>(+) BdepEM Emisiones Mayoristas<ol id='rel_137'></ol></li>",
    						"epiN": "BdepEM"
    					},
    					"BdepNotEst": {
    						"sig": "+",
    						"relId": "136.509",
    						"epiDesc": "Notas Estructuradas",
    						"li": "<li id='509'>(+) BdepNotEst Notas Estructuradas</li>",
    						"epiN": "BdepNotEst"
    					},
    					"Bcet": {
    						"sig": "+",
    						"relId": "136.505",
    						"epiDesc": "Cesiones Temporales De Activos",
    						"li": "<li id='505'>(+) Bcet Cesiones Temporales De Activos</li>",
    						"epiN": "Bcet"
    					}
    				},
    				"137": {
    					"Bdepvci_EM": {
    						"sig": "+",
    						"relId": "137.512",
    						"epiDesc": "EM_Vista Con Intereses",
    						"li": "<li id='512'>(+) Bdepvci_EM EM_Vista Con Intereses</li>",
    						"epiN": "Bdepvci_EM"
    					},
    					"Bdepvsi_EM": {
    						"sig": "+",
    						"relId": "137.513",
    						"epiDesc": "EM_Vista sin Intereses",
    						"li": "<li id='513'>(+) Bdepvsi_EM EM_Vista sin Intereses</li>",
    						"epiN": "Bdepvsi_EM"
    					},
    					"BdepBonB_EM": {
    						"sig": "+",
    						"relId": "137.511",
    						"epiDesc": "EM_Bonos Bancarios",
    						"li": "<li id='511'>(+) BdepBonB_EM EM_Bonos Bancarios</li>",
    						"epiN": "BdepBonB_EM"
    					},
    					"Bdepah_EM": {
    						"sig": "+",
    						"relId": "137.514",
    						"epiDesc": "EM_Ahorro",
    						"li": "<li id='514'>(+) Bdepah_EM EM_Ahorro</li>",
    						"epiN": "Bdepah_EM"
    					},
    					"Bdepced_EM": {
    						"sig": "+",
    						"relId": "137.510",
    						"epiDesc": "EM_Cedes",
    						"li": "<li id='510'>(+) Bdepced_EM EM_Cedes<ol id='rel_138'></ol></li>",
    						"epiN": "Bdepced_EM"
    					},
    					"Bdeppag_EM": {
    						"sig": "+",
    						"relId": "137.515",
    						"epiDesc": "EM_Pagare",
    						"li": "<li id='515'>(+) Bdeppag_EM EM_Pagare</li>",
    						"epiN": "Bdeppag_EM"
    					}
    				},
    				"138": {
    					"Bdepced01_EM": {
    						"sig": "+",
    						"relId": "138.516",
    						"epiDesc": "EM_Cedes Corto Plazo",
    						"li": "<li id='516'>(+) Bdepced01_EM EM_Cedes Corto Plazo</li>",
    						"epiN": "Bdepced01_EM"
    					},
    					"Bdepced02_EM": {
    						"sig": "+",
    						"relId": "138.517",
    						"epiDesc": "EM_Cedes Largo Plazo",
    						"li": "<li id='517'>(+) Bdepced02_EM EM_Cedes Largo Plazo</li>",
    						"epiN": "Bdepced02_EM"
    					}
    				},
    				"139": {
    					"Bdepvsi_COAP": {
    						"sig": "+",
    						"relId": "139.519",
    						"epiDesc": "COAP_Vista sin Intereses",
    						"li": "<li id='519'>(+) Bdepvsi_COAP COAP_Vista sin Intereses</li>",
    						"epiN": "Bdepvsi_COAP"
    					},
    					"Bdepced_COAP": {
    						"sig": "+",
    						"relId": "139.521",
    						"epiDesc": "COAP_Cedes",
    						"li": "<li id='521'>(+) Bdepced_COAP COAP_Cedes<ol id='rel_140'></ol></li>",
    						"epiN": "Bdepced_COAP"
    					},
    					"BdepBonB_COAP": {
    						"sig": "+",
    						"relId": "139.522",
    						"epiDesc": "COAP_Bonos Bancarios",
    						"li": "<li id='522'>(+) BdepBonB_COAP COAP_Bonos Bancarios</li>",
    						"epiN": "BdepBonB_COAP"
    					},
    					"Bdeppag_COAP": {
    						"sig": "+",
    						"relId": "139.523",
    						"epiDesc": "COAP_Pagare",
    						"li": "<li id='523'>(+) Bdeppag_COAP COAP_Pagare</li>",
    						"epiN": "Bdeppag_COAP"
    					},
    					"Bdepvci_COAP": {
    						"sig": "+",
    						"relId": "139.518",
    						"epiDesc": "COAP_Vista Con Intereses",
    						"li": "<li id='518'>(+) Bdepvci_COAP COAP_Vista Con Intereses</li>",
    						"epiN": "Bdepvci_COAP"
    					},
    					"Bdepah_COAP": {
    						"sig": "+",
    						"relId": "139.520",
    						"epiDesc": "COAP_Ahorro",
    						"li": "<li id='520'>(+) Bdepah_COAP COAP_Ahorro</li>",
    						"epiN": "Bdepah_COAP"
    					}
    				},
    				"140": {
    					"Bdepced02_COAP": {
    						"sig": "+",
    						"relId": "140.525",
    						"epiDesc": "COAP_Cedes Largo Plazo",
    						"li": "<li id='525'>(+) Bdepced02_COAP COAP_Cedes Largo Plazo</li>",
    						"epiN": "Bdepced02_COAP"
    					},
    					"Bdepced01_COAP": {
    						"sig": "+",
    						"relId": "140.524",
    						"epiDesc": "COAP_Cedes Corto Plazo",
    						"li": "<li id='524'>(+) Bdepced01_COAP COAP_Cedes Corto Plazo</li>",
    						"epiN": "Bdepced01_COAP"
    					}
    				},
    				"141": {
    					"Bdepah": {
    						"sig": "+",
    						"relId": "141.528",
    						"epiDesc": "Ahorro",
    						"li": "<li id='528'>(+) Bdepah Ahorro</li>",
    						"epiN": "Bdepah"
    					},
    					"Bdepplazo": {
    						"sig": "+",
    						"relId": "141.527",
    						"epiDesc": "Plazo",
    						"li": "<li id='527'>(+) Bdepplazo Plazo<ol id='rel_152'></ol></li>",
    						"epiN": "Bdepplazo"
    					},
    					"Bdepvista": {
    						"sig": "+",
    						"relId": "141.526",
    						"epiDesc": "Vista",
    						"li": "<li id='526'>(+) Bdepvista Vista<ol id='rel_151'></ol></li>",
    						"epiN": "Bdepvista"
    					}
    				},
    				"142": {
    					"Bintm0101": {
    						"sig": "+",
    						"relId": "142.529",
    						"epiDesc": "IM Capital Social",
    						"li": "<li id='529'>(+) Bintm0101 IM Capital Social</li>",
    						"epiN": "Bintm0101"
    					},
    					"Bintm0102": {
    						"sig": "+",
    						"relId": "142.530",
    						"epiDesc": "Remediciones por beneficios definidos a los empleados",
    						"li": "<li id='530'>(+) Bintm0102 Remediciones por beneficios definidos a los empleados</li>",
    						"epiN": "Bintm0102"
    					}
    				},
    				"143": {
    					"Best0102": {
    						"sig": "+",
    						"relId": "143.532",
    						"epiDesc": "Prima en Venta de Acciones",
    						"li": "<li id='532'>(+) Best0102 Prima en Venta de Acciones</li>",
    						"epiN": "Best0102"
    					},
    					"Best0101": {
    						"sig": "+",
    						"relId": "143.531",
    						"epiDesc": "Capital Social",
    						"li": "<li id='531'>(+) Best0101 Capital Social</li>",
    						"epiN": "Best0101"
    					}
    				},
    				"144": {
    					"Best0202": {
    						"sig": "+",
    						"relId": "144.534",
    						"epiDesc": "Utilidades Retenidas",
    						"li": "<li id='534'>(+) Best0202 Utilidades Retenidas</li>",
    						"epiN": "Best0202"
    					},
    					"Best0204": {
    						"sig": "+",
    						"relId": "144.535",
    						"epiDesc": "Exceso o Insuficiencia en el Capital Contable",
    						"li": "<li id='535'>(+) Best0204 Exceso o Insuficiencia en el Capital Contable</li>",
    						"epiN": "Best0204"
    					},
    					"Brea": {
    						"sig": "+",
    						"relId": "144.536",
    						"epiDesc": "Resultado Atribuido Al Grupo",
    						"li": "<li id='536'>(+) Brea Resultado Atribuido Al Grupo</li>",
    						"epiN": "Brea"
    					},
    					"Best0201": {
    						"sig": "+",
    						"relId": "144.533",
    						"epiDesc": "Reservas de Capital",
    						"li": "<li id='533'>(+) Best0201 Reservas de Capital</li>",
    						"epiN": "Best0201"
    					}
    				},
    				"145": {
    					"Bfdo0200": {
    						"sig": "+",
    						"relId": "145.537",
    						"epiDesc": "Punto Final  Finape",
    						"li": "<li id='537'>(+) Bfdo0200 Punto Final  Finape</li>",
    						"epiN": "Bfdo0200"
    					},
    					"Bfdo0300": {
    						"sig": "+",
    						"relId": "145.538",
    						"epiDesc": "Punto Final  Fopyme",
    						"li": "<li id='538'>(+) Bfdo0300 Punto Final  Fopyme</li>",
    						"epiN": "Bfdo0300"
    					},
    					"Bfdo0400": {
    						"sig": "+",
    						"relId": "145.539",
    						"epiDesc": "Punto Final  Hipotecaria",
    						"li": "<li id='539'>(+) Bfdo0400 Punto Final  Hipotecaria</li>",
    						"epiN": "Bfdo0400"
    					}
    				},
    				"146": {
    					"Bfdo1300": {
    						"sig": "+",
    						"relId": "146.541",
    						"epiDesc": "Quitas TDC Red.",
    						"li": "<li id='541'>(+) Bfdo1300 Quitas TDC Red.</li>",
    						"epiN": "Bfdo1300"
    					},
    					"Bfdo1500": {
    						"sig": "+",
    						"relId": "146.544",
    						"epiDesc": "Quitas Consumo Finanzia",
    						"li": "<li id='544'>(+) Bfdo1500 Quitas Consumo Finanzia</li>",
    						"epiN": "Bfdo1500"
    					},
    					"Bfdo0500": {
    						"sig": "+",
    						"relId": "146.540",
    						"epiDesc": "Quitas Tradicional",
    						"li": "<li id='540'>(+) Bfdo0500 Quitas Tradicional</li>",
    						"epiN": "Bfdo0500"
    					},
    					"Bfdo0600": {
    						"sig": "+",
    						"relId": "146.545",
    						"epiDesc": "Quitas  Hipotecaria",
    						"li": "<li id='545'>(+) Bfdo0600 Quitas  Hipotecaria</li>",
    						"epiN": "Bfdo0600"
    					},
    					"Bfdo0601": {
    						"sig": "+",
    						"relId": "146.546",
    						"epiDesc": "Quitas Hipotecaria Fovi",
    						"li": "<li id='546'>(+) Bfdo0601 Quitas Hipotecaria Fovi</li>",
    						"epiN": "Bfdo0601"
    					},
    					"Bfdo1801": {
    						"sig": "+",
    						"relId": "146.548",
    						"epiDesc": "Quitas TDC Negocio",
    						"li": "<li id='548'>(+) Bfdo1801 Quitas TDC Negocio</li>",
    						"epiN": "Bfdo1801"
    					},
    					"Bfdo1800": {
    						"sig": "+",
    						"relId": "146.542",
    						"epiDesc": "Quitas TDC Finanzia",
    						"li": "<li id='542'>(+) Bfdo1800 Quitas TDC Finanzia</li>",
    						"epiN": "Bfdo1800"
    					},
    					"Bfdo0602": {
    						"sig": "+",
    						"relId": "146.547",
    						"epiDesc": "Quitas Hipotecaria Promotores",
    						"li": "<li id='547'>(+) Bfdo0602 Quitas Hipotecaria Promotores</li>",
    						"epiN": "Bfdo0602"
    					},
    					"Bfdo1100": {
    						"sig": "+",
    						"relId": "146.543",
    						"epiDesc": "Quitas Consumo Red",
    						"li": "<li id='543'>(+) Bfdo1100 Quitas Consumo Red</li>",
    						"epiN": "Bfdo1100"
    					}
    				},
    				"147": {
    					"Bfdo2800": {
    						"sig": "+",
    						"relId": "147.551",
    						"epiDesc": "Provisiones Tdc",
    						"li": "<li id='551'>(+) Bfdo2800 Provisiones Tdc</li>",
    						"epiN": "Bfdo2800"
    					},
    					"Bfdo2700": {
    						"sig": "+",
    						"relId": "147.550",
    						"epiDesc": "Provisiones Comercial",
    						"li": "<li id='550'>(+) Bfdo2700 Provisiones Comercial</li>",
    						"epiN": "Bfdo2700"
    					},
    					"Bfdo0700": {
    						"sig": "+",
    						"relId": "147.549",
    						"epiDesc": "Reserva Fideicomisos",
    						"li": "<li id='549'>(+) Bfdo0700 Reserva Fideicomisos</li>",
    						"epiN": "Bfdo0700"
    					},
    					"Bfdo2901": {
    						"sig": "+",
    						"relId": "147.554",
    						"epiDesc": "Nivelacion de Reserva en UDIS",
    						"li": "<li id='554'>(+) Bfdo2901 Nivelacion de Reserva en UDIS</li>",
    						"epiN": "Bfdo2901"
    					},
    					"Bfdo2900": {
    						"sig": "+",
    						"relId": "147.552",
    						"epiDesc": "Provisiones Hipotecaria",
    						"li": "<li id='552'>(+) Bfdo2900 Provisiones Hipotecaria</li>",
    						"epiN": "Bfdo2900"
    					},
    					"Bfdo2903": {
    						"sig": "+",
    						"relId": "147.556",
    						"epiDesc": "Otros FDI",
    						"li": "<li id='556'>(+) Bfdo2903 Otros FDI</li>",
    						"epiN": "Bfdo2903"
    					},
    					"Bfdo2902": {
    						"sig": "+",
    						"relId": "147.555",
    						"epiDesc": "Nivelacion de Reserva en USD",
    						"li": "<li id='555'>(+) Bfdo2902 Nivelacion de Reserva en USD</li>",
    						"epiN": "Bfdo2902"
    					},
    					"Bfdo3100": {
    						"sig": "+",
    						"relId": "147.553",
    						"epiDesc": "Traspaso de Reservas del Fideicomiso",
    						"li": "<li id='553'>(+) Bfdo3100 Traspaso de Reservas del Fideicomiso</li>",
    						"epiN": "Bfdo3100"
    					}
    				},
    				"148": {
    					"Bfdo0100": {
    						"sig": "+",
    						"relId": "148.557",
    						"epiDesc": "Castigos Tradicional",
    						"li": "<li id='557'>(+) Bfdo0100 Castigos Tradicional</li>",
    						"epiN": "Bfdo0100"
    					},
    					"Bfdo1200": {
    						"sig": "+",
    						"relId": "148.559",
    						"epiDesc": "Castigos Consumo Red",
    						"li": "<li id='559'>(+) Bfdo1200 Castigos Consumo Red</li>",
    						"epiN": "Bfdo1200"
    					},
    					"Bfdo1400": {
    						"sig": "+",
    						"relId": "148.561",
    						"epiDesc": "Castigos TDC Red",
    						"li": "<li id='561'>(+) Bfdo1400 Castigos TDC Red</li>",
    						"epiN": "Bfdo1400"
    					},
    					"Bfdo1700": {
    						"sig": "+",
    						"relId": "148.562",
    						"epiDesc": "Castigos TDC Finanzia",
    						"li": "<li id='562'>(+) Bfdo1700 Castigos TDC Finanzia</li>",
    						"epiN": "Bfdo1700"
    					},
    					"Bfdo1600": {
    						"sig": "+",
    						"relId": "148.560",
    						"epiDesc": "Castigos Consumo Finanzia",
    						"li": "<li id='560'>(+) Bfdo1600 Castigos Consumo Finanzia</li>",
    						"epiN": "Bfdo1600"
    					},
    					"Bfdo0900": {
    						"sig": "+",
    						"relId": "148.558",
    						"epiDesc": "Castigos  Hipotecaria",
    						"li": "<li id='558'>(+) Bfdo0900 Castigos  Hipotecaria</li>",
    						"epiN": "Bfdo0900"
    					},
    					"BfdoTDCNeg": {
    						"sig": "+",
    						"relId": "148.563",
    						"epiDesc": "Castigos TDC Negocios",
    						"li": "<li id='563'>(+) BfdoTDCNeg Castigos TDC Negocios</li>",
    						"epiN": "BfdoTDCNeg"
    					}
    				},
    				"149": {
    					"Bfdo2400": {
    						"sig": "+",
    						"relId": "149.566",
    						"epiDesc": "Recuperaciones Consumo",
    						"li": "<li id='566'>(+) Bfdo2400 Recuperaciones Consumo</li>",
    						"epiN": "Bfdo2400"
    					},
    					"Bfdo2300": {
    						"sig": "+",
    						"relId": "149.565",
    						"epiDesc": "Recuperaciones Hipotecario",
    						"li": "<li id='565'>(+) Bfdo2300 Recuperaciones Hipotecario</li>",
    						"epiN": "Bfdo2300"
    					},
    					"Bfdo2500": {
    						"sig": "+",
    						"relId": "149.567",
    						"epiDesc": "Recuperaciones Tdc",
    						"li": "<li id='567'>(+) Bfdo2500 Recuperaciones Tdc</li>",
    						"epiN": "Bfdo2500"
    					},
    					"Bfdo1000": {
    						"sig": "+",
    						"relId": "149.564",
    						"epiDesc": "Recuperaciones  Comercial",
    						"li": "<li id='564'>(+) Bfdo1000 Recuperaciones  Comercial</li>",
    						"epiN": "Bfdo1000"
    					}
    				},
    				"150": {
    					"Bfdo5305": {
    						"sig": "+",
    						"relId": "150.572",
    						"epiDesc": "Fallidos Vivienda",
    						"li": "<li id='572'>(+) Bfdo5305 Fallidos Vivienda</li>",
    						"epiN": "Bfdo5305"
    					},
    					"Bfdo5306": {
    						"sig": "+",
    						"relId": "150.573",
    						"epiDesc": "Fallidos TDC Red",
    						"li": "<li id='573'>(+) Bfdo5306 Fallidos TDC Red</li>",
    						"epiN": "Bfdo5306"
    					},
    					"Bfdo5303": {
    						"sig": "+",
    						"relId": "150.570",
    						"epiDesc": "Fallidos Consumo Finanzia",
    						"li": "<li id='570'>(+) Bfdo5303 Fallidos Consumo Finanzia</li>",
    						"epiN": "Bfdo5303"
    					},
    					"Bfdo5304": {
    						"sig": "+",
    						"relId": "150.571",
    						"epiDesc": "Fallidos Promotores",
    						"li": "<li id='571'>(+) Bfdo5304 Fallidos Promotores</li>",
    						"epiN": "Bfdo5304"
    					},
    					"Bfdo5307": {
    						"sig": "+",
    						"relId": "150.574",
    						"epiDesc": "Fallidos TDC Finanzia",
    						"li": "<li id='574'>(+) Bfdo5307 Fallidos TDC Finanzia</li>",
    						"epiN": "Bfdo5307"
    					},
    					"Bfdo5301": {
    						"sig": "+",
    						"relId": "150.568",
    						"epiDesc": "Fallidos Comercial",
    						"li": "<li id='568'>(+) Bfdo5301 Fallidos Comercial</li>",
    						"epiN": "Bfdo5301"
    					},
    					"Bfdo5302": {
    						"sig": "+",
    						"relId": "150.569",
    						"epiDesc": "Fallidos Consumo Red",
    						"li": "<li id='569'>(+) Bfdo5302 Fallidos Consumo Red</li>",
    						"epiN": "Bfdo5302"
    					}
    				},
    				"151": {
    					"Bdepvci": {
    						"sig": "+",
    						"relId": "151.575",
    						"epiDesc": "Vista Con Intereses",
    						"li": "<li id='575'>(+) Bdepvci Vista Con Intereses</li>",
    						"epiN": "Bdepvci"
    					},
    					"Bdepvsi": {
    						"sig": "+",
    						"relId": "151.576",
    						"epiDesc": "Vista sin Intereses",
    						"li": "<li id='576'>(+) Bdepvsi Vista sin Intereses</li>",
    						"epiN": "Bdepvsi"
    					}
    				},
    				"152": {
    					"Bdeppag": {
    						"sig": "+",
    						"relId": "152.578",
    						"epiDesc": "Pagare",
    						"li": "<li id='578'>(+) Bdeppag Pagare</li>",
    						"epiN": "Bdeppag"
    					},
    					"Bdepced": {
    						"sig": "+",
    						"relId": "152.577",
    						"epiDesc": "Cedes",
    						"li": "<li id='577'>(+) Bdepced Cedes<ol id='rel_153'></ol></li>",
    						"epiN": "Bdepced"
    					},
    					"BdepBonB": {
    						"sig": "+",
    						"relId": "152.579",
    						"epiDesc": "Bonos Bancarios",
    						"li": "<li id='579'>(+) BdepBonB Bonos Bancarios</li>",
    						"epiN": "BdepBonB"
    					}
    				},
    				"153": {
    					"Bdepced01": {
    						"sig": "+",
    						"relId": "153.580",
    						"epiDesc": "Cedes Corto Plazo",
    						"li": "<li id='580'>(+) Bdepced01 Cedes Corto Plazo</li>",
    						"epiN": "Bdepced01"
    					},
    					"Bdepced02": {
    						"sig": "+",
    						"relId": "153.581",
    						"epiDesc": "Cedes Largo Plazo",
    						"li": "<li id='581'>(+) Bdepced02 Cedes Largo Plazo</li>",
    						"epiN": "Bdepced02"
    					}
    				},
    				"154": {
    					"Bdepocta": {
    						"sig": "+",
    						"relId": "154.583",
    						"epiDesc": "Otras Cuentas de Activo",
    						"li": "<li id='583'>(+) Bdepocta Otras Cuentas de Activo</li>",
    						"epiN": "Bdepocta"
    					},
    					"BdepAcrpint": {
    						"sig": "+",
    						"relId": "154.582",
    						"epiDesc": "Acreedores por intereses",
    						"li": "<li id='582'>(+) BdepAcrpint Acreedores por intereses</li>",
    						"epiN": "BdepAcrpint"
    					}
    				},
    				"155": {
    					"Bmargen08": {
    						"sig": "+",
    						"relId": "155.584",
    						"epiDesc": "Resto Margen Financiero",
    						"li": "<li id='584'>(+) Bmargen08 Resto Margen Financiero<ol id='rel_156'></ol></li>",
    						"epiN": "Bmargen08"
    					},
    					"BMargenFBresto": {
    						"sig": "+",
    						"relId": "155.585",
    						"epiDesc": "Resto_Margen Financiero Balance",
    						"li": "<li id='585'>(+) BMargenFBresto Resto_Margen Financiero Balance</li>",
    						"epiN": "BMargenFBresto"
    					}
    				},
    				"156": {
    					"Bmargen0829": {
    						"sig": "+",
    						"relId": "156.595",
    						"epiDesc": "Por Apertura De Credito - Abcd Proyecto Renault",
    						"li": "<li id='595'>(+) Bmargen0829 Por Apertura De Credito - Abcd Proyecto Renault</li>",
    						"epiN": "Bmargen0829"
    					},
    					"Bmargen0827": {
    						"sig": "+",
    						"relId": "156.594",
    						"epiDesc": "Otras Comisiones Cobradas ",
    						"li": "<li id='594'>(+) Bmargen0827 Otras Comisiones Cobradas </li>",
    						"epiN": "Bmargen0827"
    					},
    					"Bmargen0826": {
    						"sig": "+",
    						"relId": "156.593",
    						"epiDesc": "Margen Credito Puente",
    						"li": "<li id='593'>(+) Bmargen0826 Margen Credito Puente</li>",
    						"epiN": "Bmargen0826"
    					},
    					"Bmargen0848": {
    						"sig": "+",
    						"relId": "156.609",
    						"epiDesc": "Gastos Promocion Primera Compra",
    						"li": "<li id='609'>(+) Bmargen0848 Gastos Promocion Primera Compra</li>",
    						"epiN": "Bmargen0848"
    					},
    					"Bmargen0836": {
    						"sig": "+",
    						"relId": "156.600",
    						"epiDesc": "Valorizacion Udis Reportos",
    						"li": "<li id='600'>(+) Bmargen0836 Valorizacion Udis Reportos</li>",
    						"epiN": "Bmargen0836"
    					},
    					"Bmargen0835": {
    						"sig": "+",
    						"relId": "156.599",
    						"epiDesc": "Valorizacion Udis",
    						"li": "<li id='599'>(+) Bmargen0835 Valorizacion Udis</li>",
    						"epiN": "Bmargen0835"
    					},
    					"Bmargen0832": {
    						"sig": "+",
    						"relId": "156.598",
    						"epiDesc": "Seguro de Auto",
    						"li": "<li id='598'>(+) Bmargen0832 Seguro de Auto</li>",
    						"epiN": "Bmargen0832"
    					},
    					"Bmargen0831": {
    						"sig": "+",
    						"relId": "156.597",
    						"epiDesc": "Retroactivas",
    						"li": "<li id='597'>(+) Bmargen0831 Retroactivas</li>",
    						"epiN": "Bmargen0831"
    					},
    					"Bmargen0830": {
    						"sig": "+",
    						"relId": "156.596",
    						"epiDesc": "Por Operaciones De Arrendamiento Financiero",
    						"li": "<li id='596'>(+) Bmargen0830 Por Operaciones De Arrendamiento Financiero</li>",
    						"epiN": "Bmargen0830"
    					},
    					"Bmargen0839": {
    						"sig": "+",
    						"relId": "156.602",
    						"epiDesc": "Gastos Por Reportos",
    						"li": "<li id='602'>(+) Bmargen0839 Gastos Por Reportos</li>",
    						"epiN": "Bmargen0839"
    					},
    					"Bmargen0838": {
    						"sig": "+",
    						"relId": "156.603",
    						"epiDesc": "Comisiones Proyecto Finanzia",
    						"li": "<li id='603'>(+) Bmargen0838 Comisiones Proyecto Finanzia</li>",
    						"epiN": "Bmargen0838"
    					},
    					"Bmargen0837": {
    						"sig": "+",
    						"relId": "156.601",
    						"epiDesc": "Ingresos por Reportos",
    						"li": "<li id='601'>(+) Bmargen0837 Ingresos por Reportos</li>",
    						"epiN": "Bmargen0837"
    					},
    					"Bmargen0803": {
    						"sig": "+",
    						"relId": "156.587",
    						"epiDesc": "Mercury",
    						"li": "<li id='587'>(+) Bmargen0803 Mercury</li>",
    						"epiN": "Bmargen0803"
    					},
    					"Bmargen0825": {
    						"sig": "+",
    						"relId": "156.592",
    						"epiDesc": "Gasto Libreton",
    						"li": "<li id='592'>(+) Bmargen0825 Gasto Libreton</li>",
    						"epiN": "Bmargen0825"
    					},
    					"Bmargen0802": {
    						"sig": "+",
    						"relId": "156.586",
    						"epiDesc": "BSI",
    						"li": "<li id='586'>(+) Bmargen0802 BSI</li>",
    						"epiN": "Bmargen0802"
    					},
    					"Bmargen0846": {
    						"sig": "+",
    						"relId": "156.590",
    						"epiDesc": "Derramas_b",
    						"li": "<li id='590'>(+) Bmargen0846 Derramas_b</li>",
    						"epiN": "Bmargen0846"
    					},
    					"Bmargen0823": {
    						"sig": "+",
    						"relId": "156.591",
    						"epiDesc": "Fideicomiso Cartera",
    						"li": "<li id='591'>(+) Bmargen0823 Fideicomiso Cartera</li>",
    						"epiN": "Bmargen0823"
    					},
    					"Bmargen0845": {
    						"sig": "+",
    						"relId": "156.610",
    						"epiDesc": "Resto cuentas de margen",
    						"li": "<li id='610'>(+) Bmargen0845 Resto cuentas de margen</li>",
    						"epiN": "Bmargen0845"
    					},
    					"Bmargen0844": {
    						"sig": "+",
    						"relId": "156.608",
    						"epiDesc": "Otros Margen",
    						"li": "<li id='608'>(+) Bmargen0844 Otros Margen<ol id='rel_159'></ol></li>",
    						"epiN": "Bmargen0844"
    					},
    					"Bmargen0821": {
    						"sig": "+",
    						"relId": "156.589",
    						"epiDesc": "Comisiones de Cartera en Margen",
    						"li": "<li id='589'>(+) Bmargen0821 Comisiones de Cartera en Margen<ol id='rel_157'></ol></li>",
    						"epiN": "Bmargen0821"
    					},
    					"Bmargen0843": {
    						"sig": "+",
    						"relId": "156.607",
    						"epiDesc": "Moratorios",
    						"li": "<li id='607'>(+) Bmargen0843 Moratorios<ol id='rel_158'></ol></li>",
    						"epiN": "Bmargen0843"
    					},
    					"Bmargen0820": {
    						"sig": "+",
    						"relId": "156.588",
    						"epiDesc": "Comisiones Credito Puente",
    						"li": "<li id='588'>(+) Bmargen0820 Comisiones Credito Puente</li>",
    						"epiN": "Bmargen0820"
    					},
    					"Bmargen0842": {
    						"sig": "+",
    						"relId": "156.606",
    						"epiDesc": "IRS Dep Regulatorio",
    						"li": "<li id='606'>(+) Bmargen0842 IRS Dep Regulatorio</li>",
    						"epiN": "Bmargen0842"
    					},
    					"Bmargen0841": {
    						"sig": "+",
    						"relId": "156.605",
    						"epiDesc": "IRS  Notas",
    						"li": "<li id='605'>(+) Bmargen0841 IRS  Notas</li>",
    						"epiN": "Bmargen0841"
    					},
    					"Bmargen0840": {
    						"sig": "+",
    						"relId": "156.604",
    						"epiDesc": "IRS  Credito",
    						"li": "<li id='604'>(+) Bmargen0840 IRS  Credito</li>",
    						"epiN": "Bmargen0840"
    					}
    				},
    				"157": {
    					"Bmargen082106": {
    						"sig": "+",
    						"relId": "157.616",
    						"epiDesc": "Comisiones Cob.X Cred.Simples_b",
    						"li": "<li id='616'>(+) Bmargen082106 Comisiones Cob.X Cred.Simples_b</li>",
    						"epiN": "Bmargen082106"
    					},
    					"Bmargen082105": {
    						"sig": "+",
    						"relId": "157.615",
    						"epiDesc": "Comisiones Cob.X Cred.Refaccionarios_b",
    						"li": "<li id='615'>(+) Bmargen082105 Comisiones Cob.X Cred.Refaccionarios_b</li>",
    						"epiN": "Bmargen082105"
    					},
    					"Bmargen082116": {
    						"sig": "+",
    						"relId": "157.626",
    						"epiDesc": "Por Operaciones De Arrendamiento Financiero_b",
    						"li": "<li id='626'>(+) Bmargen082116 Por Operaciones De Arrendamiento Financiero_b</li>",
    						"epiN": "Bmargen082116"
    					},
    					"Bmargen082108": {
    						"sig": "+",
    						"relId": "157.618",
    						"epiDesc": "Comisiones Cob.X O.Bienes Altamira_b",
    						"li": "<li id='618'>(+) Bmargen082108 Comisiones Cob.X O.Bienes Altamira_b</li>",
    						"epiN": "Bmargen082108"
    					},
    					"Bmargen082107": {
    						"sig": "+",
    						"relId": "157.617",
    						"epiDesc": "Comisiones Cob.X Descuentos_b",
    						"li": "<li id='617'>(+) Bmargen082107 Comisiones Cob.X Descuentos_b</li>",
    						"epiN": "Bmargen082107"
    					},
    					"Bmargen082109": {
    						"sig": "+",
    						"relId": "157.619",
    						"epiDesc": "Comisiones Cob.X Prest.C/Colateral_b",
    						"li": "<li id='619'>(+) Bmargen082109 Comisiones Cob.X Prest.C/Colateral_b</li>",
    						"epiN": "Bmargen082109"
    					},
    					"Bmargen082111": {
    						"sig": "+",
    						"relId": "157.621",
    						"epiDesc": "Comisiones Cob.X Prest.Prendarios_b",
    						"li": "<li id='621'>(+) Bmargen082111 Comisiones Cob.X Prest.Prendarios_b</li>",
    						"epiN": "Bmargen082111"
    					},
    					"Bmargen082110": {
    						"sig": "+",
    						"relId": "157.620",
    						"epiDesc": "Comisiones Cob.X Prest.Personales Altamira_b",
    						"li": "<li id='620'>(+) Bmargen082110 Comisiones Cob.X Prest.Personales Altamira_b</li>",
    						"epiN": "Bmargen082110"
    					},
    					"Bmargen082102": {
    						"sig": "+",
    						"relId": "157.612",
    						"epiDesc": "Comis.Cob.X Op.D/Arrendamiento Financiero_b",
    						"li": "<li id='612'>(+) Bmargen082102 Comis.Cob.X Op.D/Arrendamiento Financiero_b</li>",
    						"epiN": "Bmargen082102"
    					},
    					"Bmargen082113": {
    						"sig": "+",
    						"relId": "157.623",
    						"epiDesc": "Comisiones Cob.X Prestamos P/Vivienda_b",
    						"li": "<li id='623'>(+) Bmargen082113 Comisiones Cob.X Prestamos P/Vivienda_b</li>",
    						"epiN": "Bmargen082113"
    					},
    					"Bmargen082101": {
    						"sig": "+",
    						"relId": "157.611",
    						"epiDesc": "Comisiones Cob.X Prest.P/Auto Altamira_b",
    						"li": "<li id='611'>(+) Bmargen082101 Comisiones Cob.X Prest.P/Auto Altamira_b</li>",
    						"epiN": "Bmargen082101"
    					},
    					"Bmargen082112": {
    						"sig": "+",
    						"relId": "157.622",
    						"epiDesc": "Comisiones Cob.X Prest.Quirografarios_b",
    						"li": "<li id='622'>(+) Bmargen082112 Comisiones Cob.X Prest.Quirografarios_b</li>",
    						"epiN": "Bmargen082112"
    					},
    					"Bmargen082104": {
    						"sig": "+",
    						"relId": "157.614",
    						"epiDesc": "Comisiones Cob.X Cred.D/Habilitacion_b",
    						"li": "<li id='614'>(+) Bmargen082104 Comisiones Cob.X Cred.D/Habilitacion_b</li>",
    						"epiN": "Bmargen082104"
    					},
    					"Bmargen082115": {
    						"sig": "+",
    						"relId": "157.625",
    						"epiDesc": "Por Apertura De Credito - Abcd Proyecto Renault_b",
    						"li": "<li id='625'>(+) Bmargen082115 Por Apertura De Credito - Abcd Proyecto Renault_b</li>",
    						"epiN": "Bmargen082115"
    					},
    					"Bmargen082103": {
    						"sig": "+",
    						"relId": "157.613",
    						"epiDesc": "Comisiones Cob.A Parts.X Cred.Personales_b",
    						"li": "<li id='613'>(+) Bmargen082103 Comisiones Cob.A Parts.X Cred.Personales_b</li>",
    						"epiN": "Bmargen082103"
    					},
    					"Bmargen082114": {
    						"sig": "+",
    						"relId": "157.624",
    						"epiDesc": "Otras Comisiones Cobradas _b",
    						"li": "<li id='624'>(+) Bmargen082114 Otras Comisiones Cobradas _b</li>",
    						"epiN": "Bmargen082114"
    					}
    				},
    				"158": {
    					"Bmargen084303": {
    						"sig": "+",
    						"relId": "158.629",
    						"epiDesc": "TDC Moratorios",
    						"li": "<li id='629'>(+) Bmargen084303 TDC Moratorios</li>",
    						"epiN": "Bmargen084303"
    					},
    					"Bmargen084304": {
    						"sig": "+",
    						"relId": "158.630",
    						"epiDesc": "Tradicional Mora",
    						"li": "<li id='630'>(+) Bmargen084304 Tradicional Mora</li>",
    						"epiN": "Bmargen084304"
    					},
    					"Bmargen084301": {
    						"sig": "+",
    						"relId": "158.627",
    						"epiDesc": "Fondos de Fomento Mora",
    						"li": "<li id='627'>(+) Bmargen084301 Fondos de Fomento Mora</li>",
    						"epiN": "Bmargen084301"
    					},
    					"Bmargen084302": {
    						"sig": "+",
    						"relId": "158.628",
    						"epiDesc": "Prestamos al Consumo Mora",
    						"li": "<li id='628'>(+) Bmargen084302 Prestamos al Consumo Mora</li>",
    						"epiN": "Bmargen084302"
    					},
    					"Bmargen084305": {
    						"sig": "+",
    						"relId": "158.631",
    						"epiDesc": "Vivienda Mora",
    						"li": "<li id='631'>(+) Bmargen084305 Vivienda Mora</li>",
    						"epiN": "Bmargen084305"
    					},
    					"Bmargen084306": {
    						"sig": "+",
    						"relId": "158.632",
    						"epiDesc": "Resto Moratorios",
    						"li": "<li id='632'>(+) Bmargen084306 Resto Moratorios</li>",
    						"epiN": "Bmargen084306"
    					}
    				},
    				"159": {
    					"Bmargen0847": {
    						"sig": "+",
    						"relId": "159.634",
    						"epiDesc": "Fideicomisos Propios Hipotecarios",
    						"li": "<li id='634'>(+) Bmargen0847 Fideicomisos Propios Hipotecarios</li>",
    						"epiN": "Bmargen0847"
    					},
    					"Bmargen0822": {
    						"sig": "+",
    						"relId": "159.633",
    						"epiDesc": "Derivados y Cambios",
    						"li": "<li id='633'>(+) Bmargen0822 Derivados y Cambios</li>",
    						"epiN": "Bmargen0822"
    					},
    					"Bmargen084402": {
    						"sig": "+",
    						"relId": "159.636",
    						"epiDesc": "Otros Int. Cobrados",
    						"li": "<li id='636'>(+) Bmargen084402 Otros Int. Cobrados</li>",
    						"epiN": "Bmargen084402"
    					},
    					"Bmargen084403": {
    						"sig": "+",
    						"relId": "159.637",
    						"epiDesc": " Otros Int. Pagados_b ",
    						"li": "<li id='637'>(+) Bmargen084403  Otros Int. Pagados_b </li>",
    						"epiN": "Bmargen084403"
    					},
    					"Bmargen084401": {
    						"sig": "+",
    						"relId": "159.635",
    						"epiDesc": "Interoficinas",
    						"li": "<li id='635'>(+) Bmargen084401 Interoficinas</li>",
    						"epiN": "Bmargen084401"
    					},
    					"Bmargen084404": {
    						"sig": "+",
    						"relId": "159.638",
    						"epiDesc": " Retroactivas_b",
    						"li": "<li id='638'>(+) Bmargen084404  Retroactivas_b</li>",
    						"epiN": "Bmargen084404"
    					},
    					"Bmargen084405": {
    						"sig": "+",
    						"relId": "159.639",
    						"epiDesc": "Costo Financiero Plan de Pensiones_b",
    						"li": "<li id='639'>(+) Bmargen084405 Costo Financiero Plan de Pensiones_b</li>",
    						"epiN": "Bmargen084405"
    					}
    				},
    				"160": {
    					"B+RVUSA B": {
    						"sig": "+",
    						"relId": "160.640",
    						"epiDesc": "B+RVUSA B",
    						"li": "<li id='640'>(+) B+RVUSA B B+RVUSA B</li>",
    						"epiN": "B+RVUSA B"
    					}
    				},
    				"161": {
    					"Brfdpve": {
    						"sig": "+",
    						"relId": "161.643",
    						"epiDesc": "DPV Renta Fija Espana",
    						"li": "<li id='643'>(+) Brfdpve DPV Renta Fija Espana<ol id='rel_164'></ol></li>",
    						"epiN": "Brfdpve"
    					},
    					"Brfdpvm": {
    						"sig": "+",
    						"relId": "161.644",
    						"epiDesc": "DPV Renta Fija Mex",
    						"li": "<li id='644'>(+) Brfdpvm DPV Renta Fija Mex<ol id='rel_169'></ol></li>",
    						"epiN": "Brfdpvm"
    					},
    					"Brfcne": {
    						"sig": "+",
    						"relId": "161.641",
    						"epiDesc": "CN Renta fija Espana",
    						"li": "<li id='641'>(+) Brfcne CN Renta fija Espana<ol id='rel_163'></ol></li>",
    						"epiN": "Brfcne"
    					},
    					"Brfcnm": {
    						"sig": "+",
    						"relId": "161.642",
    						"epiDesc": "CN Renta fija Mex",
    						"li": "<li id='642'>(+) Brfcnm CN Renta fija Mex<ol id='rel_167'></ol></li>",
    						"epiN": "Brfcnm"
    					}
    				},
    				"162": {
    					"Brvdpve": {
    						"sig": "+",
    						"relId": "162.647",
    						"epiDesc": "DPV Renta Variable Espana",
    						"li": "<li id='647'>(+) Brvdpve DPV Renta Variable Espana<ol id='rel_166'></ol></li>",
    						"epiN": "Brvdpve"
    					},
    					"Brvdpvm": {
    						"sig": "+",
    						"relId": "162.648",
    						"epiDesc": "DPV Renta Variable Mex",
    						"li": "<li id='648'>(+) Brvdpvm DPV Renta Variable Mex<ol id='rel_168'></ol></li>",
    						"epiN": "Brvdpvm"
    					},
    					"Brvcnm": {
    						"sig": "+",
    						"relId": "162.646",
    						"epiDesc": "CN Renta Variable Mex",
    						"li": "<li id='646'>(+) Brvcnm CN Renta Variable Mex<ol id='rel_170'></ol></li>",
    						"epiN": "Brvcnm"
    					},
    					"Brvcne": {
    						"sig": "+",
    						"relId": "162.645",
    						"epiDesc": "CN Renta Variable Espana",
    						"li": "<li id='645'>(+) Brvcne CN Renta Variable Espana<ol id='rel_165'></ol></li>",
    						"epiN": "Brvcne"
    					}
    				},
    				"163": {
    					"BA1026A": {
    						"sig": "+",
    						"relId": "163.649",
    						"epiDesc": "CN Renta fija EspanaA",
    						"li": "<li id='649'>(+) BA1026A CN Renta fija EspanaA<ol id='rel_171'></ol></li>",
    						"epiN": "BA1026A"
    					}
    				},
    				"164": {
    					"BA1202A": {
    						"sig": "+",
    						"relId": "164.650",
    						"epiDesc": "DPV Renta Fija EspanaA",
    						"li": "<li id='650'>(+) BA1202A DPV Renta Fija EspanaA<ol id='rel_175'></ol></li>",
    						"epiN": "BA1202A"
    					}
    				},
    				"165": {
    					"BA1028A": {
    						"sig": "+",
    						"relId": "165.651",
    						"epiDesc": "CN Renta Variable EspanaA",
    						"li": "<li id='651'>(+) BA1028A CN Renta Variable EspanaA<ol id='rel_172'></ol></li>",
    						"epiN": "BA1028A"
    					}
    				},
    				"166": {
    					"BA1204A": {
    						"sig": "+",
    						"relId": "166.652",
    						"epiDesc": "DPV Renta Variable EspanaA",
    						"li": "<li id='652'>(+) BA1204A DPV Renta Variable EspanaA<ol id='rel_176'></ol></li>",
    						"epiN": "BA1204A"
    					}
    				},
    				"167": {
    					"BA2038A": {
    						"sig": "+",
    						"relId": "167.660",
    						"epiDesc": "",
    						"li": "<li id='660'>(+) BA2038A <ol id='rel_190'></ol></li>",
    						"epiN": "BA2038A"
    					},
    					"BA2569A": {
    						"sig": "+",
    						"relId": "167.664",
    						"epiDesc": "",
    						"li": "<li id='664'>(+) BA2569A <ol id='rel_196'></ol></li>",
    						"epiN": "BA2569A"
    					},
    					"BA1786A": {
    						"sig": "+",
    						"relId": "167.658",
    						"epiDesc": "",
    						"li": "<li id='658'>(+) BA1786A <ol id='rel_186'></ol></li>",
    						"epiN": "BA1786A"
    					},
    					"BA1100A": {
    						"sig": "+",
    						"relId": "167.653",
    						"epiDesc": "",
    						"li": "<li id='653'>(+) BA1100A <ol id='rel_173'></ol></li>",
    						"epiN": "BA1100A"
    					},
    					"BA1314A": {
    						"sig": "+",
    						"relId": "167.655",
    						"epiDesc": "",
    						"li": "<li id='655'>(+) BA1314A <ol id='rel_178'></ol></li>",
    						"epiN": "BA1314A"
    					},
    					"BA1500A": {
    						"sig": "+",
    						"relId": "167.657",
    						"epiDesc": "",
    						"li": "<li id='657'>(+) BA1500A <ol id='rel_182'></ol></li>",
    						"epiN": "BA1500A"
    					},
    					"BA2080A": {
    						"sig": "+",
    						"relId": "167.661",
    						"epiDesc": "",
    						"li": "<li id='661'>(+) BA2080A <ol id='rel_191'></ol></li>",
    						"epiN": "BA2080A"
    					},
    					"BA1380A": {
    						"sig": "+",
    						"relId": "167.656",
    						"epiDesc": "",
    						"li": "<li id='656'>(+) BA1380A <ol id='rel_180'></ol></li>",
    						"epiN": "BA1380A"
    					},
    					"BA2142A": {
    						"sig": "+",
    						"relId": "167.663",
    						"epiDesc": "",
    						"li": "<li id='663'>(+) BA2142A <ol id='rel_193'></ol></li>",
    						"epiN": "BA2142A"
    					},
    					"BA1291A": {
    						"sig": "+",
    						"relId": "167.654",
    						"epiDesc": "",
    						"li": "<li id='654'>(+) BA1291A </li>",
    						"epiN": "BA1291A"
    					},
    					"MXBA11121A": {
    						"sig": "+",
    						"relId": "167.665",
    						"epiDesc": "",
    						"li": "<li id='665'>(+) MXBA11121A <ol id='rel_198'></ol></li>",
    						"epiN": "MXBA11121A"
    					},
    					"BA2012A": {
    						"sig": "+",
    						"relId": "167.659",
    						"epiDesc": "",
    						"li": "<li id='659'>(+) BA2012A <ol id='rel_188'></ol></li>",
    						"epiN": "BA2012A"
    					},
    					"BA2100A": {
    						"sig": "+",
    						"relId": "167.662",
    						"epiDesc": "",
    						"li": "<li id='662'>(+) BA2100A <ol id='rel_192'></ol></li>",
    						"epiN": "BA2100A"
    					}
    				},
    				"168": {
    					"BA1500D": {
    						"sig": "+",
    						"relId": "168.667",
    						"epiDesc": "",
    						"li": "<li id='667'>(+) BA1500D <ol id='rel_185'></ol></li>",
    						"epiN": "BA1500D"
    					},
    					"BA2568A": {
    						"sig": "+",
    						"relId": "168.668",
    						"epiDesc": "",
    						"li": "<li id='668'>(+) BA2568A <ol id='rel_195'></ol></li>",
    						"epiN": "BA2568A"
    					},
    					"BA1100B": {
    						"sig": "+",
    						"relId": "168.666",
    						"epiDesc": "",
    						"li": "<li id='666'>(+) BA1100B <ol id='rel_174'></ol></li>",
    						"epiN": "BA1100B"
    					}
    				},
    				"169": {
    					"BA2569B": {
    						"sig": "+",
    						"relId": "169.675",
    						"epiDesc": "",
    						"li": "<li id='675'>(+) BA2569B <ol id='rel_197'></ol></li>",
    						"epiN": "BA2569B"
    					},
    					"BA1380B": {
    						"sig": "+",
    						"relId": "169.671",
    						"epiDesc": "",
    						"li": "<li id='671'>(+) BA1380B <ol id='rel_181'></ol></li>",
    						"epiN": "BA1380B"
    					},
    					"BA2142B": {
    						"sig": "+",
    						"relId": "169.674",
    						"epiDesc": "",
    						"li": "<li id='674'>(+) BA2142B <ol id='rel_194'></ol></li>",
    						"epiN": "BA2142B"
    					},
    					"BA1238A": {
    						"sig": "+",
    						"relId": "169.669",
    						"epiDesc": "",
    						"li": "<li id='669'>(+) BA1238A <ol id='rel_177'></ol></li>",
    						"epiN": "BA1238A"
    					},
    					"BA1786B": {
    						"sig": "+",
    						"relId": "169.673",
    						"epiDesc": "",
    						"li": "<li id='673'>(+) BA1786B <ol id='rel_187'></ol></li>",
    						"epiN": "BA1786B"
    					},
    					"BA1314B": {
    						"sig": "+",
    						"relId": "169.670",
    						"epiDesc": "",
    						"li": "<li id='670'>(+) BA1314B <ol id='rel_179'></ol></li>",
    						"epiN": "BA1314B"
    					},
    					"BA1500B": {
    						"sig": "+",
    						"relId": "169.672",
    						"epiDesc": "",
    						"li": "<li id='672'>(+) BA1500B <ol id='rel_183'></ol></li>",
    						"epiN": "BA1500B"
    					}
    				},
    				"170": {
    					"BA1500C": {
    						"sig": "+",
    						"relId": "170.676",
    						"epiDesc": "",
    						"li": "<li id='676'>(+) BA1500C <ol id='rel_184'></ol></li>",
    						"epiN": "BA1500C"
    					},
    					"BA2012B": {
    						"sig": "+",
    						"relId": "170.677",
    						"epiDesc": "",
    						"li": "<li id='677'>(+) BA2012B <ol id='rel_189'></ol></li>",
    						"epiN": "BA2012B"
    					}
    				},
    				"171": {
    					"Brfi0201_7": {
    						"sig": "+",
    						"relId": "171.678",
    						"epiDesc": "Otros activos financieros RF_7",
    						"li": "<li id='678'>(+) Brfi0201_7 Otros activos financieros RF_7</li>",
    						"epiN": "Brfi0201_7"
    					},
    					"Brfi0101010101_5": {
    						"sig": "+",
    						"relId": "171.682",
    						"epiDesc": "TPN Titulos para Negociar_5",
    						"li": "<li id='682'>(+) Brfi0101010101_5 TPN Titulos para Negociar_5</li>",
    						"epiN": "Brfi0101010101_5"
    					},
    					"Brfi0101010301_6": {
    						"sig": "+",
    						"relId": "171.679",
    						"epiDesc": "Reporto Titulos_6",
    						"li": "<li id='679'>(+) Brfi0101010301_6 Reporto Titulos_6</li>",
    						"epiN": "Brfi0101010301_6"
    					},
    					"Brfi01010102_7": {
    						"sig": "+",
    						"relId": "171.681",
    						"epiDesc": "RF Intereses Devengados_7",
    						"li": "<li id='681'>(+) Brfi01010102_7 RF Intereses Devengados_7</li>",
    						"epiN": "Brfi01010102_7"
    					},
    					"Brfi0101010302_3": {
    						"sig": "+",
    						"relId": "171.680",
    						"epiDesc": "Reporto Valorizacion_3",
    						"li": "<li id='680'>(+) Brfi0101010302_3 Reporto Valorizacion_3</li>",
    						"epiN": "Brfi0101010302_3"
    					},
    					"Brfi0101010102_7": {
    						"sig": "+",
    						"relId": "171.683",
    						"epiDesc": "TPN Valorizacion_7",
    						"li": "<li id='683'>(+) Brfi0101010102_7 TPN Valorizacion_7</li>",
    						"epiN": "Brfi0101010102_7"
    					}
    				},
    				"172": {
    					"Brva0102_2": {
    						"sig": "+",
    						"relId": "172.684",
    						"epiDesc": "Acciones TPN_RV_2",
    						"li": "<li id='684'>(+) Brva0102_2 Acciones TPN_RV_2</li>",
    						"epiN": "Brva0102_2"
    					},
    					"Brfi0101010102_8": {
    						"sig": "+",
    						"relId": "172.685",
    						"epiDesc": "TPN Valorizacion_8",
    						"li": "<li id='685'>(+) Brfi0101010102_8 TPN Valorizacion_8</li>",
    						"epiN": "Brfi0101010102_8"
    					},
    					"Brva11_2": {
    						"sig": "+",
    						"relId": "172.686",
    						"epiDesc": "Valuacion de Acciones_2",
    						"li": "<li id='686'>(+) Brva11_2 Valuacion de Acciones_2</li>",
    						"epiN": "Brva11_2"
    					}
    				},
    				"173": {
    					"Brfi0201_1": {
    						"sig": "+",
    						"relId": "173.687",
    						"epiDesc": "Otros activos financieros RF_1",
    						"li": "<li id='687'>(+) Brfi0201_1 Otros activos financieros RF_1</li>",
    						"epiN": "Brfi0201_1"
    					}
    				},
    				"174": {
    					"Brva10_1": {
    						"sig": "+",
    						"relId": "174.688",
    						"epiDesc": "Resto_RV_1",
    						"li": "<li id='688'>(+) Brva10_1 Resto_RV_1</li>",
    						"epiN": "Brva10_1"
    					}
    				},
    				"175": {
    					"Brfi0201_8": {
    						"sig": "+",
    						"relId": "175.690",
    						"epiDesc": "Otros activos financieros RF_8",
    						"li": "<li id='690'>(+) Brfi0201_8 Otros activos financieros RF_8</li>",
    						"epiN": "Brfi0201_8"
    					},
    					"Brfi0101010301_7": {
    						"sig": "+",
    						"relId": "175.691",
    						"epiDesc": "Reporto Titulos_7",
    						"li": "<li id='691'>(+) Brfi0101010301_7 Reporto Titulos_7</li>",
    						"epiN": "Brfi0101010301_7"
    					},
    					"Brfi0101010302_4": {
    						"sig": "+",
    						"relId": "175.692",
    						"epiDesc": "Reporto Valorizacion_4",
    						"li": "<li id='692'>(+) Brfi0101010302_4 Reporto Valorizacion_4</li>",
    						"epiN": "Brfi0101010302_4"
    					},
    					"Brfi01010102_8": {
    						"sig": "+",
    						"relId": "175.693",
    						"epiDesc": "RF Intereses Devengados_8",
    						"li": "<li id='693'>(+) Brfi01010102_8 RF Intereses Devengados_8</li>",
    						"epiN": "Brfi01010102_8"
    					},
    					"Brfi0101010102_9": {
    						"sig": "+",
    						"relId": "175.696",
    						"epiDesc": "TPN Valorizacion_9",
    						"li": "<li id='696'>(+) Brfi0101010102_9 TPN Valorizacion_9</li>",
    						"epiN": "Brfi0101010102_9"
    					},
    					"Brfi03_3": {
    						"sig": "+",
    						"relId": "175.689",
    						"epiDesc": "Constancias Bursas_3",
    						"li": "<li id='689'>(+) Brfi03_3 Constancias Bursas_3</li>",
    						"epiN": "Brfi03_3"
    					},
    					"Brfi0102010101_3": {
    						"sig": "+",
    						"relId": "175.694",
    						"epiDesc": "TDV Titulos_3",
    						"li": "<li id='694'>(+) Brfi0102010101_3 TDV Titulos_3</li>",
    						"epiN": "Brfi0102010101_3"
    					},
    					"Brfi0102010102_3": {
    						"sig": "+",
    						"relId": "175.695",
    						"epiDesc": "TDV Valorizacion_3",
    						"li": "<li id='695'>(+) Brfi0102010102_3 TDV Valorizacion_3</li>",
    						"epiN": "Brfi0102010102_3"
    					}
    				},
    				"176": {
    					"Brva11_3": {
    						"sig": "+",
    						"relId": "176.701",
    						"epiDesc": "Valuacion de Acciones_3",
    						"li": "<li id='701'>(+) Brva11_3 Valuacion de Acciones_3</li>",
    						"epiN": "Brva11_3"
    					},
    					"Brva10_3": {
    						"sig": "+",
    						"relId": "176.699",
    						"epiDesc": "Resto_RV_3",
    						"li": "<li id='699'>(+) Brva10_3 Resto_RV_3</li>",
    						"epiN": "Brva10_3"
    					},
    					"Brva0101_1": {
    						"sig": "+",
    						"relId": "176.697",
    						"epiDesc": "Acciones DPV RV_1",
    						"li": "<li id='697'>(+) Brva0101_1 Acciones DPV RV_1</li>",
    						"epiN": "Brva0101_1"
    					},
    					"Brva0603_4": {
    						"sig": "+",
    						"relId": "176.698",
    						"epiDesc": "Inversiones Permanentes En Acciones_RV_4",
    						"li": "<li id='698'>(+) Brva0603_4 Inversiones Permanentes En Acciones_RV_4</li>",
    						"epiN": "Brva0603_4"
    					},
    					"Brfi0102010102_4": {
    						"sig": "+",
    						"relId": "176.700",
    						"epiDesc": "TDV Valorizacion_4",
    						"li": "<li id='700'>(+) Brfi0102010102_4 TDV Valorizacion_4</li>",
    						"epiN": "Brfi0102010102_4"
    					}
    				},
    				"177": {
    					"Brfi01010102_1": {
    						"sig": "+",
    						"relId": "177.702",
    						"epiDesc": "RF Intereses Devengados_1",
    						"li": "<li id='702'>(+) Brfi01010102_1 RF Intereses Devengados_1</li>",
    						"epiN": "Brfi01010102_1"
    					}
    				},
    				"178": {
    					"Brfi0101010102_1": {
    						"sig": "+",
    						"relId": "178.705",
    						"epiDesc": "TPN Valorizacion_1",
    						"li": "<li id='705'>(+) Brfi0101010102_1 TPN Valorizacion_1</li>",
    						"epiN": "Brfi0101010102_1"
    					},
    					"Brfi0101010101_1": {
    						"sig": "+",
    						"relId": "178.704",
    						"epiDesc": "TPN Titulos para Negociar_1",
    						"li": "<li id='704'>(+) Brfi0101010101_1 TPN Titulos para Negociar_1</li>",
    						"epiN": "Brfi0101010101_1"
    					},
    					"Brfi0101010301_1": {
    						"sig": "+",
    						"relId": "178.703",
    						"epiDesc": "Reporto Titulos_1",
    						"li": "<li id='703'>(+) Brfi0101010301_1 Reporto Titulos_1</li>",
    						"epiN": "Brfi0101010301_1"
    					}
    				},
    				"179": {
    					"Brfi0102010102_1": {
    						"sig": "+",
    						"relId": "179.707",
    						"epiDesc": "TDV Valorizacion_1",
    						"li": "<li id='707'>(+) Brfi0102010102_1 TDV Valorizacion_1</li>",
    						"epiN": "Brfi0102010102_1"
    					},
    					"Brfi0201_2": {
    						"sig": "+",
    						"relId": "179.706",
    						"epiDesc": "Otros activos financieros RF_2",
    						"li": "<li id='706'>(+) Brfi0201_2 Otros activos financieros RF_2</li>",
    						"epiN": "Brfi0201_2"
    					}
    				},
    				"180": {
    					"Brfi0201_3": {
    						"sig": "+",
    						"relId": "180.708",
    						"epiDesc": "Otros activos financieros RF_3",
    						"li": "<li id='708'>(+) Brfi0201_3 Otros activos financieros RF_3</li>",
    						"epiN": "Brfi0201_3"
    					},
    					"Brfi01010102_2": {
    						"sig": "+",
    						"relId": "180.709",
    						"epiDesc": "RF Intereses Devengados_2",
    						"li": "<li id='709'>(+) Brfi01010102_2 RF Intereses Devengados_2</li>",
    						"epiN": "Brfi01010102_2"
    					}
    				},
    				"181": {
    					"Brfi0201_4": {
    						"sig": "+",
    						"relId": "181.710",
    						"epiDesc": "Otros activos financieros RF_4",
    						"li": "<li id='710'>(+) Brfi0201_4 Otros activos financieros RF_4</li>",
    						"epiN": "Brfi0201_4"
    					}
    				},
    				"182": {
    					"Brfi0101010102_2": {
    						"sig": "+",
    						"relId": "182.711",
    						"epiDesc": "TPN Valorizacion_2",
    						"li": "<li id='711'>(+) Brfi0101010102_2 TPN Valorizacion_2</li>",
    						"epiN": "Brfi0101010102_2"
    					}
    				},
    				"183": {
    					"Brfi03_1": {
    						"sig": "+",
    						"relId": "183.712",
    						"epiDesc": "Constancias Bursas_1",
    						"li": "<li id='712'>(+) Brfi03_1 Constancias Bursas_1</li>",
    						"epiN": "Brfi03_1"
    					},
    					"Brfi0201_5": {
    						"sig": "+",
    						"relId": "183.713",
    						"epiDesc": "Otros activos financieros RF_5",
    						"li": "<li id='713'>(+) Brfi0201_5 Otros activos financieros RF_5</li>",
    						"epiN": "Brfi0201_5"
    					},
    					"Brfi0101010301_2": {
    						"sig": "+",
    						"relId": "183.714",
    						"epiDesc": "Reporto Titulos_2",
    						"li": "<li id='714'>(+) Brfi0101010301_2 Reporto Titulos_2</li>",
    						"epiN": "Brfi0101010301_2"
    					},
    					"Brfi0102010101_1": {
    						"sig": "+",
    						"relId": "183.715",
    						"epiDesc": "TDV Titulos_1",
    						"li": "<li id='715'>(+) Brfi0102010101_1 TDV Titulos_1</li>",
    						"epiN": "Brfi0102010101_1"
    					},
    					"Brfi0102010102_2": {
    						"sig": "+",
    						"relId": "183.716",
    						"epiDesc": "TDV Valorizacion_2",
    						"li": "<li id='716'>(+) Brfi0102010102_2 TDV Valorizacion_2</li>",
    						"epiN": "Brfi0102010102_2"
    					}
    				},
    				"184": {
    					"Brva10_2": {
    						"sig": "+",
    						"relId": "184.719",
    						"epiDesc": "Resto_RV_2",
    						"li": "<li id='719'>(+) Brva10_2 Resto_RV_2</li>",
    						"epiN": "Brva10_2"
    					},
    					"Brva0603_1": {
    						"sig": "+",
    						"relId": "184.718",
    						"epiDesc": "Inversiones Permanentes En Acciones_RV_1",
    						"li": "<li id='718'>(+) Brva0603_1 Inversiones Permanentes En Acciones_RV_1</li>",
    						"epiN": "Brva0603_1"
    					},
    					"Brva1103_1": {
    						"sig": "+",
    						"relId": "184.717",
    						"epiDesc": "ACTIVOS DE LARGA DURACIÓN  (DPV)_1",
    						"li": "<li id='717'>(+) Brva1103_1 ACTIVOS DE LARGA DURACIÓN  (DPV)_1</li>",
    						"epiN": "Brva1103_1"
    					}
    				},
    				"185": {
    					"Brva0603_2": {
    						"sig": "+",
    						"relId": "185.720",
    						"epiDesc": "Inversiones Permanentes En Acciones_RV_2",
    						"li": "<li id='720'>(+) Brva0603_2 Inversiones Permanentes En Acciones_RV_2</li>",
    						"epiN": "Brva0603_2"
    					}
    				},
    				"186": {
    					"Brfi0101010101_2": {
    						"sig": "+",
    						"relId": "186.721",
    						"epiDesc": "TPN Titulos para Negociar_2",
    						"li": "<li id='721'>(+) Brfi0101010101_2 TPN Titulos para Negociar_2</li>",
    						"epiN": "Brfi0101010101_2"
    					}
    				},
    				"187": {
    					"Brfi03_2": {
    						"sig": "+",
    						"relId": "187.722",
    						"epiDesc": "Constancias Bursas_2",
    						"li": "<li id='722'>(+) Brfi03_2 Constancias Bursas_2</li>",
    						"epiN": "Brfi03_2"
    					}
    				},
    				"188": {
    					"Brfi0101010302_1": {
    						"sig": "+",
    						"relId": "188.723",
    						"epiDesc": "Reporto Valorizacion_1",
    						"li": "<li id='723'>(+) Brfi0101010302_1 Reporto Valorizacion_1</li>",
    						"epiN": "Brfi0101010302_1"
    					},
    					"Brfi01010102_3": {
    						"sig": "+",
    						"relId": "188.724",
    						"epiDesc": "RF Intereses Devengados_3",
    						"li": "<li id='724'>(+) Brfi01010102_3 RF Intereses Devengados_3</li>",
    						"epiN": "Brfi01010102_3"
    					},
    					"Brfi0101010102_3": {
    						"sig": "+",
    						"relId": "188.726",
    						"epiDesc": "TPN Valorizacion_3",
    						"li": "<li id='726'>(+) Brfi0101010102_3 TPN Valorizacion_3</li>",
    						"epiN": "Brfi0101010102_3"
    					},
    					"Brfi0101010101_3": {
    						"sig": "+",
    						"relId": "188.725",
    						"epiDesc": "TPN Titulos para Negociar_3",
    						"li": "<li id='725'>(+) Brfi0101010101_3 TPN Titulos para Negociar_3</li>",
    						"epiN": "Brfi0101010101_3"
    					}
    				},
    				"189": {
    					"Brva11_1": {
    						"sig": "+",
    						"relId": "189.728",
    						"epiDesc": "Valuacion de Acciones_1",
    						"li": "<li id='728'>(+) Brva11_1 Valuacion de Acciones_1</li>",
    						"epiN": "Brva11_1"
    					},
    					"Brva0102_1": {
    						"sig": "+",
    						"relId": "189.727",
    						"epiDesc": "Acciones TPN_RV_1",
    						"li": "<li id='727'>(+) Brva0102_1 Acciones TPN_RV_1</li>",
    						"epiN": "Brva0102_1"
    					}
    				},
    				"190": {
    					"Brfi0101010301_3": {
    						"sig": "+",
    						"relId": "190.729",
    						"epiDesc": "Reporto Titulos_3",
    						"li": "<li id='729'>(+) Brfi0101010301_3 Reporto Titulos_3</li>",
    						"epiN": "Brfi0101010301_3"
    					},
    					"Brfi0101010302_2": {
    						"sig": "+",
    						"relId": "190.730",
    						"epiDesc": "Reporto Valorizacion_2",
    						"li": "<li id='730'>(+) Brfi0101010302_2 Reporto Valorizacion_2</li>",
    						"epiN": "Brfi0101010302_2"
    					},
    					"Brfi0101010102_4": {
    						"sig": "+",
    						"relId": "190.731",
    						"epiDesc": "TPN Valorizacion_4",
    						"li": "<li id='731'>(+) Brfi0101010102_4 TPN Valorizacion_4</li>",
    						"epiN": "Brfi0101010102_4"
    					}
    				},
    				"191": {
    					"Brfi0101010301_4": {
    						"sig": "+",
    						"relId": "191.732",
    						"epiDesc": "Reporto Titulos_4",
    						"li": "<li id='732'>(+) Brfi0101010301_4 Reporto Titulos_4</li>",
    						"epiN": "Brfi0101010301_4"
    					}
    				},
    				"192": {
    					"Brfi0201_6": {
    						"sig": "+",
    						"relId": "192.733",
    						"epiDesc": "Otros activos financieros RF_6",
    						"li": "<li id='733'>(+) Brfi0201_6 Otros activos financieros RF_6</li>",
    						"epiN": "Brfi0201_6"
    					},
    					"Brfi0101010301_5": {
    						"sig": "+",
    						"relId": "192.734",
    						"epiDesc": "Reporto Titulos_5",
    						"li": "<li id='734'>(+) Brfi0101010301_5 Reporto Titulos_5</li>",
    						"epiN": "Brfi0101010301_5"
    					}
    				},
    				"193": {
    					"Brfi0101010102_5": {
    						"sig": "+",
    						"relId": "193.735",
    						"epiDesc": "TPN Valorizacion_5",
    						"li": "<li id='735'>(+) Brfi0101010102_5 TPN Valorizacion_5</li>",
    						"epiN": "Brfi0101010102_5"
    					}
    				},
    				"194": {
    					"Brfi01010102_4": {
    						"sig": "+",
    						"relId": "194.736",
    						"epiDesc": "RF Intereses Devengados_4",
    						"li": "<li id='736'>(+) Brfi01010102_4 RF Intereses Devengados_4</li>",
    						"epiN": "Brfi01010102_4"
    					}
    				},
    				"195": {
    					"Brva0603_3": {
    						"sig": "+",
    						"relId": "195.737",
    						"epiDesc": "Inversiones Permanentes En Acciones_RV_3",
    						"li": "<li id='737'>(+) Brva0603_3 Inversiones Permanentes En Acciones_RV_3</li>",
    						"epiN": "Brva0603_3"
    					}
    				},
    				"196": {
    					"Brfi01010102_5": {
    						"sig": "+",
    						"relId": "196.738",
    						"epiDesc": "RF Intereses Devengados_5",
    						"li": "<li id='738'>(+) Brfi01010102_5 RF Intereses Devengados_5</li>",
    						"epiN": "Brfi01010102_5"
    					},
    					"Brfi0101010102_6": {
    						"sig": "+",
    						"relId": "196.740",
    						"epiDesc": "TPN Valorizacion_6",
    						"li": "<li id='740'>(+) Brfi0101010102_6 TPN Valorizacion_6</li>",
    						"epiN": "Brfi0101010102_6"
    					},
    					"Brfi0101010101_4": {
    						"sig": "+",
    						"relId": "196.739",
    						"epiDesc": "TPN Titulos para Negociar_4",
    						"li": "<li id='739'>(+) Brfi0101010101_4 TPN Titulos para Negociar_4</li>",
    						"epiN": "Brfi0101010101_4"
    					}
    				},
    				"197": {
    					"Brfi0102010101_2": {
    						"sig": "+",
    						"relId": "197.742",
    						"epiDesc": "TDV Titulos_2",
    						"li": "<li id='742'>(+) Brfi0102010101_2 TDV Titulos_2</li>",
    						"epiN": "Brfi0102010101_2"
    					},
    					"Brfi01010102_6": {
    						"sig": "+",
    						"relId": "197.741",
    						"epiDesc": "RF Intereses Devengados_6",
    						"li": "<li id='741'>(+) Brfi01010102_6 RF Intereses Devengados_6</li>",
    						"epiN": "Brfi01010102_6"
    					}
    				},
    				"198": {
    					"Brfi0101010101_6": {
    						"sig": "+",
    						"relId": "198.743",
    						"epiDesc": "TPN Titulos para Negociar_6",
    						"li": "<li id='743'>(+) Brfi0101010101_6 TPN Titulos para Negociar_6</li>",
    						"epiN": "Brfi0101010101_6"
    					}
    				}
    			},
    			"catDad": {
    				"BInvCre1": {
    					"sig": "+",
    					"id": 74,
    					"desc": ""
    				},
    				"BInvCre3": {
    					"sig": "+",
    					"id": 101,
    					"desc": ""
    				},
    				"Brv": {
    					"sig": "+",
    					"id": 162,
    					"desc": ""
    				},
    				"Brfi01010403": {
    					"sig": "+",
    					"id": 132,
    					"desc": ""
    				},
    				"Brfi01010404": {
    					"sig": "+",
    					"id": 133,
    					"desc": ""
    				},
    				"BInvCre14A": {
    					"sig": "+",
    					"id": 83,
    					"desc": ""
    				},
    				"Brfi01010401": {
    					"sig": "+",
    					"id": 130,
    					"desc": ""
    				},
    				"Brfi01010402": {
    					"sig": "+",
    					"id": 131,
    					"desc": ""
    				},
    				"BA1026A": {
    					"sig": "+",
    					"id": 171,
    					"desc": ""
    				},
    				"BInvCre142": {
    					"sig": "+",
    					"id": 88,
    					"desc": ""
    				},
    				"Bpyp": {
    					"sig": "+",
    					"id": 2,
    					"desc": ""
    				},
    				"BInvCre141": {
    					"sig": "+",
    					"id": 84,
    					"desc": ""
    				},
    				"Best": {
    					"sig": "+",
    					"id": 124,
    					"desc": ""
    				},
    				"Bdepvista": {
    					"sig": "+",
    					"id": 151,
    					"desc": ""
    				},
    				"Bdec0101A": {
    					"sig": "+",
    					"id": 59,
    					"desc": ""
    				},
    				"BbceSub": {
    					"sig": "+",
    					"id": 116,
    					"desc": ""
    				},
    				"CAP 1 1 4 0 0": {
    					"sig": "+",
    					"id": 9,
    					"desc": ""
    				},
    				"Bama": {
    					"sig": "+",
    					"id": 64,
    					"desc": ""
    				},
    				"BpafSub": {
    					"sig": "+",
    					"id": 121,
    					"desc": ""
    				},
    				"BdepBa03": {
    					"sig": "+",
    					"id": 52,
    					"desc": ""
    				},
    				"Bdepc01": {
    					"sig": "+",
    					"id": 136,
    					"desc": ""
    				},
    				"Bdepc02": {
    					"sig": "+",
    					"id": 154,
    					"desc": ""
    				},
    				"Bdepcapt": {
    					"sig": "+",
    					"id": 141,
    					"desc": ""
    				},
    				"CAP 1 0 0 0 0": {
    					"sig": "+",
    					"id": 7,
    					"desc": ""
    				},
    				"BA1100B": {
    					"sig": "+",
    					"id": 174,
    					"desc": ""
    				},
    				"BA1100A": {
    					"sig": "+",
    					"id": 173,
    					"desc": ""
    				},
    				"BInvCre1111": {
    					"sig": "+",
    					"id": 78,
    					"desc": ""
    				},
    				"Bcred01": {
    					"sig": "+",
    					"id": 68,
    					"desc": ""
    				},
    				"BA1028A": {
    					"sig": "+",
    					"id": 172,
    					"desc": ""
    				},
    				"BinvCre2A": {
    					"sig": "+",
    					"id": 90,
    					"desc": ""
    				},
    				"BinvCre2B": {
    					"sig": "+",
    					"id": 70,
    					"desc": ""
    				},
    				"Bdec0101B": {
    					"sig": "+",
    					"id": 56,
    					"desc": ""
    				},
    				"Bfdo01": {
    					"sig": "+",
    					"id": 135,
    					"desc": ""
    				},
    				"BInvCre13": {
    					"sig": "+",
    					"id": 82,
    					"desc": ""
    				},
    				"BInvCre12": {
    					"sig": "+",
    					"id": 81,
    					"desc": ""
    				},
    				"BInvCre14": {
    					"sig": "+",
    					"id": 75,
    					"desc": ""
    				},
    				"Bcdioint02": {
    					"sig": "+",
    					"id": 40,
    					"desc": ""
    				},
    				"BdepECoap": {
    					"sig": "+",
    					"id": 139,
    					"desc": ""
    				},
    				"CAP 1 1 4 1 0": {
    					"sig": "+",
    					"id": 10,
    					"desc": ""
    				},
    				"CAP 1 1 0 0 0": {
    					"sig": "+",
    					"id": 8,
    					"desc": ""
    				},
    				"BInvCre11": {
    					"sig": "+",
    					"id": 76,
    					"desc": ""
    				},
    				"Bdern": {
    					"sig": "+",
    					"id": 125,
    					"desc": ""
    				},
    				"Binv": {
    					"sig": "+",
    					"id": 28,
    					"desc": ""
    				},
    				"Bintm": {
    					"sig": "+",
    					"id": 123,
    					"desc": ""
    				},
    				"BdepBRDR": {
    					"sig": "+",
    					"id": 27,
    					"desc": ""
    				},
    				"Bfdos03": {
    					"sig": "+",
    					"id": 34,
    					"desc": ""
    				},
    				"Brfi010104": {
    					"sig": "+",
    					"id": 126,
    					"desc": ""
    				},
    				"Bdepced_EM": {
    					"sig": "+",
    					"id": 138,
    					"desc": ""
    				},
    				"Banr": {
    					"sig": "+",
    					"id": 29,
    					"desc": ""
    				},
    				"Bdec0101B02": {
    					"sig": "+",
    					"id": 58,
    					"desc": ""
    				},
    				"CAP 1 R 0 0 0": {
    					"sig": "+",
    					"id": 16,
    					"desc": ""
    				},
    				"Bdec0101B01": {
    					"sig": "+",
    					"id": 57,
    					"desc": ""
    				},
    				"Brfi010104B01": {
    					"sig": "+",
    					"id": 128,
    					"desc": ""
    				},
    				"BInvCre1411": {
    					"sig": "+",
    					"id": 85,
    					"desc": ""
    				},
    				"BInvCre24": {
    					"sig": "+",
    					"id": 96,
    					"desc": ""
    				},
    				"BInvCre1412": {
    					"sig": "+",
    					"id": 86,
    					"desc": ""
    				},
    				"BInvCre23": {
    					"sig": "+",
    					"id": 95,
    					"desc": ""
    				},
    				"Brfdpve": {
    					"sig": "+",
    					"id": 164,
    					"desc": ""
    				},
    				"Brvcnm": {
    					"sig": "+",
    					"id": 170,
    					"desc": ""
    				},
    				"BInvCre26": {
    					"sig": "+",
    					"id": 100,
    					"desc": ""
    				},
    				"BInvCre25": {
    					"sig": "+",
    					"id": 97,
    					"desc": ""
    				},
    				"CG_SocDLP": {
    					"sig": "+",
    					"id": 11,
    					"desc": ""
    				},
    				"BInvCre1413": {
    					"sig": "+",
    					"id": 87,
    					"desc": ""
    				},
    				"Bdepplazo": {
    					"sig": "+",
    					"id": 152,
    					"desc": ""
    				},
    				"Bcaja": {
    					"sig": "+",
    					"id": 24,
    					"desc": ""
    				},
    				"Brvcne": {
    					"sig": "+",
    					"id": 165,
    					"desc": ""
    				},
    				"Brfdpvm": {
    					"sig": "+",
    					"id": 169,
    					"desc": ""
    				},
    				"Brac": {
    					"sig": "+",
    					"id": 105,
    					"desc": ""
    				},
    				"Brac205": {
    					"sig": "+",
    					"id": 106,
    					"desc": ""
    				},
    				"BInvCre22": {
    					"sig": "+",
    					"id": 94,
    					"desc": ""
    				},
    				"BInvCre21": {
    					"sig": "+",
    					"id": 93,
    					"desc": ""
    				},
    				"Bder": {
    					"sig": "+",
    					"id": 66,
    					"desc": ""
    				},
    				"Bdep": {
    					"sig": "+",
    					"id": 26,
    					"desc": ""
    				},
    				"Bdec": {
    					"sig": "+",
    					"id": 53,
    					"desc": ""
    				},
    				"BInvCre1422": {
    					"sig": "+",
    					"id": 89,
    					"desc": ""
    				},
    				"BA2568A": {
    					"sig": "+",
    					"id": 195,
    					"desc": ""
    				},
    				"Bdepb": {
    					"sig": "+",
    					"id": 114,
    					"desc": ""
    				},
    				"Bdepc": {
    					"sig": "+",
    					"id": 119,
    					"desc": ""
    				},
    				"CAP 1 1 4 2 0": {
    					"sig": "+",
    					"id": 13,
    					"desc": ""
    				},
    				"Bfdo5100": {
    					"sig": "+",
    					"id": 145,
    					"desc": ""
    				},
    				"BInvCre31": {
    					"sig": "+",
    					"id": 102,
    					"desc": ""
    				},
    				"Brfcne": {
    					"sig": "+",
    					"id": 163,
    					"desc": ""
    				},
    				"Brac2502": {
    					"sig": "+",
    					"id": 109,
    					"desc": ""
    				},
    				"Borden": {
    					"sig": "+",
    					"id": 3,
    					"desc": ""
    				},
    				"Bcdi": {
    					"sig": "+",
    					"id": 35,
    					"desc": ""
    				},
    				"Brfcnm": {
    					"sig": "+",
    					"id": 167,
    					"desc": ""
    				},
    				"BA2569B": {
    					"sig": "+",
    					"id": 197,
    					"desc": ""
    				},
    				"Bopas": {
    					"sig": "+",
    					"id": 120,
    					"desc": ""
    				},
    				"BmargenF": {
    					"sig": "+",
    					"id": 155,
    					"desc": ""
    				},
    				"BA2569A": {
    					"sig": "+",
    					"id": 196,
    					"desc": ""
    				},
    				"BInvCre1111202": {
    					"sig": "+",
    					"id": 80,
    					"desc": ""
    				},
    				"BordenG63": {
    					"sig": "+",
    					"id": 20,
    					"desc": ""
    				},
    				"BA1238A": {
    					"sig": "+",
    					"id": 177,
    					"desc": ""
    				},
    				"BordenG61": {
    					"sig": "+",
    					"id": 19,
    					"desc": ""
    				},
    				"BA1202A": {
    					"sig": "+",
    					"id": 175,
    					"desc": ""
    				},
    				"Bdec01": {
    					"sig": "+",
    					"id": 54,
    					"desc": ""
    				},
    				"Bfdo0800": {
    					"sig": "+",
    					"id": 147,
    					"desc": ""
    				},
    				"Bmargen08": {
    					"sig": "+",
    					"id": 156,
    					"desc": ""
    				},
    				"Cap_T": {
    					"sig": "+",
    					"id": 4,
    					"desc": ""
    				},
    				"Bopaf": {
    					"sig": "+",
    					"id": 32,
    					"desc": ""
    				},
    				"BinvCre2": {
    					"sig": "+",
    					"id": 69,
    					"desc": ""
    				},
    				"Brfi010104A": {
    					"sig": "+",
    					"id": 129,
    					"desc": ""
    				},
    				"Brfi010104B": {
    					"sig": "+",
    					"id": 127,
    					"desc": ""
    				},
    				"CAP 1 1 4 3 0": {
    					"sig": "+",
    					"id": 15,
    					"desc": ""
    				},
    				"Bfdo5000": {
    					"sig": "+",
    					"id": 146,
    					"desc": ""
    				},
    				"BentcBcos": {
    					"sig": "+",
    					"id": 118,
    					"desc": ""
    				},
    				"Bdec010101": {
    					"sig": "+",
    					"id": 60,
    					"desc": ""
    				},
    				"Bdec010104": {
    					"sig": "+",
    					"id": 61,
    					"desc": ""
    				},
    				"Bdec010103": {
    					"sig": "+",
    					"id": 63,
    					"desc": ""
    				},
    				"BInvCre11112": {
    					"sig": "+",
    					"id": 79,
    					"desc": ""
    				},
    				"Bdec010102": {
    					"sig": "+",
    					"id": 62,
    					"desc": ""
    				},
    				"BBVAEMG": {
    					"sig": "+",
    					"id": 14,
    					"desc": ""
    				},
    				"Bpaf": {
    					"sig": "+",
    					"id": 31,
    					"desc": ""
    				},
    				"BA1204A": {
    					"sig": "+",
    					"id": 176,
    					"desc": ""
    				},
    				"BA1380A": {
    					"sig": "+",
    					"id": 180,
    					"desc": ""
    				},
    				"BA2142A": {
    					"sig": "+",
    					"id": 193,
    					"desc": ""
    				},
    				"BA1380B": {
    					"sig": "+",
    					"id": 181,
    					"desc": ""
    				},
    				"BA2142B": {
    					"sig": "+",
    					"id": 194,
    					"desc": ""
    				},
    				"BA1786A": {
    					"sig": "+",
    					"id": 186,
    					"desc": ""
    				},
    				"BA1314A": {
    					"sig": "+",
    					"id": 178,
    					"desc": ""
    				},
    				"BA1786B": {
    					"sig": "+",
    					"id": 187,
    					"desc": ""
    				},
    				"BA1314B": {
    					"sig": "+",
    					"id": 179,
    					"desc": ""
    				},
    				"Bfdo5300": {
    					"sig": "+",
    					"id": 150,
    					"desc": ""
    				},
    				"BinvCre2B1": {
    					"sig": "+",
    					"id": 71,
    					"desc": ""
    				},
    				"BInvCre311": {
    					"sig": "+",
    					"id": 103,
    					"desc": ""
    				},
    				"CAP_G": {
    					"sig": "+",
    					"id": 5,
    					"desc": ""
    				},
    				"Plan de cuentas": {
    					"sig": "+",
    					"id": 0,
    					"desc": ""
    				},
    				"Bpat": {
    					"sig": "+",
    					"id": 23,
    					"desc": ""
    				},
    				"Bpas": {
    					"sig": "+",
    					"id": 22,
    					"desc": ""
    				},
    				"Bcred": {
    					"sig": "+",
    					"id": 67,
    					"desc": ""
    				},
    				"Brac27": {
    					"sig": "+",
    					"id": 111,
    					"desc": ""
    				},
    				"Brac26": {
    					"sig": "+",
    					"id": 110,
    					"desc": ""
    				},
    				"Brac25": {
    					"sig": "+",
    					"id": 108,
    					"desc": ""
    				},
    				"BinvCre2B1A2": {
    					"sig": "+",
    					"id": 73,
    					"desc": ""
    				},
    				"BinvCre2B1A1": {
    					"sig": "+",
    					"id": 91,
    					"desc": ""
    				},
    				"Brac28": {
    					"sig": "+",
    					"id": 112,
    					"desc": ""
    				},
    				"Boaf": {
    					"sig": "+",
    					"id": 104,
    					"desc": ""
    				},
    				"Bdepced": {
    					"sig": "+",
    					"id": 153,
    					"desc": ""
    				},
    				"Bfop": {
    					"sig": "+",
    					"id": 48,
    					"desc": ""
    				},
    				"MXBA11121A": {
    					"sig": "+",
    					"id": 198,
    					"desc": ""
    				},
    				"BCTit": {
    					"sig": "+",
    					"id": 25,
    					"desc": ""
    				},
    				"BinvCre2B1A": {
    					"sig": "+",
    					"id": 72,
    					"desc": ""
    				},
    				"Best01": {
    					"sig": "+",
    					"id": 143,
    					"desc": ""
    				},
    				"Best02": {
    					"sig": "+",
    					"id": 144,
    					"desc": ""
    				},
    				"Bcdi01": {
    					"sig": "+",
    					"id": 36,
    					"desc": ""
    				},
    				"Brac35": {
    					"sig": "+",
    					"id": 107,
    					"desc": ""
    				},
    				"Bcdi05": {
    					"sig": "+",
    					"id": 37,
    					"desc": ""
    				},
    				"Bcdi06": {
    					"sig": "+",
    					"id": 38,
    					"desc": ""
    				},
    				"Bintm01": {
    					"sig": "+",
    					"id": 142,
    					"desc": ""
    				},
    				"Bfdo5200": {
    					"sig": "+",
    					"id": 148,
    					"desc": ""
    				},
    				"Bcdioint": {
    					"sig": "+",
    					"id": 39,
    					"desc": ""
    				},
    				"B+RVUSA": {
    					"sig": "+",
    					"id": 160,
    					"desc": ""
    				},
    				"BA2080A": {
    					"sig": "+",
    					"id": 191,
    					"desc": ""
    				},
    				"Bcdioint0204": {
    					"sig": "+",
    					"id": 47,
    					"desc": ""
    				},
    				"Bcdioint0202": {
    					"sig": "+",
    					"id": 44,
    					"desc": ""
    				},
    				"Bcdioint0203": {
    					"sig": "+",
    					"id": 46,
    					"desc": ""
    				},
    				"Bcdioint0201": {
    					"sig": "+",
    					"id": 41,
    					"desc": ""
    				},
    				"Bne": {
    					"sig": "+",
    					"id": 1,
    					"desc": ""
    				},
    				"BA2012B": {
    					"sig": "+",
    					"id": 189,
    					"desc": ""
    				},
    				"BA2012A": {
    					"sig": "+",
    					"id": 188,
    					"desc": ""
    				},
    				"BA2038A": {
    					"sig": "+",
    					"id": 190,
    					"desc": ""
    				},
    				"Bcdioint0201A": {
    					"sig": "+",
    					"id": 42,
    					"desc": ""
    				},
    				"BcajaB": {
    					"sig": "+",
    					"id": 49,
    					"desc": ""
    				},
    				"Bcarn": {
    					"sig": "+",
    					"id": 122,
    					"desc": ""
    				},
    				"Banr01": {
    					"sig": "+",
    					"id": 30,
    					"desc": ""
    				},
    				"CAP 6 0 0 0 0": {
    					"sig": "+",
    					"id": 6,
    					"desc": ""
    				},
    				"Bdec0101": {
    					"sig": "+",
    					"id": 55,
    					"desc": ""
    				},
    				"Bcdioint0202A": {
    					"sig": "+",
    					"id": 45,
    					"desc": ""
    				},
    				"BinvCre2B1A2A": {
    					"sig": "+",
    					"id": 92,
    					"desc": ""
    				},
    				"BdepEM": {
    					"sig": "+",
    					"id": 137,
    					"desc": ""
    				},
    				"BordenFid": {
    					"sig": "+",
    					"id": 17,
    					"desc": ""
    				},
    				"BA1500B": {
    					"sig": "+",
    					"id": 183,
    					"desc": ""
    				},
    				"BA1500A": {
    					"sig": "+",
    					"id": 182,
    					"desc": ""
    				},
    				"Bmargen0821": {
    					"sig": "+",
    					"id": 157,
    					"desc": ""
    				},
    				"Bfdos": {
    					"sig": "+",
    					"id": 33,
    					"desc": ""
    				},
    				"BInvCre111": {
    					"sig": "+",
    					"id": 77,
    					"desc": ""
    				},
    				"BordenInv": {
    					"sig": "+",
    					"id": 18,
    					"desc": ""
    				},
    				"CG_SBLP": {
    					"sig": "+",
    					"id": 12,
    					"desc": ""
    				},
    				"Brvdpve": {
    					"sig": "+",
    					"id": 166,
    					"desc": ""
    				},
    				"BA1500D": {
    					"sig": "+",
    					"id": 185,
    					"desc": ""
    				},
    				"Bcdioint0201A1": {
    					"sig": "+",
    					"id": 43,
    					"desc": ""
    				},
    				"BA1500C": {
    					"sig": "+",
    					"id": 184,
    					"desc": ""
    				},
    				"Brvdpvm": {
    					"sig": "+",
    					"id": 168,
    					"desc": ""
    				},
    				"Bain": {
    					"sig": "+",
    					"id": 65,
    					"desc": ""
    				},
    				"BA2100A": {
    					"sig": "+",
    					"id": 192,
    					"desc": ""
    				},
    				"BdepBocvda01": {
    					"sig": "+",
    					"id": 50,
    					"desc": ""
    				},
    				"Bac": {
    					"sig": "+",
    					"id": 21,
    					"desc": ""
    				},
    				"Bfdo5400": {
    					"sig": "+",
    					"id": 149,
    					"desc": ""
    				},
    				"Bfdo": {
    					"sig": "+",
    					"id": 134,
    					"desc": ""
    				},
    				"Bdepced_COAP": {
    					"sig": "+",
    					"id": 140,
    					"desc": ""
    				},
    				"Bmargen0844": {
    					"sig": "+",
    					"id": 159,
    					"desc": ""
    				},
    				"BInvCre253": {
    					"sig": "+",
    					"id": 99,
    					"desc": ""
    				},
    				"Bmargen0843": {
    					"sig": "+",
    					"id": 158,
    					"desc": ""
    				},
    				"Brf": {
    					"sig": "+",
    					"id": 161,
    					"desc": ""
    				},
    				"Bdepb06": {
    					"sig": "+",
    					"id": 115,
    					"desc": ""
    				},
    				"BInvCre251": {
    					"sig": "+",
    					"id": 98,
    					"desc": ""
    				},
    				"BdepBa": {
    					"sig": "+",
    					"id": 51,
    					"desc": ""
    				},
    				"Brac2801": {
    					"sig": "+",
    					"id": 113,
    					"desc": ""
    				},
    				"Bdepb07": {
    					"sig": "+",
    					"id": 117,
    					"desc": ""
    				}
    			}
    		},
    		"desc": "test"
    	}
    },
    efn        : {},
    crs        : {},
    div        : {},
    emp        : {},
    tip        : {}
  },
  Efan         : {},
  MinEfan      : {},
  olLi         : {
    Jk        : 1,
    epiActive : {
      id      :'',
      epigrafe:'',
      position:''
    }
  },
  ready        : 0
}
