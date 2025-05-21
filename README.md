API de Envío de Mails con Express y Nodemailer

Este proyecto es una mini API construida con Express para enviar emails a través de una cuenta de Gmail. Utiliza plantillas HTML almacenadas en la carpeta templates/ y toda la configuración se realiza mediante variables de entorno.

📋 Requisitos Previos

Node.js (>= 14) o nvs/nvm

npm o Yarn

Cuenta de Gmail con:

Verificación en Dos Pasos (2FA) habilitada.

Contraseña de Aplicación (App Password) generada para uso con Nodemailer.

🚀 Instalación y Configuración

Clonar el repositorio

git clone <URL-del-repositorio>
cd api-send-email

Instalar dependencias

npm install

Crear archivo de entorno y completar con los datos (revisar .env.example)
touch .env

Crear App Password en Gmail

Entra a Google Account > Seguridad.

Habilita la Verificación en Dos Pasos.

En Contraseñas de aplicaciones, genera una nueva contraseña, selecciona Otro y ponle un nombre (por ejemplo nodemailer).

Copia los 16 dígitos y pégalos en SMTP_PASS de tu .env.

🛠️ Uso

Levantar el servidor

node index.js

Enviar un correo

Endpoint: POST http://localhost:${process.env.PORT || 3000}/send-email