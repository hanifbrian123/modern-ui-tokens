/**
 * Modern UI Tokens & Asset Manifest Definition
 */

export interface AssetToken {
  id: string;
  name: string;
  category: "profile" | "travora" | "siami" | "microexpression";
  path: string;
}

export const DESIGN_TOKENS = {
  colors: {
    primary: "#06b6d4",
    secondary: "#38bdf8",
    background: "#030712",
    surface: "#081022",
  },
  typography: {
    fontSans: "Geist, system-ui, sans-serif",
    fontMono: "Geist Mono, monospace",
  },
} as const;
