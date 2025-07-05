# 🚀 Gaurav Uniyal Portfolio

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

👉 [View Live Portfolio] https://portfolio-theta-khaki-49.vercel.app/

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

--> using Tailwind CSS:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

⚙️ Tailwind Setup 
tailwind.config.js:
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

--> postcss.config.js:
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

--> index.css:
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
emailjs.sendForm(
  'your_service_id',
  'your_template_id',
  formRef.current,
  'your_public_key'
)

🚀 Local Development
Run the dev server:
npm run dev
