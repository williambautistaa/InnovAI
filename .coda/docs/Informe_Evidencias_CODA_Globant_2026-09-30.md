# Informe de Evidencias — Trabajo con CODA (IA Agéntica)

**Presentado a:** Globant
**Autor:** William Bautista
**Fecha:** 2026-09-30
**Alcance:** Evidencias de colaboración estructurada con IA (CODA) en 5 dimensiones: Interaction, Evaluation, Refinement, Operationalization y Judgement.

---

## Resumen Ejecutivo

Durante este periodo se construyó, con CODA como copiloto de trabajo, un **framework agéntico de innovación** (6 skills globales derivadas de dos manuales de entrenamiento propios) y se desplegó el **Delivery Adaptive Framework 2.0** de Globant (4 plugins, 21 skills de gestión de proyectos). Además, se ejecutó un caso real end-to-end (proyecto PodcastHumanAI) y se estableció un plan de formación PM+CODA en un repositorio de práctica.

**Cifras clave:**
- 6 skills de innovación creadas y versionadas (innovation-empathize, define, ideate, prototype-test, cycle, value-feasibility)
- 4 plugins / 21 skills del Delivery Adaptive Framework 2.0 (g-d-project-startup, g-d-solutioning, g-d-iterative-building, g-di-discovery)
- 1 ejecución real documentada con paquete JSON de handoff (proyecto PodcastHumanAI)
- 1 extensión de CODA desarrollada (tool `word_count` + slash command)
- 1 servidor MCP propio configurado (google-workspace): conecta CODA con las herramientas de trabajo (Gmail, Drive, Calendar, Docs, Sheets, Slides, Chat) y habilita flujos autónomos de extremo a extremo
- 1 plan de formación estructurado en 11 lecciones (TRAINING_PLAN.md)

---

## 1. Interaction — Colaboración estructurada e iterativa con IA

**Principio demostrado:** la colaboración no fue conversacional libre, sino estructurada por contratos de interacción explícitos.

| Evidencia | Descripción | Ubicación |
|---|---|---|
| Modo step-by-step con Refinement Window | Cada skill de innovación define un flujo obligatorio: el agente genera un borrador, se detiene y abre una ventana de refinamiento donde el usuario revisa, cuestiona, corrige y valida antes de continuar. | `~/.coda/skills/innovation-*/SKILL.md` (Step 1 y Step 7 en cada skill) |
| Kick-off con preguntas de gobernanza | El orquestador innovation-cycle inicia siempre con 2 preguntas obligatorias: modo de ejecución (step-by-step vs autonomous) y Project ID para gobernanza de archivos. | `innovation-cycle/SKILL.md`, Step 1 |
| Filosofía Human-in-the-Loop | El framework declara explícitamente: "AI provides structure, insight, acceleration, and scalability; humans keep strategic judgment". | `innovation-cycle/SKILL.md`, Core philosophy |
| Regla de idioma bilingüe | Todas las skills detectan el idioma del usuario (EN/ES) y conducen toda la interacción y entregables en ese idioma. | Todas las skills, sección Language Rule |
| Aprendizaje iterativo PM+CODA | Plan de formación en 11 lecciones con tracker de progreso, diseñado para sesiones iterativas reanudables ("Continue my training — where were we?"). | `sample-repo/TRAINING_PLAN.md` |
| Colaboración con trazabilidad de contribuidores | El paquete JSON de la ejecución real registra `contributors: ["william.bautista", "agent"]`, evidenciando co-autoría humano-IA. | `EmpathizeAgent_PodcastHumanAI_V1_2026-09-25.json`, metadata |

**Conclusión 1:** cada interacción con CODA siguió un protocolo definido (modo → borrador → refinamiento → validación → outputs), con el humano conservando el control estratégico en cada ciclo.

---

## 2. Evaluation — Evaluación explícita y outputs de validación

**Principio demostrado:** toda salida de la IA fue sometida a criterios de evaluación explícitos, cuantitativos y verificables.

| Evidencia | Descripción | Ubicación |
|---|---|---|
| 3 fórmulas cuantitativas con reglas doradas | El agente de valor/factibilidad calcula: (1) Tiempo ahorrado = TiMa − (tiempo IA + revisión humana); (2) Ahorro económico = costo manual − costo total IA; (3) Valor neto de innovación. Cada fórmula tiene una golden rule verificable (resultado > 0). | `innovation-value-feasibility/SKILL.md`, Step 6 |
| Veredictos explícitos y clasificados | Toda evaluación termina en un veredicto clasificado: VIABLE & RENTABLE / CONDITIONAL / NOT VIABLE, con el parámetro exacto que falla si es condicional. | `innovation-value-feasibility/SKILL.md`, Step 7 |
| Puntajes NUF en ideación | Las ideas se evalúan con el framework NUF (New/Useful/Feasible) antes de seleccionar el top-3 para MVP. | `innovation-ideate/SKILL.md` |
| Nivel de confianza por insight | Cada tarjeta de insight lleva un campo `confidence` (0.0–1.0) basado en la fuerza de la evidencia, y `severity` (low/med/high). | `innovation-empathize/SKILL.md`, Step 6; ejecución real: INS-1 a INS-7 con confidence 0.7–0.9 |
| KPIs As-Is → To-Be | La etapa Define vincula cada problema a KPIs medibles con valores de línea base y objetivo. | `innovation-define/SKILL.md`; `innovation-cycle/SKILL.md` (KPI Targets) |
| Readiness score de Project Brief | La skill g-d-brief-reviewer produce un Scope Readiness Report con puntaje de preparación para avanzar de Presales a Project Planning (PMBOK, IEEE 29148, ISO 9001). | `g-d-brief-reviewer/SKILL.md` |
| Exposición de riesgos P×I | El monitor de riesgos calcula exposición (Probabilidad × Impacto) sobre la escala oficial Globant y clasifica en niveles 🟢🟡🔴 con acciones requeridas. | `g-d-risk-monitor/SKILL.md`, Official data model |
| Matriz de trazabilidad | El reporte final del ciclo compila la trazabilidad insight → problema → idea → prototipo → resultado KPI. | `innovation-cycle/SKILL.md`, Step 4 |

**Conclusión 2:** la evaluación no fue subjetiva: cada generación de IA se midió contra reglas doradas, fórmulas, puntajes y veredictos explícitos, tanto en innovación como en gestión de delivery.

---

## 3. Refinement — Mejora significativa sobre las generaciones de IA

**Principio demostrado:** los borradores de la IA fueron punto de partida, no producto final; el refinamiento humano produjo mejoras medibles y documentadas.

| Evidencia | Descripción | Ubicación |
|---|---|---|
| Refinement Window con re-ejecución | En modo step-by-step, cada corrección del usuario dispara una re-síntesis del agente con las correcciones incorporadas ("Re-run the synthesis with the corrections"), iterando tantas veces como sea necesario. | `innovation-empathize/SKILL.md`, Step 7; `innovation-value-feasibility/SKILL.md`, Step 8 |
| Palancas de ajuste para resultados no viables | Cuando el análisis da NO VIABLE, el agente propone 5 palancas concretas (volumen, revisión humana, costos fijos, re-alcance de pathway, re-encuadre de valor) y re-ejecuta los números tras cada ajuste. | `innovation-value-feasibility/SKILL.md`, Step 7 (adjustment levers) |
| Regla de suficiencia de datos | Antes de calcular, el agente verifica cada parámetro; si falta o es ambiguo, pregunta al usuario — nunca asume ni inventa valores. Los supuestos se marcan `assumption: true` con su justificación. | `innovation-value-feasibility/SKILL.md`, Step 1 (data-sufficiency rule) |
| Registro de correcciones humanas | Cada skill registra las correcciones humanas: "Log all human corrections; they improve future iterations". | `innovation-empathize/SKILL.md`, Step 7 |
| Versionado iterativo de documentos | La gobernanza de nombres `Stage_Agent_ProjectID_Version_Date` con versión incremental V1, V2... evidencia iteraciones documentadas de cada entregable. | Todas las skills, sección Outputs (naming pattern) |
| Cadena de handoff validada entre etapas | Cada etapa guarda su JSON y la siguiente lo consume; en modo autónomo el agente auto-valida cada handoff (trazabilidad, vínculo KPI, completitud NUF) antes de propagarlo. | `innovation-cycle/SKILL.md`, Step 2 (handoff chain y self-validate) |
| Manejo de errores con refinamiento | Reglas explícitas: entrada insuficiente → pedir más fuentes; contradicciones entre etapas → detenerse y preguntar antes de propagar. | `innovation-cycle/SKILL.md`, Error Handling; `innovation-empathize/SKILL.md`, Error Handling |

**Conclusión 3:** el refinamiento fue estructural al proceso: las correcciones humanas se incorporaron mediante re-ejecuciones documentadas, versionado incremental y validación explícita en cada frontera entre etapas.

---

## 4. Operationalization — IA embebida en flujos de trabajo repetibles

**Principio demostrado:** la IA no quedó en experimentos aislados; quedó embebida en activos reutilizables que convierten conocimiento en flujos ejecutables una y otra vez.

| Evidencia | Descripción | Ubicación |
|---|---|---|
| 6 skills de innovación como activos reutilizables | Dos manuales de entrenamiento propios (Training Manual No.1: ciclo Design Thinking; No.2: medición de valor soluciones IA) fueron transformados en skills ejecutables y reutilizables en cualquier proyecto. | `~/.coda/skills/innovation-{empathize,define,ideate,prototype-test,cycle,value-feasibility}/` |
| Delivery Adaptive Framework 2.0 desplegado | 4 plugins con 21 skills de gestión de proyectos: project-startup (baseline, capacity, schedule, gap-analyzer), solutioning (brief-reviewer, communication-plan, risk-mapper), iterative-building (risk-monitor) y di-discovery (13 skills de discovery de diseño). | `~/.coda/plugins/g-d-{project-startup,solutioning,iterative-building,di-discovery}/skills/` |
| Contratos JSON entre etapas | Cada etapa produce un paquete JSON con schema (`references/schema.json`) que la siguiente etapa consume: EmpathizeAgent_*.json → DefineAgent_*.json → IdeateAgent_*.json → PrototypeTestAgent_*.json. | `references/schema.json` en cada skill; `innovation-cycle/SKILL.md` |
| Ejecución real con entregable | El agente Empathize se ejecutó sobre notas reales de reunión y produjo el paquete JSON completo (4 stakeholders, 7 insights, 4 HMW, handoff para Define). | `.coda/tmp/innovation/EmpathizeAgent_PodcastHumanAI_V1_2026-09-25.json` |
| Servidor MCP propio (google-workspace) | Servidor MCP creado y configurado globalmente para conectar CODA con las herramientas de trabajo reales: Gmail, Drive, Calendar, Docs, Sheets, Slides y Chat. Esto amplía las capacidades de CODA más allá del repositorio: las skills leen transcripciones desde Google Docs, consultan registros de riesgos en Google Sheets y materializan cada entregable como Google Doc en Drive — sin intervención manual en ningún punto del flujo. Es la pieza que convierte los flujos agénticos en flujos autónomos de extremo a extremo. | `~/.coda/mcp.json` (server google-workspace, tool-tier core) |
| Extensión propia de CODA | Extensión TypeScript desarrollada como aprendizaje: registra la tool `word_count` (con schema Zod) y un slash command, demostrando la capacidad de extender CODA con herramientas propias. | `.coda/extensions/demo-extension.ts` |
| Handoff innovación → delivery | El Project Plan generado por innovation-cycle es consistente con la estructura de las skills g-d: el plan puede convertirse en Gantt/RACI con g-d-schedule-builder y staffearse con g-d-capacity-planner. | `innovation-cycle/SKILL.md`, Step 5 |
| Gobernanza de nombres repetible | Patrón `Stage_Agent_ProjectID_Version_Date` aplicado uniformemente a todos los entregables, garantizando trazabilidad entre ejecuciones. | Todas las skills, naming pattern |

**Conclusión 4:** el trabajo con CODA produjo flujos repetibles y ejecutables: 27 skills operativas (6 de innovación + 21 de delivery) que convierten conocimiento documentado en procesos agénticos ejecutables en cualquier proyecto.

---

## 5. Judgement — Tradeoffs intencionales y decisiones de gobernanza

**Principio demostrado:** cada decisión de diseño del framework fue un tradeoff consciente y documentado, no una elección por defecto.

| Decisión | Tradeoff considerado | Resultado |
|---|---|---|
| Regla de integridad sobre optimismo | Presión de "hacer viable" vs honestidad analítica | El agente nunca infla parámetros para forzar un resultado positivo; si el usuario insiste en números optimistas, calcula pero marca el riesgo explícitamente en el veredicto. Un resultado negativo se trata como aprendizaje que evita destruir valor. | 
| Modo step-by-step vs autonomous | Velocidad vs control humano | Se diseñaron ambos modos como decisión explícita del usuario en cada ejecución; el modo autónomo conserva pausas para casos límite (la autonomía no significa inventar datos). |
| Clasificación por pathway (4 vías) | Métrica única vs interpretación contextual | La misma cifra (ej. alta revisión humana) se juzga distinto según el pathway: es fallo de diseño en automatización, co-creación en augmentación, y quiebre de premisa en procesos agénticos. |
| Bilingüismo EN/ES en todas las skills | Alcance vs simplicidad de mantenimiento | Toda la interacción y entregables se conducen en el idioma del usuario, ampliando la adopción del framework en la organización. |
| Gobernanza de documentos | Flexibilidad vs trazabilidad | Se adoptó el patrón `Stage_Agent_ProjectID_Version_Date` y schemas JSON por etapa, sacrificando rapidez ad-hoc a cambio de trazabilidad total entre ejecuciones y proyectos. |
| Permisos granulares en config.json | Comodidad vs seguridad | Se registraron permisos de escritura explícitos y acotados a los archivos de las skills (no acceso global), demostrando gobernanza de permisos consciente. |
| Conexión con el ecosistema de delivery | Autonomía del framework vs integración corporativa | El Project Plan del ciclo de innovación se alineó deliberadamente con la estructura de las skills g-d de Globant, creando un pipeline continuo innovación → planificación → staffing. |
| Regla de datos sensibles | Utilidad vs privacidad | Las skills advierten sobre anonimización antes de escribir outputs y nunca copian datos identificables de clientes a la base de conocimiento. |
| Configuración del servidor MCP (tool-tier) | Capacidad máxima vs superficie de riesgo | El servidor MCP google-workspace se desplegó con tool-tier `core` (no el tier completo), balanceando la autonomía de los flujos con el principio de mínimo privilegio: CODA obtiene las herramientas de trabajo necesarias (Docs, Drive, Gmail, Sheets, Calendar, Slides, Chat) sin exponer capacidades innecesarias. Las credenciales OAuth se almacenan separadas del repositorio (`~/.coda/.secrets`), nunca en el código. |

**Conclusión 5:** el framework refleja gobernanza intencional: integridad analítica sobre resultados convenientes, trazabilidad sobre velocidad, y decisiones de diseño documentadas con su tradeoff explícito.

---

## Inventario de Evidencias (verificables)

| # | Artefacto | Tipo | Ubicación |
|---|---|---|---|
| 1 | 6 skills de innovación (SKILL.md + schema.json c/u) | Skills globales | `~/.coda/skills/innovation-*/` |
| 2 | 4 plugins / 21 skills del Delivery Adaptive Framework 2.0 | Plugins | `~/.coda/plugins/g-d-*/skills/*/SKILL.md` |
| 3 | Paquete JSON de ejecución real (proyecto PodcastHumanAI) | Evidencia de ejecución | `.coda/tmp/innovation/EmpathizeAgent_PodcastHumanAI_V1_2026-09-25.json` |
| 4 | Configuración de permisos granulares | Gobernanza | `.coda/config.json` |
| 5 | Extensión de CODA (tool + slash command) | Código | `.coda/extensions/demo-extension.ts` |
| 6 | Servidor MCP google-workspace (conexión con herramientas de trabajo) | Infraestructura de integración | `~/.coda/mcp.json` + credenciales OAuth en `~/.coda/.secrets` |
| 7 | Plan de formación PM+CODA (11 lecciones) | Formación | `sample-repo/TRAINING_PLAN.md` |
| 8 | Manuales fuente (Training Manual No.1 y No.2) | Documentos fuente | Google Docs / Drive (No.2: ID 1YAacLetmCyk0Fajv3PtmS0Zsqmxk4TrGRGoSzIRCsFk) |
| 9 | Reportes Google Docs generados por las skills | Entregables | Google Drive (por ejecución: EmpathizeAgent_*, ValueFeasibilityAgent_*, etc.) |

---

## Conclusión General

El trabajo con CODA demuestra las 5 dimensiones de colaboración estructurada con IA:

1. **Interaction** — protocolo explícito de colaboración (modo → borrador → refinamiento → validación) con el humano conservando el juicio estratégico.
2. **Evaluation** — reglas doradas, fórmulas cuantitativas, puntajes (NUF, readiness, confidence, exposición P×I) y veredictos explícitos en cada generación.
3. **Refinement** — correcciones humanas incorporadas mediante re-ejecuciones documentadas, versionado incremental y validación en cada frontera entre etapas.
4. **Operationalization** — 27 skills operativas que convierten conocimiento documentado en flujos agénticos repetibles, con contratos JSON entre etapas e integración con Google Workspace.
5. **Judgement** — decisiones de diseño documentadas con sus tradeoffs: integridad analítica, trazabilidad, gobernanza de permisos y datos sensibles, e integración con el ecosistema de delivery de Globant.

Este conjunto constituye evidencia verificable de colaboración estructurada, iterativa y gobernanza consciente con IA agéntica (CODA), aplicada a innovación y gestión de delivery.
