import { ServiceLine, CommercialProduct, MethodologyPhase, ServiceModality, ContactProfile, ExpertiseGroup, HeroFact } from '../types';

export const defaultContactProfile: ContactProfile = {
  name: "Erika J. Vásquez",
  title: "Ingeniera Ambiental",
  roleSubtitle: "Consultora en Gestión Ambiental, Sostenibilidad y Sistemas de Gestión",
  experienceYears: 14,
  email: "erijvsa@gmail.com",
  phone: "+57 316 520 4174",
  whatsappNumber: "573165204174",
  linkedin: "https://www.linkedin.com/in/erika-vasquez-sanchez-06a35422b",
  city: "Medellín",
  country: "Colombia · Cobertura remota internacional"
};

export const serviceLines: ServiceLine[] = [
  {
    id: "gestion-ambiental",
    number: "01",
    title: "Gestión Ambiental y Cumplimiento Normativo",
    category: "Cumplimiento & Normativa",
    objective: "Fortalecer la gestión ambiental de las organizaciones mediante la identificación de obligaciones, brechas, riesgos y oportunidades de mejora, facilitando el cumplimiento y el seguimiento sistemático.",
    services: [
      {
        id: "1.1",
        title: "Diagnóstico de gestión ambiental",
        description: "Evaluación del estado actual de la gestión ambiental de la organización frente a sus procesos, actividades, requisitos aplicables y prácticas implementadas.",
        includes: [
          "Revisión documental exhaustiva",
          "Entrevistas y mesas de trabajo con responsables",
          "Revisión técnica de procesos y actividades",
          "Identificación de aspectos ambientales relevantes",
          "Mapeo y priorización de brechas",
          "Priorización de oportunidades de mejora",
          "Informe técnico de diagnóstico y plan de acción"
        ]
      },
      {
        id: "1.2",
        title: "Identificación y evaluación de requisitos legales ambientales",
        description: "Apoyo técnico integral para identificar, analizar y evaluar los requisitos ambientales aplicables a una organización, proyecto o actividad.",
        includes: [
          "Identificación de normativa nacional, regional y sectorial",
          "Análisis de aplicabilidad y periodicidad de obligaciones",
          "Estructuración de matriz de requisitos legales ambientales",
          "Evaluación de conformidad y evidencia de cumplimiento",
          "Identificación de brechas de cumplimiento legal",
          "Plan de acción preventivo y correctivo con seguimiento"
        ]
      },
      {
        id: "1.3",
        title: "Evaluación de cumplimiento ambiental",
        description: "Evaluación estructurada del nivel de cumplimiento de las obligaciones ambientales y de los controles implementados en campo y planta.",
        deliverables: [
          "Lista de verificación y protocolo de inspección",
          "Matriz de cumplimiento consolidada",
          "Informe ejecutivo de hallazgos y evidencias",
          "Priorización de riesgos legales y operacionales",
          "Plan de mejoramiento con cronograma de cierre"
        ]
      },
      {
        id: "1.4",
        title: "Programas de gestión ambiental",
        description: "Diseño o actualización de programas ambientales técnicos de acuerdo con las características y metas de cada organización.",
        examples: [
          "Gestión integral de residuos",
          "Uso eficiente y ahorro de agua (PUEAA)",
          "Uso eficiente y ahorro de energía",
          "Emisiones atmosféricas y fuentes fijas/móviles",
          "Manejo seguro de sustancias químicas",
          "Educación y sensibilización ambiental",
          "Protección de biodiversidad y compensaciones",
          "Movilidad sostenible y consumo responsable"
        ]
      }
    ]
  },
  {
    id: "sistemas-iso",
    number: "02",
    title: "Sistemas de Gestión ISO",
    category: "Normas ISO & SIG",
    objective: "Apoyar a las organizaciones en la implementación, mantenimiento, actualización y mejora de Sistemas de Gestión, especialmente en los componentes ambientales e integrados.",
    services: [
      {
        id: "2.1",
        title: "Diagnóstico frente a normas ISO",
        description: "Evaluación del estado del sistema frente a los requisitos de la norma seleccionada para definir la brecha y hoja de ruta.",
        examples: [
          "ISO 14001 – Gestión ambiental",
          "ISO 9001 – Gestión de la calidad",
          "ISO 45001 – Seguridad y salud en el trabajo",
          "ISO 31000 – Gestión del riesgo"
        ]
      },
      {
        id: "2.2",
        title: "Implementación y actualización de ISO 14001",
        description: "Apoyo técnico integral para implementar desde cero o fortalecer el Sistema de Gestión Ambiental (SGA).",
        includes: [
          "Contexto de la organización y partes interesadas",
          "Matriz de aspectos e impactos ambientales significativos",
          "Requisitos legales y otros requisitos aplicables",
          "Gestión de riesgos y oportunidades operacionales",
          "Objetivos y programas de gestión ambiental",
          "Control de información documentada y procedimientos",
          "Seguimiento, medición, análisis y evaluación",
          "Auditoría interna, revisión por la dirección y mejora continua"
        ]
      },
      {
        id: "2.3",
        title: "Integración de Sistemas de Gestión (HSEQ)",
        description: "Apoyo para integrar requisitos de calidad, ambiente y SST bajo una estructura común de alto nivel.",
        includes: [
          "Política integrada y mapa de procesos unificado",
          "Gestión de riesgos integrada bajo ISO 31000",
          "Control documental y operacional simplificado",
          "Tableros de indicadores integrados",
          "Auditorías integradas, control de no conformidades y mejora"
        ]
      },
      {
        id: "2.4",
        title: "Auditorías internas y preparación",
        description: "Acompañamiento en el ciclo completo de auditorías internas para verificar el grado de madurez del sistema.",
        includes: [
          "Plan y programa de auditoría",
          "Elaboración de listas de verificación personalizadas",
          "Ejecución de auditorías internas rigurosas",
          "Informe de hallazgos, fortalezas y debilidades",
          "Análisis de causas y seguimiento al cierre de acciones"
        ]
      },
      {
        id: "2.5",
        title: "Análisis de no conformidades y mejora continua",
        description: "Aplicación de herramientas estructuradas para determinar causas raíz y establecer acciones verdaderamente eficaces.",
        tools: ["5 Porqués", "Diagrama causa-efecto (Ishikawa)", "Análisis de brechas", "Ciclo PHVA", "Planes de acción con responsables y métricas"]
      }
    ]
  },
  {
    id: "residuos-circular",
    number: "03",
    title: "Residuos y Economía Circular",
    category: "Economía Circular & Recursos",
    objective: "Pasar de una gestión enfocada exclusivamente en disposición final hacia una gestión orientada a la prevención, aprovechamiento, valorización, eficiencia de recursos y generación de valor económico.",
    highlight: "Producto diferencial: Diagnóstico de residuos + Oportunidades de circularidad + Valoración preliminar de costos y ahorros.",
    services: [
      {
        id: "3.1",
        title: "Diagnóstico integral de gestión de residuos",
        description: "Evaluación integral de la gestión actual de residuos ordinarios, peligrosos (RESPEL) y especiales.",
        includes: [
          "Identificación de fuentes y actividades generadoras",
          "Tipificación y caracterización cuantitativa",
          "Revisión de prácticas de separación en la fuente",
          "Condiciones de almacenamiento y centros de acopio",
          "Logística de recolección interna y transporte",
          "Trazabilidad de tratamiento, aprovechamiento y disposición final",
          "Gestión documental, manifiestos e indicadores de generación"
        ]
      },
      {
        id: "3.2",
        title: "Diseño y actualización de programas de residuos (PGR)",
        description: "Desarrollo de programas técnicos adaptados a la escala y actividad de la organización.",
        includes: [
          "Objetivos y metas cuantificables",
          "Definición de responsabilidades operativas",
          "Estrategias de minimización y separación",
          "Protocolos de contingencia y respuesta a derrames",
          "Indicadores de reducción, aprovechamiento y disposición"
        ]
      },
      {
        id: "3.3",
        title: "Estrategias de economía circular",
        description: "Identificación de oportunidades prácticas para reducir el consumo de recursos y mantener materiales en ciclos de valor.",
        includes: [
          "Reducción en el consumo de materias primas",
          "Estrategias de reutilización, reparación y recirculación",
          "Aprovechamiento y valorización de subproductos",
          "Sustitución de insumos por alternativas de menor impacto",
          "Ecodiseño y nuevos modelos de servitización"
        ]
      },
      {
        id: "3.4",
        title: "Simbiosis industrial y valorización económica",
        description: "Conexión estratégica entre organizaciones para convertir residuos de un proceso en insumos valiosos para otro, en casos que aplique.",
        includes: [
          "Mapeo de flujos de salida con potencial de aprovechamiento",
          "Cálculo de costos actuales de transporte y disposición final",
          "Cuantificación de pérdidas por mermas de materias primas",
          "Identificación de potenciales ingresos por venta de subproductos",
          "Estimación de ahorros netos y retorno de inversión"
        ]
      }
    ]
  },
  {
    id: "cambio-climatico",
    number: "04",
    title: "Cambio Climático y Huella de Carbono",
    category: "Gestión Climática & Descarbonización",
    objective: "Cuantificar las emisiones de Gases de Efecto Invernadero (GEI) y convertir los datos obtenidos en herramientas para la estrategia y resiliencia climática de la organización.",
    services: [
      {
        id: "4.1",
        title: "Inventario de Gases de Efecto Invernadero (GEI)",
        description: "Elaboración de inventarios organizacionales bajo estándares internacionales (GHG Protocol / ISO 14064).",
        includes: [
          "Definición de límites organizacionales y de consolidación",
          "Definición de límites operacionales (Alcances 1, 2 y 3 aplicables)",
          "Identificación y categorización de fuentes de emisión fijas y móviles",
          "Recopilación y depuración de datos de actividad",
          "Selección rigurosa de factores de emisión oficiales",
          "Cálculo estandarizado en toneladas de CO2 equivalente",
          "Consolidación y análisis de incertidumbre"
        ]
      },
      {
        id: "4.2",
        title: "Cálculo de huella de carbono organizacional",
        description: "Estimación técnica y rigurosa de la huella de carbono para organizaciones de cualquier sector económico.",
        includes: [
          "Emisiones directas: combustión fija, flota propia, fugas de refrigerantes (Alcance 1)",
          "Emisiones indirectas por consumo de energía eléctrica y vapor (Alcance 2)",
          "Emisiones relevantes de la cadena de valor (Alcance 3)",
          "Indicadores de intensidad de emisiones (tCO2e/producción, tCO2e/empleado)",
          "Identificación y ranking de focos críticos de emisión"
        ]
      },
      {
        id: "4.3",
        title: "Documentación metodológica y reporte técnico",
        description: "Desarrollo del informe técnico con sustento auditable para presentación ante juntas directivas, clientes o certificadoras.",
        deliverables: [
          "Informe metodológico completo con fuentes y factores",
          "Memoria de cálculo detallada en Excel / herramienta digital",
          "Resumen ejecutivo de resultados e interpretaciones",
          "Conclusiones y hoja de ruta de mitigación"
        ]
      },
      {
        id: "4.4",
        title: "Plan de gestión y reducción de emisiones",
        description: "Transformación del inventario en acciones operacionales concretas de reducción y eficiencia.",
        includes: [
          "Priorización de medidas costo-efectivas de mitigación",
          "Metas de reducción a corto, mediano y largo plazo",
          "Asignación de responsables y cronograma de implementación",
          "Indicadores de seguimiento y verificación de avances"
        ]
      },
      {
        id: "4.5",
        title: "Cambio climático y Sistemas de Gestión",
        description: "Integración de las consideraciones climáticas en la matriz de riesgos, política, objetivos y toma de decisiones de la empresa."
      }
    ]
  },
  {
    id: "programas-documentacion",
    number: "05",
    title: "Programas, Planes y Documentación Ambiental",
    category: "Ingeniería & Documentación",
    objective: "Desarrollar documentación técnica rigurosa que permita a las organizaciones implementar, controlar, medir y demostrar fehacientemente su gestión ambiental.",
    services: [
      {
        id: "5.1",
        title: "Diseño de programas ambientales a la medida",
        description: "Estructuración de programas adaptados a los aspectos ambientales significativos de la operación.",
        examples: [
          "Programa de gestión integral de residuos",
          "Programa de ahorro y uso eficiente de agua y energía",
          "Programa de control de emisiones y calidad del aire",
          "Programa de manejo de sustancias químicas y RESPEL",
          "Programa de biodiversidad y revegetalización",
          "Programa de movilidad sostenible y compras verdes"
        ]
      },
      {
        id: "5.2",
        title: "Planes, procedimientos e instructivos técnicos",
        description: "Construcción de instrumentos estandarizados para uso operativo en campo y oficina.",
        deliverables: [
          "Planes de Manejo Ambiental (PMA)",
          "Procedimientos operativos estandarizados (POE)",
          "Instructivos y protocolos de trabajo seguro ambiental",
          "Formatos de registro y listas de chequeo",
          "Matrices de control operacional y planes de seguimiento"
        ]
      },
      {
        id: "5.3",
        title: "Sistemas de indicadores de desempeño ambiental",
        description: "Diseño de métricas cuantitativas para evaluar consumos, eficiencias, tasas de aprovechamiento y cumplimiento normativo.",
        includes: [
          "Indicadores de eco-eficiencia de recursos (agua, kWh)",
          "Indicadores de generación y valorización de residuos",
          "Indicadores de cumplimiento de requisitos legales",
          "Fichas técnicas de indicadores con periodicidad y fórmulas"
        ]
      },
      {
        id: "5.4",
        title: "Informes ambientales ejecutivos y técnicos",
        description: "Apoyo en la consolidación de informes de gestión periódicos para autoridades ambientales, interventorías o clientes.",
        deliverables: [
          "Informes de Cumplimiento Ambiental (ICA)",
          "Informes ejecutivos para dirección",
          "Informes periódicos de indicadores y seguimiento",
          "Informes técnicos de auditoría y descargos"
        ]
      }
    ]
  },
  {
    id: "riesgo-sostenibilidad-digital",
    number: "06",
    title: "Gestión del Riesgo, Sostenibilidad y Transformación Digital",
    category: "Riesgos, ESG & Datos",
    objective: "Integrar tres capacidades complementarias: gestión del riesgo bajo ISO 31000, estructuración de sostenibilidad corporativa ESG y automatización digital de la información ambiental.",
    highlight: "Producto diferencial: Gestión ambiental basada en datos — convertir registros ambientales dispersos en tableros organizados para seguimiento y decisión ejecutiva.",
    services: [
      {
        id: "6.1",
        title: "Gestión del riesgo bajo enfoque ISO 31000",
        description: "Identificación, análisis, evaluación y tratamiento de riesgos ambientales, climáticos, operacionales, legales y reputacionales.",
        includes: [
          "Diseño de matrices de riesgos organizacionales",
          "Evaluación de probabilidad e impacto con criterios calibrados",
          "Identificación y valoración de controles existentes",
          "Formulación de planes de tratamiento y mitigación",
          "Seguimiento periódico a la eficacia de los controles"
        ]
      },
      {
        id: "6.2",
        title: "Sostenibilidad corporativa y criterios ESG",
        description: "Estructuración de iniciativas y estrategias que conectan la gestión ambiental con el desempeño sostenible del negocio.",
        includes: [
          "Diagnóstico de sostenibilidad organizacional",
          "Identificación y priorización de asuntos materiales",
          "Estructuración de metas ambientales y de sostenibilidad",
          "Apoyo en iniciativas de valor compartido y economía circular",
          "Alineación con estándares de reporte y requerimientos de clientes"
        ]
      },
      {
        id: "6.3",
        title: "Transformación digital de la gestión ambiental",
        description: "Sustitución de formatos en papel y registros manuales por herramientas digitales integradas de fácil consulta.",
        tools: ["Excel Avanzado & Power Query", "Power BI (Tableros interactivos)", "Power Automate (Flujos de alerta)", "Power Apps (Formularios móviles)", "SharePoint (Repositorio documental)"],
        deliverables: [
          "Formularios digitales para captura de datos en campo",
          "Bases de datos consolidadas y automatizadas",
          "Tableros de control en Power BI para dirección y gerencia",
          "Alertas automáticas de vencimiento de obligaciones legales",
          "Flujos de aprobación digital y seguimiento a planes de acción"
        ]
      }
    ]
  }
];

export const commercialProducts: CommercialProduct[] = [
  {
    id: "prod-1",
    number: 1,
    title: "Diagnóstico Ambiental 360°",
    subtitle: "Diagnóstico + Cumplimiento + Riesgos + Oportunidades",
    description: "Evaluación integral del estado de la gestión ambiental de la organización, identificando brechas críticas, nivel de cumplimiento normativo y una hoja de ruta priorizada.",
    deliverables: [
      "Informe técnico de diagnóstico situacional",
      "Matriz de brechas y nivel de madurez",
      "Evaluación preliminar de requisitos legales",
      "Matriz de riesgos y priorización de acciones",
      "Plan de acción con responsables y cronograma"
    ],
    targetAudience: "Empresas que inician formalización ambiental o requieren auditoría de diagnóstico",
    badge: "Más Solicitado",
    estimatedTimeline: "3 a 4 semanas"
  },
  {
    id: "prod-2",
    number: 2,
    title: "Gestión de Residuos + Economía Circular",
    subtitle: "Diagnóstico + Aprovechamiento + Valoración Económica",
    description: "Transforma la gestión de residuos de un centro de costos en una oportunidad de valorización, eficiencia de recursos y generación de ahorros cuantificables.",
    deliverables: [
      "Diagnóstico integral de generación y flujos de residuos",
      "Programa técnico de gestión de residuos actualizado",
      "Identificación de materiales valorizables y oportunidades de sustitución",
      "Análisis preliminar de costos de disposición vs ahorros potenciales",
      "Mapeo de oportunidades de simbiosis industrial"
    ],
    targetAudience: "Empresas con alto volumen de residuos, plantas de producción e infraestructura",
    badge: "Retorno de Inversión",
    estimatedTimeline: "4 semanas"
  },
  {
    id: "prod-3",
    number: 3,
    title: "Huella de Carbono + Plan Climático",
    subtitle: "Cuantificación + Análisis + Estrategia de Reducción",
    description: "Medición rigurosa de emisiones de GEI organizacionales bajo GHG Protocol y estructuración de un plan de descarbonización práctico y viable.",
    deliverables: [
      "Inventario organizacional de GEI (Alcance 1 y 2, Alcance 3 clave)",
      "Cálculo de huella de carbono y memoria metodológica auditable",
      "Indicadores de intensidad de emisiones",
      "Identificación de fuentes críticas y oportunidades de reducción",
      "Plan de acción climática con metas e indicadores de seguimiento"
    ],
    targetAudience: "Organizaciones comprometidas con metas ESG o con requerimientos de clientes",
    badge: "Estratégico ESG",
    estimatedTimeline: "4 a 6 semanas"
  },
  {
    id: "prod-4",
    number: 4,
    title: "Diagnóstico y Preparación ISO 14001",
    subtitle: "Evaluación del SGA + Hoja de Ruta para Certificación",
    description: "Evaluación minuciosa del Sistema de Gestión Ambiental frente a cada cláusula de la norma ISO 14001:2015 para alinear procesos hacia la certificación o auditoría externa.",
    deliverables: [
      "Diagnóstico cláusula por cláusula frente a ISO 14001:2015",
      "Matriz de brechas y nivel de conformidad",
      "Priorización de aspectos e impactos ambientales",
      "Plan de acción para cierre de hallazgos",
      "Recomendaciones técnicas de documentación e implementación"
    ],
    targetAudience: "Empresas en proceso de certificación o renovación de sello ISO 14001",
    estimatedTimeline: "3 a 4 semanas"
  },
  {
    id: "prod-5",
    number: 5,
    title: "Programa Ambiental a la Medida",
    subtitle: "Diseño Operativo + Indicadores + Herramientas",
    description: "Diseño integral de un programa ambiental específico (Residuos, Agua, Energía, Emisiones o Químicos) listo para ser aplicado por los equipos de campo.",
    deliverables: [
      "Diagnóstico focalizado del aspecto ambiental",
      "Documento del programa con objetivos, metas y actividades",
      "Fichas de indicadores y fórmulas de medición",
      "Procedimientos operativos e instructivos de campo",
      "Formatos de registro y cronograma de seguimiento"
    ],
    targetAudience: "Empresas con compromisos de licencia ambiental o metas de ecoeficiencia",
    estimatedTimeline: "2 a 3 semanas"
  },
  {
    id: "prod-6",
    number: 6,
    title: "Matriz Legal + Evaluación de Cumplimiento",
    subtitle: "Obligaciones + Evaluación + Plan Preventivo",
    description: "Identificación personalizada de la normatividad ambiental aplicable a la actividad, evaluación objetiva de evidencias de cumplimiento y plan de blindaje preventivo.",
    deliverables: [
      "Matriz de requisitos legales ambientales clasificada por autoridad",
      "Evaluación in situ o documental de evidencias de cumplimiento",
      "Identificación y priorización de brechas de incumplimiento",
      "Plan de acción con recomendaciones preventivas y correctivas",
      "Protocolo para actualización periódica de la matriz"
    ],
    targetAudience: "Gerencias legales, de operaciones o HSEQ que buscan mitigar riesgos sancionatorios",
    badge: "Blindaje Legal",
    estimatedTimeline: "3 semanas"
  },
  {
    id: "prod-7",
    number: 7,
    title: "Riesgos Organizacionales y Ambientales",
    subtitle: "Enfoque ISO 31000 + Valoración + Controles",
    description: "Estructuración de la gestión de riesgos para anticipar contingencias ambientales, climáticas, operacionales y reputacionales que impacten la continuidad.",
    deliverables: [
      "Metodología adaptada de gestión del riesgo bajo ISO 31000",
      "Matriz integral de riesgos ambientales y climáticos",
      "Evaluación y calificación de controles existentes",
      "Plan de tratamiento de riesgos residuales",
      "Indicadores de seguimiento a la efectividad de controles"
    ],
    targetAudience: "Organizaciones de cualquier sector que busquen anticipar riesgos y fortalecer su continuidad operacional",
    estimatedTimeline: "3 semanas"
  },
  {
    id: "prod-8",
    number: 8,
    title: "Digitalización de la Gestión Ambiental",
    subtitle: "Automatización + Dashboards Power BI + Datos Centralizados",
    description: "Modernización tecnológica de los registros ambientales: olvídate de carpetas dispersas y planillas de Excel desactualizadas para pasar a tableros ejecutivos.",
    deliverables: [
      "Formularios digitales para captura ágil de información (Power Apps / Forms)",
      "Bases de datos estructuradas en SharePoint o entorno corporativo",
      "Automatizaciones de alertas y notificaciones con Power Automate",
      "Tablero de control interactivo en Power BI con KPIs en tiempo real",
      "Capacitación al equipo interno en el uso de las herramientas"
    ],
    targetAudience: "Firmas consultoras y áreas HSEQ con altos volúmenes de datos que buscan eficiencia",
    badge: "Transformación Digital",
    estimatedTimeline: "3 a 5 semanas"
  }
];

export const methodologyPhases: MethodologyPhase[] = [
  {
    number: "01",
    title: "Entender",
    objective: "Comprender a fondo el contexto organizacional, la necesidad técnica y el resultado esperado del proyecto.",
    activities: [
      "Reunión de alineación inicial con líderes de proceso",
      "Identificación y delimitación del problema o desafío",
      "Definición precisa del alcance y metas",
      "Mapeo de partes interesadas relevantes",
      "Recopilación y revisión de información previa disponible"
    ],
    result: "Alcance formalizado, requerimientos claros y plan de trabajo acordado."
  },
  {
    number: "02",
    title: "Diagnosticar",
    objective: "Evaluar la situación real actual, levantar evidencias y determinar las brechas frente al estándar requerido.",
    activities: [
      "Revisión documental técnica y de registros históricos",
      "Análisis de procesos, entradas, salidas e interacciones",
      "Revisión minuciosa de requisitos normativos y contractuales",
      "Entrevistas estructuradas con responsables operativos",
      "Identificación de riesgos y oportunidades no aprovechadas"
    ],
    result: "Diagnóstico situacional técnico y matriz de brechas priorizada."
  },
  {
    number: "03",
    title: "Diseñar",
    objective: "Construir la solución técnica a la medida, asegurando que sea práctica, ejecutable y alineada a los objetivos.",
    activities: [
      "Diseño metodológico y estructuración de herramientas",
      "Desarrollo de documentos, programas y procedimientos",
      "Diseño de matrices de requisitos, riesgos o indicadores",
      "Definición de fórmulas de cálculo y fuentes de verificación",
      "Priorización de intervenciones y cronogramas de avance"
    ],
    result: "Propuesta técnica estructurada, herramientas diseñadas y documentos listos."
  },
  {
    number: "04",
    title: "Implementar",
    objective: "Llevar la solución diseñada a la realidad operativa, asegurando la apropiación por parte del equipo.",
    activities: [
      "Acompañamiento técnico en la puesta en marcha",
      "Socialización y sensibilización con los involucrados",
      "Capacitación técnica en el uso de formatos o tableros",
      "Despliegue de herramientas digitales en operación",
      "Ajustes finos de acuerdo con la retroalimentación de campo"
    ],
    result: "Herramientas en uso efectivo y procesos incorporados en la rutina diaria."
  },
  {
    number: "05",
    title: "Medir",
    objective: "Evaluar resultados y desempeño cuantitativo frente a las metas establecidas.",
    activities: [
      "Seguimiento sistemático a los indicadores definidos",
      "Evaluación periódica del avance hacia las metas",
      "Análisis de datos, tendencias y desviaciones",
      "Monitoreo del nivel de cumplimiento legal y operativo",
      "Generación de reportes ejecutivos para la dirección"
    ],
    result: "Información objetiva, clara y confiable para la toma de decisiones."
  },
  {
    number: "06",
    title: "Mejorar",
    objective: "Cerrar brechas persistentes, solucionar causas raíz y fortalecer el ciclo de mejora continua.",
    activities: [
      "Análisis de causas de desviaciones o no conformidades",
      "Estructuración de planes de acción correctivos y preventivos",
      "Optimización continua de procesos y eliminación de reprocesos",
      "Actualización periódica de la documentación técnica",
      "Seguimiento riguroso al cierre efectivo de acciones"
    ],
    result: "Sistemas de gestión maduros, riesgos controlados y mejora continua consolidada."
  }
];

export const serviceModalities: ServiceModality[] = [
  {
    id: "por-proyecto",
    title: "Consultoría por Proyecto",
    subtitle: "Alcance, cronograma y entregables cerrados",
    description: "Desarrollo integral de un proyecto con entregables técnicos definidos y garantía de calidad técnica en cada fase.",
    idealFor: [
      "Diagnósticos ambientales integrales",
      "Estructuración o actualización de programas",
      "Cálculo y reporte de huella de carbono",
      "Implementación de requisitos ISO 14001",
      "Elaboración de matrices legales y de riesgos"
    ]
  },
  {
    id: "apoyo-b2b",
    title: "Apoyo Técnico Especializado B2B",
    subtitle: "Para Firmas Consultoras de Ingeniería & HSEQ",
    description: "Alianza flexible para complementar equipos de firmas consultoras que requieren sumar capacidad técnica senior sin incurrir en costos fijos de nómina.",
    idealFor: [
      "Licitaciones y proyectos que requieren perfil especialista",
      "Sobrecarga temporal de entregables en la firma",
      "Desarrollo de capítulos ambientales específicos",
      "Investigación normativa y análisis especializado"
    ],
    roleExamples: [
      "Consultora especialista ambiental",
      "Líder de componente ambiental en proyectos de infraestructura",
      "Responsable de entregables técnicos y memorias de cálculo",
      "Apoyo en auditorías internas y diagnósticos independientes"
    ]
  },
  {
    id: "bolsa-horas",
    title: "Bolsa de Horas Técnica",
    subtitle: "Acompañamiento flexible y continuo",
    description: "Paquete mensual de horas para empresas o consultoras que requieren resolución ágil de consultas, revisiones técnicas y soporte puntual.",
    idealFor: [
      "Revisión y validación de documentos antes de entrega",
      "Consultas normativas y de aplicabilidad legal",
      "Acompañamiento en reuniones técnicas o con clientes",
      "Revisión de informes periódicos de cumplimiento (ICA)"
    ]
  },
  {
    id: "remoto",
    title: "Servicio 100% Remoto",
    subtitle: "Eficiencia y cobertura sin barreras geográficas",
    description: "Desarrollo ágil de todas las actividades técnicas ejecutables virtualmente con herramientas colaborativas en la nube.",
    idealFor: [
      "Análisis documental e investigación normativa",
      "Modelación y cálculo de huella de carbono",
      "Diseño de matrices, indicadores y tableros Power BI",
      "Elaboración de informes ejecutivos y planes de acción"
    ]
  }
];

export const b2bSynergy = {
  consultoraFirm: [
    "Relación comercial y contractual directa con el cliente final",
    "Dirección comercial y gerencia general del proyecto",
    "Coordinación contractual, facturación y gestión administrativa",
    "Posicionamiento de marca y apertura de oportunidades"
  ],
  specializedConsultant: [
    "Conocimiento técnico senior y metodologías probadas",
    "Desarrollo riguroso de componentes y entregables técnicos",
    "Investigación normativa actualizada y análisis de aplicabilidad",
    "Elaboración de matrices, herramientas e indicadores",
    "Acompañamiento técnico en auditorías y mesas de trabajo"
  ],
  result: "Una colaboración sinérgica y flexible que permite a la firma consultora ampliar su capacidad de ejecución y oferta de servicios sin incorporar permanentemente nuevos perfiles a su estructura de costos."
};

export const differentialPillars = [
  {
    name: "Técnico",
    description: "Soluciones sustentadas en el análisis riguroso de datos, normativa vigente, procesos operativos y el contexto real de la empresa."
  },
  {
    name: "Práctico",
    description: "Documentos, matrices y herramientas diseñados para ser utilizados en la operación cotidiana y no para quedarse archivados en un estante."
  },
  {
    name: "Orientado a Resultados",
    description: "Cada intervención define indicadores verificables, metas tangibles y planes de acción con responsables y fechas."
  },
  {
    name: "Adaptable",
    description: "Metodologías flexibles que se ajustan al tamaño de la organización, sector económico, madurez del sistema y presupuesto disponible."
  },
  {
    name: "Basado en Mejora Continua",
    description: "Estructura bajo la lógica del ciclo PHVA (Planear-Hacer-Verificar-Actuar) para garantizar sostenibilidad en el tiempo."
  }
];

export const clientSegments = [
  {
    title: "Firmas Consultoras",
    desc: "Empresas de ingeniería y consultoría que requieren ampliar su capacidad técnica con una profesional especializada para liderar componentes ambientales de proyectos."
  },
  {
    title: "Empresas Privadas",
    desc: "Organizaciones de diversos sectores que buscan formalizar, fortalecer o elevar el desempeño de su gestión ambiental, sostenibilidad o sistemas de gestión."
  },
  {
    title: "Organizaciones de Cualquier Sector",
    desc: "Empresas de todos los sectores económicos que buscan fortalecer su gestión ambiental, cumplimiento normativo, sostenibilidad y gestión del riesgo con enfoque técnico especializado."
  },
  {
    title: "Empresas en Certificación o Mejora",
    desc: "Organizaciones en proceso de implementación o renovación de certificaciones ISO 9001, ISO 14001, ISO 45001 o auditorías de clientes."
  }
];

/** Cifras de la franja de confianza, bajo la portada. */
export const heroFacts: HeroFact[] = [
  { value: "14+", label: "Años de experiencia en gestión ambiental y SIG" },
  { value: "4", label: "Normas ISO de referencia: 9001, 14001, 45001 y 31000" },
  { value: "6", label: "Líneas de servicio técnico especializado" },
  { value: "100%", label: "Modalidad remota, presencial o por proyecto" }
];

/** Áreas de experiencia del perfil profesional, agrupadas para lectura rápida. */
export const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "Gestión ambiental",
    items: [
      "Desempeño y cumplimiento ambiental",
      "Requisitos legales aplicables",
      "Programas y documentación ambiental",
      "Gestión de residuos y economía circular"
    ]
  },
  {
    title: "Sistemas de gestión",
    items: [
      "ISO 9001, ISO 14001 e ISO 45001",
      "Sistemas Integrados de Gestión (HSEQ)",
      "Auditorías internas y planes de mejora",
      "Indicadores y análisis de desempeño"
    ]
  },
  {
    title: "Clima y riesgo",
    items: [
      "Huella de carbono e inventarios de GEI",
      "Cambio climático y riesgo climático",
      "Gestión del riesgo bajo ISO 31000",
      "Sostenibilidad corporativa y ESG"
    ]
  },
  {
    title: "Datos y automatización",
    items: [
      "Excel avanzado y Power Query",
      "Tableros en Power BI",
      "Power Automate y Power Apps",
      "SharePoint y bases de datos ambientales"
    ]
  }
];

/** Respuesta a la pregunta que se hace una firma consultora antes de contratar. */
export const valueForFirms: string[] = [
  "Capacidad técnica especializada para complementar equipos de proyecto",
  "Desarrollo de productos y entregables ambientales",
  "Investigación y análisis de requisitos normativos",
  "Diagnósticos y evaluaciones de cumplimiento",
  "Diseño y actualización de programas y planes ambientales",
  "Matrices, procedimientos, indicadores y herramientas de seguimiento",
  "Cálculo y documentación de huella de carbono",
  "Automatización y visualización de información ambiental"
];

/** Ecuación del diferencial profesional. */
export const differentialEquation: string[] = [
  "Ambiente",
  "Cumplimiento",
  "Riesgo",
  "Cambio climático",
  "Sostenibilidad",
  "Datos"
];

export const differentialOutcomes: string[] = [
  "Cumplir requisitos y reducir riesgos sancionatorios",
  "Mejorar procesos y optimizar el uso de recursos",
  "Medir resultados con indicadores verificables",
  "Identificar oportunidades de ahorro y valorización",
  "Prepararse para nuevas exigencias ambientales",
  "Tomar decisiones basadas en información confiable"
];
