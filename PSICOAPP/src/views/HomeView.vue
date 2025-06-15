<template>
  <main class="home-container">
    <header>
      <h1>Bem-vindo ao Mentalize</h1>
      <p>Gerencie facilmente seus atendimentos psicológicos!</p>
    </header>

    <nav class="home-nav">
      <router-link to="/profissionais" class="nav-link">👩‍⚕️ Profissionais</router-link>
      <router-link to="/pacientes" class="nav-link">🧑 Pacientes</router-link>
      <router-link to="/especialidades" class="nav-link">📚 Especialidades</router-link>
      <router-link to="/categorias" class="nav-link">🏷️ Categorias</router-link>
      <router-link to="/medicamentos" class="nav-link">💊 Medicamentos</router-link>
      <router-link to="/atendimentos" class="nav-link">📅 Atendimentos</router-link>
      <router-link to="/prescricoes" class="nav-link">📝 Prescrições</router-link>
      <router-link to="/prontuarios" class="nav-link">📂 Prontuários</router-link>
    </nav>
  </main>
</template>

<style scoped>
.home-container {
  text-align: center;
  background-color: #e3f7f9;
  padding: 50px 30px;
  border-radius: 12px;
  max-width: 750px;
  margin: 40px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header h1 {
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 32px;
}

header p {
  color: #555;
  margin-bottom: 30px;
  font-size: 18px;
}

.home-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-link {
  text-decoration: none;
  padding: 14px;
  background-color: #4CAF50;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-link:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

.nav-link:active {
  transform: scale(0.98);
}

</style>
