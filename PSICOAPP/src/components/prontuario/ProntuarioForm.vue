<template>
  <section class="form-section">
    <h2>{{ prontuarioInterno.id ? 'Editar Prontuário' : 'Novo Prontuário' }}</h2>
    <form @submit.prevent="salvar">
      
      <label>Paciente:</label>
      <select v-model="prontuarioInterno.pacienteId" required>
        <option v-for="pac in pacientes" :key="pac.id" :value="pac.id">
          {{ pac.nome }}
        </option>
      </select>

      <label>Prescrições:</label>
      <select v-model="prontuarioInterno.prescricaoIds" multiple>
        <option v-for="presc in prescricoes" :key="presc.id" :value="presc.id">
          Atendimento {{ presc.atendimentoId }} - Data: {{ presc.data }}
        </option>
      </select>

      <label>Observações:</label>
      <textarea v-model="prontuarioInterno.observacoes" required></textarea>

      <button type="submit">Salvar</button>
      <button type="button" @click="limpar">Limpar</button>
    </form>
  </section>
</template>

<script>
import pacienteService from '@/services/pacienteService';
import prescricaoService from '@/services/prescricaoService';

export default {
  props: ['prontuario'],
  emits: ['salvar'],
  data() {
    return {
      prontuarioInterno: this.prontuario
        ? { ...this.prontuario }
        : { pacienteId: null, observacoes: '', prescricaoIds: [] },
      pacientes: [],
      prescricoes: []
    };
  },
  created() {
    this.carregarPacientes();
    this.carregarPrescricoes();
  },
  watch: {
    prontuario(newVal) {
      this.prontuarioInterno = newVal
        ? { ...newVal }
        : { pacienteId: null, observacoes: '', prescricaoIds: [] };
    }
  },
  methods: {
    async carregarPacientes() {
      this.pacientes = await pacienteService.getAll();
    },
    async carregarPrescricoes() {
      this.prescricoes = await prescricaoService.getAll();
    },
    salvar() {
      this.$emit('salvar', this.prontuarioInterno);
    },
    limpar() {
      this.prontuarioInterno = { pacienteId: null, observacoes: '', prescricaoIds: [] };
    }
  }
};
</script>

<style scoped>
form select,
form textarea {
  width: 100%;
}
</style>
