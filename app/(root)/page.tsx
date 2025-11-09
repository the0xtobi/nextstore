import ProductCarousel from "@/components/ui/shared/product/product-carousel";
import ProductList from "@/components/ui/shared/product/product-list";
import {
  getFeaturedProducts,
  getLatestProduct,
} from "@/lib/actions/product.actions";

export default async function Hompage() {
  const latestProducts = await getLatestProduct();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
}
