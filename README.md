# 📚 Biblioteca CRUD

¡Bienvenido a la **Biblioteca CRUD**! 🎉  
Esta aplicación permite gestionar libros en una biblioteca mediante las operaciones CRUD (Crear, Leer, Actualizar, Eliminar). En esta aplicacioón usamos **HTML**, **CSS**, **JavaScript**, y un servidor backend con **Node.js**.

---

## 🧰 Funcionalidades

### **1. Crear Libro** ✍️
Permite agregar un nuevo libro a la biblioteca ingresando los siguientes datos:
- **Título** del libro.
- **Autor** del libro.
- **Año de publicación** del libro.

¡Con esta funcionalidad puedes expandir la colección de libros de tu biblioteca personal! 📖

### **2. Leer Libros** 👀
Muestra una lista de todos los libros almacenados en la base de datos, con la siguiente información:
- **Título** del libro.
- **Autor** del libro.
- **Año de publicación** del libro.

Podrás visualizar todos los libros registrados y gestionarlos fácilmente. 📚

### **3. Actualizar Libro** ✏️
Permite editar los detalles de un libro existente. Puedes actualizar:
- **Título** del libro.
- **Autor** del libro.
- **Año de publicación** del libro.

Esta opción es útil para corregir errores o actualizar información sobre los libros ya registrados. 🔄

### **4. Eliminar Libro** ❌
Permite eliminar un libro de la base de datos.  
Esta acción es **irreversible**, así que asegúrate de que quieres eliminar el libro antes de proceder. 🗑️

---

## 🗂️ Archivos del Proyecto

### **Frontend** 
- **`index.html`**: Archivo principal del frontend con la estructura HTML.
- **`styles.css`**: Archivo de estilos CSS para diseñar la interfaz.
- **`script.js`**: Archivo JavaScript que interactúa con el backend y actualiza la UI.

### **Backend** 
- **`server-sql.js`**: Servidor backend que usa MySQL como base de datos. Ofrece las rutas API para gestionar los libros.
- **`server-mongo.js`**: Servidor backend que usa MongoDB como base de datos. Ofrece las rutas API para gestionar los libros.

### **Configuración** 
- **`package.json`**: Archivo de configuración con las dependencias necesarias y scripts para ejecutar los servidores.

---

## 📋 Requisitos Previos

Antes de empezar, asegúrate de tener instalados los siguientes programas en tu sistema:

- **Node.js**: [Descargar Node.js](https://nodejs.org/)
- **XAMPP** (Solo si quieres usar MySQL)
---

## 🔧 Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

1. **Clona o descarga** el proyecto desde el repositorio.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias necesarias con el siguiente comando:

   ```bash
   npm install
   
## Configurar el servidor

- Para usar Mongo DB utiliza el siguiente comando:
    ```bash
   npm run servidor-mongo
   
- Para usar MySQL utiliza el siguiente comando:
    ```bash
   npm run servidor-sql
 4. Abre el archivo index.html en tu navegador preferido

Y eso es todo, ahora puedes agregar, leer, actualizar y eliminar los libros que quieras y verificar toda esta información en la base de datos que hayas seleccionado


## 👩 Autor
- Claudia Jimena Ávila García
