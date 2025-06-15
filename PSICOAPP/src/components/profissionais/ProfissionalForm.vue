<template>
  <section>
    <h2>{{ form.id ? 'Editar Profissional' : 'Novo Profissional' }}</h2>
    <form @submit.prevent="salvar">
      <label>Nome:</label>
      <input v-model="form.nome" required>

      <label>Email:</label>
      <input v-model="form.email" type="email" required>

      <label>Telefone:</label>
      <input v-model="form.telefone" required>

      <button type="submit">Salvar</button>
    </form>
  </section>
</template>


<script>
export default {
  props: {
    profissional: {
      type: Object,
      default: () => ({
        nome: '',
        email: '',
        telefone: ''
      })
    }
  },
  data() {
    return {
      form: { ...this.profissional }  
    };
  },
  watch: {
    profissional: {
      handler(novo) {
        this.form = { ...novo };
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    salvar() {
      this.$emit('salvar', { ...this.form });
    }
  }
}
</script>
<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #4CAF50; /* Verde para salvar */
}

button[type="submit"]:hover {
  background-color: #45a049;
}

button[type="button"] {
  background-color: #2196F3; /* Azul claro para limpar */
}

button[type="button"]:hover {
  background-color: #1976D2; /* Azul escuro no hover */
}

</style>
