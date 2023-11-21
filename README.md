# RegistrApp-DylanQuinones-007D
Evaluacion 3 de Programacion de Aplicaciones Moviles 007D

RegistrAPP V3
Cambios:
- Nuevo page agregado (Crear clase, Perfil del usuario y Perfil actualizar).
- Generador de QR code.
- Codigo .JSON mejorado
- Nuevas interfaces para detectar valores del JSON.

Comandos para iniciar proyecto:
- Dentro de la carpeta "data": json-server --watch usuarios.json --host 0.0.0.0 --port 3300
- Dentro de la carpeta "src": ionic lab (si ionic lab lanza error.. usar npm start)

Dependencias (nesesarias):
- Node v18.17.0
- Angular CLI v17
- Dentro de la carpeta "data": npm install -g json-server
- npm install -D @types/qrcode --save 
- npm install angularx-qrcode --save --force
