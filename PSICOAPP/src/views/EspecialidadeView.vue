<template>
  <main>
    <section>
      <router-link to="/home">← Voltar para o Início</router-link>
    </section>

    <h1>Gerenciamento de Especialidades</h1>

    <EspecialidadeForm
      :especialidade="especialidadeSelecionada"
      @salvar="salvarEspecialidade"
    />

    <EspecialidadeList
      :especialidades="especialidades"
      @editar="selecionarEspecialidade"
      @excluir="excluirEspecialidade"
    />
  </main>
</template>

<script>
import EspecialidadeForm from '@/components/especialidades/EspecialidadeForm.vue';
import EspecialidadeList from '@/components/especialidades/EspecialidadeList.vue';
import especialidadeService from '@/services/especialidadeService';

export default {
  components: {
    EspecialidadeForm,
    EspecialidadeList
  },
  data() {
    return {
      especialidades: [],
      especialidadeSelecionada: null
    };
  },
  created() {
    this.carregarEspecialidades();
  },
  methods: {
    async carregarEspecialidades() {
      this.especialidades = await especialidadeService.getAll();
    },
    async salvarEspecialidade(especialidade) {
      if (especialidade.id) {
        await especialidadeService.update(especialidade.id, especialidade);
      } else {
        await especialidadeService.create(especialidade);
      }
      this.especialidadeSelecionada = null;
      this.carregarEspecialidades();
    },
    selecionarEspecialidade(especialidade) {
      this.especialidadeSelecionada = { ...especialidade };
    },
    async excluirEspecialidade(id) {
      if (confirm('Deseja excluir esta especialidade?')) {
        await especialidadeService.delete(id);
        this.carregarEspecialidades();
      }
    }
  }
};
</script>
<style>
</style>