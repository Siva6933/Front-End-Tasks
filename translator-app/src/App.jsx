import { useState } from "react";
import { translateText } from "./api/translate";

const LANGS = [
  { code: "hi", name: "Hindi" },
  { code: "ta", name: "Tamil" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "de", name: "German" },
];

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("hi");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const translated = await translateText(input, lang, "en");
      setOutput(translated);
    } catch (e) {
      setOutput("❌ Translation failed!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">🌐 Text Translator</h1>

      <textarea
        className="w-full max-w-xl h-32 p-4 border rounded-xl mb-4"
        placeholder="Enter text in English..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex gap-4 mb-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="px-3 py-2 border rounded-xl"
        >
          {LANGS.map((l) => (
            <option key={l.code} value={l.code}>
              {l.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleTranslate}
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Translating..." : "Translate"}
        </button>
      </div>

      <div className="w-full max-w-xl p-4 border rounded-xl bg-white">
        <h2 className="font-semibold mb-2">Result:</h2>
        <p>{output || "Your translated text will appear here."}</p>
      </div>
    </div>
  );
}

export default App;
