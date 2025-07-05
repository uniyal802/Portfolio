# 🚀 Gaurav Uniyal's Developer Portfolio

Welcome to my personal developer portfolio.  
It is built using **React**, **Tailwind CSS**, **Framer Motion**, and **EmailJS**, and is deployed on **Vercel**.

The website showcases my:

- 💼 Work Experience
- 🧠 Soft & Technical Skills
- 📂 Projects with GitHub Links
- 📝 Blogs (from dev.to)
- 📄 Resume (downloadable)
- 📬 Contact Form (with EmailJS integration)

---

## 🔗 Live Site

👉 [View Live Portfolio](https://your-vercel-url.vercel.app)

---

## 📁 Folder Structure

portfolio/
├── public/
│ └── index.html
├── src/
│ ├── App.js / App.tsx
│ ├── assets/
│ ├── index.css
│ ├── index.js
│ └── components/
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🛠️ Tech Stack

| Tech            | Use                          |
|------------------|-------------------------------|
| React.js         | Frontend Framework            |
| Tailwind CSS     | Utility-first Styling         |
| Framer Motion    | Animations                    |
| EmailJS          | Contact form email service    |
| Dev.to API       | Blog fetch integration        |
| Vercel           | Deployment                    |

---

## 📦 Dependencies to Install

```bash
npm install
If you face issues, install these directly:

bash
Copy
Edit
npm install react-icons aos framer-motion react-simple-typewriter emailjs-com
If you're using Tailwind CSS:

bash
Copy
Edit
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

⚙️ Tailwind Setup (if not done)
tailwind.config.js:
js
Copy
Edit
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
postcss.config.js:
js
Copy
Edit
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
index.css:
css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
✉️ EmailJS Integration (Contact Form)
Go to https://www.emailjs.com

Create:

Service ID

Template ID

Public Key

Add them in your App.js or contact form code:

js
Copy
Edit
emailjs.sendForm(
  'your_service_id',
  'your_template_id',
  formRef.current,
  'your_public_key'
)
🚀 Local Development
Run the dev server:
bash
Copy
Edit
npm run dev
