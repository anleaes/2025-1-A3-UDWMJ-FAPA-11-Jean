<template>
  <main>
    <section class="text-center mt-3">
      <router-link to="/" class="btn-voltar">← Voltar para o Início</router-link>
    </section>
    <h1>Gerenciamento de Categorias</h1>

    <CategoriaForm
      :categoria="categoriaSelecionada"
      @salvar="salvarCategoria"
    />

    <CategoriaList
      :categorias="categorias"
      @editar="selecionarCategoria"
      @excluir="excluirCategoria"
    />
  </main>
</template>

<script>
import CategoriaForm from '@/components/categorias/CategoriaForm.vue';
import CategoriaList from '@/components/categorias/CategoriaList.vue';
import categoriaService from '@/services/categoriaService.js';

export default {
  components: {
    CategoriaForm,
    CategoriaList
  },
  data() {
    return {
      categorias: [],
      categoriaSelecionada: null
    };
  },
  created() {
    this.carregarCategorias();
  },
  methods: {
    async carregarCategorias() {
      this.categorias = await categoriaService.getAll();
    },
    async salvarCategoria(categoria) {
      if (categoria.id) {
        await categoriaService.update(categoria.id, categoria);
      } else {
        await categoriaService.create(categoria);
      }
      this.categoriaSelecionada = null;
      this.carregarCategorias();
    },
    selecionarCategoria(categoria) {
      this.categoriaSelecionada = { ...categoria };
    },
    async excluirCategoria(id) {
      if (confirm('Deseja excluir esta categoria?')) {
        await categoriaService.delete(id);
        this.carregarCategorias();
      }
    }
  }
};
</script>

<style>
</style>
