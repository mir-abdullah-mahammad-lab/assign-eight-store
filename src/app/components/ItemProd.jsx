import React from 'react';
import { dataFetched } from '@/lib/dataFetch';

console.log('this is the data from json', dataFetched)
const ItemProd = ({dataFetched}) => {
    return (
        <div>
            {dataFetched}
        </div>
    );
};

export default ItemProd;