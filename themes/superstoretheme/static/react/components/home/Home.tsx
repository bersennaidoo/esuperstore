import React from "react";
import Thumbnail from "../thumbnail/Thumbnail";
import { itemImages } from "../../helpers/data";

type Items = {
    itemid?: string
    imageId?: string
    title?: string
    price?: number
    description?: string 
    salesPrice: number
}
type THomeProps = {
  items: Items[];
};

const Home = (props: THomeProps) => {
  const { items } = props;

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-sm-12 col-md-4">
            <Thumbnail
              key={item.itemId}
              image={itemImages[item.imageId]}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
