export type Variant = "default" | "btc" | "roll";

export interface VariantAttributes {
  primary: string;
  link: string;
  hover: string;
  themeColor: string;
  h1?: string;
  h2?: string;
}

export const VARIANT_MAPS: Record<Variant, VariantAttributes> = {
  default: {
    primary: "text-amber-amber12",
    link: "text-amber-amber12",
    hover: "hover:text-red-red11",
    themeColor: "#4e2009",
  },
  btc: {
    primary: "text-btc-500",
    link: "text-btc-200",
    hover: "hover:text-btc-100",
    themeColor: "#2c5c9d",
  },
  roll: {
    primary: "text-roll-1000",
    h1: "text-roll-900",
    h2: "text-roll-800",
    link: "text-roll-1000",
    hover: "hover:text-roll-700",
    themeColor: "#2e66d8",
  },
};
