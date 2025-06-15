<template>
  <section>
    <h2>Lista de Atendimentos</h2>
    <ul>
      <li v-for="atendimento in atendimentos" :key="atendimento.id">
        {{ atendimento.data }} - {{ atendimento.descricao }} - {{ atendimento.status }}
        <button @click="$emit('editar', atendimento)">Editar</button>
        <button @click="$emit('excluir', atendimento.id)">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['atendimentos'],
  emits: ['editar', 'excluir']
};
</script>
