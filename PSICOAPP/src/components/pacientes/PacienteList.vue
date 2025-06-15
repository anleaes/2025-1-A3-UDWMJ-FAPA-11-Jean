<template>
  <h2>Lista de Pacientes</h2>
  <table class="paciente-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>CPF</th>
        <th>Data de Nascimento</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="paciente in pacientes" :key="paciente.id">
        <td>{{ paciente.id }}</td>
        <td>{{ paciente.nome }}</td>
        <td>{{ paciente.cpf }}</td>
        <td>{{ paciente.data_nasc }}</td>
        <td>
          <button class="btn-editar" @click="$emit('editar', paciente)">Editar</button>
          <button class="btn-excluir" @click="$emit('excluir', paciente.id)">Excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  props: ['pacientes'],
  emits: ['editar', 'excluir'],
  methods: {
    editar(paciente) {
      this.$emit('editar', paciente);
    },
    excluir(id) {
      this.$emit('excluir', id);
    }
  }
}
</script>

<style scoped>
.paciente-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #d1dbdf;
  color: #21272c;
}

.paciente-table th, .paciente-table td {
  border: 1px solid #b0c4de;
  padding: 10px;
  text-align: left;
}

.paciente-table thead {
  background-color: #c8dfea;
}

.btn-editar, .btn-excluir {
  padding: 6px 12px;
  margin: 0 4px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.btn-editar {
  background-color: #5dade2;
}

.btn-excluir {
  background-color: #e74c3c;
}

.btn-editar:hover {
  background-color: #3498db;
}

.btn-excluir:hover {
  background-color: #c0392b;
}
</style>
