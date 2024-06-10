/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'lh3.googleusercontent.com'
            },
            {
                hostname:'web.nitp.ac.in'
            }
        ]
    }
};

export default nextConfig;
