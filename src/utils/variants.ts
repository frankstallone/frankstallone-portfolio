export type Variant = "default" | "btc" | "roll";

export interface VariantAttributes {
  primary: string;
  link: string;
  hover: string;
  themeColor: string;
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
    primary: "text-btc-500",
    link: "text-btc-1000",
    hover: "hover:text-btc-700",
    themeColor: "#2e66d8",
  },
};
