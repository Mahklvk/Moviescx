# Moviescx

A mobile application for browsing movie listings built with **React Native + Expo**, powered by **The Movie Database (TMDB) API**.

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## About

**Moviescx** is a mobile-first movie discovery app that consumes the TMDB API to display information such as popular movies, movie details, and more. It supports **Android**, **iOS**, and **Web** platforms.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React Native + Expo (~55.x) |
| Language | TypeScript |
| Routing | Expo Router (file-based) |
| Styling | NativeWind + Tailwind CSS |
| Data Fetching | TanStack React Query |
| Animations | Moti + React Native Reanimated |
| HTTP Client | Axios |
| TMDB Client | @lorenzopant/tmdb |
| Build & Deploy | EAS (Expo Application Services) |

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Expo Go** on your phone for quick testing, or an Android/iOS emulator
- **TMDB API Key** — register for free at [themoviedb.org](https://www.themoviedb.org/settings/api)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mahklvk/Moviescx.git
cd Moviescx
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Then fill in your TMDB credentials (see [Environment Configuration](#environment-configuration)).

### 4. Start the App

```bash
npx expo start
```

Once the dev server is running, open the app on:

- **Expo Go** — scan the QR code in the terminal using the Expo Go app on your phone
- **Android Emulator** — press `a` in the terminal
- **iOS Simulator** — press `i` in the terminal (macOS only)
- **Web Browser** — press `w` in the terminal

### Available Scripts

| Command | Description |
|---|---|
| `npm run android` | Run directly on Android |
| `npm run ios` | Run directly on iOS |
| `npm run web` | Run in the browser |
| `npm run lint` | Lint the codebase with ESLint |
| `npm run reset-project` | Reset to a blank project (moves starter code to `app-example/`) |

---

## Environment Configuration

Create a `.env` file at the project root based on `.env.example`:

```env
EXPO_PUBLIC_API_KEY=YOUR_TMDB_API_KEY
EXPO_PUBLIC_BASE_URL=https://api.themoviedb.org
```

### How to Get a TMDB API Key

1. Go to [https://www.themoviedb.org](https://www.themoviedb.org) and create a free account.
2. Navigate to **Settings → API**.
3. Click **Create → Developer**.
4. Fill out the request form — your API key will appear on the same page once approved.
5. Copy the **API Key (v3 auth)** and paste it as the value of `EXPO_PUBLIC_API_KEY` in your `.env` file.

> Never commit your `.env` file to the repository. It is already listed in `.gitignore`.

---

## Project Structure

```
Moviescx/
├── assets/             # Images, icons, and static assets
├── scripts/            # Utility scripts (e.g. reset-project)
├── src/                # Main source code
├── .env.example        # Environment variable template
├── app.json            # Expo configuration
├── babel.config.js     # Babel configuration
├── eas.json            # EAS Build configuration
├── metro.config.js     # Metro Bundler configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

---

## Contributing

Contributions are welcome! Here's how to get started:

### 1. Fork the Repository

Click the **Fork** button at the top of this GitHub page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/Moviescx.git
cd Moviescx
```

### 3. Create a New Branch

Use a descriptive branch name:

```bash
# For a new feature
git checkout -b feature/your-feature-name

# For a bug fix
git checkout -b fix/your-bug-name
```

### 4. Set Up & Run Locally

Follow the steps in [Getting Started](#getting-started) above.

### 5. Make Your Changes

- Write clean code consistent with the existing style.
- Use **TypeScript** — avoid `any` where possible.
- Style components using **NativeWind** (Tailwind classes in React Native).
- Make sure there are no lint errors: `npm run lint`.

### 6. Commit Your Changes

Use clear, conventional commit messages:

```bash
git add .
git commit -m "feat: add movie search feature"
# or
git commit -m "fix: fix movie card layout on Android"
```

**Recommended commit prefixes:**

| Prefix | When to use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `refactor:` | Code change without new feature or fix |
| `style:` | Styling or UI changes |
| `docs:` | Documentation changes |
| `chore:` | Maintenance or dependency updates |

### 7. Push & Open a Pull Request

```bash
git push origin feature/your-feature-name
```

Then go to GitHub and click **"Compare & pull request"**. Write a clear description of what changed and why.

### Contribution Tips

- Keep each PR focused on a single change or feature.
- For large changes, open an **Issue** first to discuss the approach.
- Make sure your code has been tested on at least one platform (Android or iOS).

---

## License

This project is private. Contact the repository owner for usage inquiries.

---

> Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org). This product uses the TMDB API but is not endorsed or certified by TMDB.