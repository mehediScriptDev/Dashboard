<p align="center">
  <img src="public/logo.png" alt="Agent Dashboard" width="80" />
</p>

<h1 align="center">Agent Dashboard</h1>

<p align="center">
  A modern, responsive dashboard for managing AI-powered phone agent operations. Built with React 19, Tailwind CSS 4, and Vite 7 for blazing-fast performance.
</p>


---

## ✨ Features

- **📊 Dashboard Overview** — Real-time stats, call trends chart, recent activity feed
- **📞 Call Logs** — Searchable call history with filters, detailed call view, and conversation transcripts
- **📅 Appointments** — Appointment management with booking link integration
- **⚙️ Settings** — Profile management with editable forms
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop
- **🎨 Modern UI** — Dark theme with gradient accents and smooth animations

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | React | 19.2.0 |
| **Styling** | Tailwind CSS | 4.1.18 |
| **Build Tool** | Vite | 7.2.4 |
| **Routing** | React Router | 7.13.0 |
| **Icons** | Lucide React | 0.562.0 |
| **Icons** | React Icons | 5.5.0 |
| **Smooth Scroll** | Lenis | 1.3.17 |
| **Linting** | ESLint | 9.39.1 |

---

## 📁 Project Structure

```
Dashboard/
├── public/
│   ├── avatar.png
│   ├── logo.png
│   └── noise.png
├── src/
│   ├── Components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── ActivityItem.jsx
│   │   │   ├── AppointmentStatCard.jsx
│   │   │   ├── Avatar.jsx
│   │   │   ├── Btn.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── Tabs.jsx
│   │   │   └── index.js
│   │   └── utility/               # Utility components
│   │       └── SmoothScroll.jsx
│   ├── layout/                    # Layout components
│   │   ├── FooterLayout.jsx
│   │   ├── NavbarLayout.jsx
│   │   ├── RootLayout.jsx
│   │   └── Sidebar.jsx
│   ├── pages/
│   │   ├── dashboard/
│   │   │   ├── IndexPage/         # Dashboard overview
│   │   │   ├── appointments/      # Appointments page
│   │   │   ├── callLogs/          # Call logs page
│   │   │   └── settings/          # Settings page
│   │   └── error/
│   │       └── NotFound.jsx
│   ├── router/
│   │   └── routes.jsx             # Route configuration
│   ├── App.jsx
│   ├── App.css
│   ├── index.css                  # Global styles & Tailwind theme
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mehediScriptDev/Dashboard.git
   cd Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

This project is configured for **Vercel** deployment.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect the Vite framework
4. Click **Deploy**

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   git fork https://github.com/mehediScriptDev/Dashboard.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Use reusable components from `src/Components/ui/`
   - Keep components small and focused
   - Use Tailwind CSS for styling

4. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues

### Contribution Guidelines

- ✅ Follow the existing folder structure
- ✅ Create reusable components in `src/Components/ui/`
- ✅ Use meaningful commit messages (feat, fix, docs, style, refactor)
- ✅ Test your changes on mobile and desktop
- ✅ Keep the code clean and well-commented
- ❌ Don't modify the color scheme without discussion
- ❌ Don't add unnecessary dependencies

### Code Style

- Use functional components with hooks
- Use Tailwind CSS utility classes
- Export components from `src/Components/ui/index.js`
- Follow responsive design patterns (mobile-first)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Mehedi Hasan**

- GitHub: [@mehediScriptDev](https://github.com/mehediScriptDev)

---

<p align="center">
  Made with ❤️ using React & Tailwind CSS
</p>
