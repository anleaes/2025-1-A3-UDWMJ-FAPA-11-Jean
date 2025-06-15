<template>
  <section class="list-section">
    <h2>Lista de Categorias</h2>
    <ul>
      <li v-for="cat in categorias" :key="cat.id">
        {{ cat.nome }} - {{ cat.descricao }}
        <button @click="$emit('editar', cat)">Editar</button>
        <button class="excluir" @click="$emit('excluir', cat.id)">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['categorias'],
  emits: ['editar', 'excluir']
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f1f1f1;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 5px;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}

.excluir {
  background-color: #e74c3c;
  color: white;
}

.excluir:hover {
  background-color: #c0392b;
}
</style>
