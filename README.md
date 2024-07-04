# Info Cat Embalses

## Index

- [Descripción](#descripción)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas](#rutas)
- [Características Funcionales](#características-funcionales)
- [Características Técnicas](#características-técnicas)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Descripción

La aplicación permite a los usuarios visualizar el estado actual de las cuencas internas de Cataluña, mostrando datos clave como el nivel del agua, el volumen embalsado y el porcentaje de volumen embalsado en comparación con la capacidad total del embalse.

## Tecnologías Utilizadas

### Frontend
- **Vue.js**: Utilizado para la construcción de la interfaz de usuario.
- **Vue Router**: Para la gestión de rutas dentro de la aplicación.

### Backend
- **Swagger** :Utilizado para consumir la API
- **.ASP.NET**: Utilizado para construir la API que proporciona los datos necesarios para la aplicación.
- **XUnit**:Para realizar pruebas de testing

  
- 
## Instalación y Configuración

### Requisitos Previos

- Node.js (versión 14 o superior)
- .NET Core SDK (versión 3.1 o superior)

### Instalación

#### Frontend

1. Clona el repositorio:
    ```bash
    git clone https://github.com/hugoperez11/info-cat-embalses
    cd info-cat-embalses
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo:
    ```bash
    npm run serve
    ```



#### Backend

1. Clona el repositorio:
    ```bash
    git clone https://github.com/alejandria1899/InfoCatEmbalses.git
    cd InfoCatEmbalses
    ```

2. Restaura las dependencias de .Jason:
    ```bash

    ```

3. Ejecuta la aplicación:
    ```bash
    dotnet run
    ```

La API estará disponible en `http://localhost:5045/swagger`.

## Estructura del Proyecto



## Rutas

### Frontend

- `/Home`: Página principal que muestra una visión general de los embalses.
- `/About Us`: Página "About Us" que proporciona información sobre el proyecto y el equipo.
- - `/Contact`: Página "Contact" que proporciona un formuladrio .
  - - `/Search`: Página "Search" que proporciona información y datos sobre las cuencas de Cataluña.

### Backend

- `/api/embalses`: Endpoint que proporciona datos sobre los embalses.

## Características Funcionales

- **Visualización del Estado de los Embalses**: Muestra el nivel del agua, el volumen embalsado y el porcentaje de volumen embalsado.
- **Interfaz Intuitiva**: Interfaz de usuario clara y fácil de usar, construida con Vue.js.
- **Datos en Tiempo Real**: Información actualizada sobre el estado de los embalses.

## Características Técnicas

- **Arquitectura Modular**: Separación clara entre frontend y backend para una mejor mantenibilidad.
- **Vue.js **: Uso de tecnologías modernas para una aplicación robusta y escalable.
- **API RESTful**: Backend construido con .ASP.NET, siguiendo principios REST para una fácil integración.

## Contribuir

Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una rama para tu función (`git checkout -b feature/nueva-funcion`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva función'`).
4. Sube tus cambios (`git push origin feature/nueva-funcion`).
5. Abre un Pull Request.

## Licencia

