<template>
  <n-space justify="end">
    <n-button @click="change">{{ theme.label }}</n-button>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NSpace, NButton } from 'naive-ui';
import useTheme from '../hooks/useTheme';

export default defineComponent({
  components: {
    NSpace,
    NButton,
  },
  setup() {
    const { theme, change } = useTheme();
    return {
      theme,
      change,
    };
  },
});
</script>
