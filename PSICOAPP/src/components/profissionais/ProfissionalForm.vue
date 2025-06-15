<template>
  <section class="form-section">
    <h2>{{ profissionalInterno.id ? 'Editar Profissional' : 'Novo Profissional' }}</h2>
    <form @submit.prevent="salvar">
      <label>Nome:</label>
      <input v-model="profissionalInterno.nome" type="text" required />

      <label>Email:</label>
      <input v-model="profissionalInterno.email" type="email" required />

      <label>Telefone:</label>
      <input v-model="profissionalInterno.telefone" type="text" required />

      <label>Especialidade:</label>
      <select v-model="profissionalInterno.especialidadeId" required>
        <option v-for="esp in especialidades" :key="esp.id" :value="esp.id">
          {{ esp.nome }}
        </option>
      </select>

      <button type="submit">Salvar</button>
      <button type="button" @click="limpar">Limpar</button>
    </form>
  </section>
</template>

<script>
import especialidadeService from '@/services/especialidadeService';

export default {
  props: ['profissional'],
  emits: ['salvar'],
  data() {
    return {
      profissionalInterno: this.profissional ? { ...this.profissional } : { nome: '', email: '', telefone: '', especialidadeId: null },
      especialidades: []
    };
  },
  created() {
    this.carregarEspecialidades();
  },
  watch: {
    profissional(newVal) {
      this.profissionalInterno = newVal ? { ...newVal } : { nome: '', email: '', telefone: '', especialidadeId: null };
    }
  },
  methods: {
    async carregarEspecialidades() {
      this.especialidades = await especialidadeService.getAll();
    },
    salvar() {
      this.$emit('salvar', this.profissionalInterno);
    },
    limpar() {
      this.profissionalInterno = { nome: '', email: '', telefone: '', especialidadeId: null };
    }
  }
};
</script>

<style>

</style>
