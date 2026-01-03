
# React + Vite Project Setup (TypeScript)

This guide explains how to create a React project using **Vite**, clean the default files, and set up **routing with a proper folder structure**.

---

## 1 Create React Project Using Vite

Run the following command:

```bash
npm create vite@latest my-react-app
````

Choose:

* **Framework**: React
* **Variant**: TypeScript

Then move into the project and install dependencies:

```bash
cd my-react-app
npm install
```

---

## 2 Clean Default Files

### Remove code from the following files:

#### `src/App.tsx`

```tsx
// remove all existing code
```

#### `src/index.css`

```css
/* remove all existing code */
```

#### `src/main.css`

```css
/* remove all existing code */
```

(Keep the files, only remove their content.)

---

## 3 Install React Router (Must Be Installed First)

```bash
npm install react-router-dom
```

---

## 4 Create Folder Structure

Inside the `src` folder, create the following structure:

```
src/
│── components/
│── pages/
│── routes/
│   ├── Layout.tsx
│   └── index.tsx
│── App.tsx
│── main.tsx
```

---

## 5 Create `Layout.tsx`

📁 `src/routes/Layout.tsx`

```tsx
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>App Layout</h1>
      <Outlet />
    </>
  );
};

export default Layout;
```

---

## 6 Create Route Provider (`index.tsx`)

📁 `src/routes/index.tsx`

> **Note:** All components used here must be created beforehand inside `pages` or `components`.

```tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

// example pages
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;
```

---

## 7 Use Router Provider in `App.tsx`

📁 `src/App.tsx`

```tsx
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
```

---

## 8 Create Sample Pages (Required Before Routing)

📁 `src/pages/Home.tsx`

```tsx
const Home = () => {
  return <h2>Home Page</h2>;
};

export default Home;
```

📁 `src/pages/About.tsx`

```tsx
const About = () => {
  return <h2>About Page</h2>;
};

export default About;
```

---

## 9️Start Development Server

```bash
npm run dev
```

Your React + Vite project with routing is now ready 🚀

---

##  Summary

* Vite used for project creation
* Cleaned default boilerplate
* Organized folder structure
* Centralized routing
* Layout-based routing setup
* React Router installed and configured
