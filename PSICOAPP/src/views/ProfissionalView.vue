<template>
  <main>
    <section>
      <router-link to="/home">← Voltar para o Início</router-link>
    </section>

    <h1>Gerenciamento de Profissionais</h1>

    <ProfissionalForm
      :profissional="profissionalSelecionado"
      :especialidades="especialidades"
      @salvar="salvarProfissional"
    />

    <ProfissionalList
      :profissionais="profissionais"
      :especialidadesMap="especialidadesMap"
      @editar="selecionarProfissional"
      @excluir="excluirProfissional"
    />
  </main>
</template>

<script>
import ProfissionalForm from '@/components/profissionais/ProfissionalForm.vue';
import ProfissionalList from '@/components/profissionais/ProfissionalList.vue';
import profissionalService from '@/services/profissionalService';
import especialidadeService from '@/services/especialidadeService';

export default {
  components: {
    ProfissionalForm,
    ProfissionalList
  },
  data() {
    return {
      profissionais: [],
      especialidades: [],
      profissionalSelecionado: null
    };
  },
  computed: {
    especialidadesMap() {
      const map = {};
      this.especialidades.forEach(e => {
        map[e.id] = e.nome;
      });
      return map;
    }
  },
  created() {
    this.carregarProfissionais();
    this.carregarEspecialidades();
  },
  methods: {
    async carregarProfissionais() {
      this.profissionais = await profissionalService.getAll();
    },
    async carregarEspecialidades() {
      this.especialidades = await especialidadeService.getAll();
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

<style>
</style>
