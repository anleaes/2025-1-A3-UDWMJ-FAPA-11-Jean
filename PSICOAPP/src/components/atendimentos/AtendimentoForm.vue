<template>
  <section class="form-section">
    <h2>{{ atendimentoInterno.id ? 'Editar Atendimento' : 'Novo Atendimento' }}</h2>
    <form @submit.prevent="salvar">
      <label>Paciente:</label>
      <select v-model="atendimentoInterno.pacienteId" required>
        <option v-for="pac in pacientes" :key="pac.id" :value="pac.id">
          {{ pac.nome }}
        </option>
      </select>

      <label>Profissional:</label>
      <select v-model="atendimentoInterno.profissionalId" required>
        <option v-for="prof in profissionais" :key="prof.id" :value="prof.id">
          {{ prof.nome }}
        </option>
      </select>

      <label>Data:</label>
      <input v-model="atendimentoInterno.data" type="date" required />

      <label>Descrição:</label>
      <textarea v-model="atendimentoInterno.descricao" required></textarea>

      <button type="submit">Salvar</button>
      <button type="button" @click="limpar">Limpar</button>
    </form>
  </section>
</template>

<script>
import pacienteService from '@/services/pacienteService';
import profissionalService from '@/services/profissionalService';

export default {
  props: ['atendimento'],
  emits: ['salvar'],
  data() {
    return {
      atendimentoInterno: this.atendimento
        ? { ...this.atendimento }
        : { pacienteId: null, profissionalId: null, data: '', descricao: '' },
      pacientes: [],
      profissionais: []
    };
  },
  created() {
    this.carregarDados();
  },
  watch: {
    atendimento(newVal) {
      this.atendimentoInterno = newVal
        ? { ...newVal }
        : { pacienteId: null, profissionalId: null, data: '', descricao: '' };
    }
  },
  methods: {
    async carregarDados() {
      this.pacientes = await pacienteService.getAll();
      this.profissionais = await profissionalService.getAll();
    },
    salvar() {
      this.$emit('salvar', this.atendimentoInterno);
    },
    limpar() {
      this.atendimentoInterno = { pacienteId: null, profissionalId: null, data: '', descricao: '' };
    }
  }
};
</script>


<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  margin-top: 5px;
}
</style>