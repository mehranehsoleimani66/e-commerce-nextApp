"use client";
import Image from "next/image";
import { formatNumber, getblurdataURL, salePercent } from "../../utils/helper";

export default function SingleProduct({ product }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="row gy-5">
            <div class="col-sm-12 col-lg-6">
              <h3 className="fw-bold mb-4">{product.name}</h3>
              <h5 class="mb-3">
                {product.is_sale ? (
                  <>
                    <del>{formatNumber(product.price)}</del>
                    <span className="me-1">{product.is_sale}</span>
                    <span>تومان</span>
                  </>
                ) : (
                  <>
                    <span>{formatNumber(product.price)}</span>
                    <span>تومان</span>
                  </>
                )}
                {product.is_sale && (
                  <div class="text-danger fs-6">
                    {salePercent(product.price, product.salePrice)}% تخفیف
                  </div>
                )}
              </h5>
              <p>{product.description}</p>

              <div class="mt-5 d-flex">
                <button class="btn-add">افزودن به سبد خرید</button>
                <div class="input-counter ms-4">
                  <span class="plus-btn">+</span>
                  <div class="input-number">1</div>
                  <span class="minus-btn">-</span>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                  ></button>
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index + 1}
                    ></button>
                  ))}
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <Image
                      placeholder="blur"
                      blurDataURL={getblurdataURL()}
                      src={product.primary_image}
                      class="d-block w-100"
                      alt="primary_image"
                      width={464}
                      height={309}
                    />
                  </div>
                  {product.images.map((img) => (
                    <div class="carousel-item">
                      <Image
                        placeholder="blur"
                        blurDataURL={getblurdataURL()}
                        src={img.image}
                        class="d-block w-100"
                        alt="..."
                        width={464}
                        height={309}
                      />
                    </div>
                  ))}
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
