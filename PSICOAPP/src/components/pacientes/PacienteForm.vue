<template>
  <section class="form-container">
    <h2>{{ paciente.id ? 'Editar Paciente' : 'Novo Paciente' }}</h2>
    <form @submit.prevent="salvar">
      <label>Nome:</label>
      <input v-model="paciente.nome" type="text" required />

      <label>CPF:</label>
      <input v-model="paciente.cpf" type="text" required />

      <label>Data de Nascimento:</label>
      <input v-model="paciente.data_nasc" type="date" required />

      <button type="submit">Salvar</button>
      <button type="button" @click="limparCampos">Limpar</button>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    paciente: {
      type: Object,
      default: () => ({ nome: '', cpf: '', data_nasc: '' })
    }
  },
  emits: ['salvar', 'limpar'],
  methods: {
    salvar() {
      this.$emit('salvar', this.paciente);
    },
    limparCampos() {
      this.paciente.nome = '';
      this.paciente.cpf = '';
      this.paciente.data_nasc = '';
    }
  }
};
</script>

<style scoped>
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
