<template>
  <n-space justify="end">
    <n-button @click="changeTheme">{{ theme.label }}</n-button>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NSpace, NButton } from 'naive-ui';
import useStore from '../hooks/useStore';

export default defineComponent({
  components: {
    NSpace,
    NButton,
  },
  setup() {
    const { theme, changeTheme } = useStore();
    return {
      theme,
      changeTheme,
    };
  },
});
</script>
