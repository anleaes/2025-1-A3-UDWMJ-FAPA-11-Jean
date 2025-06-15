<template>
  <section class="form-section">
    <h2>{{ prescricaoInterna.id ? 'Editar Prescrição' : 'Nova Prescrição' }}</h2>

    <form @submit.prevent="salvar">
      <label>Descrição:</label>
      <input v-model="prescricaoInterna.descricao" type="text" required />

      <h3>Itens da Prescrição:</h3>
      <ul>
        <li v-for="(item, index) in prescricaoInterna.itens" :key="index">
          {{ getNomeMedicamento(item.medicamentoId) }} - Quantidade: {{ item.quantidade }}
          <button type="button" @click="removerItem(index)">Remover</button>
        </li>
      </ul>

      <label>Medicamento:</label>
      <select v-model="novoItem.medicamentoId" required>
        <option value="" disabled>Selecione um medicamento</option>
        <option v-for="med in medicamentos" :key="med.id" :value="med.id">
          {{ med.nome }}
        </option>
      </select>

      <label>Quantidade:</label>
      <input v-model.number="novoItem.quantidade" type="number" min="1" required />

      <button type="button" @click="adicionarItem">Adicionar Item</button>

      <div style="margin-top: 10px;">
        <button type="submit">Salvar Prescrição</button>
        <button type="button" @click="limpar">Limpar</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  props: ['prescricao'],
  emits: ['salvar'],
  data() {
    return {
      prescricaoInterna: this.prescricao
        ? { ...this.prescricao, itens: this.prescricao.itens || [] }
        : { descricao: '', itens: [] },
      novoItem: {
        medicamentoId: '',
        quantidade: 1
      },
      medicamentos: []
    };
  },
  watch: {
    prescricao(newVal) {
      this.prescricaoInterna = newVal
        ? { ...newVal, itens: newVal.itens || [] }
        : { descricao: '', itens: [] };
    }
  },
  created() {
    this.carregarMedicamentos();
  },
  methods: {
    async carregarMedicamentos() {
      const response = await axios.get('http://localhost:3000/medicamentos');
      this.medicamentos = response.data;
    },
    getNomeMedicamento(id) {
      const med = this.medicamentos.find(m => m.id == id);
      return med ? med.nome : 'Medicamento desconhecido';
    },
    adicionarItem() {
      if (this.novoItem.medicamentoId && this.novoItem.quantidade > 0) {
        this.prescricaoInterna.itens.push({ ...this.novoItem });
        this.novoItem = { medicamentoId: '', quantidade: 1 };
      }
    },
    removerItem(index) {
      this.prescricaoInterna.itens.splice(index, 1);
    },
    salvar() {
      this.$emit('salvar', this.prescricaoInterna);
    },
    limpar() {
      this.prescricaoInterna = { descricao: '', itens: [] };
      this.novoItem = { medicamentoId: '', quantidade: 1 };
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
