import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Link from "next/link";
import accounting from "accounting";
import Rating from "@material-ui/lab/Rating";

interface Props{
  products: {
    description: string,
    image: string,
    price: number,
    id: number
  }
}

const Cards: React.FC<Props> = ({ products: {description, image, price, id} }) => {
    return (
        <div className="container">
          <div className="card shadow-sm">
            <Image 
              alt=""
              src={image}
              width={200}
              height={200}
              objectFit="contain"
              objectPosition="center"
            />
            <div className="card-body">
              <p className="card-text">
                {description}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="#"><a>Details</a></Link>
              </div>
              <br />
              <div className="d-flex justify-content-between align-items-center">
                 <h3>{accounting.formatMoney(price, "€")}</h3>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly></Rating>
              </div>
              <br />
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-primary">Añadir</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Cards;