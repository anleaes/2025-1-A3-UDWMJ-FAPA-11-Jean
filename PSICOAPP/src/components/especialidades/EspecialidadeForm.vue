<template>
  <form @submit.prevent="salvar">
    <input v-model="formData.nome" type="text" placeholder="Nome da Especialidade" required>
    <input v-model="formData.descricao" type="text" placeholder="Descrição" required>
    <button type="submit">Salvar</button>
  </form>
</template>


<script>
export default {
  props: {
    especialidade: {
      type: Object,
      default: () => ({ nome: '', descricao: '' })  // ← ISSO EVITA O ERRO
    }
  },
  data() {
    return {
      formData: { nome: '', descricao: '' }
    }
  },
  watch: {
    especialidade: {
      immediate: true,
      handler(novoValor) {
        this.formData = { ...novoValor };
      }
    }
  },
  methods: {
    salvar() {
      this.$emit('salvar', this.formData);
      this.formData = { nome: '', descricao: '' };
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