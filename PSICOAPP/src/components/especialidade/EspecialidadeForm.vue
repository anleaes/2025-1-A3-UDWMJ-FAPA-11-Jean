<template>
  <div class="container">
    <h2>{{ isEdit ? 'Editar Especialidade' : 'Nova Especialidade' }}</h2>

    <form @submit.prevent="saveEspecialidade">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome</label>
        <input
          v-model="especialidade.nome"
          type="text"
          id="nome"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="descricao" class="form-label">Descrição</label>
        <textarea
          v-model="especialidade.descricao"
          id="descricao"
          class="form-control"
          required
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Salvar</button>
      <router-link to="/especialidades" class="btn btn-secondary">Cancelar</router-link>
    </form>
  </div>
</template>

<script>
import especialidadeService from '@/services/especialidadeServices';

export default {
  name: 'EspecialidadeForm',
  data() {
    return {
      especialidade: {
        nome: '',
        descricao: ''
      },
      isEdit: false
    };
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      this.isEdit = true;
      especialidadeService.getEspecialidade(id).then(response => {
        this.especialidade = response.data;
      });
    }
  },
  methods: {
    saveEspecialidade() {
      if (this.isEdit) {
        especialidadeService.updateEspecialidade(this.$route.params.id, this.especialidade).then(() => {
          this.$router.push('/especialidades');
        });
      } else {
        especialidadeService.createEspecialidade(this.especialidade).then(() => {
          this.$router.push('/especialidades');
        });
      }
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
