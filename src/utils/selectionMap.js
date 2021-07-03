export default function ({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series
          ? series.filter((item) => item.genre === "documentaries")
          : [],
      },
      {
        title: "Comedies",
        data: series ? series.filter((item) => item.genre === "comedies") : [],
      },
      {
        title: "Children",
        data: series ? series.filter((item) => item.genre === "children") : [],
      },
      {
        title: "Crime",
        data: series ? series.filter((item) => item.genre === "crime") : [],
      },
      {
        title: "Feel Good",
        data: series ? series.filter((item) => item.genre === "feel-good") : [],
      },
    ],
    films: [
      {
        title: "Drama Good",
        data: films ? films.filter((item) => item.genre === "drama") : [],
      },
      {
        title: "Thriller",
        data: films ? films.filter((item) => item.genre === "thriller") : [],
      },
      {
        title: "Children",
        data: films ? films.filter((item) => item.genre === "children") : [],
      },
      {
        title: "Suspense",
        data: films ? films.filter((item) => item.genre === "suspense") : [],
      },
      {
        title: "Romance",
        data: films ? films.filter((item) => item.genre === "romance") : [],
      },
    ],
  };
}
