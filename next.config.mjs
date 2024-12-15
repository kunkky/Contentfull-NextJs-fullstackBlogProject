const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  env: {
    CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    PORT: process.env.PORT,
  },
  webpack(config) {
    console.log(
      `Using port in webpack config: ${process.env.PORT || "Not Set"}`
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
