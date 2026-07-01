import type { MenuProduct } from "@/lib/menu/products";

export type ProductDetailData = Omit<MenuProduct, "Icon">;
