<template>
  <main class="home-container">
    <header>
      <h1>Bem-vindo ao Mentalize</h1>
      <p>Gerencie facilmente os atendimentos psicológicos!</p>
    </header>

    <nav class="home-nav">
      <router-link to="/profissionais" class="nav-link">👩‍⚕️ Profissionais</router-link>
      <router-link to="/pacientes" class="nav-link">🧑 Pacientes</router-link>
      <router-link to="/especialidades" class="nav-link">📚 Especialidades</router-link>
      <router-link to="/categorias" class="nav-link">📅 Categorias</router-link>
      <router-link to="/medicamentos" class="nav-link">💊 Medicamentos</router-link>
      <router-link to="/atendimentos" class="nav-link">📅 Atendimentos</router-link>
      
    </nav>
  </main>
</template>

<style scoped>
.home-container {
  text-align: center;
  background-color: #d0f0f7;
  padding: 40px 20px;
  border-radius: 10px;
  max-width: 700px;
  margin: 30px auto;
}

header h1 {
  color: #333;
  margin-bottom: 10px;
}

header p {
  color: #555;
  margin-bottom: 30px;
}

.home-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-link {
  text-decoration: none;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #45a049;
}
</style>
