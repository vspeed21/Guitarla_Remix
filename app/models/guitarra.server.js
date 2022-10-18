export async function getGuitarras() {
  const url = `${process.env.API_URL}/guitarras?populate=imagen`;
  const response = await fetch(url);
  return await response.json();
}

export async function getGuitarra(url) {
  const urlFetch = `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`;
  const response = await fetch(urlFetch);
  return await response.json()
}

export async function get3Guitarras() {
  const urlFetch = `${process.env.API_URL}/guitarras?pagination[limit]=3&populate=imagen`;
  const response = await fetch(urlFetch);
  return await response.json()
}