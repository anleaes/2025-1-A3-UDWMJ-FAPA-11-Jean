<template>
  <section class="form-section">
    <h2>{{ prescricaoInterna.id ? 'Editar Prescrição' : 'Nova Prescrição' }}</h2>
    <form @submit.prevent="salvar">
      
      <label>Atendimento:</label>
      <select v-model="prescricaoInterna.atendimentoId" required>
        <option v-for="at in atendimentos" :key="at.id" :value="at.id">
          {{ at.descricao }} - {{ at.data }}
        </option>
      </select>

      <label>Data:</label>
      <input v-model="prescricaoInterna.data" type="date" required />

      <label>Observações:</label>
      <textarea v-model="prescricaoInterna.observacoes"></textarea>

      <h3>Adicionar Medicamentos</h3>

      <label>Medicamento:</label>
      <select v-model="novoItem.medicamentoId">
        <option v-for="med in medicamentos" :key="med.id" :value="med.id">
          {{ med.nome }}
        </option>
      </select>

      <label>Quantidade:</label>
      <input v-model="novoItem.quantidade" type="number" min="1" />

      <button type="button" @click="adicionarMedicamento">Adicionar Medicamento</button>

      <ul>
        <li v-for="(item, index) in prescricaoInterna.itens" :key="index">
          {{ nomeDoMedicamento(item.medicamentoId) }} - Quantidade: {{ item.quantidade }}
          <button type="button" @click="removerItem(index)">Remover</button>
        </li>
      </ul>

      <button type="submit">Salvar</button>
      <button type="button" @click="limpar">Limpar</button>
    </form>
  </section>
</template>

<script>
import atendimentoService from '@/services/atendimentoService';
import medicamentoService from '@/services/medicamentoServices';

export default {
  props: ['prescricao'],
  emits: ['salvar'],
  data() {
    return {
      prescricaoInterna: this.prescricao
        ? { ...this.prescricao, itens: [...(this.prescricao.itens || [])] }
        : { atendimentoId: null, data: '', observacoes: '', itens: [] },
      novoItem: { medicamentoId: null, quantidade: 1 },
      atendimentos: [],
      medicamentos: []
    };
  },
  created() {
    this.carregarAtendimentos();
    this.carregarMedicamentos();
  },
  watch: {
    prescricao(newVal) {
      this.prescricaoInterna = newVal
        ? { ...newVal, itens: [...(newVal.itens || [])] }
        : { atendimentoId: null, data: '', observacoes: '', itens: [] };
    }
  },
  methods: {
    async carregarAtendimentos() {
      this.atendimentos = await atendimentoService.getAll();
    },
    async carregarMedicamentos() {
      this.medicamentos = await medicamentoService.getAll();
    },
    nomeDoMedicamento(id) {
      const med = this.medicamentos.find(m => m.id === id);
      return med ? med.nome : 'Medicamento não encontrado';
    },
    adicionarMedicamento() {
      if (this.novoItem.medicamentoId && this.novoItem.quantidade > 0) {
        this.prescricaoInterna.itens.push({ ...this.novoItem });
        this.novoItem = { medicamentoId: null, quantidade: 1 };
      }
    },
    removerItem(index) {
      this.prescricaoInterna.itens.splice(index, 1);
    },
    salvar() {
      this.$emit('salvar', this.prescricaoInterna);
    },
    limpar() {
      this.prescricaoInterna = { atendimentoId: null, data: '', observacoes: '', itens: [] };
      this.novoItem = { medicamentoId: null, quantidade: 1 };
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

h3 {
    color: black;
}
ul li {
  margin-bottom: 6px;
  color: black;
}
</style>
