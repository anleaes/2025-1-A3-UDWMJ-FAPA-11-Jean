<template>
  <main>
    <section>
      <router-link to="/">← Voltar para o Início</router-link>
    </section>

    <h1>Gerenciamento de Prontuários</h1>

    <ProntuarioForm
      :prontuario="prontuarioSelecionado"
      @salvar="salvarProntuario"
    />

    <ProntuarioList
      :prontuarios="prontuarios"
      @editar="selecionarProntuario"
      @excluir="excluirProntuario"
    />
  </main>
</template>

<script>
import ProntuarioForm from '@/components/prontuario/ProntuarioForm.vue';
import ProntuarioList from '@/components/prontuario/ProntuarioList.vue';
import prontuarioService from '@/services/prontuarioService';

export default {
  components: {
    ProntuarioForm,
    ProntuarioList
  },
  data() {
    return {
      prontuarios: [],
      prontuarioSelecionado: null
    };
  },
  created() {
    this.carregarProntuarios();
  },
  methods: {
    async carregarProntuarios() {
      this.prontuarios = await prontuarioService.getAll();
    },
    async salvarProntuario(prontuario) {
      if (prontuario.id) {
        await prontuarioService.update(prontuario.id, prontuario);
      } else {
        await prontuarioService.create(prontuario);
      }
      this.prontuarioSelecionado = null;
      this.carregarProntuarios();
    },
    selecionarProntuario(prontuario) {
      this.prontuarioSelecionado = { ...prontuario };
    },
    async excluirProntuario(id) {
      if (confirm('Tem certeza que deseja excluir?')) {
        await prontuarioService.delete(id);
        this.carregarProntuarios();
      }
    }
  }
};
</script>
<style>
</style>