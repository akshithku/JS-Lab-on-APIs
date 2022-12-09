// Progression 1: create a function and fetch the api using axios

const articlegrid = document.getElementById('articleGrid');

function populateDate() {
  axios
    .get(
      'https://gnews.io/api/v4/top-headlines?token=2c6da1e4038b5294db09a1dc6bca48f6&lang=en '
    )
    .then((res) => {
      // console.log(res.data)
      const articles = res.data.articles;

      articles.forEach((articles) => {
        const articleElement = document.createElement('div');
        const titleElement = document.createElement('h3');
        const imageElement = document.createElement('img');
        const contentElement = document.createElement('p');

        articleElement.classList.add('article');
        titleElement.innerText = articles.title;
        imageElement.setAttribute('src', articles.image);
        contentElement.innerText = articles.content;

        articleElement.append(titleElement);
        articleElement.append(imageElement);
        articleElement.append(contentElement);

        articlegrid.append(articleElement);
      });
    });
}
populateDate();
