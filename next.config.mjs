/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "api.cs50xshiraz.ir",
                protocol: "https"
            }
        ]
    },
    compiler: {
        styledComponents: true
    }
};

export default nextConfig;