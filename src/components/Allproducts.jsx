import Image from 'next/image';
import React from 'react';

const AllproductsDetails = ({d}) => {
    return (
          <div>
        <div className="card bg-base-100 w-96 h-auto shadow-sm ">
          <figure>
           <Image
           src={d.image}
           alt={"Nothing to show"}
           width={400}
           height={400}></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{d.name}</h2>
            <p> Rating {d.rating}</p>
            <h3>$ {d.price} </h3>
          
            
            </div>
          </div>
        </div>
    );
};

export default AllproductsDetails;