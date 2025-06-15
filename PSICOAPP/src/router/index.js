import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PacienteView from '@/views/PacienteView.vue';
import ProfissionalView from '@/views/ProfissionalView.vue';
import EspecialidadeView from '@/views/EspecialidadeView.vue';
import EspecialidadeForm from '@/components/especialidade/EspecialidadeForm.vue';
import MedicamentoView from '@/views/MedicamentoView.vue'
import MedicamentoForm from '@/components/medicamentos/MedicamentoForm.vue';
import MedicamentoList from '@/components/medicamentos/MedicamentoList.vue';

const routes = [
  //Home
  { path: '/', name: 'home', component: HomeView },
  //Paciente
  { path: '/pacientes', name: 'pacientes', component: PacienteView },
  //Profissional
  { path: '/profissionais', name: 'profissionais', component: ProfissionalView },
  //Especialidades
  { path: '/especialidades', name: 'especialidades', component: EspecialidadeView },
  { path: '/especialidades/novo', name: 'novaEspecialidade', component: EspecialidadeForm },
  { path: '/especialidades/editar/:id', name: 'editarEspecialidade', component: EspecialidadeForm, props: true },
  //Medicamento
  { path: '/medicamentos', name: 'medicamentos', component: MedicamentoView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
