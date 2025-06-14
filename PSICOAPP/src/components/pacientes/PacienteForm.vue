
<template>
  <form @submit.prevent="handleSubmit" class="paciente-form">
    <label for="nome">Nome</label>
    <input type="text" id="nome" v-model="form.nome" required />

    <label for="cpf">CPF</label>
    <input type="text" id="cpf" v-model="form.cpf" required />

    <label for="data_nasc">Data de Nascimento</label>
    <input type="text" id="data_nasc" v-model="form.data_nasc" required />

    <button type="submit" class="btn-salvar">Salvar</button>
  </form>
</template>

<script>
export default {
  props: {
    paciente: {
      type: Object,
      default: () => ({ nome: '', cpf: '', data_nasc: '' })
    }
  },
  data() {
    return {
      form: { ...this.paciente }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('salvar', this.form)
      this.form = { nome: '', cpf: '', data_nasc: '' }
    }
  },
  watch: {
    paciente(novo) {
      this.form = { ...novo }
    }
  }
}
</script>

<style scoped>
.paciente-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 12px;
  background-color: #eaf6f9;
  padding: 20px;
  border: 1px solid #b0c4de;
  border-radius: 6px;
}

.paciente-form label {
  font-weight: bold;
  color: #2c3e50;
}

.paciente-form input {
  padding: 8px;
  border: 1px solid #b0c4de;
  border-radius: 4px;
  font-size: 14px;
}

.btn-salvar {
  background-color: #3498db;
  color: white;
  padding: 10px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-salvar:hover {
  background-color: #2980b9;
}
</style>
