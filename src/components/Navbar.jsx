'use client'
import Image from 'next/image';
import React from 'react';
import logo from '../../public/compaly-logo.png'
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';


const Navbar = () => {
    const {data: session } = authClient.useSession()
    // console.log('SESSION', session?.user.name)

    return (
        <div>
            
          <div className="navbar bg-linear-to-r from-gray-200 via-gray-600 to-gray-200 shadow-sm">
  <div className="navbar-start">
    
    <Image
    src={logo}
    alt={'logo'}
    width={80}
    height={80} className='rounded-full bg-base-300'></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1L flex justify-between items-center gap-3 ">
      <button className='btn btn-active'> <Link href={'/'}>Home</Link></button>
      <button className='btn btn-active'><Link href={'/products'}>Product</Link></button>
      <button className='btn btn-active'> <Link href={'/profile'}>Profile</Link></button>  
     </ul>
  </div>
 { session? <div className="navbar-end">
    <p className='text-2xl text-white'> HELLO! {session?.user.name}</p>
    <button className='btn btn-active'  onClick={async ()=>{
    await authClient.signOut();
  }}><Link href={'/'}>Sign-Out</Link></button>

  </div>: <button className='btn btn-active'><Link href={'/sign-in'}>Sign-in</Link></button>}
</div>
        </div>
    );
};

export default Navbar;