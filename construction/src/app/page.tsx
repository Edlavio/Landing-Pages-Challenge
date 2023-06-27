import Partnership from "@/components/Partnership";
import Banner from "@/layouts/Banner";
import Blog from "@/layouts/Blog";
import Cards from "@/layouts/Carousel";
import ContactUs from "@/layouts/ContactUs";
import Footer from "@/layouts/Footer";
import Newsletter from "@/layouts/Newsletter";
import Services from "@/layouts/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <Partnership />
      <Services />
      <Cards />
      <ContactUs />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  )
}
