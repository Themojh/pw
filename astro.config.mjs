// @ts-check
import { defineConfig } from "astro/config";

// TODO before deploying: replace `site` below with your real GitHub
// Pages address, and uncomment + set `base` to your repository name.
// See README.md → "GitHub Pages deployment" for details. Left unset,
// `base` defaults to "/", which is what you want for local dev anyway.
//
// - `site` is always https://<your-github-username>.github.io
// - `base` is your repository name, e.g. "/mojtaba-profile". Leave it
//   unset only if your repo is literally named
//   "<your-github-username>.github.io".
export default defineConfig({
  site: "https://your-username.github.io",
  // base: "/your-repo-name",

  // Keeps trailing slashes consistent between dev and the static build,
  // which avoids surprises with `base` on GitHub Pages.
  trailingSlash: "always",
});
