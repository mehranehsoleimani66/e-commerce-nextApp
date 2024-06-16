import About from "../../components/about";
import Contact from "../../components/contact/contact";
import Features from "../../components/layout/features";
import Products from "../../components/products";
import { getFetch } from "../../utils/fetch";

export default async function Home() {
  const productsList = await getFetch("/products/products-tabs");
  console.log(productsList, "productsList");
  const tabList = await productsList.tabList;
  const tabPanel = await productsList.tabPanel;
  return (
    <>
      <Features />
      <Products tabList={tabList} tabPanel={tabPanel} />
      <About />
      <Contact />
    </>
  );
}
