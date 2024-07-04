<script setup></script>

<template>
  <section class="divContainer">
    <img class="image" src="../assets/images/imageLogo.png" alt="logo" />
    <div class="container">
      <h3 class="h3">About us</h3>
      <p class="p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eaque
        voluptates illo non, quaerat optio sunt assumenda cumque omnis
        accusantium sapiente quo alias ipsum. Hic, fuga suscipit. Hic, velit
        quisquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Magni eaque voluptates illo non, quaerat optio sunt assumenda cumque
        omnis accusantium sapiente quo alias ipsum. Hic, fuga suscipit. Hic,
        velit quisquam!
      </p>
    </div>
  </section>
</template>

<style scoped>
.divContainer {
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
  width: 600px;
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
</style>
