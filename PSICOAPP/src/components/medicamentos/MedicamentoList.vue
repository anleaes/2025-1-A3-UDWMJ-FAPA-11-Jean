<template>
  <section class="list-section">
    <h2>Lista de Medicamentos</h2>
    <ul>
      <li v-for="med in medicamentos" :key="med.id">
        {{ med.nome }} - {{ med.descricao }}
        <button @click="$emit('editar', med)">Editar</button>
        <button @click="$emit('excluir', med.id)">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['medicamentos'],
  emits: ['editar', 'excluir']
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f1f1f1;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  margin-left: 8px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:nth-of-type(1) {
  background-color: #4CAF50; /* Verde para o Editar */
  color: white;
}

button:nth-of-type(2) {
  background-color: #e74c3c; /* Vermelho para o Excluir */
  color: white;
}
<<<<<<< HEAD
</style>
=======
</style>

>>>>>>> 800421fe57f966ad5878f52cb45bde32165ff987
