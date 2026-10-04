# p4ll — Personal Portfolio

Portfolio website pribadi **Muhammad Roid Falih**, dibangun dengan Next.js 16, Tailwind CSS v4, dan Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Language:** TypeScript
- **Email:** Nodemailer
- **AI Chatbot:** OpenAI / NVIDIA API

## Sections

| Section | Deskripsi |
|---|---|
| Hero | Intro, typewriter effect, social links |
| About | Bio, foto, skill ticker |
| Experience | Timeline 3 project (SMKTH, e-Solat, EduRide) |
| Skills | 4 kategori skill |
| Projects | 3 project card + modal detail |
| Contact | Form email + AI chatbot widget |

## Jalankan Lokal

```bash
# Clone
git clone https://github.com/roidpalih-coder/p4ll.git
cd p4ll

# Install dependencies
npm install

# Buat file .env.local
cp .env.example .env.local
# Isi variabel di .env.local

# Jalankan dev server
npm run dev
# atau jika next tidak terdeteksi di PATH:
npm run dev:node
```

Buka [http://localhost:3000](http://localhost:3000)

## Environment Variables

Buat file `.env.local` di root project:

```env
# AI Chatbot — pilih salah satu
OPENAI_API_KEY=your_openai_api_key
# NVIDIA_APIKEY=your_nvidia_api_key

# Email (Gmail)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password   # App Password, bukan password biasa

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> Untuk `EMAIL_PASS`: buka [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) dan buat App Password baru.

## Deploy

```bash
npm run build
npm run start
```

## Kontak

- **Email:** Roidpalih@gmail.com
- **GitHub:** [@roidpalih-coder](https://github.com/roidpalih-coder)
- **Instagram:** [@p4llllll___](https://www.instagram.com/p4llllll___)
- **TikTok:** [@user1672828833892](https://www.tiktok.com/@user1672828833892)
