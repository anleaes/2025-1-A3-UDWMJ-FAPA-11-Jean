<template>
  <main>
    <section class="text-center mt-3">
      <router-link to="/" class="btn btn-primary">
        ← Voltar para o Início
      </router-link>
    </section>

    <h1>Gerenciamento de Medicamentos</h1>

    <MedicamentoForm
      :medicamento="medicamentoSelecionado"
      @salvar="salvarMedicamento"
    />

    <MedicamentoList
      :medicamentos="medicamentos"
      @editar="selecionarMedicamento"
      @excluir="excluirMedicamento"
    />
  </main>
</template>

<script>
import MedicamentoForm from '@/components/medicamentos/MedicamentoForm.vue';
import MedicamentoList from '@/components/medicamentos/MedicamentoList.vue';
import medicamentoService from '@/services/medicamentoServices';

export default {
  components: {
    MedicamentoForm,
    MedicamentoList
  },
  data() {
    return {
      medicamentos: [],
      medicamentoSelecionado: null
    };
  },
  created() {
    this.carregarMedicamentos();
  },
  methods: {
    async carregarMedicamentos() {
      this.medicamentos = await medicamentoService.getAll();
    },
    async salvarMedicamento(medicamento) {
      if (medicamento.id) {
        await medicamentoService.update(medicamento.id, medicamento);
      } else {
        await medicamentoService.create(medicamento);
      }
      this.medicamentoSelecionado = null;
      this.carregarMedicamentos();
    },
    selecionarMedicamento(medicamento) {
      this.medicamentoSelecionado = { ...medicamento };
    },
    async excluirMedicamento(id) {
      if (confirm('Deseja excluir este medicamento?')) {
        await medicamentoService.delete(id);
        this.carregarMedicamentos();
      }
    }
  }
};
</script>

<style scoped>
main {
  background-color: rgb(178, 233, 247);
  padding: 20px;
  max-width: 800px;
  margin: auto;
}
h1 {
  color: rgb(56, 55, 55);
}
</style>
