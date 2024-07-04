<script>
export default {
    data() {
    return {
        form: {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
        }
    };
    },
    methods: {
    submitForm() {
        console.log(this.form);
        this.form.firstName = '';
        this.form.lastName = '';
        this.form.email = '';
        this.form.message = '';
    }
    }
};
</script>

<template>
    <main class="divContainer">
    
        <form class="container" @submit.prevent="submitForm">
        <label for="firstName">First name</label>
        <input type="text" v-model="form.firstName" id="firstName">
        
        <label for="lastName">Last name</label>
        <input type="text" v-model="form.lastName" id="lastName">
        
        <label for="email">Email</label>
        <input type="text" v-model="form.email" id="email">
        
        <label for="message">Message</label>
        <textarea v-model="form.message" id="message" aria-placeholder="Write something..."></textarea>
        
        <button type="submit">Submit</button>
        </form>
    
    </main>
</template>

<style scoped>

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
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
