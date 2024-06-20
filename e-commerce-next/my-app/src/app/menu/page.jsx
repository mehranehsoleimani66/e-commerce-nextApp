import { Suspense } from "react";
import Categories from "../../../components/categories/categories";
import Loading from "../../../components/product/loading";
import ProductList from "../../../components/product/productList";
import Search from "../../../components/product/search";
import SortBy from "../../../components/sortBy/sortBy";
import { getFetch } from "../../../utils/fetch";

export default async function MenuPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);

  const categories = await getFetch("/categories");
  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <Search />
            <hr />
            <div className="filter-list">
              <div className="form-label">دسته بندی</div>
              <Categories categories={categories} />
            </div>
            <hr />
            <SortBy />
          </div>
          <div className="col-sm-12 col-lg-9">
            <Suspense fallback={<Loading />}>
              <ProductList params={params.toString()} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
