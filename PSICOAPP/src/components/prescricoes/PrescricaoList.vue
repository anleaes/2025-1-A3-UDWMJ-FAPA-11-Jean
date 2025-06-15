<template>
  <section class="list-section">
    <h2>Lista de Prescrições</h2>
    <ul>
      <li v-for="prescricao in prescricoes" :key="prescricao.id" class="list-item">
        <strong>Atendimento:</strong> {{ prescricao.atendimentoId }} 
        <strong>Data:</strong> {{ prescricao.data }} 
        <strong>Observações:</strong> {{ prescricao.observacoes }}

        <div v-if="prescricao.itens && prescricao.itens.length > 0" class="medicamentos-list">
          <strong>Medicamentos:</strong>
          <ul>
            <li v-for="(item, index) in prescricao.itens" :key="index">
              {{ nomeDoMedicamento(item.medicamentoId) }} - Quantidade: {{ item.quantidade }}
            </li>
          </ul>
        </div>

        <button @click="$emit('editar', prescricao)" class="editar-btn">Editar</button>
        <button @click="$emit('excluir', prescricao.id)" class="excluir-btn">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
import medicamentoService from '@/services/medicamentoServices';

export default {
  props: ['prescricoes'],
  emits: ['editar', 'excluir'],
  data() {
    return {
      medicamentos: []
    };
  },
  created() {
    this.carregarMedicamentos();
  },
  methods: {
    async carregarMedicamentos() {
      this.medicamentos = await medicamentoService.getAll();
    },
    nomeDoMedicamento(id) {
      const med = this.medicamentos.find(m => m.id === id);
      return med ? med.nome : 'Medicamento não encontrado';
    }
  }
};
</script>

<style scoped>
main {
  background-color: #ffffff;
  padding: 20px;
  max-width: 1200px;
  width: 90%;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.list-section ul {
  list-style: none;
  padding: 0;
}

.list-item {
  background-color: #f9f9f9;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  color: #333;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.prescricao-info > div {
  margin-bottom: 12px;
}

.prescricao-info strong {
  display: inline-block;
  width: 120px;
  color: #444;
}

.medicamentos-list {
  background-color: #e0f7fa;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.medicamentos-list ul {
  padding-left: 20px;
  margin: 0;
}

.medicamentos-list li {
  margin-bottom: 8px;
}

button {
  margin-right: 12px;
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.editar-btn {
  background-color: #4CAF50;
  color: white;
}

.editar-btn:hover {
  background-color: #45a049;
}

.excluir-btn {
  background-color: #f44336;
  color: white;
}

.excluir-btn:hover {
  background-color: #d32f2f;
}


</style>
