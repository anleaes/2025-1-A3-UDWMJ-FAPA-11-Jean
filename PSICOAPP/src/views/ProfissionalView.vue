<template>
  <main>
    <section>
      <router-link to="/">← Voltar para o Início</router-link>
    </section>

    <h1>Gerenciamento de Profissionais</h1>

    <ProfissionalForm
      :profissional="profissionalSelecionado"
      @salvar="salvarProfissional"
    />

    <ProfissionalList
      :profissionais="profissionais"
      @editar="selecionarProfissional"
      @excluir="excluirProfissional"
    />
  </main>
</template>

<script>
import ProfissionalForm from '@/components/profissionais/ProfissionalForm.vue';
import ProfissionalList from '@/components/profissionais/ProfissionalList.vue';
import profissionalService from '@/services/profissionalService';

export default {
  components: {
    ProfissionalForm,
    ProfissionalList
  },
  data() {
    return {
      profissionais: [],
      profissionalSelecionado: null
    };
  },
  created() {
    this.carregarProfissionais();
  },
  methods: {
    async carregarProfissionais() {
      this.profissionais = await profissionalService.getAll();
    },
    async salvarProfissional(profissional) {
      if (profissional.id) {
        await profissionalService.update(profissional.id, profissional);
      } else {
        await profissionalService.create(profissional);
      }
      this.profissionalSelecionado = null;
      this.carregarProfissionais();
    },
    selecionarProfissional(profissional) {
      this.profissionalSelecionado = { ...profissional };
    },
    async excluirProfissional(id) {
      if (confirm('Tem certeza que deseja excluir?')) {
        await profissionalService.delete(id);
        this.carregarProfissionais();
      }
    }
  }
};
</script>
