const url =
  "https://newsapi.org/v2/everything?q=health&apiKey={96c41822c5bd447d90a6023f747bf769}";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}