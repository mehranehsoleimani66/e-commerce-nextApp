import FormContact from "./formContact";

export default function Contact() {
  return (
    <section class="book_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>تماس با ما</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <FormContact />
          </div>
          <div class="col-md-6">
            <div class="map_container ">
              <div id="map" style={{ height: "345px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}