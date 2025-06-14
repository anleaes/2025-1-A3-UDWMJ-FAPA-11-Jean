<!-- src/views/PacienteView.vue -->
<template>
  <main>
    <router-link to="/" class="btn-voltar">⬅ Voltar para o Início</router-link>
    <h1>Gerenciamento de Pacientes</h1>

    <PacienteForm
      :paciente="pacienteSelecionado"
      @salvar="salvarPaciente"
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
import pacienteService from '@/services/pacienteServices'

export default {
  components: {
    PacienteForm,
    PacienteList
  },
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

<style scoped>
.btn-voltar {
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: #8cc5eb;
  color: white;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-voltar:hover {
  background-color: #92c9ee;
}

main {
  background-color: rgb(178, 233, 247);
  padding: 20px;
  max-width: 800px;
  margin: auto;
}
h1{
  color: rgb(56, 55, 55)
}
</style>
