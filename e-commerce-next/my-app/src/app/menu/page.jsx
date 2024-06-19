import { Suspense } from "react";
import Categories from "../../../components/categories/categories";
import Loading from "../../../components/product/loading";
import ProductList from "../../../components/product/productList";
import { getFetch } from "../../../utils/fetch";
import Search from "./search";

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
            <div>
              <label className="form-label">مرتب سازی</label>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  بیشترین قیمت
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  کمترین قیمت
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  پرفروش ترین
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  با تخفیف
                </label>
              </div>
            </div>
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
