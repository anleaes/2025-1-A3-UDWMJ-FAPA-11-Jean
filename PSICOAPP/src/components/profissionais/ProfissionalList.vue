<template>
  <section class="list-section">
    <h2>Lista de Profissionais</h2>
    <ul>
      <li v-for="prof in profissionais" :key="prof.id" class="list-item">
        <p><strong>Nome:</strong> {{ prof.nome }}</p>
        <p><strong>Email:</strong> {{ prof.email }}</p>
        <p><strong>Telefone:</strong> {{ prof.telefone }}</p>
        <p><strong>Especialidade:</strong> {{ especialidadesMap[prof.especialidadeId] || 'Não informado' }}</p>

        <div class="button-group">
          <button @click="$emit('editar', prof)">Editar</button>
          <button class="excluir" @click="$emit('excluir', prof.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['profissionais', 'especialidadesMap'],
  emits: ['editar', 'excluir']
};
</script>

<style scoped>
.list-item {
  background-color: #f1f1f1;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 6px;
  color: black;
}

.list-item p {
  margin: 4px 0;
}

.button-group {
  margin-top: 10px;
}

button {
  margin-right: 8px;
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:first-of-type {
  background-color: #4CAF50; 
}

button:first-of-type:hover {
  background-color: #45a049;
}

button.excluir {
  background-color: #f44336; 
}

button.excluir:hover {
  background-color: #d32f2f;
}
</style>
