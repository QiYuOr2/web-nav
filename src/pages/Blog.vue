<template>
  <card-list :list="blogList" />
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
    const blogList = local.get('blog') as CardData[];

    return { blogList };
  },
});
</script>
