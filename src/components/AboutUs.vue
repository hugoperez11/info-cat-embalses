<script setup></script>

<template>
  <section class="divContainer">
    <img class="image" src="../assets/images/imageLogo.png" alt="logo" />
    <div class="container">
      <h2 class="aboutus">Sobre Nosotros</h2>

      <p>Bienvenido a <strong>InfoCat Embalses</strong>, la aplicación líder para la gestión y monitoreo de embalses. Nuestro objetivo es
        proporcionar información precisa y al día, sobre los niveles de agua, calidad, y estado de los embalses
        en Cataluña. Con <strong>InfoCat Embalses</strong>, tanto usuarios individuales como instituciones pueden tomar decisiones informadas
        para el uso sostenible y eficiente de los recursos hídricos.</p>

      <h2>Nuestra Misión</h2>
      <p>En <strong>InfoCatEmbalses</strong>, estamos comprometidos con la preservación del medio ambiente y la gestión responsable del agua.</p>
      <p>Nuestra misión es:</p>

      <ul>
        <li>Proveer datos precisos y actualizados sobre los embalses.</li>
        <li>Fomentar la conciencia sobre la importancia de los recursos hídricos.</li>
        <li>Facilitar la toma de decisiones basada en datos para gobiernos, empresas y ciudadanos.</li>
      </ul>  
      
    </div>
  </section>
</template>

<style scoped>
.divContainer {
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background-color: #bde3ff;
}

.container {
  display: flex;
  flex-direction: column;
  width: 700px;
}

.h3 {
  color: black;
  margin-bottom: 20px;
  font-size: 30px;
}

.p {
  color: black;
  line-height: 2.5;
}
.aboutus{
  padding-top: 130px;
}
</style>
