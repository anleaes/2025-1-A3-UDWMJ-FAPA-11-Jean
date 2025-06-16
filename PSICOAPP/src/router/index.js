import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';
import PacienteView from '@/views/PacienteView.vue';
import ProfissionalView from '@/views/ProfissionalView.vue';
import EspecialidadeView from '@/views/EspecialidadeView.vue';
import CategoriaView from '@/views/CategoriaView.vue';
import MedicamentoView from '@/views/MedicamentoView.vue';
import AtendimentoView from '@/views/AtendimentoView.vue';
import PrescricaoView from '@/views/PrescricaoView.vue';
import ProntuarioView from '@/views/ProntuarioView.vue';

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/pacientes', name: 'pacientes', component: PacienteView },
  { path: '/profissionais', name: 'profissionais', component: ProfissionalView },
  { path: '/especialidades', name: 'especialidades', component: EspecialidadeView },
  { path: '/categorias', name: 'categorias', component: CategoriaView },
  { path: '/medicamentos', name: 'medicamentos', component: MedicamentoView },
  { path: '/atendimentos', name: 'atendimentos', component: AtendimentoView },
  { path: '/prescricoes', name: 'prescricoes', component: PrescricaoView },
  { path: '/prontuarios', name: 'prontuarios', component: ProntuarioView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
