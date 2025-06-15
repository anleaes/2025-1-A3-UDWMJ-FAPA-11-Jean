<template>
  <section class="form-section">
    <h2>{{ prescricaoInterna.id ? 'Editar Prescrição' : 'Nova Prescrição' }}</h2>
    <form @submit.prevent="salvar">
      <label>Atendimento:</label>
      <select v-model="prescricaoInterna.atendimentoId" required>
        <option v-for="at in atendimentos" :key="at.id" :value="at.id">
          Atendimento #{{ at.id }} - {{ at.descricao }}
        </option>
      </select>

      <label>Data:</label>
      <input v-model="prescricaoInterna.data" type="date" required />

      <button type="submit">Salvar</button>
      <button type="button" @click="limpar">Limpar</button>
    </form>
  </section>
</template>

<script>
import atendimentoService from '@/services/atendimentoService';

export default {
  props: ['prescricao'],
  emits: ['salvar'],
  data() {
    return {
      prescricaoInterna: this.prescricao ? { ...this.prescricao } : { atendimentoId: null, data: '' },
      atendimentos: []
    };
  },
  created() {
    this.carregarAtendimentos();
  },
  watch: {
    prescricao(newVal) {
      this.prescricaoInterna = newVal ? { ...newVal } : { atendimentoId: null, data: '' };
    }
  },
  methods: {
    async carregarAtendimentos() {
      this.atendimentos = await atendimentoService.getAll();
    },
    salvar() {
      this.$emit('salvar', this.prescricaoInterna);
    },
    limpar() {
      this.prescricaoInterna = { atendimentoId: null, data: '' };
    }
  }
};
</script>


<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #4CAF50;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

button[type="button"] {
  background-color: #2196F3;
}

button[type="button"]:hover {
  background-color: #1976D2;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
