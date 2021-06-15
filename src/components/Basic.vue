<template>
  <n-layout has-sider class="basic-layout">
    <sider class="basic-sider" />
    <n-layout>
      <n-layout-header bordered class="basic-header">
        <custom-header />
      </n-layout-header>
      <n-layout-content>
        <router-view />
      </n-layout-content>
      <n-layout-footer position="absolute" class="basic-footer">
        Footer
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { h } from 'vue';
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
</script>

<style>
.basic-layout,
.basic-layout .basic-sider {
  min-height: 100vh;
}
.basic-layout .basic-header {
  padding: 10px 30px;
}
.basic-layout .basic-footer {
  text-align: center;
}
</style>
