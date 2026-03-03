export default {
  baseAppUrl: process.env.BASE_APP_URL || "http://localhost:8061",
  port: process.env.PORT || 8061,
  host: process.env.HOST || "0.0.0.0",

  // Often you want to skip renders in production and only return links/oembed
  SKIP_IFRAMELY_RENDERS: true,

  // Optional: switch cache engine via env
  CACHE_ENGINE: process.env.CACHE_ENGINE || "node-cache",
  CACHE_TTL: process.env.CACHE_TTL || 24 * 60 * 60,

  // If you use FB/IG oEmbed
  ADD_OEMBED_PARAMS: [
    {
      re: [/^https:\/\/graph\.facebook\.com\/v[0-9\.]+\/instagram_oembed/i],
      params: {
        access_token: process.env.IG_OEMBED_ACCESS_TOKEN || "",
        hidecaption: true,
      },
    },
    {
      re: [/^https:\/\/graph\.facebook\.com\/v[0-9\.]+\/oembed_page/i],
      params: {
        access_token: process.env.FB_OEMBED_ACCESS_TOKEN || "",
        show_posts: 0,
        show_facepile: 0,
        maxwidth: 600,
      },
    },
    {
      re: [/^https?:\/\/publish\.twitter\.com\/oembed\?i=user/i],
      params: { limit: 1, maxwidth: 600 },
    },
    {
      re: [/^https:\/\/graph\.facebook\.com\/v[0-9\.]+\/oembed_/i],
      params: { access_token: process.env.FB_OEMBED_ACCESS_TOKEN || "" },
    },
  ],

  providerOptions: {
    ...(process.env.IFRAMELY_LOCALE ? { locale: process.env.IFRAMELY_LOCALE } : {}),
  },
};