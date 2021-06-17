<template>
  <n-config-provider :theme="theme.themeConfig">
    <basic />
  </n-config-provider>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue';
import { NConfigProvider } from 'naive-ui';
import Basic from './components/Basic.vue';
import useStore from './hooks/useStore';
import { local } from 'symstorage';

export type CardData = {
  title: string;
  url: string;
  img: string;
  desc: string;
};

export default defineComponent({
  components: {
    NConfigProvider,
    Basic,
  },
  setup() {
    const { theme } = useStore();

    onMounted(() => {
      fetch('/data.json')
        .then((res) => res.json())
        .then((res: Record<string, CardData[]>) => {
          Object.keys(res).forEach((item) => {
            local.set(item, res[item]);
          });
        });
    });

    return {
      theme,
    };
  },
});
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
