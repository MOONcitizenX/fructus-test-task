export const useArticlePageStore = defineStore("articlesPage", () => {
  const url = ref("https://devtwit8.ru/api/v1/page/?path=/");
  const meta = ref({});
  const body = ref([]);
  async function fetchArticles(id) {
    try {
      const response = await fetch(`${url.value}${id}`);
      const data = await response.json();

      meta.value = data.meta;
      body.value = data.body;
    } catch (e) {
      console.log(e);
    }
  }

  return { meta, body, fetchArticles };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useArticlePageStore, import.meta.hot));
}
