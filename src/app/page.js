import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from'../../public/compaly-logo.png'
import Marquee from "react-fast-marquee";
import FooterPage from "@/components/Footer";
import ItemProd from "@/components/ItemProd";


export default function Home() {
  return (
    <div>
    <Navbar></Navbar>
  
     <Marquee speed={10}>
       <div className="flex items-center gap-0 h-96 bg-amber-100">
        <Image
    src={logo}
    alt={"Company logo"}
    height={300}
    width={300} ></Image>
    <h2 className="text-2xl text-gray-950 italic">Summer Sale !!! Flat 25% Off on all items </h2>
     </div>
     </Marquee>

     
    <ItemProd></ItemProd>
    <FooterPage></FooterPage>
  </div>
  );
}
