<template>
  <section class="list-section">
    <h2>Lista de Prontuários</h2>
    <ul>
      <li v-for="prontuario in prontuarios" :key="prontuario.id">
        <p><strong>Paciente:</strong> {{ prontuario.pacienteNome }}</p>
        <p><strong>Observações:</strong> {{ prontuario.observacoes }}</p>

        <div v-if="prontuario.prescricaoIds && prontuario.prescricaoIds.length">
          <p><strong>Prescrições:</strong></p>
          <ul>
            <li v-for="id in prontuario.prescricaoIds" :key="id">
              Prescrição ID: {{ id }}
            </li>
          </ul>
        </div>

        <button @click="$emit('editar', prontuario)">Editar</button>
        <button class="btn-excluir" @click="$emit('excluir', prontuario.id)">Excluir</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['prontuarios'],
  emits: ['editar', 'excluir']
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f9f9f9;
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
}

p {
  margin: 5px 0;
}

button {
  margin-right: 8px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:first-of-type {
  background-color: #4CAF50; /* Verde */
}

button:first-of-type:hover {
  background-color: #45a049;
}

.btn-excluir {
  background-color: #f44336; /* Vermelho */
}

.btn-excluir:hover {
  background-color: #d32f2f;
}

li ul {
  margin-top: 8px;
  margin-left: 15px;
}

li ul li {
  background: #e7e7e7;
  padding: 6px;
  border-radius: 4px;
  margin-bottom: 4px;
  color: black;
}
</style>
