import Image from "next/image";
import Link from "next/link";
import { formatNumber, getblurdataURL } from "../utils/helper";

export default function ProductBox({ product }) {
  return (
    <div className="box">
      <div>
        <div className="Image-box">
          <Image
            className="Image-fluid"
            src={product.primary_image}
            width="100"
            height="65"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            alt=""
            placeholder="blur"
            blurDataURL={getblurdataURL()}
          />
        </div>
        <div className="detail-box">
          <Link href={`/products/${product.slug}`}>
            <h5>{product.name}</h5>
          </Link>
          <p>{product.description}</p>
          <div className="options">
            <h6>
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
            </h6>
            <Link href="">
              <i className="bi bi-cart-fill text-white fs-5"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
