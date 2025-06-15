<template>
  <section class="form-section">
    <h2>{{ medicamentoInterno.id ? 'Editar Medicamento' : 'Novo Medicamento' }}</h2>
    <form @submit.prevent="salvar">
      <label>Nome:</label>
      <input v-model="medicamentoInterno.nome" type="text" required />

      <label>Descrição:</label>
      <input v-model="medicamentoInterno.descricao" type="text" required />

      <label>Categoria:</label>
      <select v-model="medicamentoInterno.categoriaId" required>
        <option v-for="cat in categorias" :key="cat.id" :value="cat.id">
          {{ cat.nome }}
        </option>
      </select>

      <button type="submit">Salvar</button>
      <button type="button" @click="limpar">Limpar</button>
    </form>
  </section>
</template>

<script>
import categoriaService from '@/services/categoriaService';

export default {
  props: ['medicamento'],
  emits: ['salvar'],
  data() {
    return {
      medicamentoInterno: this.medicamento
        ? { ...this.medicamento }
        : { nome: '', descricao: '', categoriaId: null },
      categorias: []
    };
  },
  created() {
    this.carregarCategorias();
  },
  watch: {
    medicamento(newVal) {
      this.medicamentoInterno = newVal
        ? { ...newVal }
        : { nome: '', descricao: '', categoriaId: null };
    }
  },
  methods: {
    async carregarCategorias() {
      this.categorias = await categoriaService.getAll();
    },
    salvar() {
      this.$emit('salvar', this.medicamentoInterno);
    },
    limpar() {
      this.medicamentoInterno = { nome: '', descricao: '', categoriaId: null };
    }
  }
};
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

