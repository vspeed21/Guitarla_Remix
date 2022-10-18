export async function getPosts() {
  const url = `${process.env.API_URL}/posts?populate=imagen`;
  const response = await fetch(url);
  return await response.json();
}

export async function getPost(url) {
  const urlFetch = `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`;
  const response = await fetch(urlFetch);
  return await response.json();
}

export async function get3Posts() {
  const urlFetch = `${process.env.API_URL}/posts?pagination[limit]=3&populate=imagen`;
  const response = await fetch(urlFetch);
  return await response.json();
}