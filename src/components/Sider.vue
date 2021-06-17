<template>
  <n-layout-sider bordered style="position: fixed; z-index: 999; height: 100vh">
    <div class="sider-wrapper">
      <n-gradient-text
        class="logo"
        :gradient="{
          deg: 180,
          from: '#e66465',
          to: '#9198e5',
        }"
      >
        导个航先
      </n-gradient-text>
      <n-menu
        :value="selected"
        :options="menuOptions"
        @update:value="changeRouter"
      />
    </div>
  </n-layout-sider>
  <n-layout-sider style="visibility: hidden"></n-layout-sider>
</template>

<script lang="ts">
import { defineComponent, h, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
  NMenu,
  NLayoutSider,
  NIcon,
  MenuOption,
  MenuGroupOption,
  NGradientText,
} from 'naive-ui';
import { routes } from '../router';

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: (MenuOption | MenuGroupOption)[] = routes
  .filter((route) => route.meta)
  .map((route) => ({
    label: route.meta!.label as string,
    key: route.meta!.key as string,
    icon: renderIcon(route.meta!.icon),
  }));

export default defineComponent({
  components: { NMenu, NLayoutSider, NGradientText },
  setup() {
    const r = useRouter();
    const selected = ref<string>('tool');

    watch(r.currentRoute, (newValue) => {
      selected.value = newValue.meta!.key as string;
    });

    const changeRouter = (e: any) => {
      r.push(e);
    };

    return { menuOptions, selected, changeRouter };
  },
});
</script>

<style>
.sider-wrapper {
  display: flex;
  flex-direction: column;
}
.logo {
  margin: 0.5rem 0;
  text-align: center;
  font-size: 24px;
}
</style>
