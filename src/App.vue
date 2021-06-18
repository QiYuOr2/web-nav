<template>
  <n-config-provider :theme="theme.themeConfig" :hljs="hljs">
    <n-message-provider>
      <basic />
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue';
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import Basic from './components/Basic.vue';
import useStore from './hooks/useStore';
import { local } from 'symstorage';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';

export type CardData = {
  title: string;
  url: string;
  img: string;
  desc: string;
};

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);

export default defineComponent({
  components: {
    NConfigProvider,
    NMessageProvider,
    Basic,
  },
  setup() {
    const { theme } = useStore();

    onMounted(() => {
      fetch('https://cdn.jsdelivr.net/gh/xmy6364/web-nav/public/data.json')
        .then((res) => res.json())
        .then((res: Record<string, CardData[]>) => {
          Object.keys(res).forEach((item) => {
            local.set(item, res[item]);
          });
        });
    });

    return {
      theme,
      hljs,
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
