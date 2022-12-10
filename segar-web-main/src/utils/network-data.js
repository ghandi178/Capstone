const BASE_URL = 'https://restful-mysql.herokuapp.com/api';

async function getArticles() {
  const response = await fetch(`${BASE_URL}/article`);
  const responseJson = await response.json();

  console.log(responseJson);

  return { error: false, data: responseJson };
}

async function getArticle(id) {
  const response = await fetch(`${BASE_URL}/article/${id}`);
  const responseJson = await response.json();

  return { error: false, data: responseJson };
}

export { getArticle, getArticles };
