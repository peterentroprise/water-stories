import config from "./contentful-config";

export default async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(
    config.CONTENTFUL_API_URL + (preview ? "/preview" : ""),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
