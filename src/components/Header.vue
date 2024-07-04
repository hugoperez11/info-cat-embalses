<script setup></script>

<template>
  <header class="navbar">
    <nav>
      <div class="nav-links">
        <RouterLink to="/" class="nav-link">Inicio</RouterLink>
        <RouterLink to="/aboutus" class="nav-link">Sobre nosotros</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contacto</RouterLink>    
        <button to="/search" class="nav-link search">Nueva búsqueda</button>
      </div>
      <div class="nav-bottom">
        <p>InfoCatEmbalses</p>
        <img src="../assets/images/imageLogo.png" alt="Logo">
      </div>
    </nav>
  </header>
</template>

<style scoped>
* {
  font-family: "Josefin Sans", sans-serif;

}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f3b50;
  padding-top: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar nav {
  display: flex;
  flex-direction: column; /* Ajusta para colocar los elementos en columna */
  align-items: center; /* Centra los elementos horizontalmente */
}

.nav-links {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  /* margin:40px; */
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 30px;
  margin: 0 60px 0 60px;
  font-size: 15px;
  border-radius: 3%;
}
.nav-link:hover {
  background-color: white;
  color: black;
  transform: scale(1.1);
}
.nav-link:focus {
  font-weight: 700;
  color: #bde3ff;
}
.search {
  background-color: #bde3ff;
  color: black;
  display: flex;
  align-items: end;
  padding: 10px 15px;
  border-radius: 5%;
  border: 0;
}
.nav-bottom {
  text-align: center; /* Centra horizontalmente el texto y la imagen */
}

.nav-bottom p {
  color: white;
  margin-bottom: 5px;
  font-size: 45px;
}

.nav-bottom img {
  max-width: 100px; /* Ajusta el tamaño máximo de la imagen */
}

.content {
  margin-top: 120px;
}
</style>
