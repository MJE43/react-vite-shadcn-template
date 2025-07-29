> **ℹ️ This is a project template. The title, description, and other fields below will be replaced when you create a new project from this template.**

# {{project_title}}

{{project_description}}

## 🚀 Quick Start

1. **Setup the project:**
   ```bash
   node setup-project.js
   ```
   *This will automatically handle templating, install dependencies, and initialize shadcn/ui for you!*

2. **Start development server:**
   ```bash
   pnpm dev
   ```

## 🛠️ Built With

- **React 19** - Latest React with improved performance
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning fast build tool
- **Tailwind CSS 4** - Latest utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Beautiful icons
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
{{project_name}}/
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore patterns
├── .prettierignore      # Prettier ignore patterns
├── .prettierrc          # Prettier configuration
├── LICENSE              # MIT license
├── README.md            # Project documentation
├── components.json      # shadcn/ui configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── pnpm-lock.yaml       # Dependency lock file
├── setup-project.js     # Template setup script
├── public/              # Static assets
├── src/
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   ├── vite-env.d.ts    # Vite type definitions
│   ├── assets/          # Images, icons, etc.
│   ├── components/      # Reusable components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and helpers
│   │   └── utils.ts     # Utility functions
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   │   └── index.css    # Main stylesheet
│   └── types/           # TypeScript type definitions
├── tsconfig.app.json    # App TypeScript config
├── tsconfig.json        # Base TypeScript config
├── tsconfig.node.json   # Node TypeScript config
└── vite.config.ts       # Vite configuration
```

## 📦 Path Aliases

Clean imports with pre-configured path aliases:

- `@` → `src/`
- `@components` → `src/components/`
- `@ui` → `src/components/ui/`
- `@lib` → `src/lib/`
- `@hooks` → `src/hooks/`
- `@assets` → `src/assets/`
- `@types` → `src/types/`
- `@styles` → `src/styles/index.css`

Example usage:
```tsx
import { Button } from '@ui/button';
import { cn } from '@lib/utils';
import { useLocalStorage } from '@hooks/use-local-storage';
import { User } from '@types/user';
```

## 🧩 Available Components

This template comes with shadcn/ui pre-configured and automatically initialized. Add components with:

```bash
npx shadcn@latest add [component-name]
```

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint and automatically fix issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting with Prettier
- `pnpm type-check` - Run TypeScript type checking

## 🎨 Styling

- **Tailwind CSS 4** with CSS variables for theming
- **Dark mode** support out of the box
- **shadcn/ui** design system (automatically initialized)
- **Custom CSS variables** in `src/styles/index.css`
- **Prettier** for consistent code formatting

## 🔧 Configuration

- **Vite config** - `vite.config.ts` with path aliases
- **TypeScript** - `tsconfig.json` with strict settings
- **Tailwind** - `components.json` for shadcn/ui
- **ESLint** - `eslint.config.js` with import resolution
- **Prettier** - `.prettierrc` for code formatting

## ⚡ What the Setup Script Does

The `setup-project.js` script fully automates your project setup:

1. **🔄 Replaces template placeholders** with your project details
2. **📄 Creates `.env.example`** with your project variables
3. **🧹 Cleans up template files** (removes .gitkeep files)
4. **📦 Installs dependencies** automatically with pnpm
5. **🎨 Initializes shadcn/ui** with default configuration
6. **🔧 Optionally sets up git** repository with initial commit
7. **🗑️ Removes itself** after completion

## 📄 License

{{project_name}} is [MIT licensed](./LICENSE).

---

**Author:** {{author_name}}{{#author_email}} ({{author_email}}){{/author_email}}
**Year:** {{current_year}}
