<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-card class="card-item" hoverable @click="jumpTo">
        <template #header>
          <n-space>
            <n-avatar
              class="img-avatar"
              v-if="imgUrl"
              style="--color: transparent"
            >
              <img class="img" :src="imgUrl" @error="imgErrHandler" />
            </n-avatar>
            <n-avatar v-else>
              {{ title?.slice(0, 1) }}
            </n-avatar>
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
import { ref, defineComponent } from 'vue';
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
    const imgUrl = ref(props.img);

    const imgErrHandler = () => {
      imgUrl.value = '';
    };

    return { jumpTo, imgUrl, imgErrHandler };
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
.card-item .n-card-header .img-avatar .n-avatar__text,
.card-item .n-card-header .img {
  width: 90%;
  height: 90%;
}
.card-item .content {
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
