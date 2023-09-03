export const useHomePageStore = defineStore("indexPage", () => {
  const url = ref("https://devtwit8.ru/api/v1/page/?path=/");
  const meta = ref({});
  const articles = ref([]);

  async function fetchData() {
    try {
      const response = await fetch(`${url.value}`);
      const data = await response.json();

      meta.value = data.meta;
      articles.value = data.body[0].data.articles;
    } catch (e) {
      console.log(e);
    }
  }

  return { meta, articles, fetchData };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomePageStore, import.meta.hot));
}
