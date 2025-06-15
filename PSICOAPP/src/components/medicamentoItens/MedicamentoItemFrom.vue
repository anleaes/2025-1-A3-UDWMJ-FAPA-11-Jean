<template>
  <section class="form-section">
    <h2>{{ itemInterno.id ? 'Editar Item de Medicamento' : 'Novo Item de Medicamento' }}</h2>
    <form @submit.prevent="salvar">
      <label>Prescrição ID:</label>
      <input v-model="itemInterno.prescricaoId" type="number" required />

      <label>Medicamento ID:</label>
      <input v-model="itemInterno.medicamentoId" type="number" required />

      <label>Quantidade:</label>
      <input v-model="itemInterno.quantidade" type="number" required />

      <button type="submit">Salvar</button>
      <button type="button" @click="limpar">Limpar</button>
    </form>
  </section>
</template>

<script>
export default {
  props: ['item'],
  emits: ['salvar'],
  data() {
    return {
      itemInterno: this.item ? { ...this.item } : { prescricaoId: '', medicamentoId: '', quantidade: '' }
    };
  },
  watch: {
    item(newVal) {
      this.itemInterno = newVal ? { ...newVal } : { prescricaoId: '', medicamentoId: '', quantidade: '' };
    }
  },
  methods: {
    salvar() {
      this.$emit('salvar', this.itemInterno);
    },
    limpar() {
      this.itemInterno = { prescricaoId: '', medicamentoId: '', quantidade: '' };
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
  background-color: #4CAF50;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

button[type="button"] {
  background-color: #2196F3;
}

button[type="button"]:hover {
  background-color: #1976D2;
}
</style>
