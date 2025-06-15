<template>
  <main>
    <section class="text-center mt-3">
      <router-link to="/" class="btn btn-primary">← Voltar para o Início</router-link>
    </section>

    <h1>Gerenciamento de Pacientes</h1>

    <button @click="pacienteSelecionado = { nome: '', cpf: '', data_nasc: '' }" class="btn-adicionar">
      Novo Paciente
    </button>

    <PacienteForm
      v-if="pacienteSelecionado"
      :paciente="pacienteSelecionado"
      @salvar="salvarPaciente"
      @limpar="pacienteSelecionado = null"
    />

    <PacienteList
      :pacientes="pacientes"
      @editar="selecionarPaciente"
      @excluir="excluirPaciente"
    />
  </main>
</template>

<script>
import PacienteForm from '@/components/pacientes/PacienteForm.vue'
import PacienteList from '@/components/pacientes/PacienteList.vue'
import pacienteService from '@/services/pacienteService'

export default {
  components: { PacienteForm, PacienteList },
  data() {
    return {
      pacientes: [],
      pacienteSelecionado: null
    }
  },
  created() {
    this.carregarPacientes()
  },
  methods: {
    async carregarPacientes() {
      this.pacientes = await pacienteService.getAll()
    },
    async salvarPaciente(paciente) {
      if (paciente.id) {
        await pacienteService.update(paciente.id, paciente)
      } else {
        await pacienteService.create(paciente)
      }
      this.pacienteSelecionado = null
      this.carregarPacientes()
    },
    selecionarPaciente(paciente) {
      this.pacienteSelecionado = { ...paciente }
    },
    async excluirPaciente(id) {
      if (confirm('Deseja excluir este paciente?')) {
        await pacienteService.delete(id)
        this.carregarPacientes()
      }
    }
  }
}
</script>

<style>
</style>
