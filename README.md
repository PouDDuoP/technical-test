# **technical-test**

Este repositorio contiene la solución a una prueba técnica. El objetivo principal fue demostrar mis habilidades en el desarrollo de software, enfocándome en buenas prácticas y entregando código que es legible, mantenible y escalable.

## **Descripción del Proyecto**

Este proyecto es una API REST para la gestión y el resumen de órdenes y productos, desarrollada con **Node.js** y **Express**. La solución incluye la implementación de **seguridad**, **paginación** y **optimización de algoritmos** para procesar datos de manera eficiente.

## **Endpoints Principales**

* **GET /api/orders**: Listado paginado de órdenes.  
* **GET /api/products/summary/fast**: Resumen eficiente de productos.  
* **GET /api/products/summary/slow**: Resumen ineficiente de productos.  
* **GET /api/me/insecure**: Ejemplo de autenticación insegura.  
* **GET /api/me/secure**: Ejemplo de autenticación segura.

## **Estructura del Proyecto**

El proyecto está separado en capas para una mejor organización y claridad.

app/  
├── ARTIFACTS.md  
├── docker-compose.yml  
├── Dockerfile  
├── package.json  
├── README.md  
├── config/  
│   └── config.js  
├── src/  
│   ├── orders.js  
│   ├── routes.js  
│   ├── security.js  
│   └── server.js  
└── test/  
    ├── order.test.js  
    ├── products.test.js  
    └── securety.test.js

## **Tecnologías Utilizadas**

* **Lenguaje:** JavaScript  
* **Backend:** Node.js, Express.js  
* **Testing:** Jest, Supertest

## **Cómo Ejecutar el Proyecto**

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### **Prerrequisitos**

Asegúrate de tener instalado lo siguiente:

* Node.js (versión 16 o superior)  
* npm

### **Instalación**

1. Clona el repositorio desde GitHub:  
   git clone https://github.com/PouDDuoP/technical-test.git  
   cd technical-test

2. Instala todas las dependencias del proyecto:  
   npm install

### **Configuración**

El proyecto utiliza variables de entorno para su configuración.

1. Copia el archivo de ejemplo para las variables de entorno:  
   cp .env.example .env

2. Edita el archivo .env y rellena las variables según tu entorno:  
   \# Variables de ejemplo  
   PORT=3000

### **Ejecución**

* **Para iniciar el servidor en modo de desarrollo:**  
  npm run start:dev

* **Para iniciar con Docker:**  
  docker-compose up \--build

* **Para ejecutar las pruebas y asegurar que todo funciona correctamente:**  
  npm run test:watch

## **Consideraciones de Diseño y Buenas Prácticas**

Durante el desarrollo, se aplicaron las siguientes consideraciones para asegurar la calidad del código:

* **Código Limpio y Reutilizable:** Se sigue un enfoque modular, separando la lógica en capas, lo que facilita la reutilización y el mantenimiento del código.  
* **Manejo de Errores:** Se implementó una gestión de errores centralizada y robusta para proporcionar respuestas claras y consistentes en caso de fallos.  
* **Testing:** El proyecto incluye pruebas unitarias para las funciones de negocio y pruebas de integración para las rutas de la API, lo que garantiza la fiabilidad de la solución.  
* **Optimización:** El algoritmo para el resumen de productos se optimizó para procesar grandes conjuntos de datos de manera eficiente.

## **Autor**

* **Nombre:** Kevin Alvarado  
* **GitHub:** [https://github.com/PouDDuoP](https://www.google.com/search?q=https://github.com/PouDDuoP)  
* **LinkedIn:** [https://www.linkedin.com/in/kevin-alvarado-graterol/](https://www.google.com/search?q=https://www.linkedin.com/in/kevin-alvarado-graterol/)