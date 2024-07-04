<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      },
      showPopup: false
    };
  },
  methods: {
    handleSubmit(){
      // Mostrar el popup de confirmación
      this.showPopup = true;
      // Restablecer el formulario después del envío si es necesario
      this.form.firstName = '';
      this.form.lastName = '';
      this.form.email = '';
      this.form.message = '';
    },
    closePopup() {
      this.showPopup = false;
    }
  }};
</script>

<template>
    <main class="divContainer">
    
        <form class="container" @submit.prevent="handleSubmit">
        <label for="firstName">Nombre</label>
        <input type="text" required v-model="form.firstName" id="firstName">
        
        <label for="lastName">Apellidos</label>
        <input type="text" required v-model="form.lastName" id="lastName">
        
        <label for="email">Email</label>
        <input type="text" required v-model="form.email" id="email">
        
        <label for="message">Mensaje</label>
        <textarea v-model="form.message" required id="message" placeholder="Escribe aquí..."></textarea>
        
        <button type="submit">Enviar</button>
        </form>
        
        <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
      <div class="popup">
        <img class="img-popup" src="../assets/images/circle-check-solid.png" alt="circle" /><h2>Confirmation</h2>
        <p>El mensaje se ha enviado correctamente!</p>
        <button @click="closePopup">Cerrar</button>
      </div>
    </div>
    
    </main>
</template>

<style scoped>
::placeholder{
    font-size:10px;
}
.img-popup{
    width: 30px; 

}

.divContainer{
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
width: 100%;
margin-top: 70px;
background-color: #bde3ff;
}
.container {
    display:flex;
    flex-direction: column; 
    width: 500px;
}
main {
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label {
    margin-top: 10px;
}

input, textarea {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
}

button {
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
    background-color: #1F3B50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #366f98;
    color:black;
}
/* Estilos para el popup */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px;
  text-align: center;
}

.popup h2 {
  margin-bottom: 10px;
}

.popup p {
  margin-bottom: 20px;
}

.popup button {
  padding: 10px;
  font-size: 16px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.popup button:hover {
  background-color: #0056b3;
}
</style>
