<template>
  <form @submit.prevent="salvar">
    <input v-model="formData.nome" type="text" placeholder="Nome da Especialidade" required>
    <input v-model="formData.descricao" type="text" placeholder="Descrição" required>
    <button type="submit">Salvar</button>
  </form>
</template>


<script>
export default {
  props: {
    especialidade: {
      type: Object,
      default: () => ({ nome: '', descricao: '' })  // ← ISSO EVITA O ERRO
    }
  },
  data() {
    return {
      formData: { nome: '', descricao: '' }
    }
  },
  watch: {
    especialidade: {
      immediate: true,
      handler(novoValor) {
        this.formData = { ...novoValor };
      }
    }
  },
  methods: {
    salvar() {
      this.$emit('salvar', this.formData);
      this.formData = { nome: '', descricao: '' };
    }
  }
}
</script>