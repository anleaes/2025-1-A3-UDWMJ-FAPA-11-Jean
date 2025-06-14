<template>
  <section>
    <h3>Novo Atendimento</h3>
    <form @submit.prevent="salvarAtendimento">
      <p>
        <label>Data:</label>
        <input type="date" v-model="atendimento.data" required />
      </p>
      <p>
        <label>Descrição:</label>
        <input type="text" v-model="atendimento.descricao" required />
      </p>
      <p>
        <label>Status:</label>
        <input type="text" v-model="atendimento.status" required />
      </p>
      <button type="submit">Salvar</button>
    </form>
  </section>
</template>

<script>
import AtendimentoService from '@/services/AtendimentoService';

export default {
  data() {
    return {
      atendimento: {
        data: '',
        descricao: '',
        status: '',
      },
    };
  },
  methods: {
    salvarAtendimento() {
      AtendimentoService.create(this.atendimento).then(() => {
        alert('Atendimento salvo!');
        this.atendimento = { data: '', descricao: '', status: '' };
      });
    },
  },
};
</script>
