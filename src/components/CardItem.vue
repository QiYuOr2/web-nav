<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-card class="card-item" hoverable @click="jumpTo">
        <template #header>
          <n-space>
            <n-avatar :src="img" style="--color: transparent" />
            {{ title }}
          </n-space>
        </template>
        <p class="content">
          <slot></slot>
        </p>
      </n-card>
    </template>
    {{ url }}
  </n-popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NCard, NGrid, NGi, NAvatar, NPopover, NSpace } from 'naive-ui';

export default defineComponent({
  props: {
    title: String,
    img: String,
    url: String,
  },
  components: { NCard, NGrid, NGi, NAvatar, NPopover, NSpace },
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
.card-item .content {
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
