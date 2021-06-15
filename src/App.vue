<template>
  <n-config-provider :theme="theme.themeConfig">
    <basic />
  </n-config-provider>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from 'vue';
import { NConfigProvider, darkTheme } from 'naive-ui';
import Basic from './components/Basic.vue';
import useTheme from './hooks/useTheme';

const { theme } = useTheme();
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
}
</style>
