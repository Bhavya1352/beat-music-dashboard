# Beat Music Dashboard

A mini music distribution dashboard with a focus on UI/UX, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎵 **Track Management:** View, add, and see details of your music tracks.
- 🔐 **Immersive Authentication:** A beautiful login/signup page with a gradient background, glassmorphism, and animations.
- 📈 **Interactive Dashboard:** A rich dashboard with search, sorting, pagination, and a "Now Playing" preview.
- 📱 **Responsive Design:** The application is fully responsive and looks great on all devices, with a table that collapses into cards on mobile.
- 🎨 **Dark/Light Theme:** Switch between dark and light mode with a single click.
- ✨ **Micro-interactions & Animations:** Subtle animations and micro-interactions to enhance the user experience.
- 🚀 **Modern Tech Stack:** Built with the latest technologies like Next.js App Router, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd beat-music-dashboard
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

4.  Run the development server:

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application is ready to be deployed on [Vercel](https://vercel.com/), the creators of Next.js.

1.  Push your code to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2.  Go to the Vercel dashboard and click on "Add New..." > "Project".
3.  Import your Git repository.
4.  Vercel will automatically detect that you are using Next.js and configure the build settings for you.
5.  Click "Deploy" and your application will be live in a few minutes.

## Screenshots & GIFs

*It is highly recommended to add screenshots and GIFs of the application here. They have a great impact on the presentation of the project.*

### Login Page

*(Add a screenshot or GIF of the animated login page here)*

### Dashboard

*(Add a screenshot or GIF of the dashboard with its animations here)*

### Upload Page

*(Add a screenshot or GIF of the upload page with the confetti animation here)*

### Track Details

*(Add a screenshot of the track details page here)*

## Project Structure

```
/src
├── app
│   ├── (app)                 # Main application pages
│   │   ├── dashboard
│   │   ├── track
│   │   │   └── [id]
│   │   └── upload
│   ├── (auth)                # Authentication pages
│   │   └── login
│   └── api                   # API routes
│       └── tracks
├── components                # Reusable components
│   ├── Navbar.tsx
│   ├── NowPlayingPreview.tsx
│   ├── ThemeSwitcher.tsx
│   ├── TrackForm.tsx
│   └── TrackTable.tsx
├── context                   # React context
│   └── ThemeContext.tsx
└── lib                       # Utility functions
```
