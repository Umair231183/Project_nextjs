
import Image from "next/image";
import HomeComponent from "../app/Components/HomeComponent"
import About from "../app/Components/About";
import Contact from "../app/Components/Contact";
import Navbar from "../app/Components/Navbar";
import Hero from "../app/Components/Hero";
import Privacy_Policy from "./Components/ProductsPage";
// import Shirt1 from "./Components/Shirt1";
import Footer from "./Components/Footer";
import Feature from "./Components/Feature";

export default function Home() {
  return (
<div>
 <HomeComponent />
 <Navbar />
 <Hero />
 <Privacy_Policy />
 <Feature />
 <Contact />
 {/* <Shirt1 /> */}
 <Footer />
</div>
  );
}
