import { getFetch } from "../../utils/fetch";
import ProductBox from "../productBox";
import Navigate from "./navigate";

export default async function ProductList({ params }) {
  const data = await getFetch(`/menu?${params}`);

  return (
    <div className="row gx-3">
      {data.products.map((product) => (
        <div className="col-sm-6 col-lg-4">
          <ProductBox product={product} />
        </div>
      ))}
      <Navigate links={data.meta.links} />
    </div>
  );
}
