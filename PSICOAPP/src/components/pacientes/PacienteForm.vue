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
.form-container {
  background-color: #f1f8ff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

form label {
  display: block;
  margin-top: 10px;
}

form input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

form button {
  margin-top: 10px;
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

form button[type="submit"] {
  background-color: #4CAF50;
  color: white;
}

form button[type="button"] {
  background-color: #f44336;
  color: white;
}
</style>
