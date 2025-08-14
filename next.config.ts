import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "8080",
				pathname: "/uploads/**",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/api/v1/:path*",
				destination: "http://localhost:8080/api/v1/:path*",
			},
		];
	},
};

export default nextConfig;
