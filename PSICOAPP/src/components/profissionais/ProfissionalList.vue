<template>
  <div>
    <h2>Lista de Profissionais</h2>
    <router-link to="/profissionais/novo">Adicionar Profissional</router-link>
    <ul>
      <li v-for="prof in profissionais" :key="prof.id">
        {{ prof.nome }} - {{ prof.email }}
        <router-link :to="`/profissionais/editar/${prof.id}`">Editar</router-link>
        <button @click="excluirProfissional(prof.id)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
import ProfissionalService from '@/services/ProfissionalService';

export default {
  data() {
    return {
      profissionais: []
    };
  },
  methods: {
    carregarProfissionais() {
      ProfissionalService.listar().then(response => {
        this.profissionais = response.data;
      });
    },
    excluirProfissional(id) {
      ProfissionalService.excluir(id).then(() => {
        this.carregarProfissionais();
      });
    }
  },
  mounted() {
    this.carregarProfissionais();
  }
};
</script>
