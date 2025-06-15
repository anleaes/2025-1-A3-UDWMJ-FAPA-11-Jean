<template>
  <section class="list-section">
    <h2>Lista de Itens de Medicamento</h2>
    <ul>
      <li v-for="item in itens" :key="item.id">
        Prescrição: {{ item.prescricaoId }} - Medicamento: {{ item.medicamentoId }} - Quantidade: {{ item.quantidade }}
        <button @click="$emit('editar', item)">Editar</button>
        <button @click="$emit('excluir', item.id)" class="btn-excluir">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['itens'],
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
  margin-right: 5px;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-excluir {
  background-color: #d9534f;
  color: white;
}
</style>
