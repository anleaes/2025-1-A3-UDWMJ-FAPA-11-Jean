<template>
  <section>
    <h2>{{ form.id ? 'Editar Profissional' : 'Novo Profissional' }}</h2>
    <form @submit.prevent="salvar">
      <label>Nome:</label>
      <input v-model="form.nome" required>

      <label>Email:</label>
      <input v-model="form.email" type="email" required>

      <label>Telefone:</label>
      <input v-model="form.telefone" required>

      <button type="submit">Salvar</button>
    </form>
  </section>
</template>


<script>
export default {
  props: {
    profissional: {
      type: Object,
      default: () => ({
        nome: '',
        email: '',
        telefone: ''
      })
    }
  },
  data() {
    return {
      form: { ...this.profissional }  // Cria uma cópia local para edição
    };
  },
  watch: {
    profissional: {
      handler(novo) {
        this.form = { ...novo };
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    salvar() {
      this.$emit('salvar', { ...this.form });
    }
  }
}
</script>
<style>
</style>
