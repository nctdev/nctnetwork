# NCT Network

A modern web application for IT, Web & Network Developments.

## Tech Stack
- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Lucide React (icons)
- Next Themes (dark/light mode)
- Next SEO
- Node.js
- Vercel (deployment)

## Main Dependencies
```
@radix-ui/react-slot: 1.1.1
@radix-ui/react-switch: 1.1.2
class-variance-authority: 0.7.1
clsx: 2.1.1
framer-motion: ^11.0.3
lucide-react: 0.474.0
next: 15.1.6
next-seo: 6.6.0
next-themes: 0.4.4
react: 18.2.0
react-dom: 18.2.0
shadcn: 2.1.8
tailwind-merge: 2.6.0
tailwindcss-animate: 1.0.7
```

### Dev Dependencies
```
@eslint/eslintrc: 3.0.0
@types/node: 20.11.0
@types/react: 18.2.48
@types/react-dom: 18.2.18
eslint: 9.0.0
eslint-config-next: 15.1.6
postcss: 8.4.35
tailwindcss: 3.4.1
typescript: 5.3.3
```

## Setup & Development
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Start production server:**
   ```bash
   npm start
   ```

## Deployment
- Deploy on [Vercel](https://vercel.com/) for best compatibility with Next.js.

## Notes
- **Shadcn UI** is now installed via `npm install shadcn` (not `shadcn-ui`).
- For theme toggling, the app uses `next-themes` and a shadcn Switch in the footer.
- All UI components use Shadcn for a consistent look.

---
For any issues or to contribute, please check the repository or contact the maintainer.