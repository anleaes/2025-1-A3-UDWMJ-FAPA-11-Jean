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
<<<<<<< HEAD
  emits: ['editar', 'excluir']
};
=======
  emits: ['editar', 'excluir'],
  methods: {
    editar(paciente) {
      this.$emit('editar', paciente);
    },
    excluir(id) {
      this.$emit('excluir', id);
    }
  }
}
>>>>>>> 800421fe57f966ad5878f52cb45bde32165ff987
</script>
