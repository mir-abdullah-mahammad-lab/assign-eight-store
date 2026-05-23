import FooterPage from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { dataFetched } from '@/lib/dataFetch';
import Image from 'next/image';

const ProductDetails = async ({params}) => {
    const{id} = await params
    console.log(id,'idididididiidid')

    const data = await dataFetched()
     
       const data_three = []
       for(let i=0; i<3;i++){
            data_three.push(data[i])
       }
       console.log('data_three', data_three)

       const singleData = data_three.find(da => da.id === Number(id))
       console.log('SINGLEDATA', singleData)
    
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-96 h-auto bg-red-200'>
              
                    <div className="card bg-base-100 w-96 h-auto shadow-sm ">
                        <figure>
                        <Image
                        src={singleData.image}
                        alt={"Nothing to show"}
                        width={400}
                        height={400}></Image>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{singleData.name}</h2>
                            <h1>{singleData.description}</h1>
                           
                            
                        </div>
            
        </div>
    </div>
            <FooterPage></FooterPage>
        </div>
    );
};

export default ProductDetails;