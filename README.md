# 🌟 Wonderla Task – Frontend Clone (React + Tailwind CSS)

This project is a frontend recreation of a section from the Wonderla website. It includes modern UI components such as a responsive navbar with dropdowns, ride cards, and more using **React**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## 🚀 Tech Stack

- **React.js** (with Vite)
- **Tailwind CSS**
- **Lucide-react** (icons)
- **Framer Motion** (animations)
- **React Router DOM** (routing)

---

## 📁 Folder Structure

```
wonderla-task/
├── public/               # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/           # Imported images for components
│   ├── components/       # Reusable React components (Navbar, RideCard, etc.)
│   ├── pages/            # Page-level components
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── package.json
└── vite.config.js
```

---

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mahendra2611/wonderla-task.git
   cd wonderla-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

This project is deployed using [Vercel](https://vercel.com/). If you're using `.webp` images, make sure to:

- Place static assets in the `public/` folder and reference them like:
  ```jsx
  <img src="/Kochi.webp" alt="Kochi" />
  ```

- Or import them from `src/assets` using ES6 imports:
  ```js
  import Kochi from '../assets/Kochi.webp';
  <img src={Kochi} />
  ```

---

## 📸 Preview

![Navbar Screenshot](./public/navbar-preview.png)
> Optional: Add actual preview screenshots here for visual reference.

---

## 👨‍💻 Author

**Mahendra Kumar**  
Frontend Intern Candidate  
[GitHub: Mahendra2611](https://github.com/Mahendra2611)

---

## 📬 Feedback

If you have any feedback or suggestions, feel free to reach out or open an issue.