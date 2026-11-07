/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The starter ships SVG placeholders (public/images/*.svg). Next's image
    // optimizer rejects SVG by default with 400 "image type is not allowed",
    // which breaks the hero and every gallery photo until real JPEGs replace
    // them. The sandboxed CSP below is Next's documented hardening for this.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
