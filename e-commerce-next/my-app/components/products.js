"use client";
import Link from "next/link";
import { useState } from "react";
import ProductBox from "./productBox";

export default function Products({ tabPanel, tabList }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>منو محصولات</h2>
        </div>

        <ul className="filters_menu">
          {tabList.map((item, index) => (
            <li
              key={index}
              className={selectedTab === index ? "active" : ""}
              onClick={() => handleClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="filters-content">
          <div className="row grid">
            {selectedTab !== null &&
              tabPanel[selectedTab].map((product, index) => (
                <div className="col-sm-6 col-lg-4" key={index}>
                  <ProductBox product={product} />
                </div>
              ))}
          </div>
        </div>

        <div className="btn-box">
          <Link href="">مشاهده بیشتر</Link>
        </div>
      </div>
    </section>
  );
}
