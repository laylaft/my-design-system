# 🎨 My Design System

A modern, production-ready design system built with React, Storybook, and Tailwind CSS. This design system provides a comprehensive set of components, design tokens, and documentation for building consistent user interfaces.

![Storybook](https://img.shields.io/badge/Storybook-9.1.13-FF4785?style=flat-square&logo=storybook)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite)

## 🌟 Features

- **🎨 Design Tokens**: Comprehensive design system with colors, typography, spacing, and more
- **🧩 Components**: Pre-built React components (Button, Header, Page) with multiple variants
- **📚 Documentation**: Interactive Storybook documentation with live examples
- **♿ Accessibility**: Built-in accessibility testing and best practices
- **🧪 Testing**: Comprehensive testing setup with Vitest and Playwright
- **🎯 TypeScript Ready**: Full TypeScript support for better development experience
- **📦 NPM Package**: Ready to be published as an NPM package
- **🚀 Production Ready**: Optimized build system with Vite

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run dev
# or
npm run storybook

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Building

```bash
# Build Storybook for production
npm run build

# Preview built Storybook locally
npm run preview
```

## 📦 Available Scripts

- `npm run dev` - Start Storybook development server
- `npm run build` - Build Storybook for production
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run clean` - Clean build artifacts

## 🎨 Design Tokens

Our design system includes:

- **Colors**: Brand colors, semantic colors, and neutral palette
- **Typography**: Font families, weights, and sizes
- **Spacing**: Consistent spacing scale based on 4px grid
- **Border Radius**: Rounded corner system
- **Shadows**: Elevation system

## 🧩 Components

- **Button**: Primary, secondary, and size variants
- **Header**: Navigation component with user states
- **Page**: Layout component with content sections

## 🛠️ Tech Stack

- **React 18** - Component library
- **Storybook 9** - Component documentation and testing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Vitest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📁 Project Structure

```
src/
├── stories/
│   ├── assets/          # Images and icons
│   ├── Button.jsx       # Button component
│   ├── Button.stories.js # Button stories
│   ├── Header.jsx       # Header component
│   ├── Header.stories.js # Header stories
│   ├── Page.jsx         # Page component
│   ├── Page.stories.js  # Page stories
│   ├── Configure.mdx    # Configuration guide
│   ├── DesignTokens.mdx # Design tokens documentation
│   └── globals.css      # Global styles
├── index.js             # Main export file
└── index.d.ts           # TypeScript definitions
```

## 🎯 Usage

### Import Components

```jsx
import { Button, Header, Page } from 'my-design-system';
import 'my-design-system/dist/style.css';
```

### Import Design Tokens

```jsx
import { designTokens } from 'my-design-system';

// Use design tokens
const styles = {
  color: designTokens.colors.primary,
  fontSize: designTokens.typography.fontSize.lg,
};
```

## 🚀 Deployment

### Storybook

Build and deploy your Storybook to any static hosting service:

```bash
npm run build
# Deploy the storybook-static folder
```

### NPM Package

Publish your design system as an NPM package:

```bash
npm publish
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.
