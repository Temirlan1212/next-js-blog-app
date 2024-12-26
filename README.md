# Next.js Blog App

## **Get Started**

Clone the repository:

```bash
git clone https://github.com/Temirlan1212/next-js-blog-app.git
```

Navigate to the project directory:

```bash
cd next-js-blog-app
```

Install dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

---

## **Demos**

### **Main Page**

**URL:** [https://next-js-blog-app-six-omega.vercel.app/](https://next-js-blog-app-six-omega.vercel.app/)

**Description:**

- Lazy-loaded posts displayed for optimized performance.

### **SSR Page**

**URL:** [https://next-js-blog-app-six-omega.vercel.app/ssr-posts](https://next-js-blog-app-six-omega.vercel.app/ssr-posts)

**Description:**

- Fully Server-Side Rendered (SSR).
- Search and pagination implemented using SSR.
- Optimized for SEO.

### **CSR Page**

**URL:** [https://next-js-blog-app-six-omega.vercel.app/csr-posts](https://next-js-blog-app-six-omega.vercel.app/csr-posts)

**Description:**

- Client-Side Rendering (CSR) with **Zustand** for state management.
- Implements "Load More" functionality.

### **Sitemap.xml Page**

**URL:** [https://next-js-blog-app-six-omega.vercel.app/sitemap.xml](https://next-js-blog-app-six-omega.vercel.app/sitemap.xml)

**Description:**

- Dynamically generated sitemap for better robot indexing of both dynamic and static pages.

---

## **Architecture**

The application follows the **Feature-Sliced Design (FSD)** architecture. Learn more about FSD: [https://feature-sliced.design/ru/docs](https://feature-sliced.design/ru/docs)

### **API**

- Uses **fetch** and **react-query** for data fetching and caching.

### **State Management**

- Powered by **Zustand** for efficient and lightweight state management.

### **Patterns**

- **Adapter (Mappers):** Used to structure API results.

---

## **Tools and Technologies**

- **Framework:** Next.js
- **Testing:** Jest
- **State Management:** Zustand
- **Data Fetching:** React Query, Fetch
- **Rendering:** SSR, CSR
- **SEO:** Sitemap.xml, Metadata
- **UI Library:** ShadCN UI
- **Styling:** Tailwind CSS
- **Themes:** Next Themes
- **Code Quality:** Husky, Prettier

### **Additional Notes:**

- **Husky:** Pre-commit hooks are set up to enforce Prettier formatting. Additional commands can be added if needed (e.g., checking commit messages).

---
