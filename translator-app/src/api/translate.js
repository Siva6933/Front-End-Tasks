export async function translateText(text, targetLang, sourceLang = "en") {
  const url = import.meta.env.VITE_RAPIDAPI_URL;
  const host = import.meta.env.VITE_RAPIDAPI_HOST;
  const key = import.meta.env.VITE_RAPIDAPI_KEY;

  const body = new URLSearchParams();
  body.append("q", text);
  body.append("target", targetLang);
  body.append("source", sourceLang);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
    body,
  });

  const result = await response.json();
  return result.data.translations[0].translatedText;
}
