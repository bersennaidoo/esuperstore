import React from "react";

const image = "/images/800x600.png";
const items = [
  {
    id: 1,
    name: "Gloves",
    image: "/images/gloves.jpg",
  },
  {
    id: 2,
    name: "Syringes",
    image: "/images/gloves.jpg",
  },
];

function Overview() {
  return (
    <div>
      <div className="container" id="shopheader">
        <h1 className="display-1">
          Surgical and Medical Products Overview Collage below
        </h1>
        <img className="img-fluid rounded" src={image} alt="collage" />
      </div>
      <div className="container">
        {items.map((item) => (
          <div className="container" key={item.id}>
            <h3>{item.name}</h3>
            <a href="#">
              <img className="img-fluid" src={item.image} alt="surgical" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
