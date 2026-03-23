# Interactive  Developer Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css&style=for-the-badge)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=three.js&style=for-the-badge)

> **"Not just a portfolio, but a Proof of Concept."**

A highly interactive, immersive developer portfolio designed to resemble a modern **Integrated Development Environment (IDE)**. Built with React, TypeScript, and React Three Fiber, this project showcases my journey as a Back-End Engineer through a frontend medium.

![Portfolio Preview](./preview.png)
*(Note: Add a screenshot of your app here named preview.png)*

## 🌟 Key Features

*   **IDE Aesthetic:** A fully functional interface modeled after VS Code with an Activity Bar, Explorer, Tabs, and Status Bar.
*   **3D Visualization:** An interactive "Network Topology" background built with **React Three Fiber**, representing distributed systems and backend architecture.
*   **"Git Graph" Experience:** Career timeline visualized as a git commit history (main branch), sorted reverse-chronologically.
*   **Interactive Project Cards:**
    *   **Overview Mode:** HR-friendly summaries with tech stack badges.
    *   **Code Mode:** Real syntax-highlighted C# code snippets relevant to the project type (API, MVC, Console).
    *   **Details Mode:** Simulated system previews and architecture diagrams.
*   **"package.json" Skills:** Technical skills presented as an interactive JSON file with code folding, line numbers, and IntelliSense-style tooltips.
*   **Fully Responsive:** Optimized for both desktop (Split View) and mobile (Overlay Sidebar).

## 🛠️ Tech Stack

*   **Core:** React 19, TypeScript
*   **Styling:** Tailwind CSS (Custom "Dark+" Theme)
*   **3D Graphics:** @react-three/fiber, Three.js
*   **Animations:** Framer Motion
*   **Icons:** Lucide React

## 📂 Project Structure

The project is structured to keep data separate from logic, allowing for easy updates.

```bash
├── components/
│   ├── Hero3D.tsx       # The 3D Network background scene
│   └── ProjectCard.tsx  # The interactive card component with 3 view modes
├── App.tsx              # Main layout, routing logic (Tabs/Sidebar), and Modal views
├── constants.tsx        # Single Source of Truth for all data (Projects, Bio, Links)
├── types.ts             # TypeScript interfaces for type safety
└── index.html           # Entry point with Tailwind & Font configurations
```

## 🚀 Live Demo

[Link to your live demo here]

## 🔧 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/AhmedHazem02/Portfolio.git
    cd Portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Locally**
    ```bash
    npm start
    # or
    npm run dev
    ```

## 📝 Customization

All personal data is located in `constants.tsx`. To adapt this portfolio for yourself:

1.  Open `constants.tsx`.
2.  Update `PERSONAL_INFO`, `PROJECTS`, `WORK_EXPERIENCE`, and `SKILLS` objects.
3.  The UI will automatically reflect your changes.

## 👨‍💻 Author

**Ahmed Hazem**
*   **Role:** Software Engineer
*   **Current Company:** Xfuse
*   **Location:** Sohag, Egypt

### Connect
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmed-hazem-84912722a/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AhmedHazem02)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/A_Hazem-2003/)

---
*Built with ❤️ and Clean Code.*
