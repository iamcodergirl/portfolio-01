/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    compiler: {
        styledComponents: {
            fileName: false,
            ssr: false,
        },
        
    }
};

export default nextConfig;
