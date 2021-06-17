<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-card class="card-item" hoverable @click="jumpTo">
        <template #header>
          <n-grid x-gap="12" :cols="2">
            <n-gi ><n-avatar :src="img" /></n-gi>
            <n-gi>{{ title }}</n-gi>
          </n-grid>
        </template>
        <slot></slot>
      </n-card>
    </template>
    {{ url }}
  </n-popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NCard, NGrid, NGi, NAvatar, NPopover } from 'naive-ui';

export default defineComponent({
  props: {
    title: String,
    img: String,
    url: String,
  },
  components: { NCard, NGrid, NGi, NAvatar, NPopover },
  setup(props) {
    const jumpTo = () => {
      open(props.url);
    };

    return { jumpTo };
  },
});
</script>

<style>
.card-item {
  cursor: pointer;
}
.card-item .n-card-header {
  padding-bottom: 0;
}
</style>
