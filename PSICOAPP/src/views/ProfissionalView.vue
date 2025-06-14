<template>
  <main>
    <router-link to="/" class="btn-voltar">⬅ Voltar para o Início</router-link>
    <h1>Profissionais</h1>
    <ProfissionalForm
      :profissional="profissionalSelecionado"
      @salvar="salvarProfissional"
    />
    <ProfissionalList
      :profissionais="profissionais"
      @editar="selecionarProfissional"
      @excluir="excluirProfissional"
    />
  </main>
</template>

<script>
import ProfissionalForm from '@/components/profissionais/ProfissionalForm.vue'
import ProfissionalList from '@/components/profissionais/ProfissionalList.vue'
import profissionalService from '@/services/profissionalService'

export default {
  components: { ProfissionalForm, ProfissionalList },
  data() {
    return {
      profissionais: [],
      profissionalSelecionado: null
    }
  },
  created() {
    this.carregarProfissionais()
  },
  methods: {
    async carregarProfissionais() {
      this.profissionais = await profissionalService.getAll()
    },
    async salvarProfissional(prof) {
      if (prof.id) {
        await profissionalService.update(prof.id, prof)
      } else {
        await profissionalService.create(prof)
      }
      this.profissionalSelecionado = null
      this.carregarProfissionais()
    },
    selecionarProfissional(prof) {
      this.profissionalSelecionado = { ...prof }
    },
    async excluirProfissional(id) {
      if (confirm('Excluir profissional?')) {
        await profissionalService.delete(id)
        this.carregarProfissionais()
      }
    }
  }
}
</script>
<style>
/* src/assets/css/profissional.css */

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #e6f2f5;
  margin: 0;
  padding: 0;
  color: #2c3e50;
}

h1, h2 {
  color: #2c3e50;
  text-align: center;
  margin-top: 20px;
}

table {
  width: 90%;
  margin: 20px auto;
  border-collapse: collapse;
  background-color: #f0f6f8;
  color: #2c3e50;
}

th, td {
  border: 1px solid #b0c4de;
  padding: 12px;
  text-align: left;
}

thead {
  background-color: #c8dfea;
}

button {
  padding: 8px 16px;
  margin: 4px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
}

.btn-editar {
  background-color: #5dade2;
}

.btn-editar:hover {
  background-color: #3498db;
}

.btn-excluir {
  background-color: #e74c3c;
}

.btn-excluir:hover {
  background-color: #c0392b;
}

.btn-voltar {
  display: block;
  width: fit-content;
  margin: 20px auto;
  padding: 10px 18px;
  background-color: #2980b9;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.btn-voltar:hover {
  background-color: #2980b9;
}

</style>