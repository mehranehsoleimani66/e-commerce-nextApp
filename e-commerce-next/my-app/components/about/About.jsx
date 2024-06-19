import Image from "next/image";
import Link from "next/link";
import aboutImage from "../../public/images/about-img.png";
export default function About() {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="img-box">
              <Image src={aboutImage} alt="" width={445} height={608} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>لورم ایپسوم متن</h2>
              </div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
              </p>
              <Link href="">مشاهده بیشتر</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}