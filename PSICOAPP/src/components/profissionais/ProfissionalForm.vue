<template>
  <div>
    <h2>{{ isEdit ? 'Editar' : 'Novo' }} Profissional</h2>
    <form @submit.prevent="salvarProfissional">
      <input v-model="profissional.nome" placeholder="Nome" required />
      <input v-model="profissional.email" placeholder="Email" required />
      <input v-model="profissional.telefone" placeholder="Telefone" required />
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
import ProfissionalService from '@/services/ProfissionalService';

export default {
  data() {
    return {
      profissional: {
        nome: '',
        email: '',
        telefone: ''
      },
      isEdit: false
    };
  },
  methods: {
    salvarProfissional() {
      if (this.isEdit) {
        ProfissionalService.atualizar(this.$route.params.id, this.profissional)
          .then(() => this.$router.push('/profissionais'));
      } else {
        ProfissionalService.criar(this.profissional)
          .then(() => this.$router.push('/profissionais'));
      }
    },
    carregarProfissional() {
      ProfissionalService.buscarPorId(this.$route.params.id)
        .then(response => {
          this.profissional = response.data;
          this.isEdit = true;
        });
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.carregarProfissional();
    }
  }
};
</script>
