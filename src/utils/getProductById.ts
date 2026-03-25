import { PRODUCTS } from "~/content/products";

export function getProductById(id: number) {
  return PRODUCTS.find((product) => product.id === id) || null;
}
