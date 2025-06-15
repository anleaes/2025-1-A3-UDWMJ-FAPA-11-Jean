<template>
  <section>
    <h2>Lista de Profissionais</h2>
    <ul>
      <li v-for="profissional in profissionais" :key="profissional.id">
        <span>{{ profissional.nome }} - {{ profissional.email }} - {{ profissional.telefone }}</span>
        <button @click="$emit('editar', profissional)">Editar</button>
        <button @click="$emit('excluir', profissional.id)">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['profissionais'],
  emits: ['editar', 'excluir']
};
</script>
<style>
ul li {
  background-color: #f1f1f1;
  color: #333; 
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul li span {
  flex-grow: 1;
}
</style>