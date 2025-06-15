<template>
  <section class="list-section">
    <h2>Lista de Prescrições</h2>
    <ul>
      <li v-for="prescricao in prescricoes" :key="prescricao.id">
        <strong>{{ prescricao.descricao }}</strong>
        <ul>
          <li v-for="(item, index) in prescricao.itens" :key="index">
            Medicamento ID: {{ item.medicamentoId }} - Quantidade: {{ item.quantidade }}
          </li>
        </ul>
        <button @click="$emit('editar', prescricao)">Editar</button>
        <button class="btn-excluir" @click="$emit('excluir', prescricao.id)">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['prescricoes'],
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
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

.btn-excluir {
  background-color: #e74c3c;
  color: white;
}

button:not(.btn-excluir) {
  background-color: #2196F3;
  color: white;
}
</style>
