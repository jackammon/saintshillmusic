# saintshillmusic.com

This project is built with:

- [**Vue3**](https://vuejs.org/): A progressive JavaScript framework for building user interfaces.
- [**Vuetify**](https://vuetifyjs.com/en/components/all/#navigation): A Vue UI Library with beautifully handcrafted Material Components.
- [**pnpm**](https://pnpm.io/): A fast, disk space efficient package manager.
- [**GSAP**](https://gsap.com/): A powerful JavaScript library for creating animations.

## Project Structure

- `src/`: Contains the Vue source code for the website.
  - `App.vue`: The root Vue component.
  - `main.js`: The entry point for the Vue app.
  - `router.js`: Defines the routes for the Vue app.
  - `views/`: Contains the Vue components for each page of the website.
  - `components/`: Contains reusable Vue components.
  - `plugins/`: Contains Vue plugins, including Vuetify.
- `public/`: Contains static assets for the website.
- `index.html`: The main HTML file for the website.
- `vite.config.mjs`: Configuration file for Vite, a build tool that is faster and leaner than traditional ones.
- `.github/workflows/deploy-to-gh-pages.yml`: GitHub Actions workflow for deploying the website to GitHub Pages.

## Building and Running the Project

To build and run the project, you need to have Node.js and pnpm installed. Then, you can install the dependencies and build the project with the following commands:

```sh
pnpm install
pnpm build
```

## Deployment
The portfolio is automatically deployed to GitHub Pages whenever changes are pushed to the master branch, thanks to the GitHub Actions workflow defined in .github/workflows/deploy-to-gh-pages.yml.  

Noteworthy aspects of the deployment process for Github pages include:

- Build Artifacts Deployment Branch: After building the project, the build artifacts are deployed to the gh-pages branch. This ensures the latest version of the site is live on GitHub Pages and simplifes the deployment from needing more configuration for hosting.

- 404 Handling: The index.html is copied to 404.html in the build directory to ensure all routes fall back to index.html when hosted on GitHub Pages. This fixes some routing issues when hosting on a SPA app on Github pages, can't complain though, it's free hosting.

The deployment script is located at .github/workflows/deploy-to-gh-pages.yml.
# saintshillmusic
