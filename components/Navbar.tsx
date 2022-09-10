/* eslint-disable react/no-unknown-property */
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props{}

const Navbar: React.FC<Props> = () => {

  return (
    <div>
      <Link href="/">
        <a>
          <Image 
            alt=""
            src="/images/carts.png" 
            width={100}
            height={100}
            objectFit="contain"
            objectPosition="center"
          />
        </a>
      </Link>
      <ul>
        <li><Link href="/login"><a>Login</a></Link></li>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/checkout"><a>Checkout</a></Link></li>
      </ul>
      
      <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: lightgray;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
      }
      ul{
        display: flex;
        margin-right: 2rem;
        list-style-type: none;
      }
      li:hover{
        text-decoration: underline;
      }
      a{
        margin-left: 1rem;
        text-decoration: none;
        color: #000
      }

      `}

      </style>
    </div>
    
  )
}

export default Navbar;