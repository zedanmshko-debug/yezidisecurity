import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default. For Vercel static deploy and client-side
  // routing, disable SSR so `react-router build` emits a static `index.html`.
  ssr: false,
} satisfies Config;
