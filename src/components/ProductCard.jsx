'use client'
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const ProductCard = ({item}) => {
 const {id,name, price, rating, image } = item
 
const { data: session } = authClient.useSession()




    return (
   <div>
<div className="card bg-base-100 w-96 h-auto shadow-sm ">
  <figure>
   <Image
   src={image}
   alt={"Nothing to show"}
   width={400}
   height={400}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p> Rating {rating}</p>
    <h3>$ {price} </h3>
    {session? <Link href={`/products/${id}`}><button className="btn btn-accent">View Details</button></Link> : 
    <Link href={`/sign-in`}><button className="btn btn-accent">View Details</button></Link>}
    
    </div>
  </div>
</div>
   
    );
};

export default ProductCard;