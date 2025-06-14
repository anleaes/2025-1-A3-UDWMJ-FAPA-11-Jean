<template>
  <div>
    <table class="table table-bordered">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="esp in especialidades" :key="esp.id">
          <td>{{ esp.id }}</td>
          <td>{{ esp.nome }}</td>
          <td>{{ esp.descricao }}</td>
          <td>
            <router-link :to="`/especialidades/editar/${esp.id}`" class="btn btn-warning btn-sm">
              Editar
            </router-link>
            <button @click="deleteEspecialidade(esp.id)" class="btn btn-danger btn-sm ms-2">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import especialidadeService from '@/services/especialidadeServices';

export default {
  name: 'EspecialidadeList',
  data() {
    return {
      especialidades: []
    };
  },
  mounted() {
    this.loadEspecialidades();
  },
  methods: {
    loadEspecialidades() {
      especialidadeService.getAllEspecialidades().then(response => {
        this.especialidades = response.data;
      });
    },
    deleteEspecialidade(id) {
      if (confirm('Tem certeza que deseja excluir?')) {
        especialidadeService.deleteEspecialidade(id).then(() => {
          this.loadEspecialidades();
        });
      }
    }
  }
};
</script>
