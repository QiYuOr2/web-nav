<template>
  <n-grid
    x-gap="12"
    :y-gap="12"
    :cols="4"
    style="box-sizing: border-box; padding: 1rem"
  >
    <n-gi v-for="blog in list" :key="blog.url">
      <card-item :title="blog.title" :url="blog.url" :img="blog.img">
        {{ blog.desc }}
      </card-item>
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NGrid, NGi, NSpace, NButton } from 'naive-ui';
import CardItem from '../components/CardItem.vue';
import { CardData } from '../App.vue';

export default defineComponent({
  components: {
    NGrid,
    NGi,
    NSpace,
    NButton,
    CardItem,
  },
  props: {
    list: { type: [] as PropType<CardData[]>, required: true },
  },
});
</script>
