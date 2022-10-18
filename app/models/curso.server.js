export async function getCurso() {
  const url = `${process.env.API_URL}/curso?populate=imagen`;
  const response = await fetch(url);
  return await response.json();
}