<template>
  <div class="code-wrapper">
    <n-spin :show="loading" class="loading">
      <n-alert type="error" v-if="fail">
        代码片段取自Github Gist，您所处的网络环境暂时无法访问该网站
      </n-alert>
      <section class="waterfall-flow">
        <div
          class="flow-item"
          v-for="(code, i) in codeList"
          :key="code.filename"
        >
          <n-card>
            <n-code
              :code="code.content"
              :language="code.language"
              :id="'code' + i"
            />
            <template #action>
              <div class="code-actions">
                <p>{{ code.filename }}</p>
                <n-button
                  :id="'code' + i + '-btn'"
                  :data-clipboard-target="'#code' + i"
                  @click="copy('#code' + i + '-btn')"
                >
                  复制
                </n-button>
              </div>
            </template>
          </n-card>
        </div>
      </section>
    </n-spin>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  NCard,
  NCode,
  NSpace,
  NAlert,
  NSpin,
  NButton,
  useMessage,
} from 'naive-ui';
import useGist from '../hooks/useGist';
import Clipborad from 'clipboard';

export default defineComponent({
  components: { NCard, NCode, NSpace, NAlert, NSpin, NButton },
  setup() {
    const { codeList, loading, fail } = useGist(
      '9b25009f2383db6418c42394168ad1c3'
    );
    const message = useMessage();

    const copy = (id: string) => {
      const clipboard = new Clipborad(id);

      clipboard.on('success', () => {
        message.success('复制成功');
      });
      clipboard.on('error', (e) => {
        message.error('复制失败' + e.text);
      });
    };

    return {
      codeList,
      fail,
      loading,
      copy,
    };
  },
});
</script>

<style>
.code-wrapper {
  box-sizing: border-box;
  padding: 1rem;
  min-height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.code-wrapper .n-card__action {
  padding: 0.5rem 1rem;
}

.code-wrapper .code-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.code-wrapper .waterfall-flow {
  column-count: 2;
  column-width: 240px;
  column-gap: 20px;
}
.code-wrapper .waterfall-flow .flow-item {
  margin-bottom: 1rem;
  /* 防止多列布局，分页媒体和多区域上下文中的意外中断 */
  break-inside: avoid;
}
</style>
