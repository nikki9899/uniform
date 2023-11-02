/** @type {import('next').NextConfig} */
const nextConfig = {
    // This has to be removed Once we have access to Strapi
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'assets.myntassets.com',
                port: '',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        })
        return config
    },
    staticPageGenerationTimeout:3000
}


module.exports = nextConfig
