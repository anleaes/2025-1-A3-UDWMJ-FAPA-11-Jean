<template>
  <section>
    <h2>Lista de Pacientes</h2>
    <ul>
      <li v-for="paciente in pacientes" :key="paciente.id">
        {{ paciente.nome }} - {{ paciente.cpf }} - {{ paciente.data_nasc }}
        <button @click="$emit('editar', paciente)">Editar</button>
        <button @click="$emit('excluir', paciente.id)">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['pacientes'],
  emits: ['editar', 'excluir']
};
</script>
