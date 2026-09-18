# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


## CONCEPTOS

Los navegadores por defecto bloquean el acceso desde un dominio a a un dominio b. Cors autoriza a x dominios para que accedan a x información
CORS no sirve para proteger que un usuario malicioso vea una respuesta que no queremos que vea, es un bloqueador a nivel navegador, no a nivel seguridad. Hace que un front no pueda ver una respuesta del back, no que no se ejecute esa respuesta. Protege al usuario de un script corriendo silenciosamente en su propia maquina

1. Tú estás logueado en bancoprueba.com (tu cookie de sesión vive ahí).
2. Visitas una página maliciosa evil.com.
3. Esa página intenta hacer una petición a bancoprueba.com con tu cookie (porque el navegador la manda sola en peticiones cross-origin).
4. El banco responde con tus datos, pero como no incluye a evil.com en Access-Control-Allow-Origin, tu navegador no deja que evil.com lea la respuesta.

const maxId = await Usuario.max('id');
