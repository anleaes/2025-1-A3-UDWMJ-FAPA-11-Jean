<template>
  <h2>Atendimentos</h2>
  <AtendimentoList />
  <AtendimentoForm />
</template>

<script>
import AtendimentoList from '@/components/AtendimentoList.vue';
import AtendimentoForm from '@/components/AtendimentoForm.vue';

export default {
  components: {
    AtendimentoList,
    AtendimentoForm,
  },
};
</script>
