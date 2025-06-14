import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PacienteView from '@/views/PacienteView.vue';
import ProfissionalView from '@/views/ProfissionalView.vue';
import EspecialidadeView from '@/views/EspecialidadeView.vue';
import EspecialidadeForm from '@/components/especialidade/EspecialidadeForm.vue';
import AtendimentoView from '@/views/AtendimentoView.vue';
import AtendimentoForm from '@/components/AtendimentoForm.vue';

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

  //Atendimento
  { path: '/atendimentos', name: 'atendimentos', component: AtendimentoView },
  { path: '/atendimentos/novo', name: 'novoAtendimento', component: AtendimentoForm },
  { path: '/atendimentos/editar/:id', name: 'editarAtendimento', component: AtendimentoForm, props: true },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
