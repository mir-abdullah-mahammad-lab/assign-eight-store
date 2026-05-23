
import AllproductsDetails from "@/components/Allproducts";
import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { dataFetched } from "@/lib/dataFetch";

const AllProducts = async () => {
      const data = await dataFetched()
      console.log(data, 'data')

     
   
          return (
            <div>
                <Navbar></Navbar>
           <div className='grid grid-cols-3 h-auto'>
            
              {data.map(d => <AllproductsDetails key={d.id} d={d}></AllproductsDetails>)}
              
           </div>
           <FooterPage></FooterPage>
            </div>
       );
   };


export default AllProducts;