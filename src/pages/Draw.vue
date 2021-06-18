<template>
  <card-list :list="drawList" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardList from '../components/CardList.vue';
import { local } from 'symstorage';
import { CardData } from '../App.vue';

export default defineComponent({
  components: {
    CardList,
  },
  setup() {
    const drawList = local.get('draw') as CardData[];

    return { drawList };
  },
});
</script>
