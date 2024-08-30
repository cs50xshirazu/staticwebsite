/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.cs50xshiraz.ir"
            },
            {
                protocol: "https",
                hostname: "trustseal.enamad.ir"
            }
        ]
    },
    compiler: {
        styledComponents: true
    }
};

export default nextConfig;