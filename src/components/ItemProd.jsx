import React from 'react';
import { dataFetched } from '@/lib/dataFetch';
import ProductCard from './ProductCard';


const ItemProd =  async () => {
    const data = await dataFetched()
 
   const data_three = []
   for(let i=0; i<3;i++){
        data_three.push(data[i])
   }

       return (
        <div className='flex justify-around items-center h-auto'>
           {data_three.map(item => <ProductCard key={item.id} item={item}></ProductCard>)}
        </div>
    );
};

export default ItemProd;