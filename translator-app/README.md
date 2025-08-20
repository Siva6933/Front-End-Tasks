# 🌐 Text Translator App

A simple **React + Tailwind** application to translate English text into your favorite language using **RapidAPI**.

## 🚀 Features
- Enter English text
- Select target language
- Instant translation via RapidAPI
- Responsive UI with Tailwind

## 🛠️ Tech Stack
- React (Vite)
- Tailwind CSS
- RapidAPI (Google Translate)

## ⚙️ Setup

1. Clone repo:
   ```bash
   git clone https://github.com/your-username/translator-app.git
   cd translator-app
   npm install
   ```

2. Copy `.env.local.example` → `.env.local` and add your RapidAPI key.

3. Run locally:
   ```bash
   npm run dev
   ```

## 🚀 Deploy (Vercel/Netlify)
- Connect repo
- Add environment variables:
  - `VITE_RAPIDAPI_KEY`
  - `VITE_RAPIDAPI_HOST`
  - `VITE_RAPIDAPI_URL`
