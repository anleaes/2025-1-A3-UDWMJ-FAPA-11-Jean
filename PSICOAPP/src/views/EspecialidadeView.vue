<template>
  <div class="container">
    <h2>Lista de Especialidades</h2>
    <router-link to="/especialidades/novo" class="btn btn-success mb-3">
      <i class="fas fa-plus"></i> Nova Especialidade
    </router-link>

    <EspecialidadeList />
  </div>
</template>

<script>
import EspecialidadeList from '@/components/especialidade/EspecialidadeList.vue';

export default {
  name: 'EspecialidadeView',
  components: {
    EspecialidadeList,
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
