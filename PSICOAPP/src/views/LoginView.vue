<template>
  <main class="login-container">
    <h1>Login Mentalize</h1>

    <form @submit.prevent="fazerLogin">
      <label for="usuario">Usuário:</label>
      <input id="usuario" v-model="usuario" type="text" required />

      <label for="senha">Senha:</label>
      <input id="senha" v-model="senha" type="password" required />

      <button type="submit">Entrar</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      senha: ''
    };
  },
  methods: {
  fazerLogin() {
    this.$router.push('/home');
        }
    }   
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #e3f7f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>
