# Instalación del entorno de programación de Laravel con AdminLTE

Este es un breve tutorial que te guiará a través de los pasos necesarios para configurar un entorno de programación de Laravel con AdminLTE. Sigue estos pasos para comenzar a desarrollar tu aplicación web con Laravel y utilizar el tema AdminLTE.

## Requisitos previos

Antes de comenzar, asegúrate de tener los siguientes requisitos previos instalados en tu sistema:

- [PHP](https://www.php.net) (versión 7.4 o superior)
- [Composer](https://getcomposer.org)
- [Node.js](https://nodejs.org) (versión 14 o superior)
- [NPM](https://www.npmjs.com) (normalmente se instala junto con Node.js)
- [Laravel CLI](https://laravel.com/docs/8.x#installing-laravel) (opcional, pero recomendado)

## Pasos

1. Clona o descarga este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias de PHP:

   ```shell
   composer install
   ```

4. Copia el archivo de configuración `.env.example` y renómbralo como `.env`. Puedes hacerlo con el siguiente comando:

   ```shell
   cp .env.example .env
   ```

5. Genera una clave de aplicación única ejecutando el siguiente comando:

   ```shell
   php artisan key:generate
   ```

6. Configura la base de datos en el archivo `.env` con los detalles de tu entorno de desarrollo. Asegúrate de tener una base de datos creada y accesible.

7. Ejecuta las migraciones de la base de datos para crear las tablas necesarias. Utiliza los siguientes comandos:

   ```shell
   php artisan migrate
   ```

8. Ejecuta el siguiente comando para instalar las dependencias de JavaScript:

   ```shell
   npm install
   ```

9. Compila los activos de JavaScript y CSS utilizando Laravel Mix. Utiliza el siguiente comando:

   ```shell
   npm run dev
   ```

10. Inicia el servidor de desarrollo de Laravel. Utiliza el siguiente comando:

    ```shell
    php artisan serve
    ```

11. Abre tu navegador web y accede a `http://localhost:8000`. Deberías ver la página de inicio de Laravel.

12. Para acceder al panel de administración de AdminLTE, visita `http://localhost:8000/admin`.

¡Eso es todo! Ahora tienes un entorno de programación de Laravel con AdminLTE configurado y listo para su uso. Puedes comenzar a desarrollar tu aplicación web utilizando Laravel y aprovechar las características y el diseño proporcionados por AdminLTE.
