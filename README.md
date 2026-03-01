# Reto Técnico QA Engineer - SEEK

Automatización End-to-End desarrollada como parte del proceso técnico para el rol de QA Engineer.

Aplicación probada: OSSN Demo  
https://www.opensource-socialnetwork.org/demo

---

##  Descripción

Este proyecto contiene la automatización de flujos críticos funcionales de una red social web (entorno staging público), utilizando Playwright con TypeScript y aplicando el patrón Page Object Model (POM).

Los flujos seleccionados fueron priorizados bajo un enfoque de Risk-Based Testing.

---

## 🛠 Tecnologías utilizadas

- Playwright
- TypeScript
- Node.js 18+
- Page Object Model (POM)
- JSON externo para datos de prueba

---

##  Casos Automatizados

- **AT-001 / TC-002** – Login exitoso
- **AT-002 / TC-004** – Publicación con imagen y descripción

Los casos incluyen validaciones mediante asserts claros, manejo de archivos y generación de evidencias automáticas (screenshots, video y trace).

---

##  Estructura del Proyecto
qa-automation-ossn/
│
├── pages/ # Page Objects (LoginPage, HomePage)
├── tests/ # Casos automatizados
├── test-data/ # Datos externos (users.json)
├── assets/ # Imagen de prueba
├── playwright.config.ts # Configuración global
├── tsconfig.json # Configuración TypeScript
├── package.json # Scripts y dependencias
└── README.md

---

##  Requisitos Previos

- Node.js 18 o superior
- npm instalado

---

##  Instalación y Ejecución

### 1️ Clonar el repositorio
``bash
git clone <URL_DEL_REPO>
cd qa-automation-ossn

### 2 Instalar dependencias
npm install

### 3 Instalar navegadores de Playwright
npx playwright install

Ejecutar pruebas
Ejecutar todos los tests
npm test

Para abrir el reporte HTML generado:
npx playwright show-report

El reporte incluye:

- Evidencia de screenshots

- Video de ejecución

- Trazas (trace)

- Resultado detallado por test
  
---

### Buenas prácticas aplicadas

Separación de lógica mediante Page Object Model.

Datos externos desacoplados en JSON.

Uso de asserts explícitos.

Generación automática de evidencias.

Configuración centralizada en playwright.config.ts.

---

### Próximas mejoras

Ampliar cobertura automatizada hacia registro y comentarios.

Incorporar escenarios negativos automatizados.

Integrar ejecución en pipeline CI/CD.
