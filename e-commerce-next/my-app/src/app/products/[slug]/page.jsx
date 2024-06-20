import SingleProduct from "../../../../components/product/singleProduct";
import ProductBox from "../../../../components/productBox";
import { getFetch } from "../../../../utils/fetch";

export default async function ProductPage({ params }) {
  const product = await getFetch(`/products/${decodeURI(params.slug)}`);
  const otherProducts = await getFetch("/random-products?count=4");

  return (
    <>
      <section class="single_page_section layout_padding">
        <SingleProduct product={product} />
      </section>
      <hr />
      <section class="food_section my-5">
        <div class="container">
          <div class="row gx-3">
            {otherProducts.map((product) => (
              <div className="col-sm-6 col-lg-4">
                <ProductBox product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
