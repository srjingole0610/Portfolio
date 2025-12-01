# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/12f782d1-b65f-4b0e-8739-2352d15bc4c0

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/12f782d1-b65f-4b0e-8739-2352d15bc4c0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/12f782d1-b65f-4b0e-8739-2352d15bc4c0

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/12f782d1-b65f-4b0e-8739-2352d15bc4c0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

# Portfolio

A modern, responsive portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach ensuring great experience on all devices.
- **Theme Toggle**: Light and Dark mode support.
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and Sitemap.
- **Performance**: Code splitting, lazy loading, and optimized assets.
- **Accessibility**: Semantic HTML, keyboard navigation, and ARIA attributes.
- **Modern Stack**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui, Framer Motion
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **SEO**: react-helmet-async
- **Testing**: Vitest, React Testing Library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

To enable the contact form, you need to set up the following environment variables in your Netlify dashboard or a `.env` file locally:

- `EMAIL_USER`: Your Gmail address (e.g., `your.email@gmail.com`)
- `EMAIL_PASS`: Your Gmail App Password (not your login password). [Generate one here](https://myaccount.google.com/apppasswords).

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## SEO

The project uses `react-helmet-async` for managing meta tags.

- **Sitemap**: Generate a sitemap using `node scripts/generate-sitemap.js`.
- **Robots.txt**: Located in `public/robots.txt`.
- **Meta Tags**: Managed via the `SEO` component in `src/components/SEO.tsx`.

## Accessibility

- All interactive elements are keyboard accessible.
- Color contrast ratios meet WCAG AA standards.
- Images have appropriate `alt` text.
- Semantic HTML is used throughout.

## Testing

Run unit tests:

```bash
npm run test
```

## License

MIT

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/12f782d1-b65f-4b0e-8739-2352d15bc4c0) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
