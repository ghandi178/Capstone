const BASE_URL = 'http://34.101.34.252/api';

async function getArticles() {
  const response = await fetch(`${BASE_URL}/article`);
  const responseJson = await response.json();
  console.log(responseJson);
  return [];
}

//http://34.101.34.252/api/article
