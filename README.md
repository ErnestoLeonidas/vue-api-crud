# 🧩 CRUD de Usuarios con Vue 3 + Vite + Bootstrap 5.3 + SweetAlert2

Este proyecto es una aplicación **Vue.js 3** creada con **Vite**, que implementa un CRUD completo conectado a un endpoint de **MockAPI**. Utiliza **Bootstrap 5.3** para estilos y **SweetAlert2** para confirmaciones de eliminación.

## 🚀 Tecnologías

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [Bootstrap 5.3](https://getbootstrap.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [MockAPI](https://mockapi.io/)

## 📡 Endpoint API

La aplicación consume el siguiente endpoint de MockAPI:

```
https://6812a4be129f6313e20f24c8.mockapi.io/api-tienda/v1/users
```

### 📦 Estructura de los usuarios:

```json
{
  "id": "1",
  "rut": 63,
  "nombre": "Owen",
  "apellido": "Lind",
  "direccion": "North",
  "fono": "1-685-622-2400 x396",
  "fecha_nacimiemto": "1945-08-22T19:19:03.816Z"
}
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── UserForm.vue         # Formulario de creación/edición
│   └── UserList.vue         # Lista con botones editar/eliminar
├── views/
│   └── UserView.vue         # Vista principal del CRUD
├── services/
│   └── userService.js       # Conexión con MockAPI
├── App.vue                  # Envoltura principal
├── main.js                  # Configuración global
```

---

## 🛠️ Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/vue-crud-mockapi.git
cd vue-crud-mockapi
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm run dev
```

---

## 🖌️ Estilos y componentes visuales

- Bootstrap 5.3 se aplica para todos los formularios, tablas y botones.
- SweetAlert2 se usa para confirmar la eliminación de un usuario con diálogos atractivos y personalizados.

---

## ✅ Funcionalidades

- [x] Listar usuarios
- [x] Crear nuevo usuario
- [x] Editar usuario existente
- [x] Eliminar usuario con confirmación
- [x] Estilos responsivos con Bootstrap
- [x] Validación visual con `required` y tipos adecuados (`date`, `text`, etc.)

---

## 📸 Captura de pantalla

> Agrega aquí una imagen si deseas mostrar la UI final

---

## 📄 Licencia

MIT © [ernestoleonidas]
