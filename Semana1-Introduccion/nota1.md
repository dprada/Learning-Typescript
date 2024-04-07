¡Empezamos con la Semana 1, dedicada a la introducción a TypeScript y la configuración del entorno! Aquí te guío paso a paso:

### Paso 1: Introducción a TypeScript

Primero, es importante entender qué es TypeScript y por qué es útil, especialmente en comparación con JavaScript y en el contexto de proyectos científicos.

- **¿Qué es TypeScript?** TypeScript es un lenguaje de programación desarrollado por Microsoft que se basa en JavaScript. Añade tipado estático y objetos basados en clases, entre otras características, lo que facilita el desarrollo de aplicaciones grandes y complejas.

- **¿Por qué TypeScript?** Aunque provienes de un trasfondo en Python, encontrarás que TypeScript ofrece una sintaxis flexible y poderosas características de tipado que pueden ayudar a prevenir muchos errores comunes en tiempo de compilación, mejorando así la calidad del código y la eficiencia en el desarrollo.

### Paso 2: Configuración del entorno de desarrollo

Para trabajar con TypeScript, necesitarás Node.js y el paquete npm (Node Package Manager), que viene con Node.js. Esto te permitirá ejecutar código TypeScript y gestionar las dependencias de tus proyectos.

#### Instalación de Node.js y npm

1. **Abre una terminal** en Ubuntu.
2. **Ejecuta** el siguiente comando para instalar Node.js y npm. Ubuntu tiene Node.js en sus repositorios, pero la versión podría no ser la más reciente. Para una versión más nueva, puedes usar un PPA o descargarlo directamente desde el sitio web de Node.js.
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```
3. **Verifica** la instalación con:
   ```bash
   nodejs --version
   npm --version
   ```
   Deberías ver las versiones instaladas de Node.js y npm.

#### Instalación de TypeScript

1. Una vez que tengas Node.js y npm, puedes instalar TypeScript globalmente en tu sistema:
   ```bash
   npm install -g typescript
   ```
2. **Verifica** la instalación de TypeScript con:
   ```bash
   tsc --version
   ```
   Esto mostrará la versión de TypeScript que has instalado.

### Paso 3: Tu primer script TypeScript

Para asegurarte de que todo está configurado correctamente, vamos a crear un pequeño script.

1. **Crea un nuevo directorio** para tu proyecto de la semana 1 y navega a él en tu terminal.
2. **Crea un archivo** llamado `hello.ts` con el siguiente contenido:
   ```typescript
   let message: string = "Hola, TypeScript!";
   console.log(message);
   ```
3. **Compila** tu archivo TypeScript a JavaScript con el comando `tsc`:
   ```bash
   tsc hello.ts
   ```
   Esto creará un nuevo archivo `hello.js`.
4. **Ejecuta** el archivo JavaScript resultante con Node.js:
   ```bash
   node hello.js
   ```
   Deberías ver el mensaje "Hola, TypeScript!" en tu terminal.

### Conclusión y Práctica

Felicidades, has configurado tu entorno de desarrollo TypeScript y has ejecutado tu primer script. Como práctica, experimenta cambiando el tipo de la variable `message` o crea nuevas variables con diferentes tipos de datos (por ejemplo, `number`, `boolean`, `any`, `unknown`, etc.) para familiarizarte con el sistema de tipos de TypeScript.

Estás listo para empezar a explorar más sobre TypeScript. Si tienes alguna duda o necesitas más ejemplos, ¡aquí estoy para ayudarte!
