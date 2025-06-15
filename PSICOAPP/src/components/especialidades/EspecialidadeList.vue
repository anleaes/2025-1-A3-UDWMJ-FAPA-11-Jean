<template>
  <section>
    <h2>Lista de Especialidades</h2>
    <ul>
      <li v-for="especialidade in especialidades" :key="especialidade.id">
        {{ especialidade.nome }} - {{ especialidade.descricao }}
        <button @click="$emit('editar', especialidade)">Editar</button>
        <button @click="$emit('excluir', especialidade.id)">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['especialidades'],
  emits: ['editar', 'excluir']
};
</script>
