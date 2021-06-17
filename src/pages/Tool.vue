<template>
  <card-list :list="toolList" />
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
    const toolList = local.get('tool') as CardData[];

    return { toolList };
  },
});
</script>
