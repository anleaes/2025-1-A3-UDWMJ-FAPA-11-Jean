import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PacienteView from '@/views/PacienteView.vue';
import ProfissionalView from '@/views/ProfissionalView.vue';
import EspecialidadeView from '@/views/EspecialidadeView.vue';
import AtendimentoView from '@/views/AtendimentoView.vue';
import MedicamentoView from '@/views/MedicamentoView.vue';
import CategoriaView from '@/views/CategoriaView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/pacientes', name: 'pacientes', component: PacienteView },
  { path: '/profissionais', name: 'profissionais', component: ProfissionalView },
  { path: '/especialidades', name: 'especialidades', component: EspecialidadeView },
  { path: '/categorias', name: 'categorias', component: CategoriaView },
  { path: '/atendimentos', name: 'atendimentos', component: AtendimentoView }, 
  { path: '/medicamentos', name: 'medicamentos', component: MedicamentoView }, 
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
