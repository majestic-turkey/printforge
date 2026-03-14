import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubActions && repositoryName ? `/${repositoryName}` : "",
  assetPrefix: isGitHubActions && repositoryName ? `/${repositoryName}/` : undefined,
};

export default nextConfig;
