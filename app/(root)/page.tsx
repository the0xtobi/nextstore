import ProductList from "@/components/ui/shared/product/product-list";
import { getLatestProduct } from "@/lib/actions/product.actions";

export default async function Hompage() {
  const latestProducts = await getLatestProduct();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
}
