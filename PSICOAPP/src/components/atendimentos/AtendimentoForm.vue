<template>
  <section>
    <h2>{{ atendimento && atendimento.id ? 'Editar Atendimento' : 'Novo Atendimento' }}</h2>

    <form @submit.prevent="salvar">
      <label>Data:</label>
      <input v-model="formData.data" type="date" required />

      <label>Descrição:</label>
      <input v-model="formData.descricao" type="text" required />

      <label>Status:</label>
      <input v-model="formData.status" type="text" required />

      <button type="submit">Salvar</button>
      <button type="button" @click="limparCampos">Limpar</button>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    atendimento: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      formData: {
        data: '',
        descricao: '',
        status: ''
      }
    };
  },
  watch: {
    atendimento: {
      immediate: true,
      handler(novo) {
        if (novo) {
          this.formData = { ...novo };
        } else {
          this.limparCampos();
        }
      }
    }
  },
  methods: {
    salvar() {
      this.$emit('salvar', { ...this.formData });
    },
    limparCampos() {
      this.formData = {
        data: '',
        descricao: '',
        status: ''
      };
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