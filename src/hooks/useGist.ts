import { ref, watchEffect } from 'vue';

export type GistCode = {
  content: string;
  filename: string;
  language: string;
  raw_url: string;
  size: number;
};

export default function useGist(id: string) {
  const codeList = ref<Array<GistCode>>();
  const loading = ref(true);
  const fail = ref(false);

  watchEffect(() => {
    fetch(`https://api.github.com/gists/${id}`)
      .then((res) => res.json())
      .then((res) => {
        codeList.value = Object.keys(res.files).map((item) => res.files[item]);
        loading.value = false;
      })
      .catch((err) => {
        console.error(err);
        loading.value = false;
        fail.value = true;
      });
  });

  return { codeList, loading, fail };
}
