<template>
  <n-grid
    x-gap="12"
    :y-gap="12"
    :cols="4"
    style="box-sizing: border-box; padding: 1rem"
  >
    <n-gi v-for="blog in blogList" :key="blog.url">
      <card-item :title="blog.title" :url="blog.url">123</card-item>
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NGrid, NGi, NSpace, NButton } from 'naive-ui';
import CardItem from '../components/CardItem.vue';

const blogList = [{ title: '廖雪峰', url: 'https://www.liaoxuefeng.com/' }];

export default defineComponent({
  components: {
    NGrid,
    NGi,
    NSpace,
    NButton,
    CardItem,
  },
  setup() {
    return { blogList };
  },
});
</script>
