# **ARTIFACTS: Diseño y decisiones técnicas**

Este documento complementa el README.md y detalla las decisiones técnicas clave, los desafíos encontrados y las soluciones implementadas durante el desarrollo de este proyecto.

## **1\. Diseño de la arquitectura**

La arquitectura del proyecto se diseñó siguiendo un enfoque de **separación de responsabilidades** (SoC \- Separation of Concerns), dividiendo la lógica en diferentes capas:

* **Rutas (routes.js):** Gestionan los puntos de entrada de la API y delegan la lógica de negocio a los servicios.  
* **Servicios (orders.js, products.js):** Contienen la lógica de negocio principal y las operaciones con los datos.  

Este diseño modular mejora la **legibilidad**, **mantenibilidad** y **escalabilidad** del código, facilitando futuras adiciones o modificaciones de manera organizada.

## **2\. Optimización del rendimiento**

Uno de los principales desafíos fue optimizar el proceso de resumen de productos. Para ello, se implementaron dos endpoints:

* **GET /api/products/summary/slow:** Utiliza un algoritmo ineficiente que procesa los datos de manera secuencial, lo que sirve como punto de referencia para medir el impacto de la optimización.  
* **GET /api/products/summary/fast:** Implementa un algoritmo optimizado que reduce la complejidad de la operación, procesando grandes conjuntos de datos de manera mucho más eficiente y demostrando un entendimiento profundo de la optimización algorítmica.

## **3\. Gestión de dependencias y despliegue**

* **package.json:** Se gestionaron las dependencias del proyecto, incluyendo express para el servidor, jest para las pruebas unitarias y de integración, y supertest para probar la API.  
* **Dockerización:** Se incluyeron Dockerfile y docker-compose.yml para facilitar el **despliegue del proyecto**. Estos archivos permiten empaquetar la aplicación y sus dependencias en un contenedor, asegurando que se ejecute de manera consistente en cualquier entorno. La opción de docker-compose up simplifica aún más el proceso de ejecución para los revisores.

## **4\. Pruebas automatizadas**

Se implementaron **pruebas unitarias y de integración** para garantizar la fiabilidad del código. Los archivos de prueba (test/) validan que las funcionalidades principales, como el manejo de órdenes y el resumen de productos, se comporten como se espera. El uso de npm run test:watch facilita el desarrollo continuo y el *feedback* instantáneo.

## **5\. Prompting para generación de código y documentación**

Durante el desarrollo de este proyecto se utilizaron prompts para la redacción de la documentación. 

Generación de pruebas: Se creo la prueba "sample.test.js" para validar el funcionamiento de jest, Se utilizó copilot para validar el funcionamiento del metodo "productSummaryLinear", debido que en Jest generaba error pero en Postman no se generaba, para ello se siguio la recomendación de copilot y se implementó el new Map() dentro de reduce para generar al mismo tiempo el Map requerido

Generación de documentación: Los prompts para crear ejemplos de READM.md y ARTIFACTS.md se usaron para estructurar y redactar tanto el README.md como este ARTIFACTS.md, asegurando que la información sea clara y esté bien organizada para los revisores.

Errores: se Ejecutaron prompts para validar con la información suministrada al momento de dar error, por ejemplo a ejecutar jest y su conflicto con sintaxis ES module como import y export, se utilizo la IA para buscar posibles soluciones al error, luego de chequear y consultar otras fuentes se llego a la conclusión de instalar babel para evitar el error.


## **6\. Pendientes **

Quedo pendiente por hacer el test del primer desafio seleccionado, el test del desafio "B Paginación".

## **7\. Tiempos **
34 minutos en el desafio B
1 hora y 13 minutos en el deafio C
Alrededor de 1 hora con el test y los problemas asociados a el mismo.
Alrededor de 40 minutos elaborando el Readme y el Artifacts.