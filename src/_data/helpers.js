module.exports = {
  getCurrentYear: () => {
      const today = new Date();
      return today.getFullYear();
  },
  title: "Каталог каталогов данных",
  domain: "datacatalogs.ru",
  partners: [
    {
      image: "apicrafter.svg",
      link: "https://apicrafter.ru/",
    },
    {
      image: "datacrafter.svg",
      link: "https://data.apicrafter.ru/",
    },
  ],
};
