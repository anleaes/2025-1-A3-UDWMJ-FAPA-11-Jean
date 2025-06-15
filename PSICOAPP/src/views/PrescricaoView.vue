<template>
  <main>
    <section class="text-center mt-3">
      <router-link to="/" class="btn btn-primary">
        ← Voltar para o Início
      </router-link>
    </section>

    <h1>Gerenciamento de Prescrições</h1>

    <PrescricaoForm
      :prescricao="prescricaoSelecionada"
      @salvar="salvarPrescricao"
    />

    <PrescricaoList
      :prescricoes="prescricoes"
      @editar="selecionarPrescricao"
      @excluir="excluirPrescricao"
    />
  </main>
</template>

<script>
import PrescricaoForm from '@/components/prescricoes/PrescricaoForm.vue';
import PrescricaoList from '@/components/prescricoes/PrescricaoList.vue';
import prescricaoService from '@/services/prescricaoService';

export default {
  components: {
    PrescricaoForm,
    PrescricaoList
  },
  data() {
    return {
      prescricoes: [],
      prescricaoSelecionada: null
    };
  },
  created() {
    this.carregarPrescricoes();
  },
  methods: {
    async carregarPrescricoes() {
      this.prescricoes = await prescricaoService.getAll();
    },
    async salvarPrescricao(prescricao) {
      if (prescricao.id) {
        await prescricaoService.update(prescricao.id, prescricao);
      } else {
        await prescricaoService.create(prescricao);
      }
      this.prescricaoSelecionada = null;
      this.carregarPrescricoes();
    },
    selecionarPrescricao(prescricao) {
      this.prescricaoSelecionada = { ...prescricao };
    },
    async excluirPrescricao(id) {
      if (confirm('Tem certeza que deseja excluir?')) {
        await prescricaoService.delete(id);
        this.carregarPrescricoes();
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
