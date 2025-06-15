<template>
  <main>
    <section>
      <router-link to="/">← Voltar para o Início</router-link>
    </section>

    <h1>Gerenciamento de Atendimentos</h1>

    <AtendimentoForm
      :atendimento="atendimentoSelecionado"
      @salvar="salvarAtendimento"
    />

    <AtendimentoList
      :atendimentos="atendimentos"
      @editar="selecionarAtendimento"
      @excluir="excluirAtendimento"
    />
  </main>
</template>

<script>
import AtendimentoForm from '@/components/atendimentos/AtendimentoForm.vue';
import AtendimentoList from '@/components/atendimentos/AtendimentoList.vue';
import atendimentoService from '@/services/atendimentoService';

export default {
  components: {
    AtendimentoForm,
    AtendimentoList
  },
  data() {
    return {
      atendimentos: [],
      atendimentoSelecionado: null
    };
  },
  created() {
    this.carregarAtendimentos();
  },
  methods: {
    async carregarAtendimentos() {
      this.atendimentos = await atendimentoService.getAll();
    },
    async salvarAtendimento(atendimento) {
      if (atendimento.id) {
        await atendimentoService.update(atendimento.id, atendimento);
      } else {
        await atendimentoService.create(atendimento);
      }
      this.atendimentoSelecionado = null;
      this.carregarAtendimentos();
    },
    selecionarAtendimento(atendimento) {
      this.atendimentoSelecionado = { ...atendimento };
    },
    async excluirAtendimento(id) {
      if (confirm('Deseja excluir este atendimento?')) {
        await atendimentoService.delete(id);
        this.carregarAtendimentos();
      }
    }
  }
};
</script>
