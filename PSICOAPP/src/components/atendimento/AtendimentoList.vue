<template>
  <section>
    <h3>Lista de Atendimentos</h3>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Data</th>
          <th>Descrição</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="atendimento in atendimentos" :key="atendimento.id">
          <td>{{ atendimento.id }}</td>
          <td>{{ atendimento.data }}</td>
          <td>{{ atendimento.descricao }}</td>
          <td>{{ atendimento.status }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import AtendimentoService from '@/services/AtendimentoService';

export default {
  data() {
    return {
      atendimentos: [],
    };
  },
  mounted() {
    AtendimentoService.getAll().then(response => {
      this.atendimentos = response.data;
    });
  },
};
</script>
