import React from "react";
import { PageTitle } from "../misc/Text";
import SingleProduct from "./SingleProduct";

function FavouriteSection() {
  return (
    <div>
      <PageTitle className="pageName mt-5">Favourites</PageTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {[...Array(12)].map((_, index) => (
          <SingleProduct
            key={index}
            img={`/assets/img/products/tshirt${(index % 4) + 1}.png`}
            title="T-SHIRT"
            ratings="4.5"
            priceShow={false}
            moveToCart
            link={`/shop/hoddies/${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FavouriteSection;
