<template>
  <main>
    <section class="text-center mt-3">
      <router-link to="/" class="btn-voltar">
        ← Voltar para o Início
      </router-link>
    </section>

    <h1>Gerenciamento de Itens de Medicamento</h1>

    <MedicamentoItemForm
      :item="itemSelecionado"
      @salvar="salvarItem"
    />

    <MedicamentoItemList
      :itens="itens"
      @editar="selecionarItem"
      @excluir="excluirItem"
    />
  </main>
</template>

<script>
import MedicamentoItemForm from '@/components/medicamentoItens/MedicamentoItemForm.vue';
import MedicamentoItemList from '@/components/medicamentoItens/MedicamentoItemList.vue';
import medicamentoItemService from '@/services/medicamentoItemService';

export default {
  components: {
    MedicamentoItemForm,
    MedicamentoItemList
  },
  data() {
    return {
      itens: [],
      itemSelecionado: null
    };
  },
  created() {
    this.carregarItens();
  },
  methods: {
    async carregarItens() {
      this.itens = await medicamentoItemService.getAll();
    },
    async salvarItem(item) {
      if (item.id) {
        await medicamentoItemService.update(item.id, item);
      } else {
        await medicamentoItemService.create(item);
      }
      this.itemSelecionado = null;
      this.carregarItens();
    },
    selecionarItem(item) {
      this.itemSelecionado = { ...item };
    },
    async excluirItem(id) {
      if (confirm('Tem certeza que deseja excluir?')) {
        await medicamentoItemService.delete(id);
        this.carregarItens();
      }
    }
  }
};
</script>

<style scoped>
main {
  background-color: rgb(178, 233, 247);
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

h1 {
  color: rgb(56, 55, 55);
}

.btn-voltar {
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: #8cc5eb;
  color: white;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-voltar:hover {
  background-color: #92c9ee;
}
</style>
