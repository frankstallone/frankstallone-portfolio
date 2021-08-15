export type Variant = "default" | "btc" | "roll";

export interface VariantColors {
  textClass: string;
  themeColor: string;
}

export const VARIANT_MAPS: Record<Variant, VariantColors> = {
  default: {
    textClass: "text-amber-amber11",
    themeColor: "#4e2009",
  },
  btc: {
    textClass: "text-btc-500",
    themeColor: "#2c5c9d",
  },
  roll: {
    textClass: "text-roll-600",
    themeColor: "#2e66d8",
  },
};
