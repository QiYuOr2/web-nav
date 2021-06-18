<template>
  <card-list :list="designList" />
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
    const designList = local.get('design') as CardData[];

    return { designList };
  },
});
</script>
