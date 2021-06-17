<template>
  <n-layout has-sider class="basic-layout">
    <sider class="basic-sider" />
    <n-layout>
      <n-layout-header bordered class="basic-header">
        <custom-header />
      </n-layout-header>
      <n-layout-content class="basic-content">
        <router-view />
      </n-layout-content>
      <n-layout-footer class="basic-footer"> © 2021 xmy6364. </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { h, defineComponent } from 'vue';
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NIcon,
} from 'naive-ui';
import CustomHeader from './Header.vue';
import Sider from './Sider.vue';

export default defineComponent({
  components: {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NMenu,
    NIcon,
    CustomHeader,
    Sider,
  },
});
</script>

<style>
.basic-layout,
.basic-layout .basic-sider {
  min-height: 100vh;
}
.basic-layout .basic-header {
  padding: 10px 30px;
}
.basic-layout .basic-content {
  min-height: calc(100vh - 2rem - 55px);
}
.basic-layout .basic-footer {
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
</style>
