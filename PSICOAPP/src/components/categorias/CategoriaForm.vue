<template>
  <section class="form-section">
    <h2>{{ categoriaInterna.id ? 'Editar Categoria' : 'Nova Categoria' }}</h2>
    <form @submit.prevent="salvar">
      <label>Nome:</label>
      <input v-model="categoriaInterna.nome" type="text" required />

      <label>Descrição:</label>
      <input v-model="categoriaInterna.descricao" type="text" required />

      <button type="submit">Salvar</button>
      <button type="button" @click="limpar">Limpar</button>
    </form>
  </section>
</template>

<script>
export default {
  props: ['categoria'],
  emits: ['salvar'],
  data() {
    return {
      categoriaInterna: this.categoria ? { ...this.categoria } : { nome: '', descricao: '' }
    };
  },
  watch: {
    categoria(newVal) {
      this.categoriaInterna = newVal ? { ...newVal } : { nome: '', descricao: '' };
    }
  },
  methods: {
    salvar() {
      this.$emit('salvar', this.categoriaInterna);
    },
    limpar() {
      this.categoriaInterna = { nome: '', descricao: '' };
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
